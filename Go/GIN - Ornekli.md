# GIN FRAMEWORK GENİŞ DÖKÜMAN

## Nedir?

Go programlama dilinde hafif ve basit bir web frameworkü.

## Kurulum


```bash
# Yeni modül
mkdir myapi && cd myapi
go mod init example.com/myapi

# Gin ve yardımcı paketler
go get github.com/gin-gonic/gin
go get github.com/joho/godotenv
go get github.com/go-playground/validator/v10
go get github.com/jackc/pgx/v5
go get github.com/jmoiron/sqlx
go get go.uber.org/zap
go get golang.org/x/time/rate
go get github.com/gin-contrib/cors

```


```env
APP_ENV=dev
HTTP_ADDR=:8080
DB_DSN=postgres://user:pass@localhost:5432/app?sslmode=disable
JWT_SECRET=change-me

```

## Proje yapısı

```
myapi/
  cmd/api/main.go            # giriş
  internal/
    config/config.go
    http/
      router.go
      middleware/
        logger.go
        auth.go
        ratelimit.go
        requestid.go
        secure.go
    user/
      model.go
      repo.go
      service.go
      handler.go
    database/
      db.go
  pkg/
    respond/respond.go       # ortak yanıt şablonları
  web/
    templates/
    static/
  .env
  go.mod
```

## Router oluşturma

`cmd/api/main.go`

```go
package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"example.com/myapi/internal/config"
	"example.com/myapi/internal/database"
	"example.com/myapi/internal/http"
)

func main() {
	cfg := config.Load()
	db := database.Connect(cfg.DBDSN)
	defer db.Close()

	r := httpx.NewRouter(cfg, db) // gin.Engine döner

	srv := &http.Server{
		Addr:    cfg.HTTPAddr,
		Handler: r,
	}

	go func() { _ = srv.ListenAndServe() }()

	// graceful shutdown
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	_ = srv.Shutdown(ctx)
}

```

`internal/http/router.go`

```go
package httpx

import (
	"github.com/gin-gonic/gin"
	"example.com/myapi/internal/config"
	"database/sql"
	mw "example.com/myapi/internal/http/middleware"
	"example.com/myapi/internal/user"
)

func NewRouter(cfg config.Config, db *sql.DB) *gin.Engine {
	if cfg.AppEnv == "prod" {
		gin.SetMode(gin.ReleaseMode)
	}
	r := gin.New()
	r.Use(gin.Recovery(), mw.Logger(), mw.RequestID(), mw.Secure(), mw.CORS(cfg))

	// sağlık
	r.GET("/health", func(c *gin.Context) { c.JSON(200, gin.H{"status": "ok"}) })

	// versiyonlama
	v1 := r.Group("/api/v1")
	{
		// hız sınırı örneği: IP başına 60 rpm
		v1.Use(mw.RateLimitPerIP(60))

		// kullanıcı modülü
		userHandler := user.NewHandler(db)
		users := v1.Group("/users")
		{
			users.GET("", userHandler.List)
			users.POST("", userHandler.Create)
			users.GET("/:id", userHandler.Get)
			users.PUT("/:id", userHandler.Replace)
			users.PATCH("/:id", userHandler.UpdatePartial)
			users.DELETE("/:id", userHandler.Delete)
		}
	}

	// korumalı alan
	auth := r.Group("/api/v1").Use(mw.JWTAuth())
	{
		auth.GET("/me", func(c *gin.Context) {
			claims := c.MustGet("claims")
			c.JSON(200, gin.H{"me": claims})
		})
	}

	return r
}

```

## Rotaları gruplama

```go
api := r.Group("/api")
v1  := api.Group("/v1")
admin := v1.Group("/admin", mw.JWTAuth(), mw.RequireRole("admin"))

```

Gruplar üstten alta middleware devralır.



## Middleware


Basit logger
`internal/http/middleware/logger.go`

