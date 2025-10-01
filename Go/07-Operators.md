# Operatörler

Aşağıdaki go dilindeki tüm operatörleri bulabilirsin.

#### Matematiksel Operatörler

| Operator | Açıklama |
| -------- | -------- |
| 2 + 2 | iki sayıyı toplar |
| 2 - 2 | Sağdakini soldakinden çıkarır |
| 2 * 2 | İki sayıyı çarpar |
| 2 / 2 | Soldaki sayıyı sağdakine böler **sonucu verir.** (10/3 => 3,33) |
| 2 % 2 | Soldaki sayıyı sağdakine böler ve **kalanı verir** (10/3 => 1) |
| x++ | x sayısının değerini 1 artırır. |
| x-- | x sayısının değerini 1 azaltır. |

#### Atama Operatörleri

Bu opparöterler (eğer işlem varsa yapar) sağdaki değeri soldakine atar.

| Operator | Örnek | Yaptığı  İş |
| -------- | -------- | -------- |
| =     | x = 5     | x = 5 |
| +=    | x += 3    | x = x + 3 |
| -=    | x -= 3    | x = x - 3 |
| *=    | x *= 3    | x = x * 3 |
| /=    | x /= 3    | x = x / 3 |
| %=    | x %= 3    | x = x % 3 |
| &=    | x &= 3    | x = x & 3 |
| \|=   | x \|= 3   | x = x \| 3 |
| ^=    | x ^= 3    | x = x ^ 3 |
| >>=   | x >>= 3   | x = x >> 3 |
| <<=   | x <<= 3   | x = x << 3 |

#### (Comparison) Karşılaştırma Operatörleri
| Operator | Açıklama |
| -------- | -------- |
| `x == y`   | x ile y eşittir.         |
| `x != y`   | x ile y eşit dğeildir.         |
| `x < y`   | x y'den küçüktür         |
| `x <= y`   | x y'den küçüktür yada y ile eşittir.          |
| `x > y`   |x y'den büyüktür          |
| `x >= y`   | x y'den büyüktür yada y ile eşittir.         |


#### (Logical) Mantıksal Operatörler

| Operator | Açıklama |
| -------- | -------- |
| `(x == y) && (x == z)`   |  x ile y eşittir **ve** x ile z eşittir.        |
| `(x == y) \|\| (x == z)`   |  x ile y eşittir **veya** x ile z eşittir.        |

#### (Bitwise) Bitwise Operatörleri
| Operator | İsim | Açıklama |
| -------- | ---- | -------- |
| &  | AND |  |
| \| | OR |  |
| ^  | XOR |  |
| << |  |  |
| >> |  |  |