# Diziler

```go
// 4 elemanlı boş dizi 
var sayilar [4]int  // [0,0,0,0]
var kelimeler [2]string // ['', '']

sayilar[2] = 3
kelimeler[1] = 'Son'


// Değerleri girilmiş dizi
var renkler []string{'kırmızı', 'mavi', 'yesil'}

// Otomatik boyut
var boyutlar [...]string{"sm", "md", "lg", "xl"}

// Çoklu dizi
var tablo [][]string
```

###  Dizi için fonksiyonlar

| method | İş  |  
| ------ | --- |
| len(arrayname) | Dizinin eleman sayısı |
| cap(arrayname) | Dizinin kapasitesi | 
| array[x] | Dizinin "x" anahtarlı değerini getir. |
| array[x:] | Dizinin "x" dahil x den sonraki değerleri getir. |
| array[x:y] | Dizinin "x" dahil "y" dahil değil, x'den y'ye kadar olan değerleri getir. |
| array[:y] | Dizinin "y" dahil değil,  y'ye kadar olan değerleri getir. |

### Dizi elemanını silmek
Go dilinde direkt silme işlemi yoktur. Silinecek elemanın olmadığı yeni bir dizi oluşturulmalıdır. 
For ile uzun olabileceğinden şöyle bir şey  uygulanabilir.
- Dizinin ilk elemanından silinecek olana kadar yeni dizi oluştur
- Dizinin silinene elemanından sonraki elemanları bu yeni diziye ekle.

```go
func sil(dizi []string, index int) []string{
    return append(dizi[:index], dizi[(index+1):]...)
}
```


###  Döngü ile dizi gezmek
```go
for key := 0; key < len(arrayname); key++ {

}
```


# Slice - Dilimler

- Esnek liste. Bir dizinin parçasını gösterir. Üç bilgi taşır: adres, len, cap.

```go
var s []int             // nil slice, len=0 cap=0
s = append(s, 10, 20)   // [10 20], len=2 cap büyür
fmt.Println(len(s))     // 2
fmt.Println(cap(s))     // >=2 (tam sayı, implementasyona bağlı)

t := s[1:]              // aynı altyapı: [20]
t[0] = 99
fmt.Println(s)          // [10 99]

// Kapasite dolarsa append yeni dizi oluşturur.
// Bu yüzden her zaman geri döneni atayın.
s = append(s, 30, 40)

// Silme kalıbı
i := 1
s = append(s[:i], s[i+1:]...)  // i'yi çıkarır

// Kopyalayarak ayır
u := make([]int, len(s))
copy(u, s)

```
