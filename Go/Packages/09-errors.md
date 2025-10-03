Hata oluşturmak ve sarmalamak için kullanılır.

| Fonksiyon / Tip   | Açıklama                                     | Kullanım Örneği                                       |
| ----------------- | -------------------------------------------- | ----------------------------------------------------- |
| `errors.New()`    | Yeni bir hata oluşturur                      | `err := errors.New("Hata mesajı")`                    |
| `errors.Is()`     | Hata zincirinde eşleşen hata var mı kontrolü | `errors.Is(err, io.EOF)`                              |
| `errors.As()`     | Hata türüne dönüştürme denemesi              | `var pathErr *os.PathError; errors.As(err, &pathErr)` |
| `errors.Unwrap()` | Sarılı hatadan içteki hatayı döner           | `errors.Unwrap(err)`                                  |
| `Error()`         | Hata mesajını string olarak verir            | `err.Error()`                                         |
