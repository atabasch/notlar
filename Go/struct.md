# Struct Yapılar

Go dilinde class yapıları yoktur. Class için bir alternatif olarak Struct nesnesi kullanbılır. Structlar tıpkı string, int, float, bool gibi kendi veri tibinizi oluşturmaya yarar.

```go
// İsmin ilk harfi büyük olursa her yerden ulaşılır ismin ilk harfi küçük olursa private gibi olur.
type StructName struct{
    Key1 type
    Key2 type
    Key3 type
}

var varName = StructName{Val1, Val2, ...}
// veya
var varName = StructName{Key1: val1, Key2: val2, ...}
// veya
var varName = new(StructName)

// 3 yöntem içinde aşağıdaki sistem aynen kullanılabilir.
varName.Key3 = val3
```

## Extends Kalıtım
Sınıflar olmadığı için kalıtımlarda yoktur. Çözüm olarak oluşturulan Structa başka bir struct anahtar olarak verilerek kullanılır.

```go
type Account struct{
    Username    string
    Password    string
    Email       string
    Status      bool
}

type Admin struct{
    Account
    Level   int
    Branch  []string
}

type User struct{
    Account
    Banned      bool
    CanComment  bool
    CanCreate   bool
}
```

## Tek seferlik Anonim yapılar

Bir yapısı sadece bir kerelik kullanmak isteyebilirsin. Meslea bir class olarak değilde böz Sözlük gibi; anahtar ve karışık değerler alan bir obje olarak kullanmak istersen o zaman anonim yapılar kullanılır.
```go
var datas = struct {
    name string
    desc string
    status bool
}{
    name: "",
    desc: "",
    status: false
}
```


# Interface
