
### VAR
> var x = "Değer";

var ile oluşturulan değerler her yerde kullanılabilir olur.
Bir for döngüsünde oluşturulan x değişkeni for dışında sonradan kullanılabilir.

### LET
> let y = "Değer 1";

let ile oluşturulan değer sadece oluşturulduğu kod bloğu içinde kullanılabilir.
for döngülerinde let kullan.

```javascript
// HATA VERMEZ
var x = "1"
var x = "2"

//HATA VERİR
// let ile aynı isimde bir değişken oluşturulma olmaz.
let x = "1"
let x = "2"

```

### CONST
> const pi = 3.14

Sabit olarak belirler değer sonra değişmez.
