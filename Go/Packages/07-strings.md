String manipülasyonu için çok zengin fonksiyonlar.

| Fonksiyon                   | Açıklama                                       | Kullanım Örneği                         |
| --------------------------- | ---------------------------------------------- | --------------------------------------- |
| `Contains()`                | Alt string içeriyor mu                         | `strings.Contains("selam", "e")`        |
| `ContainsAny()`             | Herhangi bir karakter içeriyor mu              | `strings.ContainsAny("test", "xyz")`    |
| `ContainsRune()`            | Rune (karakter kodu) içeriyor mu               | `strings.ContainsRune("merhaba", 'a')`  |
| `Count()`                   | Alt string kaç kere geçiyor                    | `strings.Count("banana", "a")`          |
| `EqualFold()`               | Büyük/küçük harf duyarsız eşitlik              | `strings.EqualFold("a", "A")`           |
| `Fields()`                  | Boşluklara göre böler (split)                  | `strings.Fields("a b c")`               |
| `FieldsFunc()`              | Fonksiyonla böler                              | Fonksiyon ile özel split                |
| `HasPrefix()`               | Başlangıcı belli string mi                     | `strings.HasPrefix("test", "te")`       |
| `HasSuffix()`               | Sonu belli string mi                           | `strings.HasSuffix("foto.jpg", ".jpg")` |
| `Index()`                   | Alt string’in ilk indexi                       | `strings.Index("abc", "b")`             |
| `IndexAny()`                | Belirtilen karakterlerden ilki                 | `strings.IndexAny("golang", "ae")`      |
| `IndexByte()`               | Belirli byte’ın indexi                         | `strings.IndexByte("golang", 'g')`      |
| `IndexFunc()`               | Fonksiyonla ilk eşleşen index                  | Fonksiyonla özel index                  |
| `IndexRune()`               | Rune’un indexi                                 | `strings.IndexRune("golang", 'a')`      |
| `Join()`                    | Dizi elemanlarını ayırıcı ile birleştirir      | `strings.Join([]string{"a", "b"}, "-")` |
| `LastIndex()`               | Alt string’in son indexi                       | `strings.LastIndex("bananana", "na")`   |
| `LastIndexAny()`            | Herhangi bir karakterin son indexi             |                                         |
| `LastIndexByte()`           | Byte’ın son indexi                             |                                         |
| `LastIndexFunc()`           | Fonksiyonla son eşleşen index                  |                                         |
| `Map()`                     | Her rune’a fonksiyon uygular                   | Harfleri özel işleme sokmak             |
| `Repeat()`                  | String’i N kez tekrarlar                       | `strings.Repeat("a", 3)`                |
| `Replace()`                 | Eski ile yeni string’i değiştirir (sayı kadar) | `strings.Replace("foo", "o", "e", -1)`  |
| `ReplaceAll()`              | Tüm eski string’leri yeniyle değiştirir        | `strings.ReplaceAll("a b a", "a", "x")` |
| `Split()`                   | Belirli ayırıcıya göre böler                   | `strings.Split("a-b-c", "-")`           |
| `SplitAfter()`              | Ayırıcıdan sonra böler                         |                                         |
| `SplitAfterN()`             | Ayırıcıdan sonra N parça böler                 |                                         |
| `SplitN()`                  | Ayırıcıya göre N parça böler                   |                                         |
| `Title()`                   | Kelimelerin ilk harfini büyütür (deprecated)   | `strings.Title("merhaba dünya")`        |
| `ToLower()`                 | Tümünü küçük harfe çevirir                     | `strings.ToLower("ABC")`                |
| `ToTitle()`                 | Tümünü büyük harfe çevirir                     | `strings.ToTitle("abc")`                |
| `ToUpper()`                 | Tümünü büyük harfe çevirir                     | `strings.ToUpper("abc")`                |
| `ToValidUTF8()`             | UTF-8 olmayanları değiştirilmiş versiyon       |                                         |
| `Trim()`                    | Baştan ve sondan belli karakterleri atar       | `strings.Trim("..abc..", ".")`          |
| `TrimFunc()`                | Fonksiyonla kırpar                             |                                         |
| `TrimLeft()`, `TrimRight()` | Sadece baştan/sondan atar                      |                                         |
| `TrimPrefix()`              | Baştaki belirli string’i atar                  |                                         |
| `TrimSpace()`               | Boşlukları baştan ve sondan kırpar             | `strings.TrimSpace("  selam  ")`        |
| `TrimSuffix()`              | Sondaki belirli string’i atar                  |                                         |
| `NewReader()`               | String’i io.Reader olarak sarmalar             | `r := strings.NewReader("abc")`         |
| `Compare()`                 | Stringleri karşılaştırır (-1, 0, 1 döner)      | `strings.Compare("a", "b")`             |
