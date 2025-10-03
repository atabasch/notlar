# testing

Go’da unit test ve benchmark yazmak için kullanılır. Test fonksiyonları otomatik çalışır.
Kodun güvenli, hatasız ve sürdürülebilir olması için şarttır!

| Tip / Fonksiyon                 | Açıklama                                             | Kullanım / Kod Örneği                           |
| ------------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| `func TestXxx(*testing.T)`      | Test fonksiyonları böyle başlar (`Xxx` büyük harfle) | `func TestTopla(t *testing.T) { ... }`          |
| `t.Error(args...)`              | Testi başarısız yapar, mesaj verir                   | `t.Error("Beklenen", beklenen, "Aldık", aldik)` |
| `t.Errorf(format, args...)`     | Formatlı hata mesajı                                 | `t.Errorf("Beklenen %d, aldık %d", 5, aldik)`   |
| `t.Fail()`                      | Testi başarısız yapar ama devam eder                 |                                                 |
| `t.FailNow()`                   | Hemen başarısız yapar, testten çıkar                 |                                                 |
| `t.Fatal(args...)`              | Hemen başarısız ve çıkış                             |                                                 |
| `t.Log(args...)`                | Bilgi mesajı loglar                                  | `t.Log("İşlem bitti")`                          |
| `t.Skip()`                      | Testi atlar                                          |                                                 |
| `func BenchmarkXxx(*testing.B)` | Benchmark fonksiyonları (performans ölçer)           | `func BenchmarkTopla(b *testing.B) { ... }`     |
| `go test` komutu                | Paketlerde otomatik test çalıştırmak için            | `go test -v`                                    |


## Örnek

```go
func Topla(a, b int) int { return a + b }

func TestTopla(t *testing.T) {
    sonuc := Topla(2, 3)
    if sonuc != 5 {
        t.Errorf("Beklenen 5, aldık %d", sonuc)
    }
}

```

Terminalde test çalıştırmak için:
> go test -v