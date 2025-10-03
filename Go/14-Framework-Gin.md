# Go – Gin Web Framework Temel Dökümantasyonu

## Gin Nedir?

- **Gin**, Go diliyle çok hızlı, sade ve modern web API’leri, mikroservisler ve web projeleri yazmak için kullanılan bir framework’tür.
- Kendi başına bir HTTP router’dır, middleware desteği, parametre işleme, JSON döndürme, form işleme, hata yakalama ve daha fazlasını sunar.
- Express (Node.js), Flask (Python) veya Laravel’in Go’daki hızlı karşılığı gibi düşünebilirsin.

---

## Gerekli Paketler ve Kurulum

- Kurulum için:
  ```
  go get -u github.com/gin-gonic/gin
  ```

- Import:
  ```go
  import "github.com/gin-gonic/gin"
  ```

---

## Gin’in Temel Fonksiyonları Tablosu

| Fonksiyon / Özellik              | Ne İşe Yarar?                                   | Kısa Kullanım                                  |
|----------------------------------|-------------------------------------------------|------------------------------------------------|
| `gin.Default()`                  | Varsayılan (logger ve recovery’li) router kurar | `r := gin.Default()`                           |
| `gin.New()`                      | Tamamen sade bir router kurar                   | `r := gin.New()`                               |
| `r.GET(path, handler)`           | GET endpoint tanımlar                           | `r.GET("/selam", handlerFunc)`                 |
| `r.POST(path, handler)`          | POST endpoint tanımlar                          | `r.POST("/ekle", handlerFunc)`                 |
| `r.PUT(path, handler)`           | PUT endpoint tanımlar                           |                                                |
| `r.DELETE(path, handler)`        | DELETE endpoint tanımlar                        |                                                |
| `r.Run(addr)`                    | Sunucuyu başlatır (varsayılan :8080)            | `r.Run(":8080")`                               |
| `c.JSON(code, obj)`              | JSON response döndürür                          | `c.JSON(200, obj)`                             |
| `c.String(code, str)`            | String response                                 | `c.String(200, "merhaba")`                     |
| `c.Param("ad")`                  | Path parametresi alır                           | `/user/:id` -> `c.Param("id")`                 |
| `c.Query("param")`               | URL query parametresi alır                      | `/api?ara=x` -> `c.Query("ara")`               |
| `c.PostForm("field")`            | POST form verisi alır                           |                                                |
| `r.Group("/api")`                | Route gruplama/middleware için                  | `api := r.Group("/api")`                       |
| `r.Use(middleware...)`           | Middleware ekler                                | `r.Use(AuthMiddleware())`                       |
| `c.ShouldBindJSON(&obj)`         | Gelen JSON’ı struct’a bağlar (parse eder)       |                                                |
| `c.BindQuery(&obj)`              | Query string’i struct’a parse eder              |                                                |
| `c.Redirect(code, url)`          | Yönlendirme yapar                               |                                                |
| `c.AbortWithStatus(code)`        | İşlemi durdurup sadece kod döndürür             |                                                |

---

## Temel Gin Kullanımı ve Örnekler

### 1. Basit Bir Gin Sunucu (Hello World)

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default() // logger ve panic yakalama otomatik gelir
    r.GET("/", func(c *gin.Context) {
        c.String(200, "Merhaba, Gin ile API!")
    })
    r.Run() // :8080
}
```

### 2. Path ve Query Parametreleri Kullanmak

```go
r.GET("/hello/:name", func(c *gin.Context) {
    name := c.Param("name")
    c.String(200, "Merhaba %s", name)
})

r.GET("/arama", func(c *gin.Context) {
    q := c.Query("kelime")
    c.String(200, "Arama: %s", q)
})
```

### 3. JSON Response ve JSON Parse Etme

```go
type User struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

// JSON döndürmek:
r.GET("/user", func(c *gin.Context) {
    c.JSON(200, User{Name: "Ali", Age: 30})
})

