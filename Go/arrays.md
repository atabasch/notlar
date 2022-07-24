

# [1]-> Diziler
Diziler otomatik index alırlar ve tanımlanırken sadece value için değer yazılır.
```go
dizi := [3]int{}
dizi[0] = 10
dizi[1] = 20
dizi[2] = 30

// veya
dizi := [5]int{3, 5, 7, 9, 11}

//veya otomatik boyut ifadesi kullanılabilir.
dizi := [...]string{"aa", "bb", "cc"}
```

# 1.1 Silmek
Go dilinde direkt silme işlemi yoktur. Silinecek elemanın olmadığı yeni bir dizi oluşturulmalıdır. For ile uzun olabileceğinden şöyle bir şey  uygulanabilir.
- Dizinin ilk elemanından silinecek olana kadar yeni dizi oluştur
- Dizinin silinene elemanından sonraki elemanları bu yeni diziye ekle.

```go
func sil(dizi []string, index int) []string{
    return append(dizi[:index], dizi[(index+1):]...)
}
```

## 1.1  
| | |
|---|---|
| len(dizi) | Dizideki eleman sayısı |
| cap(dizi) | Dizinin kapasitesi |




# [2]-> Dilimler Slicelar
Dizilerin daha gelişmiş hali. Daha çok işlem görür.
Slicelar yanı Dilimler dizilerden oluşur ve kendileri veri tutmazlar. Dizilerin adreslerini alırlar. Eğer slice üzerinde dğeişiklik olursa array da değişir

## 11.1 Diziden Slice oluşturma
```go
dizi := [...]int{1, 3, 5, 7}
dilim := dizi[:]

dilim[1] = 4 // değişiklik diziyi de etkiler
```

## 11.2 Sıfırdan Slice oluşturmak
```go
var colors = []string{"Red", "Green", "Blue"}
colors = append(colors, "Yellow")

//veya
var dilim = make([]int, 5, 5)

```


# 12. Map 
anahtar ve value şeklinde dizi oluşturmak.

```go
    liste = make(map[string]string) 

    liste["isim"] = "Furkan"
    liste["soyad"] = "Atabaş"
    

    // Nesne silmek
    delete( liste["soyad"] ) 
```
