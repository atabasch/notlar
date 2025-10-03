# String
Stringler metinsel ifadelerdir. Aşağıda string ile bazı işlemler var.


### 1. String değişken oluşturmak


```go
// Değişken türü kendi alır
var isim = "Furkan"

// Değişkene türü verirsin ve değeri alır
var isim string = "Furkan"

// isim değişkeni önce tanımlanır ve boş değer alır ""
var isim string 
isim = "Furkan"

// Kısa bildirim
isim := "Furkan"
```


### 2. String Birleştirme 
```go
var newStr = "str1" + "str2" 


// 2. Yöntem (Çok fazla stringi birleştirirken aşağıdaki daha hızlı)
import "bytes"

var x = bytes.Buffer
x.WriteString("Test ")
x.WriteString("Deneme")
x.String() // Test Deneme


// 3. Yöntem (Diğerlerinden daha performanslı)
import "strings"

builder := strings.Builder()
builder.WriteString("String1 ")
builder.WriteString("String2")
builder.String()
```


### 3. Büyük/küçük harf
```go
s := "merhaba dünya"
strings.ToUpper(s) // "MERHABA DÜNYA"
strings.ToLower(s) // "merhaba dünya"
```

### 4. İlk harfi büyük
```go
func CapitalizeFirst(s string) string {
    if s == "" { return s }
    r, sz := utf8.DecodeRuneInString(s)
    return string(unicode.ToTitle(r)) + s[sz:]
}

```

### 5. Uzunluk
```go
len(s)                         // bayt sayısı
utf8.RuneCountInString(s)      // karakter (rune) sayısı

```



### 6. String to Array
```go
[]byte(s)   // bayt dilimi
[]rune(s)   // karakter dilimi (Unicode güvenli)
strings.Split(s, ",")     // ayraçla böl -> []string
strings.Fields(s)         // boşluklara göre kelimeler

```

### 7. Arama ve Karşılaştırma
```go
strings.Contains(s, "ara")        // var mı
strings.Index(s, "ara")           // ilk konum, yoksa -1
strings.LastIndex(s, "ara")       // son konum
strings.HasPrefix(s, "http")
strings.HasSuffix(s, ".jpg")
strings.EqualFold(a, b)           // büyük/küçük duyarsız eşitlik
strings.Count(s, "go")            // tekrar sayısı

```

### 8. Değiştirme ve Kırpma
```go
strings.ReplaceAll(s, "eski", "yeni")
strings.Replace(s, "x", "y", 1)        // n adet
strings.NewReplacer("a","@", "i","1").Replace(s)

strings.TrimSpace("  x \n")            // "x"
strings.Trim(s, "_*")                   // baş/sondan bu karakterleri kırpar
strings.TrimPrefix(s, "pre")
strings.TrimSuffix(s, "suf")

```

### 9. Birleştirme ve oluşturma
```go
strings.Join([]string{"a","b","c"}, ",")   // "a,b,c"
x := "a" + "b" + "c"

var b strings.Builder
b.WriteString("merhaba")
b.WriteByte(' ')
b.WriteString("dünya")
out := b.String()

```

### 10.  Regex ile arama ve değiştirme
```go
re := regexp.MustCompile(`\d+`)
m := re.FindAllString("a12b34", -1)        // ["12","34"]
out := re.ReplaceAllString("a12b", "X")    // "aXb"

```