// JSON almak (POST ile):
r.POST("/user", func(c *gin.Context) {
    var u User
    if err := c.ShouldBindJSON(&u); err != nil {
        c.JSON(400, gin.H{"error": err.Error()})
        return
    }
    c.JSON(200, gin.H{"status": "kayıt eklendi", "data": u})
})
```

### 4. Middleware Kullanmak

```go
func AuthMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        token := c.GetHeader("X-Token")
        if token != "secret" {
            c.AbortWithStatusJSON(401, gin.H{"error": "Yetkisiz"})
            return
        }
        c.Next()
    }
}

// Tüm route’larda:
r.Use(AuthMiddleware())
```

### 5. Route Gruplama

```go
api := r.Group("/api")
{
    api.GET("/list", ...)
    api.POST("/create", ...)
}
```

### 6. Dosya Yüklemek (Form POST ile)

```go
r.POST("/upload", func(c *gin.Context) {
    file, _ := c.FormFile("dosya")
    c.SaveUploadedFile(file, "./uploads/"+file.Filename)
    c.JSON(200, gin.H{"status": "ok", "filename": file.Filename})
})
```

---

## Gin’de Sık Kullanılanlar Tablosu

| Fonksiyon/Method         | Açıklama                              | Örnek Kullanım                                 |
|-------------------------|---------------------------------------|------------------------------------------------|
| `c.JSON(code, obj)`     | JSON döner                            | `c.JSON(200, gin.H{"id": 1})`                  |
| `c.String(code, str)`   | String döner                           | `c.String(200, "ok")`                          |
| `c.File(filepath)`      | Dosya sunar                            | `c.File("./pic.jpg")`                          |
| `c.FormFile("name")`    | Formdan tek dosya alır                 |                                                |
| `c.SaveUploadedFile()`  | Dosya kaydeder                         |                                                |
| `c.PostForm("field")`   | Form verisi alır                       |                                                |
| `c.ShouldBindJSON(&obj)`| JSON parse eder (request body)         |                                                |
| `c.Query("q")`          | URL query param alır                   |                                                |
| `c.Param("id")`         | Path param alır                        |                                                |
| `c.Redirect(code, url)` | Yönlendirme yapar                      |                                                |
| `c.AbortWithStatus()`   | İşi durdurur, sadece status döner      |                                                |
| `c.Set("anahtar", val)` | Request context’e veri ekler           |                                                |
| `c.Get("anahtar")`      | Context’ten veri okur                  |                                                |
| `gin.H{}`               | Kısa JSON map’i (dict) tanımlar        | `gin.H{"mesaj": "ok"}`                         |

---

## İleri Seviye: Gin ile GORM Entegrasyonu

```go
import (
    "github.com/gin-gonic/gin"
    "gorm.io/gorm"
    "gorm.io/driver/mysql"
)

type User struct {
    ID   uint   `json:"id"`
    Name string `json:"name"`
}

func main() {
    db, _ := gorm.Open(mysql.Open("root:1234@tcp(localhost:3306)/deneme"), &gorm.Config{})
    db.AutoMigrate(&User{})

    r := gin.Default()
    r.GET("/users", func(c *gin.Context) {
        var users []User
        db.Find(&users)
        c.JSON(200, users)
    })
    r.Run()
}
```

---

## Önemli İpuçları ve Tüyolar

- Her request için yeni bir context (`c *gin.Context`) gelir.
- `gin.H{}` ile kolayca JSON response yazarsın.
- Tüm JSON parse işlemlerinde `ShouldBindJSON(&struct)` veya doğrudan `c.PostForm`, `c.Query` kullan.
- Middleware ile giriş, loglama, hata yakalama, yetkilendirme gibi işlemleri global yönetebilirsin.
- Sıcak kod değişikliği için `gin` yerine `air`, `fresh` gibi paketlerle geliştirme yapabilirsin.
- Production için: Logger ve Recovery’yi kapatmak istersen `gin.New()` ile başla.

---

## Faydalı Kaynaklar

- [Gin Resmi Dökümantasyon](https://gin-gonic.com/docs/)
- [Gin API Reference](https://pkg.go.dev/github.com/gin-gonic/gin)
- [Awesome Gin (Örnekler ve Rehberler)](https://github.com/gin-gonic/awesome-gin)

---

Gin ile ilgili takıldığın özel bir örnek veya hata olursa hemen sorabilirsin!