```go
package middleware

import (
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func Logger() gin.HandlerFunc {
	logger, _ := zap.NewProduction()
	return func(c *gin.Context) {
		start := time.Now()
		c.Next()
		logger.Info("req",
			zap.String("method", c.Request.Method),
			zap.String("path", c.Request.URL.Path),
			zap.Int("status", c.Writer.Status()),
			zap.Duration("latency", time.Since(start)),
			zap.String("rid", c.GetString("req_id")),
			zap.String("ip", c.ClientIP()),
		)
	}
}

```

## Request ID

```go
func RequestID() gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Request.Header.Get("X-Request-ID")
		if id == "" {
			id = gin.GenerateRandomString(12)
		}
		c.Set("req_id", id)
		c.Writer.Header().Set("X-Request-ID", id)
		c.Next()
	}
}

```

## Güvenlik başlıkları

```go
func Secure() gin.HandlerFunc {
	return func(c *gin.Context) {
		h := c.Writer.Header()
		h.Set("X-Content-Type-Options", "nosniff")
		h.Set("X-Frame-Options", "DENY")
		h.Set("X-XSS-Protection", "0")
		h.Set("Referrer-Policy", "no-referrer")
		h.Set("Content-Security-Policy", "default-src 'self'")
		c.Next()
	}
}

```

## CORS

```go
import "github.com/gin-contrib/cors"
func CORS(cfg config.Config) gin.HandlerFunc {
	return cors.New(cors.Config{
		AllowOrigins:     []string{"https://example.com", "http://localhost:5173"},
		AllowMethods:     []string{"GET","POST","PUT","PATCH","DELETE"},
		AllowHeaders:     []string{"Authorization","Content-Type","X-Request-ID"},
		ExposeHeaders:    []string{"X-Request-ID"},
		AllowCredentials: true,
	})
}

```

## JWT doğrulama


```go
func JWTAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Authorization: Bearer <token>
		// burada token doğrula, claims çıkar, yoksa 401
		// c.Set("claims", claims)
		c.Next()
	}
}

```

## Oran sınırlama
`internal/http/middleware/ratelimit.go`

```go
package middleware

import (
	"net"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/time/rate"
)

type visitor struct {
	*rate.Limiter
	lastSeen time.Time
}

var (
	visitors = make(map[string]*visitor)
	mu       sync.Mutex
)

func getLimiter(ip string, rpm int) *rate.Limiter {
	mu.Lock()
	defer mu.Unlock()
	v, ok := visitors[ip]
	r := rate.Every(time.Minute / time.Duration(rpm))
	if !ok {
		l := rate.NewLimiter(r, rpm) // burst = rpm
		visitors[ip] = &visitor{Limiter: l, lastSeen: time.Now()}
		return l
	}
	v.lastSeen = time.Now()
	return v.Limiter
}

func RateLimitPerIP(rpm int) gin.HandlerFunc {
	// temizlik goroutine'i önerilir
	return func(c *gin.Context) {
		ip, _, _ := net.SplitHostPort(c.Request.RemoteAddr)
		lim := getLimiter(ip, rpm)
		if !lim.Allow() {
			c.AbortWithStatusJSON(429, gin.H{"error":"rate_limited","detail":"too many requests"})
			return
		}
		c.Next()
	}
}

```

## İstekten veri alma

### Path parametresi

```go
r.GET("/users/:id", func(c *gin.Context) {
	id := c.Param("id") // string
})

```

URI binding:

```go
type UserURI struct { ID int64 `uri:"id" binding:"required,min=1"` }
r.GET("/users/:id", func(c *gin.Context) {
	var u UserURI
	if err := c.ShouldBindUri(&u); err != nil { c.JSON(400, gin.H{"error": err.Error()}); return }
})

```

### Query string

```go
r.GET("/search", func(c *gin.Context) {
	q := c.Query("q")            // yoksa ""
	page := c.DefaultQuery("page", "1")
})
```

Query binding ve doğrulama:

