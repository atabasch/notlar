# Gerekli Paketler
- "net/http"  (server, listening işlemleri yapar)

# Request istekleri atmak
```js
response, err := http.Get("url...")

response, err := http.Post("url...", "image/jpg", &buf)

response, err := http.PostForm("url...", url.Values{"key": {"val"}, "key": {"val"}})

defer response.Body.Close() // defer kodu en son çalıştırır } den önce
```

# En Basit Server
```go
package main

import (
	"net/http"
	"html/template"
)

func handler() {

	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
        res.WriteHeader(http.StatusOK)
		res.Write([]byte("Anasayfa"))
	})

	http.HandleFunc("/about", About)

	http.Handle("/contact", http.FileServer(http.Dir("."))) // main roottaki index.html'i getirir.

}

func About(res http.ResponseWriter, req *http.Request) {
	view, err = template.ParseFiles("about.html")

	data := nil
	//yada
	data := make(map[string]interface{})
	data["title"] = "Value1"	// {{ .title }}
	data["desc"] = "Value2"		// {{ .desc }}
	view.Execute(res, data)
}

func main() {
	handler()
	http.ListenAndServe(":8080", nil)
}
```

# Url'den değer almak
```go
func pageHandler(res http.ResponseWriter, req *http.Request){

    params := req.URL.Path // site adresinden sonraki kısmı alır. abc.xyz/test/deneme => /test/deneme
    params := req.URL.Path[1:] // test/deneme

}
```

# Routing İşlemleri
Gerekli Kütüphane: https://github.com/julienschmidt/httprouter

> go get github.com/julienschmidt/httprouter

```go
package main

import (
	"net/http"
	"html/template"
	"github.com/julienschmidt/httprouter"
)

func main(){
	router, _ := httprouter.New()

	router.GET("/", HomePage)	
	router.GET("/show/:slug_title", ShowPost)	

	http.ListenAndServer(":8000", router)
}

// 3. parametre URL'den gelen parametreleri alır.
func HomePage(response http.ResponseWriter, request *http.Request, params httprouter.Params){
	view, _ := template.ParseFiles("index.html")
	view.Execute(datas)
}

func ShowPost(response http.ResponseWriter, request *http.Request, params httprouter.Params){
	slug := params.ByName("slug_title") // dinamik değer alınıyor.
}
```


## request *http.Request kullanmak
```go

request.FormValue("input_name") //

```

## Upload
```go
// Sınır max: 10mb ve 20 parça olarak
request.ParseMultipartForm(10 << 20) 
 
// Formdan yüklenen veriyi al
file, header, err := request.FormFile("input_name")

/*
header.Filename
header.Header
header.Size
*/

// Sistemde "seçilen dosyanın adında" yeni bir dosya oluştur. "Sadece yazmak |ve| oluşturmak için"
newFile, err = os.OpenFile(header.Filename, os.O_WRONLY|os.O_CREATE, 0666) 

// Karşıdan seçilen dosyayı yeni oluşturulan dosyaya yaz
io.Copy(newFile, file) 


```


# html de kullanılacak kodlar
```html
<!-- YORUM -->
{{/* a comment */}}

<!-- DEĞİŞKEN  -->
{{ $variable := pipeline }}

{{with $x := "output" | printf "%q"}}{{$x}}{{end}}



<!-- GÖNDERİLEN PARAMETRE DEĞİŞKENİ  -->
{{ . }} <!-- view.Execute()  ile 2. parametre gönderilen data -->

<!-- GÖNDERİLEN PARAMETREDEN DEĞİŞKENLER ALMAK  -->
{{ .key }} <!-- view.Execute()  ile 2. parametre gönderilen dataların alınması -->

<!-- DÖNGÜ -->
{{ range $index,$value := .items }}
	<li>{{ $value }}</li>
{{ end }}


<!-- KOŞULLAR -->
{{ if eq .level 2 }} <!-- level 1 e eşit mi -->

{{ else }}

{{ end }}
<!-- 
	eq x y (x == y)
	ne x y (x != y)
	lt x y (x < y)
	le x y (x <= y)
	gt x y (x > y)
	ge x y (x >= y)
 -->

<!--   -->
{{block "content" .}} {{end}}



<!-- INCLUIDE (Bu sistemde her html dosyasında bunu yazmak zorundasın index,list,vs) ayrıca ParseFiles içine include edilecekleri gönder -->
{{ define "header" }}

{{ end }}

<!-- başka tema dosyasında header ı çağırır.  -->
{{ template "header" }}

```


# MVC OLUŞTURMAK 

- main.go
- controllers
	- Dashboard.go 	`package controllers`
	- User.go 		`package controllers`
- views 
- models 
- helpers 
- config 
	- Routes.go 

### Örnek Controllers 
```go
package controllers 

import (
	"github.com/julienschmidt/httprouter",
	"html/template",
	"net/http"
)

type User struct{}

func (u User) Index(req *http.Request, res http.ResponseWriter, params httprouter.Params){
	view, _ := template.ParseFiles("views/user/index.html", "views/user/header.html")

	datas := make(map[string]interface{})
	datas["title"] = "Value1"	// {{ .title }}
	datas["desc"] = "Value2"	// {{ .desc }}
	view.ExecuteTemplate(res, "index", datas)
}
```

### Örnek Routes.go 
```go 
package üstklasöradı 

import (
	"github.com/julienschmidt/httprouter",
	"projectname/controllers",
	admin "projectname/controllers/admin",
)

fucn Routes() *httprouter.Router{
	r := httprouter.New()
	r.GET("/", controllers.Dashboard{}.Index)	// controller klasöri Dashboard.go Index methodu

	r.GET("/user", controllers.User{}.Index)
	r.GET("/user/get/:id", controllers.User{}.Get)

	r.GET("/admin", admin.Dashboard{}.Index)
	r.GET("/admin/posts", admin.Post{}.Index)

	r.ServeFiles("/assets/*filepath", http.Dir("/src/public")) // *filepath yazılmalı //assets/xyz.css ler /src/public/xyz.css den gelir. 
	return r
}
```

### Örnek main.go 
```go
	package main

	import (
		"net/http",
		"projectfolder/config"
	)

	func main(){
		http.ListenAndServe(":80", config.Routes())
	}
``` 

