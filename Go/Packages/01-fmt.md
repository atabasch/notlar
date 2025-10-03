# import "fmt"

Formatlama, yazdırma ve veri alma işlemleri için kullanılır.

| Fonksiyon   | Açıklama                                   | Kısaca Kullanım Örneği         |
| ----------- | ------------------------------------------ | ------------------------------ |
| `Println()` | Verileri ekrana yazdırır, satır sonu ekler | `fmt.Println("Merhaba")`       |
| `Printf()`  | Formatlı yazdırır (C’deki printf gibi)     | `fmt.Printf("Yaş: %d\n", 18)`  |
| `Print()`   | Satır sonu eklemeden yazdırır              | `fmt.Print("Ad: ")`            |
| `Sprintf()` | String döner, yazdırmaz                    | `s := fmt.Sprintf("X: %d", 5)` |
| `Scan()`    | Kullanıcıdan veri okur                     | `fmt.Scan(&ad)`                |
| `Scanln()`  | Satır sonuna kadar veri okur               | `fmt.Scanln(&ad, &yas)`        |
