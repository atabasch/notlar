- [Değişkenler & Sabitler](var_and_const.md)
- [Koşullar](conditions.md)
- [Döngüler](loops.md)
- [Fonksiyonlar](functions.md)
- [Yapılar (Struct) Class yapısı](struct.md)
- [Diziler, Dilimler & Sözlükler](arrays.md)
- [Eşzamanlılık]()


# defer komutunu araştır

# Başlangıç

Araştırmalar için Standart Go kütüphaneleri: [https://pkg.go.dev/std](https://pkg.go.dev/std)



# Hata Kontrolleri
Go programlama dilindeki **dahili** kütüphanelerin neredeyse tamamı 2 değer döndürür. Bu dönen değerlerin 1.si her zaman verinin kendisi 2. değer ise hata olur. 
```go
file, err := os.Oepn("deneme.txt")
if err != nil {
    fmt.Println(file.Error)
}

sayi, hata := strconv.Atoi("15")
if hata != nil {

}

// Hatayı almak istemiyorsan _ ekle
sayi, _ := strconv.Atoi("15")
```


### Hatanı oluştur
```go
hatam := errors.New("Hata açıklaması")

hatam.Error() // yazıyı verir.
```


**filename.go**


```go
package main // Her dosya böyle başlamalı

import "fmt" // Girdi çıktı işlemleri için gerekli

func main(){
    // Ana fonksiyon adı. kodlar buradan çalışmaya başlar.
    fmt.println("Merhaba Go!")
}
```
# 5. Fonksiyonlar
```go
func funcName(varName type, varName type) returnType {
    return resultVal
}


func topla(x int, y int) int{
    return x + y
}

// Tüm parametreler aynı tür ise bir kez yazılabilir
func topla(x, y, z int) int{ // 3 parametre'de integer olur.
    return x + y + z
}

// sınırsız parametre
func funcName(par1 type, var2 ...type){ // ilk parametreden sonra isteilen kadar parametre gönderilebilir.
    var2[index]
}
```

## 5.1 Birden fazla ve isimli olarak değer dönmek
```go
func funcName(par1 type, par2 type) (result type, err type){

    result  = val
    err     = val
    return // hiç bir şey yazmaya gerek yok
}

var result, err = funcName(val1, val2)
```

## 5.2 Anonim fonksiyonlar oluşturmak
```go
var (
	area = func(l int, b int) int {
		return l * b
	}
)

func main() {
	fmt.Println(area(20, 30))
}


//veya
func main() {

    func(a int, b int) {
        // işlemler
    }(10, 20)

}
```

## 5.3 Pointer ile fonksiyon dışına etki etmek
Fonksiyonlara gönderilen parametreler fonksiyon içinde işlem görürler. Değerleri fonksiyon içinde değişir ancak fonksiyon dışındaki değişkenlere etki etmezler. Eğer parametre olarak gönderilen değişkenin yeni bir değer olarak değil de adres olarak gönderilmesini ve fonksiyon içinde işlem gören değişkenin değişen değerinin fonksiyon dışındaki değişkende de değişmesini istiyorsan aşağıdaki gibi kullan.

```go
func isimDegis(name *string){
    *name = "Mehmet"
}

var isim string = "Furkan"

isimDegis(&isim);

fmt.println(isim) // Sonuç "Mehmet" olacaktır. (func içinde değiştirilen değişken dışarıya etki etmiştir. )
```

# 6. Structlar (Go için Class)
Go'da Class yoktur. Yerine kullanılır.

## 6.1 Structlar oluşturmak
```go
type Product struct {
    Name    string
    Stock   int
}

urun := Product{"Monitör", 20} 
//veya
urun := Product{Name: "Monitör", Stock: 20} 
//veya
urun := new(Product)
urun.Name = "Monitör"
urun.Stock = 20



// Extends işlemi
type Ram struct{
    Product
    Gb  int  
    Mhz int
}
ram := Ram{ Product{"Kingston", 50}, 4, 3700 }

// Extends işlemi
type Keyboard struct{
    Product
    KeyLayout string
    Mechanical bool
}



fmt.println( urun.Stock )
```

## 6.2 Pointer ile yeni değişkene adres atama
```go
type Product struct {
    name string
    stock int
}

urun := Product{"Monitör", 20} 

fare := &urun       // urun direkt olarak fare değişkenine adres olarak atanır
monitor := *fare       // urun nesnesi ile yeni bir değişken oluşur. adressiz.

fare.name = "Logitech Mouse"

fmt.println( urun.name )    // fare.name e atanan değer urun.name de geçerli olmuştur.
```
## 6.3 Pointer 2
```go
funct funcName(a *int, b int){
    a = b
}

var x int = 10;
funcName(&x, 20)

// Fonksiyona gönderilen x değişkeni 20 olur. fonksiyon dşındaki değişken etkilenir.

```
## 6.4 Struct için Constructor kullanmak 
Go'da Constructlar yoktur. Bir fonksiyon oluşturur ve Sturct'ı o fonksiyonda çağırırsın. Değerleri girer ve geriye sınıfı döndürürsün. fonksiyonun geri dönene değerine struct adını * pointer ile birlikte yaz.

```go
type Urun struct{
    //...
}

func constructUrun(name string, stock int) *Urun{ //funcName'in önemi yok
    h := new(Urun)
    h.Name = "Klavye"
    h.Stock = 20
    return h
}

x := constructUrun()

```

# 7 Console'dan Giriş Almak
**Gerekli Kütüphane:** `bufio` ve `os`  
**String metodları için kütüphane:** `strings`

```go
import (
    bufio
    os
    fmt
)

func main(){

    reader := bufio.NewReader(os.Stdin)
    
    fmt.print("Lütfen bir değer girin:")

    girdi, _ := reader.ReadString('\n')

    fmt.println(girdi)

    //veya
    var isim string
    fmt.Scan(&isim)
    fmt.println(isim)

}
```

# 8. For Döngüsü (Başka bir döngü yok)


## 8.1 For döngüsü
```go
for i := 1; i<=10; i++ {
    // ...
}

//veya
for i := 1; i<=10; {
    // ...
    i++
}
```

## 8.2 For Dizi döngüsü
```go
for i := 1; i < len(dizi); i++ {
    // ...
}

//veya
for index, value := range dizi {

}

//veya index alınmaz
for _, value := range dizi {

}

//veya valua alınmaz
for index, _ := range dizi {
    dizi[i]
}
```

# 9. Koşullar
```go

if koşul {

} else if koşul {

} else {
    
}

```


# 13. Eşzamanlı Programlama

Paralel programlama (Thread) değildir. Paralel programlama işlemci çekirdeklerinde gerçekleşir. Her çekirdek bir işlemi yapar.
Eşzamanlı programlama'da hala tek çekirdek üzerinde eş zamanda çalışırlar.


## 13.1 Goroutine
Program ile aynı anda çalışan eş zamanlı parçacıklar. Bir fonksiyonu eş zamanlı hale getirmek için yapılması gereken tek şey fonksiyonu çalıştırırken başın `go` anahtar kelimesini getirmektir. 
```go
func threadFuncName(){

}

func main(){

    // Bazen sonuçlar ekranda görüntülenmeyebilir
    // çünkü bu fonksiyon thread gibi mainden bile ayrı çalışır.
    go threadFuncName() 

    // Burada bekletme sağlayaak kod yazılırsa asenkron olan fonksiyon görüntüleneilir.
}
```

## 13.2 Kanallar
Kanallar birbirinden bağımsız çalışan eş zamanlı metodlar arasında veri alışveri için kullanılır.

```go
func fName1(channel chan int){
    channel <- 123456789
}

func fName2(channel chan int){
    var data = <-channel
}

func main(){
    var kanal = make(chan int)
    go fName1(kanal)
    go fName2(kanal)
}
```

## 1. Ortam Değişkenleri
```go
import "os"

// Tüm ortam değişkenlerinde gezmek
for _, env = rande os.Environ(){

}


uname := os.Getenv("USERNAME")
domain := os.Getenv("USERDOMAIN")

os.Getenv("GOROOT")

os.Getenv("GOPATH")

os.Getenv("HOMEPATH")



```