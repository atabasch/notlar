# Time Paketi
```go
import "time"
```

## Unix Zaman Almak
> time.Now().Unix()

## Kodu geciktirme
> time.Sleep(2 * time.Second)

> time.Date(yil, ay, gün, saat, saniye, salise, )

```go
time := time.Now()

time.Day()
time.Weekday()
time.Month()
time.Year()
time.Hour()
time.Minute()
time.Second()
time.Nanosecond()
time.Location()


time.AddDate(0, 0, 1) // 1 gün ekle
time.Format("Monday, January 2, 2018")
time.Format("1/2/2020")
```


## Tarih Karşılaştırma
```go
xTime.Before(yTime)     // x y den eski mi

xTime.After(yTime)      // x y den sonra mı

xTime.Equal(yTime)      // x ile y aynı mı
```

## diff
> diff := x.Sub(u)