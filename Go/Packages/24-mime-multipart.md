# mine/multipart

Web formlarında dosya upload, çoklu dosya ile çalışmak için kullanılır. Özellikle HTTP ile dosya yüklemede kritik!

| Tip / Fonksiyon                              | Açıklama                                         | Kullanım / Kod Örneği                                |
| -------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| `multipart.Reader`                           | Multipart form okuma arayüzü                     |                                                      |
| `multipart.Writer`                           | Multipart veri yazma arayüzü (örn. dosya upload) |                                                      |
| `multipart.Part`                             | Her dosya/bölüm için nesne                       |                                                      |
| `multipart.File`                             | Yüklenen dosyanın içeriğine erişim               |                                                      |
| `http.Request.ParseMultipartForm(maxMemory)` | İstekten upload edilen dosyaları ayrıştırır      | `r.ParseMultipartForm(10 << 20)`                     |
| `r.MultipartForm.File`                       | Dosya listesini döner                            | `file, _ := r.MultipartForm.File["resim"][0].Open()` |
| `multipart.NewWriter(w)`                     | Yeni multipart veri yazıcı                       |                                                      |


### Örnek – HTTP ile dosya upload almak:

```go
func handler(w http.ResponseWriter, r *http.Request) {
    r.ParseMultipartForm(10 << 20) // 10 MB
    file, header, err := r.FormFile("dosya")
    defer file.Close()
    // file: dosyanın kendisi, header: meta info
    // İstediğin yere kaydedebilirsin
}
```


### Örnek – Multipart veri oluşturmak (HTTP POST):

```go
var b bytes.Buffer
w := multipart.NewWriter(&b)
fw, _ := w.CreateFormFile("dosya", "ornek.jpg")
// fw.Write(...) ile veri ekle
w.Close()
```