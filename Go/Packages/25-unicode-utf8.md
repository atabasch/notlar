# unicode/utf8

UTF-8 karakter kodlaması ile çalışırken string’lerin uzunluğunu, karakterini, geçerli olup olmadığını kontrol etmek için kullanılır.
Çünkü Go’daki string aslında byte dizisidir; karakter uzunluğu Türkçe/emoji gibi karakterlerde değişebilir.

| Fonksiyon / Tip                  | Açıklama                                     | Kullanım / Kod Örneği                   |
| -------------------------------- | -------------------------------------------- | --------------------------------------- |
| `utf8.RuneCountInString(s)`      | String’de kaç karakter (rune) var            | `n := utf8.RuneCountInString("şükrü")`  |
| `utf8.ValidString(s)`            | String geçerli UTF-8 mi                      | `utf8.ValidString("aşçı")`              |
| `utf8.DecodeRuneInString(s)`     | İlk karakteri (rune) çözümler, boyutu verir  | `r, size := utf8.DecodeRuneInString(s)` |
| `utf8.DecodeLastRuneInString(s)` | Sondan ilk karakteri çözümler                |                                         |
| `utf8.EncodeRune(p, r)`          | Rune’u UTF-8 olarak byte’a yazar             |                                         |
| `utf8.RuneLen(r)`                | Bir rune’un UTF-8’de kaç byte olduğunu verir |                                         |
| `utf8.FullRune(p)`               | İlk karakter tamam mı diye kontrol eder      |                                         |
| `utf8.Valid(p)`                  | []byte geçerli UTF-8 mi                      |                                         |


###  Örnek – Karakter sayısı ile string uzunluğu farkı:

```go
s := "şeker 🍰"
fmt.Println(len(s))                     // Byte cinsinden uzunluk (9+4=13)
fmt.Println(utf8.RuneCountInString(s))  // Gerçek karakter sayısı (7)
```


###  Örnek – String’de karakter karakter gezmek:

```go
for i, r := range s {
    fmt.Printf("%d. harf: %c\n", i, r)
}
```
