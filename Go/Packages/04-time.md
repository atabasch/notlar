# import "time"

Tarih, saat, süre ve zaman işlemleri için kullanılır.




# 1. Tarih/Saat Almak, Parçalarına Erişmek

| Fonksiyon/Method | Açıklama                        | Örnek Kod                     |
| ---------------- | ------------------------------- | ----------------------------- |
| `time.Now()`     | Şu anki tarihi/saat döner       | `now := time.Now()`           |
| `t.Year()`       | Yılı alır                       | `yil := now.Year()`           |
| `t.Month()`      | Ayı (time.Month olarak, 1=Ocak) | `ay := now.Month()`           |
| `t.Day()`        | Ayın günü                       | `gun := now.Day()`            |
| `t.Hour()`       | Saati                           | `saat := now.Hour()`          |
| `t.Minute()`     | Dakika                          | `dk := now.Minute()`          |
| `t.Second()`     | Saniye                          | `sn := now.Second()`          |
| `t.Weekday()`    | Haftanın günü (time.Weekday)    | `haftaGunu := now.Weekday()`  |
| `t.ISOWeek()`    | ISO hafta numarası ve yılı      | `yil, hafta := now.ISOWeek()` |
| `t.YearDay()`    | Yılın kaçıncı günü              | `gunNo := now.YearDay()`      |


# 2. Tarih/Saat Oluşturmak veya Set Etmek

| Fonksiyon/Method                                                 | Açıklama                    | Örnek Kod                                                    |
| ---------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------ |
| `time.Date(yil, ay, gun, saat, dakika, saniye, nanosaniye, loc)` | Özel tarih/saat oluşturur   | `t := time.Date(2025, 1, 15, 13, 45, 0, 0, time.Local)`      |
| `time.Parse(layout, str)`                                        | String'den time.Time üretir | `t, _ := time.Parse("2006-01-02", "2025-04-10")`             |
| `time.ParseInLocation(layout, str, loc)`                         | Saat dilimli parse          | `t, _ := time.ParseInLocation("15:04", "23:59", time.Local)` |
| `t.In(loc)`                                                      | Başka saat dilimine çevirir | `tUTC := t.In(time.UTC)`                                     |
| `t.Local()`                                                      | Yerel saate çevirir         | `tLocal := t.Local()`                                        |


# 3. Tarih/Saat Formatlama ve Dönüştürme

Go’da format stringi "2006-01-02 15:04:05" şablonu ile verilir. (Bu tarih ezberlenir!)

| Fonksiyon/Method         | Açıklama                            | Örnek Kod                             |
| ------------------------ | ----------------------------------- | ------------------------------------- |
| `t.Format(layout)`       | time.Time'ı string olarak formatlar | `s := now.Format("02.01.2006 15:04")` |
| `t.String()`             | Varsayılan string döner             | `s := now.String()`                   |
| `t.Unix()`               | Unix timestamp (saniye) döner       | `ts := now.Unix()`                    |
| `t.UnixNano()`           | Unix timestamp (nano-saniye) döner  | `ts := now.UnixNano()`                |
| `time.Unix(secs, nanos)` | Unix timestamp'tan time.Time üretir | `t := time.Unix(1715150770, 0)`       |



# 4. Tarih/Saat Hesaplama – Ekleme/Çıkarma

| Fonksiyon/Method          | Açıklama                                     | Örnek Kod                                     |
| ------------------------- | -------------------------------------------- | --------------------------------------------- |
| `t.Add(d)`                | Zaman üzerine süre ekler                     | `yeni := now.Add(24 * time.Hour)`             |
| `t.AddDate(yil, ay, gun)` | Tarihe yıl, ay, gün ekler (negatif çıkartır) | `yeni := now.AddDate(0, 1, 0)` (bir ay ekler) |
| `now.Sub(t)`              | İki tarih arasındaki fark (Duration)         | `fark := now.Sub(t)`                          |
| `t.Before(t2)`            | t < t2 mi?                                   | `if t.Before(now) {...}`                      |
| `t.After(t2)`             | t > t2 mi?                                   | `if t.After(now) {...}`                       |
| `t.Equal(t2)`             | Tam olarak aynı mı?                          | `if t.Equal(t2) {...}`                        |


# 5. Ayın, Haftanın, Yılın İlk/ Son Günü


#### Ayın İlk ve Son Günü:

```go
now := time.Now()
// Ayın ilk günü:
ilkGun := time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
// Ayın son günü:
sonGun := ilkGun.AddDate(0, 1, -1)
fmt.Println("Ayın ilk günü:", ilkGun.Format("02.01.2006"))
fmt.Println("Ayın son günü:", sonGun.Format("02.01.2006"))

```

