# Gin: Go için hafif ve hızlı HTTP web çatısı

## Nedir
- `net/http` üzerine kurulu router + middleware katmanı.
- Az bağımlılık, düşük bellek, yüksek throughput.
- REST API, web servisleri ve mikroservisler için pratik.

## Ne işe yarar
- Yönlendirme: path param, query, wildcard.
- JSON/XML/Proto binding ve validasyon.
- Middleware: auth, rate-limit, CORS, logging.
- Hata yakalama, recovery, grup/prefix yönetimi.
- Statik dosya ve HTML şablon sunumu.

## Neler yapılabilir
- CRUD API’ler, webhook tüketicileri, gateway’ler.
- Gerçek-zamanlı arka uçlar (SSE, WebSocket köprüsü).
- Admin panelleri, dosya yükleme servisleri.
- Mikroservis uçları, iç ağ servisleri.

## Kimler kullanır
- Bireysel geliştiriciler ve ekipler. Start-up’lar ve kurumsal iç servisler. Açık kaynak projelerde yaygın.
- Spesifik şirket/proje listesi istersen doğrulanabilir örnekleri ayrıca ekleyebilirim.

## Hangi projelerde uygun
- Düşük gecikme isteyen JSON API’ler.
- Tek dosyalı küçük servislerden modüler mikroservislere.
- Laravel/Express geçmişi olanlar için “router + middleware” akışıyla kolay geçiş.

---

## Kurulum
```bash
mkdir myapi && cd myapi
go mod init example.com/myapi
go get github.com/gin-gonic/gin
```

## En basit örnek
```go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.New()
    r.Use(gin.Logger(), gin.Recovery())

    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })

    r.Run(":8080") // 0.0.0.0:8080
}
```

## Route çeşitleri
```go
r.GET("/users/:id", func(c *gin.Context) {
    id := c.Param("id")
    c.JSON(200, gin.H{"id": id})
})

r.GET("/search", func(c *gin.Context) {
    q := c.Query("q") // ?q=term
    c.String(200, q)
})

r.GET("/files/*path", func(c *gin.Context) {
    c.String(200, c.Param("path")) // /files/a/b/c
})
```

## JSON binding + validasyon
```go
type CreateUser struct {
    Name  string `json:"name" binding:"required,min=2"`
    Email string `json:"email" binding:"required,email"`
}

r.POST("/users", func(c *gin.Context) {
    var in CreateUser
    if err := c.ShouldBindJSON(&in); err != nil {
        c.JSON(400, gin.H{"error": err.Error()})
        return
    }
    c.JSON(201, gin.H{"ok": true, "user": in})
})
```

## Middleware (örnek auth)
```go
func Auth() gin.HandlerFunc {
    return func(c *gin.Context) {
        if c.GetHeader("X-API-Key") != "secret" {
            c.AbortWithStatusJSON(401, gin.H{"error": "unauthorized"})
            return
        }
        c.Next()
    }
}

api := r.Group("/api", Auth())
api.GET("/me", func(c *gin.Context) { c.JSON(200, gin.H{"me": "ok"}) })
```

## Route grupları ve versiyonlama
```go
v1 := r.Group("/api/v1")
{
    v1.GET("/items", listItems)
    v1.POST("/items", createItem)
}
```

## Hata yönetimi
```go
r.GET("/boom", func(c *gin.Context) {
    c.Error(fmt.Errorf("something went wrong")) // loglanır
    c.AbortWithStatusJSON(500, gin.H{"error": "internal"})
})
```

## Statik dosya ve HTML
```go
r.Static("/assets", "./public")
r.LoadHTMLGlob("templates/*.html")
r.GET("/", func(c *gin.Context) {
    c.HTML(200, "index.html", gin.H{"title":"Home"})
})
```

## Dosya yükleme
```go
r.MaxMultipartMemory = 8 << 20 // 8 MiB
r.POST("/upload", func(c *gin.Context) {
    f, _ := c.FormFile("file")
    c.SaveUploadedFile(f, "./uploads/"+f.Filename)
    c.JSON(201, gin.H{"saved": f.Filename})
})
```

## Graceful shutdown
```go
srv := &http.Server{Addr: ":8080", Handler: r}
go srv.ListenAndServe()

quit := make(chan os.Signal, 1)
signal.Notify(quit, os.Interrupt)
<-quit

ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()
srv.Shutdown(ctx)
```

## Proje iskeleti (büyüyünce)
```
/cmd/server/main.go
/internal/handlers/user.go
/internal/services/user.go
/internal/repo/user_repo.go
/internal/config/config.go
/internal/router/router.go
```

## Test
```go
func TestPing(t *testing.T) {
    gin.SetMode(gin.TestMode)
    r := gin.New()
    r.GET("/ping", func(c *gin.Context){ c.String(200, "pong") })

    w := httptest.NewRecorder()
    req := httptest.NewRequest("GET", "/ping", nil)
    r.ServeHTTP(w, req)

    if w.Code != 200 || w.Body.String() != "pong" { t.Fail() }
}
```

## Performans ipuçları
- `gin.ReleaseMode()` prod’da.
- Gereksiz middleware eklemeyin.
- JSON işlerinde `ShouldBindJSON` yeterli; büyük payload’da stream düşünün.
- DB erişimini context-aware yapın; connection pool ayarlarını izleyin.

## Dağıtım
- Tek binary: `go build -ldflags "-s -w" -o app`.
- Reverse proxy arkasına alın (Nginx/Caddy).
- Docker çok-aşamalı:
```dockerfile
FROM golang:1.23 AS build
WORKDIR /src
COPY . .
RUN go build -ldflags "-s -w" -o app ./cmd/server

FROM gcr.io/distroless/base-debian12
COPY --from=build /src/app /app
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/app"]
```

## Laravel/Express’ten gelenler için kısa eşleştirme
- Route::get → `r.GET`
- Controller metodu → handler func
- Middleware → `gin.HandlerFunc`
- Request validation → binding tags
- Groups + prefix → `r.Group("/api/v1")`

> İstersen “GORM + Gin + JWT + Swagger” ile küçük bir örnek API iskeleti ekleyebilirim.
