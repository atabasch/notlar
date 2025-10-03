Çoklu goroutine’ler arası veri güvenliğini ve senkronizasyonu sağlar. Yani paralel işlemlerle çalışırken kilit, bekleme, paylaşım işlerini yaparsın.

| Tip/Fonksiyon    | Açıklama                                                            | Kullanım Örneği                                       |
| ---------------- | ------------------------------------------------------------------- | ----------------------------------------------------- |
| `sync.Mutex`     | Bir seferde tek goroutine’in erişmesini sağlar (kilit/lock).        | `var m sync.Mutex; m.Lock(); ...; m.Unlock()`         |
| `sync.RWMutex`   | Hem okuma hem yazma kilidi.                                         |                                                       |
| `sync.WaitGroup` | Çoklu goroutine’i beklemek için (işler tamamlanınca ilerle).        | `wg.Add(1); go func(){ ...; wg.Done() }(); wg.Wait()` |
| `sync.Once`      | Bir fonksiyonun sadece bir kez çalışmasını garantiler.              |                                                       |
| `sync.Cond`      | Koşullu değişken ile bekleme/uyandırma (ileri düzey).               |                                                       |
| `sync.Map`       | Thread-safe harita (map).                                           | `var m sync.Map; m.Store("k", v)`                     |
| `sync.Pool`      | Kısa ömürlü objeleri tekrar kullanmak için havuz (performans için). |                                                       |
| `sync.Atomic*`   | Atomik değişken işlemleri (`atomic` paketi ayrı)                    |                                                       |


```go
var wg sync.WaitGroup
var m sync.Mutex
sayac := 0

for i := 0; i < 10; i++ {
    wg.Add(1)
    go func() {
        defer wg.Done()
        m.Lock()
        sayac++
        m.Unlock()
    }()
}
wg.Wait()
fmt.Println("Toplam:", sayac)

```

Notlar:

Mutex ile aynı anda sadece bir goroutine’in kritik bölgeye girmesini sağlarsın.

WaitGroup, örneğin “10 tane goroutine başlattım, hepsi bitmeden ilerleme” gibi işlerde şarttır.

High-performance concurrent map için klasik map yerine sync.Map kullanabilirsin (ama sadece gerçekten thread-safety gerekirse).