#### Haftanın İlk ve Son Günü (Pazartesi başlar):

```go
haftaGunu := int(now.Weekday())
if haftaGunu == 0 { haftaGunu = 7 } // Go'da Pazar=0, Pazartesi=1
haftaIlk := now.AddDate(0, 0, -haftaGunu+1)
haftaSon := haftaIlk.AddDate(0, 0, 6)
fmt.Println("Haftanın ilk günü:", haftaIlk.Format("02.01.2006"))
fmt.Println("Haftanın son günü:", haftaSon.Format("02.01.2006"))

```

#### Yılın İlk ve Son Günü:

```go
yil := now.Year()
ilkGun := time.Date(yil, 1, 1, 0, 0, 0, 0, now.Location())
sonGun := time.Date(yil, 12, 31, 0, 0, 0, 0, now.Location())
```


# 6. Zaman Farkı ve Süre İşlemleri

| Fonksiyon/Method | Açıklama                               | Örnek Kod                |
| ---------------- | -------------------------------------- | ------------------------ |
| `t1.Sub(t2)`     | İki tarih arası farkı verir (Duration) | `fark := t1.Sub(t2)`     |
| `fark.Hours()`   | Süreyi saat cinsinden verir            | `fark.Hours()`           |
| `fark.Minutes()` | Süreyi dakika cinsinden verir          | `fark.Minutes()`         |
| `fark.Seconds()` | Süreyi saniye verir                    |                          |
| `time.Since(t)`  | Şimdiden itibaren geçen süre           | `gecen := time.Since(t)` |
| `time.Until(t)`  | Şimdiden itibaren kalan süre           | `kalan := time.Until(t)` |


# 7. Uyutmak/Bekletmek ve Timer Kullanmak

| Fonksiyon/Method    | Açıklama                             | Örnek Kod                       |
| ------------------- | ------------------------------------ | ------------------------------- |
| `time.Sleep(d)`     | Verilen süre kadar programı durdurur | `time.Sleep(2 * time.Second)`   |
| `time.After(d)`     | Süre dolunca kanal tetikler          | `<-time.After(3 * time.Second)` |
| `time.NewTimer(d)`  | Tek seferlik sayaç                   |                                 |
| `time.NewTicker(d)` | Periyodik sayaç (her X saniye)       |                                 |

### Yılın kaçıncı haftası
```go
now := time.Now()
yil, hafta := now.ISOWeek()
fmt.Printf("Yıl: %d, Hafta: %d\n", yil, hafta)

```

###  Yılın kaçıncı günü:
```go
gunNo := now.YearDay()
fmt.Println("Yılın kaçıncı günü:", gunNo)
```

### Lokasyon (Saat Dilimi) Kullanımı
```go
loc, _ := time.LoadLocation("Europe/Istanbul")
tLocal := now.In(loc)
fmt.Println("İstanbul saati:", tLocal)

```

### Tüm Örnekleri Kapsayan Mini Demo
```go
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()
    fmt.Println("Şu an:", now.Format("02.01.2006 15:04"))

    // Parçalarına erişim
    fmt.Println("Yıl:", now.Year())
    fmt.Println("Ay:", now.Month())
    fmt.Println("Gün:", now.Day())
    fmt.Println("Saat:", now.Hour())

    // Haftanın günü
    fmt.Println("Haftanın günü:", now.Weekday())

    // ISO hafta
    yil, hafta := now.ISOWeek()
    fmt.Println("Yıl:", yil, "Hafta:", hafta)

    // Ayın ilk ve son günü
    ilkGun := time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
    sonGun := ilkGun.AddDate(0, 1, -1)
    fmt.Println("Ayın ilk günü:", ilkGun.Format("02.01.2006"))
    fmt.Println("Ayın son günü:", sonGun.Format("02.01.2006"))

    // Bir hafta ileri/geri
    birHaftaSonra := now.AddDate(0, 0, 7)
    fmt.Println("Bir hafta sonra:", birHaftaSonra)

    // Fark alma
    dogumGunu, _ := time.Parse("2006-01-02", "1990-12-24")
    yasGun := now.Sub(dogumGunu).Hours() / 24 / 365
    fmt.Printf("Yaş: %.1f yıl\n", yasGun)
}

```


### Tarih Karşılaştırma
```go
xTime.Before(yTime)     // x y den eski mi

xTime.After(yTime)      // x y den sonra mı

xTime.Equal(yTime)      // x ile y aynı mı
```

### diff
> diff := x.Sub(u)