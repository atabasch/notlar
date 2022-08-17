# Kurulum
- Öncelikle projeyi modüler hale getir. 
    - > go mod init projeadi // atabasch.com/blog
- Projeye gin framework'ü dahil et. 
    - > go get -u github.com/gin-gonic/gin
- Daha performanslı json çıktıları için jsoniter kullan (sanırtım kurulunca otomatik kullanıyor)
    - > go build -tags=jsoniter .
- Projenin ana dosyasına aşağıdaki kodları ekle 

```go
package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	Router := gin.Default()

    // id2 olasada olur olmasa da 
	Router.GET("/path/:id/*id2", func(c *gin.Context){
        c.JSON(200, gin.H{
            "id":     c.Param("id"),
        })
        
        // veya
        c.JSON(200, map[string]interface{}{
			"id:":    ctx.Param("id"),
		})

    })

	Router.Run(":5005")
}

```


## context *gin.Context ile gelen işlemler
| Kod | İşlev | 
|-----|-------|
| c.JSON(statusCode, DATA)  | Ekrana JSON çıktrı verir. |
| c.H{"key":"val",}         | c.JSON 2. parametreye verilir dataları alır. |
| c.String(200, "pong")     | Ekrana metin basar |
| c.Param("key")            | url path den gelen değişkeni alır "/tax/:key" |
| c.Query("key")            | QueryString den değer alır |
| c.DefaultQuery("key", "default") | Query stringden değer alır yoksa default değeri verir. |
| c.PostForm("name")        | Posttan gelen değeri alır. |
| c.Redirect(StatuysCode, toUrl) |  |
| c.SecureJSON(http.StatusOK, names)| // while(1);["lena","austin","foo"] Using SecureJSON to prevent json hijacking. |
|  |  |
|  |  |
|  |  |