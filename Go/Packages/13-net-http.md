HTTP sunucu ve istemci yazmak için kullanılır. Web API’leri, mikroservisler ve basit sunucular için ana pakettir.

En Önemli Tipler ve Fonksiyonlar

| Fonksiyon / Tip                      | Açıklama                                                              | Kısa Kod Örneği                                                |
| ------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------- |
| `http.ListenAndServe(addr, h)`       | Bir HTTP sunucu başlatır.                                             | `http.ListenAndServe(":8080", nil)`                            |
| `http.HandleFunc(pattern, func)`     | Belirli bir URL path’ine fonksiyon atar.                              | `http.HandleFunc("/selam", handler)`                           |
| `http.Handle(pattern, handler)`      | Kendi Handler tipini ekler.                                           |                                                                |
| `http.ServeMux`                      | Çoklu path-routing için özel router.                                  |                                                                |
| `http.Get(url)`                      | HTTP GET isteği gönderir, yanıtı döner.                               | `resp, err := http.Get("https://...")`                         |
| `http.Post(url, ct, body)`           | HTTP POST isteği gönderir.                                            |                                                                |
| `http.PostForm(url, data)`           | POST ile form göndermek için.                                         |                                                                |
| `http.NewRequest(method, url, body)` | Elle istek nesnesi oluşturur.                                         |                                                                |
| `http.Client`                        | HTTP client’ı (timeout, cookie, proxy ayarı için özelleştirilebilir). |                                                                |
| `http.Request`                       | Gelen/giden HTTP isteklerini temsil eder.                             | `func handler(w http.ResponseWriter, r *http.Request) { ... }` |
| `http.Response`                      | HTTP yanıtını temsil eder.                                            |                                                                |
| `http.ResponseWriter`                | HTTP yanıtına veri yazmak için.                                       | `w.Write([]byte("OK"))`                                        |
| `http.FileServer(fs)`                | Statik dosya sunucusu (örn. html/css/js)                              | `http.Handle("/", http.FileServer(http.Dir("./static")))`      |
| `http.Redirect(w, r, url, code)`     | Yönlendirme yapmak için.                                              |                                                                |
| `http.Error(w, msg, code)`           | Hatalı yanıt döndürmek için.                                          |                                                                |
| `SetCookie(w, cookie)`               | Cookie ayarlamak için.                                                |                                                                |
| `ReadRequest(b)`                     | Request’i io.Reader’dan okur (düşük seviye).                          |                                                                |



##  Kısa Kullanım Senaryosu 

```go
func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Merhaba dünya!")
    })
    http.ListenAndServe(":8080", nil)
}

```

Notlar:

API, web sitesi veya dosya servisi yapacaksan bu paket temelindir.

Gelen HTTP request’te, r.URL.Path, r.Method, r.Header, r.Body gibi alanları kullanırsın.

Yanıt vermek için: w.Write([]byte("cevap")) veya fmt.Fprint(w, ...).