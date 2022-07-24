## [Dosya Listesine Dön](readme.md)

# 1. Değer atamaları
```go

// "" String değer 
var isim = "Furkan" 

// '' Tek tırnaklara sadece bir karakter girilir.
// Ekrana basılan değer A nın ASCII karşılığıdır.
var karakter = 'A' 


var isim = `aaaa` 

```


# 2. Değişken tanımlama 
```go
// Tip ve Değer belirterek.
var <var_name> <type> = <val>

// Tip belirtilmez ise atanan değerin tipini alır.
var <var_name> = <val>

// Değer atamadan oluşturulup sonra değer atanabilir.
var <var_name> <type>
<var_name> = <val>

// Var ve Tip girilmeden değişken oluşturma
// Bu yöntem function dışında global tanımlamada hata verir.
<var_name> := <val>

// Çoklu değişken oluşturmak
var <var_name1>, <var_name2>, <var_name3> <type> = <val1>, <val2>, <val3> 

// Çoklu değişken tipsiz oluşturmak (değerler karışık olabilir.)
var <var_name1>, <var_name2>, <var_name3> = <val1>, <val2>, <val3> 

// 2. çoklu ve toplu değişken belirleme
var (
    id = 1
    title = "Monitor"
    price = 450.50
)

```

### Örnekler

```go
var isim string = "Furkan"

var soyad = "Atabas"

var yas int = 31

var boy, kilo int = 185, 110

goz_rengi, yetiskin, ayak_no := "kahverengi", true, 45

var (
    yetenek = "Programcılık"
    hobiler = "Kodlama, Müzik ve Yürüyüş"
)

var name string // Varsayılan değeri "" boştur

var number int // Varsayılan değeri 0 dır.

var number float32 // Varsayılan değeri 0 dır.

var isMarried bool // Varsayılan değeri false dır.
```

## 2.1 Veri Tipleri
|||
|---|---|
| string | Metinsel |
| int | Tam sayı |
| uint | Sadece pozitif tam sayı |
| float32 | Ondalıklı sayı |
| float64 | Ondalıklı syaı |
| bool | Boolean |

# 3. Sabit tanımlama 

```go
const url = 'http://....'

const name = 'Deneme'
```

# 4. Tür Dönüşümleri

[**strconf** Dökümantasyonu](https://pkg.go.dev/strconv#hdr-Numeric_Conversions)

```go
// Gerekli Kütüphane
import "strconv"

// stringi integer'a çevirir ve çeviremez ise hatayı hata değişkenine atar
sayi, hata := strconv.Atoi("61")
sayi, _ := strconv.Atoi("61") // hatayı almamak için 2. parametreye sadece _ ekle.

// # Integer'ı Stringe çevirmek
strconv.Itoa(61)


// # Integer to Float
var sayi float = float64(23)

var sayi uint = uint(23)
```
