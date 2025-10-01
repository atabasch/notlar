# 2. Değişkenler

Değişken türleri
| Tip | Convert |     | 
| --- | --- | --- |
| bool |  | true, false (default) |
| string |  | Text default:"" |
| int | int(x) | Both int and uint contain same size, either 32 or 64 bit. |
| int8 | int8(x) | (-128 to 127) |
| int16 | int16(x) | (-32768 to 32767) |
| int32 | int32(x) | (-2147483648 to 2147483647) |
| int64 | int64(x) | (-9223372036854775808 to 9223372036854775807) |
| uint | uint(x)  | Both int and uint contain same size, either 32 or 64 bit. |
| uint8 | uint8(x)  | (0 to 255) |
| uint16 | uint16(x)   | (0 to 65535) |
| uint32 | uint32(x)  | (0 to 4294967295) |
| uint64 | uint64(x)  | (0 to 18446744073709551615) |
| byte | byte(x)   | uint8 in diğer adı |
| rune | rune(x)   | int32 nin diğer adı |
| float32 | float32(x)    | 32-bit IEEE 754 floating-point number |
| float64 | float64(x)    | 64-bit IEEE 754 floating-point number |
| complex64 | complex64(x)     | Complex numbers which contain float32 as a real and imaginary component. |
| complex128 | complex128(x)    | Complex numbers which contain float64 as a real and imaginary component. |

### 2.1 Dinamik değişken oluşturmak.
`var`anahtar kelimesi ile değişken adı pelirlenir ve eşittir ile değer atanır. Girilen değere göre `go` değişken için bir tür çıkarımı yapar. Değişkenin değeri daha sonra farklı bir türe değiştirilirse hata alınır.

```go
var name = "Furkan" // string
var age = 34        // int
var pi = 3.14       // float64
```

### 2.2 Tip ile değişken oluşturmak

Değişkenler türü belirtilerek oluşturulur. Değer girilmez ise zero değer alırlar. string boş, int 0 ve boolean false olur.

```go
var name string     // = ""
var age int         // = 0
var active bool     // = false

var version string = "1.0.1" // = "1.0.1"
```

### 2.3 Kısa Bildirim.
Oluşturulması kolay yerel değişkenlerdir. Sadece fonksiyon içinde oluşturulur, paket düzeyinde oluşturulmaz. 

```go
name := "furkan"
yas := 34
```

### 2.4 Sabit Değişkenler

Sabit dğeişkenler bir kez oluşturulur ve değerleri bir daha değiştirilemez. Sabit kalıcı tüm uygulama boyunca geçerli olacak şeyler için kullanılır. 
**Büyük harfle başlamalıdır.**

```go
const Pi = 3.14;
const Version string = "0.1.1"
```

### 2.5 Çoklu Atama
birden fazla değişkeni tek satırda oluşturmak için kullanılır.

```go
// var anahtarıyla
var name, age, active = "Furkan", 34, true

// Yada kısa bildirim ile
name, age, active := "Furkan", 34, true
```

### 2.6 Boş Tanımlayıcı (Dönen değeri çöpe atmak)
Go'da methodlar birden fazla değer döndürebilir. 
Eğer bir method çalıştırdıysan ve sadece bir sonucu almak istiyorusan alt tire `_` kullanarak dönen değeri boşa yollayabilirsin. 

Örnek:

```go
func topla(a int, b int) (int, int, int){
    toplam := a + b
    return toplam, a, b
}

func main(){
    // toplam = 5 olur.
    // methoddan dönen a ve b değeri herhangi bir atama yapılmadan çöpe atılır
    var toplam, _, _ = topla(2, 3) 
}
```

