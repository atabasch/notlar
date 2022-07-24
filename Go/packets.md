Genel Paketeler: Go  klasöründeki /src klasörü altındadır.

Özel paket içindeki fonksiyonlar büyük harfle başlasın


- project_folder/matematik/toplama.go
- project_folder/matematik/cikarma.go
- project_folder/matematik/silme.go
- project_folder/matematik/bolme.go

Tüm kodlar tek dosyada yazılabilir.
```go
//toplama.go
package matematik

func Topla(a, b int){ // Func ismi küçük harfle başlarsa private olur.
     return a+b
}
```


## Uygulamayı modüler yap

```bash
go mod init customappname 
```

## Modülleri kullan

```go
package main

import "customappname/matematik"

func main(){
    matematik.Topla(10, 20)
    matematik.Bol(100, 10)
}
```