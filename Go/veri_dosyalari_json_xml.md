# JSON İŞLEMLERİ

Gerekli Kütüphane
```go
import "encoding/json"
```

## JSON verisi oluşturmak
```go
// Type Oluştur
type Person struct {
    Name        string
    Lastname    string
    Age         int
    IsMarried   bool
    Contact     []string
}

// Değerleri Doldur
furkan := Person{
    Name: "Furkan",
    Lastname: "Atabaş",
    Age: 31,
    IsMarried: true,
    Contact: []string{"05556667788", "asw13tr@gmail.com", "@asw13tr"}
}

// tek bir tipi json yap
jsonData, err := json.Marshal(furkan)

// bir diziyi json yap
persons := []Person{furkan, ...}
jsonData, err := json.Marshal(persons)

// Hata Kontrolü
if err != nil {
    log.Fatal(err.Error())
}


// Json değerini string olarak almak
string(jsonData)
```

# String JSON'u Almak
```go
jsonData := []byte(json stringi)

var datas StuctName
//yada
var datas []string
//yada
var datas map[string]string

// json'u dataya çevir.
err := json.Unmarshal(jsonData, &datas)
```

```go

```
#