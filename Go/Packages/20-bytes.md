[]byte ile string benzeri işlemler yapmanı sağlar. Özellikle dosya/parçalı veri, network ve performans gereken durumlarda çok kullanılır.


| Fonksiyon / Tip                  | Açıklama                                               | Kısa Kod Örneği                         |
| -------------------------------- | ------------------------------------------------------ | --------------------------------------- |
| `bytes.Compare(a, b)`            | İki []byte’ı karşılaştırır                             | `bytes.Compare(a, b)`                   |
| `bytes.Equal(a, b)`              | Eşit mi kontrol eder                                   | `bytes.Equal(a, b)`                     |
| `bytes.Contains(b, subslice)`    | İçeriyor mu kontrolü                                   | `bytes.Contains(b, []byte("ara"))`      |
| `bytes.HasPrefix(b, prefix)`     | Belli byte dizisiyle başlıyor mu                       | `bytes.HasPrefix(b, []byte("abc"))`     |
| `bytes.HasSuffix(b, suffix)`     | Sonu belirli diziyle mi bitiyor                        | `bytes.HasSuffix(b, []byte("xyz"))`     |
| `bytes.Index(b, sep)`            | Alt dizinin ilk index’i                                | `bytes.Index(b, []byte("x"))`           |
| `bytes.LastIndex(b, sep)`        | Son index’i                                            |                                         |
| `bytes.Repeat(b, n)`             | N kez tekrarlar                                        | `bytes.Repeat([]byte("A"), 5)`          |
| `bytes.Replace(b, old, new, n)`  | Eski ile yeniyi değiştirir                             |                                         |
| `bytes.Split(b, sep)`            | Ayırıcıya göre böler                                   | `bytes.Split(b, []byte(","))`           |
| `bytes.Join(slices, sep)`        | Birleştirir                                            | `bytes.Join(slices, []byte("-"))`       |
| `bytes.ToLower(b)`, `ToUpper(b)` | Küçük/büyük harfe çevirir                              |                                         |
| `bytes.Trim(b, cutset)`          | Baş/sondan kırpar                                      | `bytes.Trim(b, []byte("\n"))`           |
| `bytes.NewBuffer(b)`             | Buffer oluşturur (io.Reader/io.Writer gibi kullanılır) | `buf := bytes.NewBuffer([]byte("abc"))` |
| `buf.Write(p)`                   | Buffer’a yazar                                         | `buf.Write([]byte("ekle"))`             |
| `buf.Read(p)`                    | Buffer’dan okur                                        | `buf.Read(p)`                           |
| `buf.Bytes()`                    | Buffer’daki veriyi döner                               | `b := buf.Bytes()`                      |
| `buf.String()`                   | Buffer’daki veriyi string olarak döner                 | `s := buf.String()`                     |
| `buf.Reset()`                    | Buffer’ı temizler                                      | `buf.Reset()`                           |
| `buf.Len()`                      | Buffer uzunluğu                                        | `buf.Len()`                             |


**Not:**
Aynı işlemlerin string karşılıkları strings paketindedir. Ama dosya/network/protokol gibi işlerde daha çok bytes paketi kullanılır.