# Döngüler

Go dilinde kullanılabilen tek döngü `for` döngüsüdür. 
Bu döngü ile hep kendi koşuluna göre döngü kurarsın hemde bir diziyi döndürmek için.


### Yapı 
```go
for [sayaç değişkeni oluşturma], [koşul], [adım sonu işlem] {
    // Her döngüde yapılacak işlemler
}
```

### Örnek Kullanım
```go
for i:=1; i<=10; i++ {
    // - var i int = 1 olarak oluşur
    // - Bu döngü i 10 dan küçük olduğunda ve i 10 olduğunda çalışır.
    // - Her bir çalışma sonrası i değişkeni değeri 1 artırılır.
    // - Ve bu blok içindeki işlem yapılır
}
```


## Dizi içi kadar dönmek.

#### 1. Yöntem - Dizi sayısı kadar dön
```go
package main

import "fmt"

func main(){

    var colors []string{"red", "green", "blue"}

    for index := 0; index < len(colors); index++ {

        fmt.Println( "Current Color: " + colors[index] )

    }

}
```

#### 2.Yöntem - "range" anahtar kelimesi

range anahtar kelimesi ile bir "array, slice ve map" türlerinin elemanları için daha rahat bir döngü sağlarsın. for içinde kullanılır.

```go
package main

import "fmt"

func main(){

    var colors []string{"red", "green", "blue"}

    for index, value := range colors {

        fmt.Println( "Current Index: " + index )
        fmt.Println( "Current Color: " + value )

    }

}
```