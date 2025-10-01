# 1. İlk Adımlar

**Go** dilini bilgisayarda çalıştırmak için. go.dev resmi web sitesine giderek oradan kurulum dosyasını indirip bilgisayara kur.

## Yeni bir proje oluşturmak.
- Proje için bir klasör oluştur ve dizine git.
    > mkdir goproject && cd goproject
- GO modülünü bir proje adıyla oluştur. (Proje yayınlanacaksa repo ismini yazabilirsin.)
    > go mod init example.com/goproject

Bu adımlardan sonra proje dizininde **go.mod** adında bir dosya oluşturulur. Burada modülün adı ve go dilinin versiyonu yazar.

## İlk dosya, kodlar ve çalıştırmak

**Dosya Uzantısı:** `.go`
**Ana dosya adı:** `main.go`
**Ana fonksiyon:** `main`

Her dosyanın ilk satırı `package`  değeri içermeli. 

```go
package main

import(
    "fmt"
)

func main(){
    fmt.Println("Test")
}
```

Projeyi terminalde çalıştırmak için `go run` kullanılır.

> go run .

## ! Önemli Notlar 

- Her dosyada `package` zorunludur.
- Method ismi **büyük harfle** başlarsa `export` edilebilir olur. 
*Küçük harfle başlayan method isimleri sadece paket içinde kullanılabilir.*
- Kullanılmayan değişkenler ve import edilip kullanılmayan paketler hata verir.


## Projeye bağımlılık ekleme
> go get paketadı 


#### Eklenen bağımlılığı import ve kullanma

> go get github.com/google/uuid

```go 
import (
    "fmt"
    "github.com/google/uuid"
)

func main() {
    fmt.Println(uuid.New().String())
}
```


# Go dilindeki keywordslar

Go dilinde sadece 25 adet keywords vardır.
| Keyword |     |
| ------- | --- |
| break | döngüyü kırıp çıkmaya yarar | 
| case |  |
| chan |  |
| const | Sabit değişken oluşturmak için kullanılır |
| continue | Döngünün o adımını atlayıp diğerine geçer |
| default |  |
| defer |  |
| else | değilse anlamına gelen if sorgusunun keywordsu |
| fallthrough |  |
| for | döngü anahtar kelimes, |
| func | fonksiyon oluşturur |
| go |  |
| goto |  |
| if | Koşul işlemlerinde sorgu için |
| import | içeri  paket aktarmak için |
| interface |  |
| map |  |
| package |  |
| range |  |
| return |  |
| select |  |
| struct |  |
| switch |  |
| type |  |
| var | Değişken oluşturur. variable |

