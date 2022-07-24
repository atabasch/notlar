# Dosya Oluşturmak
```go
import (
    "log"
    "os"
)

var (
    newFile *os.File
    err error
)

newFile, err = os.Create("deneme.txt")
if err != nil {
    log.Fatal(err)
}
```


# Dosya Açmak ve Kapatmak
Dosya üzerinde değişiklikler yapmak için dosyayı açmak gerekiyor. Daha sonra kapat ki başkaları o dosyada çalışmak isterse sistem engellemesin.

```go
file, err := os.Open("test.txt") // Salt Okunur

file, err := os.OpenFile("test.txt", os.O_APPEND, 0677) 
/*
os.O_APPEND = Dosyanın sonune eklemeler yapılacak
os.O_RDONLY = Sadece oku
os.O_WRONLY = sadece yazma
os.O_RDWR = okuma ve yazma işlemi
os.O_CREATE = dosya yoksa oluştur
os.O_TRUNC = Açılırken dosyayı kes

Birden fazla kez kullanılabilir
os.O_APPEND|os.O_CREATE
*/

//...
file.Close()
```


# Dosya Bilgilerini Almak
```go
info, err := os.Stat("filanem.ext")

info.Name()

info.Size()

info.Mode() // izinler

info.ModTime()

info.IsDir()

info.Sys()

info.Sys()
```


# Dosya Bilgilerine Ulaşmak
```go
// Dosya varlığını kontrol etmek
fileinfo, err := os.Stat("deneme.txt")
if err != nil {
    if os.IsNotExist(err){
        log.Fatal("Dosya bulunamadı")
    }
}

```

# Okuma ve Yazma izinlerini kontrol etmek

Dosyayı hangi mod ile açıyorsan isPermission onun hatasını verir.

```go
file, err := os.Open("filename.ext", os.O_WRONLY, 0666)
if err != nil {
    // Parametre olarak hata verilir o hata perrmission ile alaklı ise hta verir.
    if os.IsPermission(err) { 
        log.Println("Yazma izni verilmemiş")
    }
}
defer file.Close() // defer bu kodddan sonra kod olsada en son } den önce çalışır.
```


# Dosya Kopyalama
Dosya kopyalamak için önce kaynak dosyayı açmak ve bir değişkende tutmak gerek.  
Sonra hedef dosyayı oluşturmak ve değişkene atamak gerek.   
Daha sonra io modülü ile hedef dosya değişkenine kaynak dosya değişkenini kopyalamalı.
Son olarak yeni oluşturulan hedef dosya değişkenin Sync methodu ile işlem hafızadan alınıp gerçeğe dökülmeli
```go

sourceFile, err := os.Open("source.txt")
defer sourceFile.Close()
// Hata Kontrolü

targetFile, err := os.Open("target.txt")
defer targetFile.Close()
// Hata Kontrolü

bytesWritten, err := io.Copy(targetFile, sourceFile)
// Hata Kontrolü

err := targetFile.Sync()
// Hata kontrolü

```


# Dosya taşımak veya Yeniden adlandırmak
```go
// Hem taşu hemde yeniden adlandır
err = os.Rename("./deneme.txt", "./yeni/klasor/test.txt")
```


# Dosyaya byte verisi ("string") yazmak
```go
file, err := os.OpenFile("deneme.txt", os.O_WRONLY, 0666)
if err != nil {
    log.Fatal( err.Error() )
}
defer file.Close()

var metin = []byte("Bu bi deneme yazısıdır.")
bytesWritten, err := file.Write(metin)
```

# Dosyayı Silmek
```go
err = os.Remove( "filename.ext" )
```

# Geçici dosya ve klasörler içinde çalışmak
```go
import "io/ioutil"

// geçici klasör oluştıur
tempDirPath, err := ioutil.TempDir("", "klasorAdı") // klasör geçicidir ismi sen ver
// işlemler

tempFile, err := ioutil.TempFile(tempDirPath, "dosya.txt")
// işlemler

tempFile.Name() // Dosya adı

err := tempFile.Close()

// Geçici Dosyayı silmek
err = os.Remove( tempFile.Name() )
err = os.Remove( tempDirPath )

```