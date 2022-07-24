# String Birleştirme
```go
// 1. Yöntem
var newStr = "str1" + "str2" 


// 2. Yöntem (Çok fazla stringi birleştirirken aşağıdaki daha hızlı)
import "bytes"

var x = bytes.Buffer
x.WriteString("Test ")
x.WriteString("Deneme")
x.String() // Test Deneme



// 3. Yöntem (Diğerlerinden daha performanslı)
import "strings"

builder := strings.Builder()
builder.WriteString("Strin1 ")
builder.WriteString("Strin2")
builder.String()


```