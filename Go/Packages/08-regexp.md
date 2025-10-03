Regular expression (düzenli ifade) işlemleri için. Karmaşık string aramaları, validasyon, veri ayrıştırma gibi işlerde kullanılır.

| Fonksiyon / Tip                  | Açıklama                                           | Kısa Kod Örneği                      |
| -------------------------------- | -------------------------------------------------- | ------------------------------------ |
| `regexp.MustCompile(pattern)`    | Pattern’ı derler, hata varsa panic atar            | `re := regexp.MustCompile(`a(b*)c`)` |
| `regexp.Compile(pattern)`        | Pattern’ı derler, hata döndürür                    |                                      |
| `re.MatchString(str)`            | String ile pattern eşleşiyor mu?                   | `re.MatchString("abc")`              |
| `re.FindString(str)`             | İlk eşleşen substring’i döner                      | `re.FindString("xx abbbbc yy")`      |
| `re.FindStringIndex(str)`        | Eşleşen substring’in index aralığını döner         |                                      |
| `re.FindAllString(str, n)`       | Tüm eşleşenleri bulur (n=-1: tümünü)               | `re.FindAllString("a1 b2 c3", -1)`   |
| `re.ReplaceAllString(str, repl)` | Eşleşenleri yeni string ile değiştirir             |                                      |
| `re.Split(str, n)`               | String’i pattern’e göre böler                      | `re.Split("a1 b2 c3", " ")`          |
| `re.FindStringSubmatch(str)`     | Eşleşen alt grupları da döner (parantezli gruplar) |                                      |
| `re.SubexpNames()`               | Alt grupların isimlerini döner                     |                                      |
| `regexp.MatchString(pat, str)`   | Pattern ile eşleşme (fonksiyon, struct olmadan)    |                                      |


```go
re := regexp.MustCompile(`^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$`)
if re.MatchString("test@emeyz.com") {
    fmt.Println("Geçerli e-posta!")
}

```

Notlar:

Bir pattern’i sıkça kullanacaksan derleyip tekrar tekrar kullanabilirsin (MustCompile).

Çok büyük metinlerde, log analizlerinde veya veri doğrulamada kullanılır.