```go
type ListQuery struct {
	Page int    `form:"page" binding:"min=1"`
	Q    string `form:"q"`
	Sort string `form:"sort" binding:"oneof=name -name created_at -created_at"`
}
if err := c.ShouldBindQuery(&q); err != nil { ... }

```

### Header

```go
token := c.GetHeader("X-Api-Key")
```

### Body JSON

```go
type CreateUser struct {
	Name  string `json:"name" binding:"required,min=2"`
	Email string `json:"email" binding:"required,email"`
}
var in CreateUser
if err := c.ShouldBindJSON(&in); err != nil {
	c.JSON(422, gin.H{"error":"validation", "detail": err.Error()})
	return
}

```

### Form-URL-Encoded

```go
type LoginForm struct {
	Email string `form:"email" binding:"required,email"`
	Pass  string `form:"password" binding:"required"`
}
if err := c.ShouldBind(&f); err != nil { ... } // Content-Type: application/x-www-form-urlencoded

```

### Multipart dosya yükleme

```go
file, _ := c.FormFile("avatar")
_ = c.SaveUploadedFile(file, "./web/static/uploads/"+file.Filename)

```

## Yanıt üretimi - Response

```go
c.JSON(200, gin.H{"id": 1, "name": "A"})
c.XML(200, obj)
c.String(200, "ok")
c.FileAttachment("path/report.pdf", "report.pdf")
c.Status(204) // içerik yok

```

#### Stream

```go
c.Stream(func(w io.Writer) bool {
	_, _ = w.Write([]byte("chunk\n"))
	time.Sleep(100 * time.Millisecond)
	return false
})

```

Standart hata gövdesi öerisi

```json
{"error":"validation","detail":"email is invalid","request_id":"abc123"}
```

## MVC ve katmanlı mimari

 Katmanlar: handler → service → repo → db.

`internal/user/model.go`

```go
package user
type User struct {
	ID    int64  `db:"id" json:"id"`
	Name  string `db:"name" json:"name"`
	Email string `db:"email" json:"email"`
}

```

`internal/user/repo.go`

```go
type Repo struct{ db *sqlx.DB }
func NewRepo(db *sqlx.DB) *Repo { return &Repo{db} }

func (r *Repo) List(ctx context.Context, limit, offset int) ([]User, error) {
	var out []User
	err := r.db.SelectContext(ctx, &out,
		`SELECT id,name,email FROM users ORDER BY id LIMIT $1 OFFSET $2`, limit, offset)
	return out, err
}

```

`internal/user/service.go`

```go
type Service struct{ repo *Repo }
func NewService(r *Repo) *Service { return &Service{r} }

func (s *Service) Create(ctx context.Context, u User) (User, error) {
	// iş kuralları, doğrulama
	return s.repo.Create(ctx, u)
}

```

`internal/user/handler.go`

```go
type Handler struct{ svc *Service }
func NewHandler(db *sql.DB) *Handler {
	sqlxDB := sqlx.NewDb(db, "pgx")
	return &Handler{svc: NewService(NewRepo(sqlxDB))}
}
func (h *Handler) List(c *gin.Context) { /* bind query → svc.List → c.JSON */ }
func (h *Handler) Create(c *gin.Context) { /* bind json → svc.Create */ }

```

## Veritabanı entegrasyonu

`internal/database/db.go`

```go
package database

import (
	"context"
	"time"
	"database/sql"

	_ "github.com/jackc/pgx/v5/stdlib"
)

func Connect(dsn string) *sql.DB {
	db, err := sql.Open("pgx", dsn)
	if err != nil { panic(err) }
	db.SetMaxOpenConns(20)
	db.SetMaxIdleConns(10)
	db.SetConnMaxLifetime(1 * time.Hour)
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	if err := db.PingContext(ctx); err != nil { panic(err) }
	return db
}

```
Transaction kullanımı:

