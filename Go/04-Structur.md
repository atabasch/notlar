# Structur 

- Go dilinde class yapıları yoktur. 
- Class için bir alternatif olarak Struct nesnesi kullanbılır. 
- Struct'lar bir çok veri tipini toplu halde tutmaya yarayan kendi veri tipindir.
- Struct'lar tıpkı string, int, float, bool gibi kendi veri tibinizi oluşturmaya yarar.
- Değişken oluştururken değişken türü olarak Structur adı verilir.

## Oluşturma ve Çağırma

```go
// Structur adının ilk harfi büyük olur
type StructName struct{
    Key1 type
    Key2 type
    Key3 type
}

// 1. Oluşturma Yöntemi
var varName = StructName{Val1, Val2, ...}


// 2. Oluşturma Yöntemi
var varName = StructName{Key1: val1, Key2: val2, ...}


// 3. Oluşturma Yöntemi
var varName = new(StructName)
varName.Key3 = val3
```

## Struct'a method ekleme

Struct'ı yazarken değil yazıp blokdan çıktıktan sonra bir fonksiyon oluşturup bu struct'a dahil olduğunu söylersin

```go

func (s CustomStructName) PrintValue() string {
    return fmt.Sprintf("%s", s.KeyName)
}

// Method içinde struct içindeki değer değişmez kopya değer oluşur.
// Eğer struct içindeki değeri değişmek istersen pointer kullan
func (s *CustomStructName) Deactivate(){
    s.Active = false
}

```


#### Pointer amacı

- Bir struct oluşturduğunda önce içine tip değişkenleri eklersin.
- Eğer bir method eklemek istersen methodu blok dışında oluşturursun ve fonksiyon adından önce parantez içinde referans bir isim ve Struct'ı verirsin.
- Bu method içinde yapılan işlemler Struct'ın içini etkilemez. (Yani getter olarak çalışırlar ama setter olmazlar mantığında düşünebilirsin.)
- Eğer tıpkı class yapısındaki gibi methodda yapılan işlem Struct içindeki değeri değişsin istersen fonksiyon adındna önce Sturct adının başına bir yıldız ekle. 

```go
func (t *CustomStructName) MethodName(){
    // İçeride pointer kulanmana gerek yok.
    t.VarNameOfStruct = false // 
}
```


## JSON ile çalışma (sık işine yarar)
```go
type Post struct {
    Id int `json:"id"`
    Title string `json:"title"`
    Active bool `json:"active"`
    Content string `json:"content"`
}
```



## Genel bir örnek

```go
package main

import "fmt"

type Post struct {
	Id      int
	Title   string
	Content string
	Status  bool
}

// Bir amacı yok sadece örnek bir method tek yaptığı Struct'ın içinde Title dğeişkenini geri döndürmek
func (p Post) GetTitle() {
    return p.Title
}

// Struct içindeki Status değerini kalıcı olarak değiştirir. Çünkü pointer "*" var.
func (p *Post) ChangeStatus() {
	p.Status = !p.Status
}

// Aşağıdaki methodda pointir olmadığı için Status gerçekte değişmez.
func (p Post) ChangeStatus() {
	p.Status = !p.Status
    return p.Status
}

func main() {
	var posts [3]Post

	posts[0] = Post{Id: 1, Title: "İlk Go Denemem", Content: "İlk kez go ile kod yazıyorum", Status: true}
	posts[1] = Post{2, "Go ile Struct veri tipini işliyoruz", "Go Lang de type CustomName struct ile yeni bir ver itürü oluşturabiliriz.", true}
	posts[2] = Post{3, "Görünmeyecek", "-", false}

    posts[1].ChangeStatus()

    // posts[1].Status "false" olmuştur
    fmt.Println( posts[1].Status )
}
```