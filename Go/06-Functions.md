# Fonksiyonlar

Go'da fonksiyonlar, belirli görevleri yerine getiren kod bloklarıdır ve program boyunca yeniden kullanılabilirler. Bu sayede bellek tasarrufu sağlanır, okunabilirlik artar ve zaman kazanılır. Fonksiyonlar, çağırana bir değer döndürebilir veya döndürmeyebilir.

## 1. Fonksiyon kalıbı
```go
func customFuncName(Parameter-List) (Return-Type(s)) {
    // Processing

    return Result(s)
}
```

**NOT:** Go'da fonksiyonlar birden fazla değer dönebilir. 
Birden fazla dönecek değerin türünü belirlemek gerekir. 
**Gömülü go fonksiyonları her zaman en az 2 değer döner. 2. hata olur**


## Örnekler

### Tek sonuçlu fonksiyon

```go
func topla(x int, y int) (int){
    return x + y
}

var sonuc int = topla(5, 7)
```

### Çift sonuçlu fonksiyon

Eğer parametredeki tüm değişkenler aynı türde olacaksa sadece en son parametreye tip ver. O zaman hepsi aynı tipte olur.

```go
func topla_cikar(x int, y int) (int, int){
    toplama := x + y
    cikarma := x - y

    return toplama, cikarma
}

// 2 sonucuda alan kullanım
var toplama, cikarma = topla_cikar(10, 5)

// _ ile 2. sonuç alınmadan çöpe gönderilir.
var toplama, _ = topla_cikar(10, 5)
```



## 1. Değişken adıyla sonuç dönmek

return keywordünü kullanırken bir şey yazmaya gerek yoktur dönecek değeri belirtirken girilen değişken adı geri döner.

```go
func funcName(par1 type, par2 type) (result type, err type){

    result  = val
    err     = val
    return // hiç bir şey yazmaya gerek yok
}

var result, err = funcName(val1, val2)
```


# 2. Referans çağırmak

Bu işlemde fonksiyon içine gönderilen değişken referans alınır. Fonksiyona verilen parametre bellekte yeniden oluşturulmaz var olan üzerinde değişiklik yapılır.
- (*)=pointer: Referans olarak alınacak olan parametrenin türüne ve işerdeki değişken adının soluna "*" eklenir.
- (&): Fonksiyona parametreyi gönderirken başına eklenir. 

```go
func katla(int a, b *int) (int, int){
    a := a * 2
    *b := *b * 2

    return a, b
}

var a = 5
var b = 10 // Bu "b" değişkeni katla fonksiyonu değiştikten sonra yeni bir değer alacak. Çünkü bellekteki adres ile direkt işlem yapıldı. 

var xa, xb = katla(a, &b)

/*
    a   = 5
    xa  = 10
    b   = 20 // Bu değer tamamen değişti.
    xb  = 20  
*/

```


# 3. Anonim fonksiyonlar oluşturmak

Anonim yani isimsiz fonksiyonlardır.

```go
var (
	carp = func(l int, b int) int {
		return l * b
	}
)

func main() {
	fmt.Println(carp(20, 30))
}


//veya
func main() {

    func(a int, b int) {
        // işlemler
    }(10, 20)

}
```