
# Map

- Anahtar→değer sözlüğü. 
- Sıra yok. 
- Yazabilmek için make gerekir. make() methodu ile oluşturmazsan içinme yazılamaz: readonly olur

```go
var m map[string]int   // nil map, okunur ama yazılamaz
// m["a"] = 1          // panic olur

m = make(map[string]int)
m["a"] = 1
m["b"] += 5            // yoksa sıfırdan başlar, sonra 5 olur

v := m["c"]            // yoksa sıfır değer döner: 0
val, ok := m["b"]      // ok presence kontrolü
fmt.Println(val, ok)   // 5 true

delete(m, "a")         // m mapinden index'i "a" olanı sil

for k, v := range m {  // dolaşım sıra garantisi yok
    fmt.Println(k, v)
}

fmt.Println(len(m))    // eleman sayısı

// Eşitlik yok: if m1 == m2 // derlenmez

```