```go
tx, err := db.BeginTx(ctx, &sql.TxOptions{Isolation: sql.LevelSerializable})
// repo'lara tx geçir, sonunda tx.Commit veya tx.Rollback

```

## REST API ipuçları

- Versiyonlama: `/api/v1`
- Filtreleme: query parametreleri, boşları yoksay.
- Sıralama: `sort=field` ve `-field`
- Sayfalama: `page`, `per_page` dönerken `X-Total-Count` başlığı.
- Hata formatını sabitle.
- İdempotent işlemler için `Idempotency-Key` başlığı ve sunucuda kısa süreli cache.
- PUT vs PATCH:
    - PUT: kaynağı tamamen değiştirir. Tüm alanlar gelir. Eksik alanlar- varsayılanlanır veya silinir.
    - PATCH: kısmi güncelleme. Sadece değişen alanlar gelir.
- Durum kodları:
    - 200 OK
    - 201 Created
    - 202 Accepted
    - 204 No Content
    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 404 Not Found
    - 409 Conflict
    - 422 Unprocessable Entity
    - 429 Too Many Requests
    - 500 Internal Server Error


## Test
`internal/user/handler_test.go`
```go
func TestList(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := gin.New()
	r.GET("/api/v1/users", h.List)

	req := httptest.NewRequest("GET", "/api/v1/users?page=1", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	if w.Code != http.StatusOK { t.Fatalf("got %d", w.Code) }
}

```

## Derleme, çalıştırma, Docker
Geliştirici deneyimi için [Air] benzeri hot-reload kullanılabilir.
`Dockerfile`
```dockerfile
FROM golang:1.22 AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app cmd/api/main.go

FROM gcr.io/distroless/base-debian12
ENV APP_ENV=prod
COPY --from=build /app /app
COPY .env /.env
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/app"]

```

`docker-compose.yml` (Postgres için)
```go
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: pass
      POSTGRES_USER: user
      POSTGRES_DB: app
    ports: ["5432:5432"]
    volumes: ["pgdata:/var/lib/postgresql/data"]
volumes:
  pgdata:

```

## HTML template ve statik dosyalar

```go
r.LoadHTMLGlob("web/templates/*.tmpl")
r.Static("/static", "./web/static")

r.GET("/", func(c *gin.Context) {
	c.HTML(200, "index.tmpl", gin.H{"title":"Home"})
})

```

## WebSocket kısa örnek
Gin kendisi WS sağlamaz. gorilla/websocket kullan. 
```go
upgrader := websocket.Upgrader{ CheckOrigin: func(r *http.Request) bool { return true } }
r.GET("/ws", func(c *gin.Context) {
	conn, _ := upgrader.Upgrade(c.Writer, c.Request, nil)
	defer conn.Close()
	for {
		_, msg, err := conn.ReadMessage()
		if err != nil { break }
		_ = conn.WriteMessage(websocket.TextMessage, msg)
	}
})

```

## Sık hatalar
- binding:"required" alanları gelmeyince 400/422 dönmezsen sessizce bozulur.
- ShouldBind ile Bind farkı: Bind hatada 400 döndürür. ShouldBind hatayı döner, sen karar verirsin.
- gin.Default() otomatik logger ve recovery ekler. Üretimde özelleştir.
- Büyük JSON gövdeleri için c.Request.Body = http.MaxBytesReader(...) ile sınır koy.
- Zamana duyarlı işlemler için context.WithTimeout kullan.

## HTTP REQUEST METHODLARI
| Yöntem  | İzin verilen işlem | İdempotent |
| ------- | ------------------ | ---------- |
| GET     | Okuma              | Evet       |
| POST    | Oluşturma/iş       | Hayır      |
| PUT     | Tam güncelleme     | Evet       |
| PATCH   | Kısmi güncelleme   | Hayır*     |
| DELETE  | Silme              | Evet       |
| HEAD    | Başlıklar          | Evet       |
| OPTIONS | Önişlem            | Evet       |






