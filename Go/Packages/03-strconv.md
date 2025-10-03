# import "strconv"

String ve sayı (int, float, bool) arasında dönüşüm için kullanılır.

| Fonksiyon       | Açıklama                                 | Kısaca Kullanım Örneği                       |
| --------------- | ---------------------------------------- | -------------------------------------------- |
| `Atoi()`        | String’i int’e çevirir                   | `n, _ := strconv.Atoi("12")`                 |
| `Itoa()`        | int’i string’e çevirir                   | `s := strconv.Itoa(99)`                      |
| `ParseInt()`    | String’i int64’e çevirir                 | `i, _ := strconv.ParseInt("11", 10, 64)`     |
| `ParseFloat()`  | String’i float64’e çevirir               | `f, _ := strconv.ParseFloat("3.14", 64)`     |
| `FormatFloat()` | float’ı string’e çevirir                 | `s := strconv.FormatFloat(3.14, 'f', 2, 64)` |
| `ParseBool()`   | String’i bool’a çevirir ("true"/"false") | `b, _ := strconv.ParseBool("true")`          |
| `FormatBool()`  | bool’u string’e çevirir                  | `s := strconv.FormatBool(true)`              |
