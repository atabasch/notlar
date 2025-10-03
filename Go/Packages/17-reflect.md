Go'da runtime’da bir değişkenin tipi, alanları, methodları üzerinde dinamik işlem yapmanı sağlar. Özellikle generic işlemler, JSON, ORM, test frameworkleri için gereklidir.

| Tip / Fonksiyon      | Açıklama                                    | Kısa Kod Örneği                 |
| -------------------- | ------------------------------------------- | ------------------------------- |
| `reflect.TypeOf(x)`  | Değişkenin tipini döner (`reflect.Type`)    | `t := reflect.TypeOf(12)`       |
| `reflect.ValueOf(x)` | Değişkenin değerini döner (`reflect.Value`) | `v := reflect.ValueOf("selam")` |
| `t.Kind()`           | Temel tipi (int, struct, slice vs.)         | `t.Kind() == reflect.Struct`    |
| `t.Name()`           | Tipin adı (struct, int vs.)                 | `t.Name()`                      |
| `v.Interface()`      | Value’ı orijinal tipine döndürür            | `x := v.Interface()`            |
| `v.Elem()`           | Pointer ise işaret ettiği değere erişir     |                                 |
| `v.Field(i)`         | Struct’ın i. alanını getirir                |                                 |
| `v.NumField()`       | Struct’daki alan sayısı                     |                                 |
| `v.Method(i)`        | i. methodu çağırmaya yarar                  |                                 |
| `v.Set(x)`           | Value’a yeni değer atar (Settable ise)      |                                 |
| `v.CanSet()`         | Value set edilebilir mi                     |                                 |


###  Tipik Kullanım

Bir struct’ın alanlarını dinamik olarak gezmek:

```go
type Kisi struct { Ad string; Yas int }
k := Kisi{"Ali", 22}
v := reflect.ValueOf(k)
for i := 0; i < v.NumField(); i++ {
    fmt.Println(v.Field(i))
}

```

Çok gelişmiş bir konudur, gereksiz kullanmaktan kaçın; bazen compile-time type-safety kaybolur.