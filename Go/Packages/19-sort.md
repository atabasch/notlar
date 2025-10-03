Dizileri, slice’ları, string’leri ve custom tipleri sıralamak için kullanılır.
Hem temel tipler hem de kendi struct’larını sıralayabilirsin.

| Fonksiyon/Tür                                 | Açıklama                                                   | Kısa Kod Örneği                                |
| --------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| `sort.Ints([]int)`                            | int slice’ı küçükten büyüğe sıralar                        | `sort.Ints(nums)`                              |
| `sort.Float64s([]float64)`                    | float64 slice’ı sıralar                                    |                                                |
| `sort.Strings([]string)`                      | string slice’ı alfabetik sıralar                           | `sort.Strings(names)`                          |
| `sort.Slice(slice, less func(i, j int) bool)` | Slice’ı custom kurala göre sıralar                         | `sort.Slice(ogr, func(i, j int) bool { ... })` |
| `sort.Sort(interface)`                        | Custom tipleri sıralamak için (Len, Less, Swap implement.) |                                                |
| `sort.Reverse(interface)`                     | Sıralamayı tersine çevirir                                 |                                                |
| `sort.Search(n, func(i int) bool)`            | Sıralı slice’ta binary search yapar                        |                                                |
| `sort.IsSorted(interface)`                    | Slice sıralı mı diye kontrol eder                          |                                                |


### Basit String Slice Sıralama
```go
isimler := []string{"Can", "Ali", "Veli"}
sort.Strings(isimler) // ["Ali", "Can", "Veli"]
```

### Custom sıralama (struct için):
```go
type Ogrenci struct {Ad string; Yas int}
ogr := []Ogrenci{{"Ali", 22}, {"Veli", 19}}
sort.Slice(ogr, func(i, j int) bool { return ogr[i].Yas < ogr[j].Yas })
```
### Basit String Slice Sıralama
```go

```
