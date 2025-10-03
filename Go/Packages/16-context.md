İşlemler arası bağlam (context), iptal (cancel), zaman aşımı (timeout), ve istek zincirine veri aktarımı için kullanılır. Özellikle HTTP API, background işlemler, goroutine yönetimi ve büyük projelerde zorunludur.

| Tip / Fonksiyon                       | Açıklama                                                      | Kısa Kod Örneği                                          |
| ------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| `context.Background()`                | Kök (en üst, boş) context’i döner                             | `ctx := context.Background()`                            |
| `context.TODO()`                      | “Sonradan context gelecek” demek için, geçici kullanılır      | `ctx := context.TODO()`                                  |
| `context.WithCancel(parent)`          | İptal edilebilir context oluşturur (iptal için cancel fonk.)  | `ctx, cancel := context.WithCancel(ctx)`                 |
| `context.WithTimeout(parent, d)`      | Zaman aşımı olan context oluşturur                            | `ctx, cancel := context.WithTimeout(ctx, 2*time.Second)` |
| `context.WithDeadline(parent, time)`  | Belirli bir anda otomatik iptal olur                          |                                                          |
| `context.WithValue(parent, key, val)` | Context’e veri (anahtar-değer) ekler                          | `ctx := context.WithValue(ctx, "user", id)`              |
| `ctx.Done()`                          | Context iptal edildiğinde kanal kapanır (select ile dinlenir) | `select { case <-ctx.Done(): ... }`                      |
| `ctx.Err()`                           | İptal/timeout olmuşsa hata verir                              |                                                          |
| `ctx.Value(key)`                      | Eklenmiş veriyi getirir                                       | `val := ctx.Value("user")`                               |


### Tipik Kulanm
Bir HTTP isteği iptal olursa (istemci tarayıcıyı kapatırsa) işlemi yarıda kesmek için context ile çalışılır.

```go
func slowProcess(ctx context.Context) error {
    select {
    case <-time.After(5 * time.Second):
        return nil // İşlem tamam
    case <-ctx.Done():
        return ctx.Err() // İptal edildi veya timeout oldu
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()
    err := slowProcess(ctx)
    fmt.Println(err) // context deadline exceeded
}

```