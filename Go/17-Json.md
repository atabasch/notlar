# JSON Oluştur/Çöz

## Gerekli Kütüphane 

> import "encoding/json"

## Struct/Slice → JSON

```go
// Gerekli kütüphane import edilir.
import "encoding/json"

// Struct Oluşturuldu Örnek: product
type Product struct {
	Name    string      `json:"name"`               // jsonda "name" anahtarı ike görünecek
	Barcode string      `json:"barcode"`
	Price   float32     `json:"price,string"`    // json çıktısında price anahtarının değeri "x.xx" şeklinde stringe çevrilecek
	Stock   int         `json:"stock,omitempty"`  // stock 0 ise json'a yazmaz
	Active  bool        `json:"-"`                // active anahtarı hiç bir zaman json'a yazılmaz
	Images  []string    `json:"images"`
}

func main(){

    // Ürünleri Oluştur
	p1 := Product{"IPhone 15", "12345678", 1.250, nil, true, []string{"ip1.jpg", "ip2.jpg", "ip3.jpg"}}
	p2 := Product{"Logitech G502 X", "74859612", 120.00, 50, true, []string{"ltgx1.jpg", "ltgx2.jpg", "ltgx3.jpg"}}
	p3 := Product{"Corsair K70 Pro", "14253680", 149.99, 0, false, []string{"ck701.jpg", "ck702.jpg", "ck703.jpg"}}

    // Değeri JSON tipine çevir. 
    // Dönen değer bir byte dizisi olacaktır. 
    // Veriyi yazdırırken string() ile dönüştürme yapılmalıdır.
    jsonData, err := json.Marshal(p1)

    if err != nil {
        // json dönüştürme başarısız olmuştur.
    }

    // json değeri alabilmek için string'e dönüştürmek gerekiyor.
    p1json := string(jsonData)
    fmt.Print(p1json)


    // Bir dizi de JSON'a çevrilebilir
    products := []Product{p1, p2, p3}
    productsJson, _ := json.Marshal(products) // _ ile hatayı pas geçiyoruz almıyoruz.

}
```

## JSON → Struct/Slice

İlk adım olarak jsonStringini bir byte dizisine dönüştürmen gerekiyor.
Dönüşümü yaptıktan sonra json parse edilebilir olacak.
```go
jsonData := []byte(jsonString)

```


#### 1. Json to Map
```go
// Map i oluştur
var datas map[string]string

// json'u bir map'a çevir ve datas değişkenine gönder.
// NOT: EĞER İçerde string olmayan değer varsa map'de değer string girildiği için hata verir.
err := json.Unmarshal(jsonData, &datas)
```

#### 2. Json to Struct
```go
// Struct Oluştur
// Veri tipleri json'a uymalı ve 
// anahtar isimleri json'da olmasa bile Struct da büyük harfle başlamalı
type Post struct {
	UserId int
	Id     int
	Title  string
	Body   string
}

// Struct tipinde değişken oluştur
var post Post

// Dönüştür
err := json.Unmarshal(jsonData, &post)
```


#### 3. Dinamik bir yapı ile çıkarmak
```go
var response map[string]any // any veri tipi fark etmez demek herhangi biri

err := json.Unmarshal(jsonData, &post)

```


## Dosyaya yazmak
```go
f, _ := os.Create("out.json")
defer f.Close()
_ = json.NewEncoder(f).Encode(u)
```

## Dosyadan Okumak
```go
f, _ := os.Open("in.json")
defer f.Close()
var u2 User
_ = json.NewDecoder(f).Decode(&u2)
```

## HTTP Üzerinden OKumak
```go
resp, _ := http.Get("https://api.example.com/user/1")
defer resp.Body.Close()
var u User
_ = json.NewDecoder(resp.Body).Decode(&u)

```