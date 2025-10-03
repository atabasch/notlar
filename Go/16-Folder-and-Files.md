# Klasör ve Dosya İşlemleri

- [Klasör ve Dosya İşlemleri](#klasör-ve-dosya-işlemleri)
  - [1. Klasör İşlemleri (os paketi)](#1-klasör-işlemleri-os-paketi)
    - [a) Klasör Oluşturmak](#a-klasör-oluşturmak)
    - [b) Klasör İçindeki Dosyaları Getirmek](#b-klasör-içindeki-dosyaları-getirmek)
    - [c) Klasör Adı Değiştirmek / Taşımak](#c-klasör-adı-değiştirmek--taşımak)
    - [d) Klasörü Silmek](#d-klasörü-silmek)
  - [2. Dosya İşlemleri (os paketi)](#2-dosya-işlemleri-os-paketi)
    - [a) Dosya Oluşturmak / Yazmak](#a-dosya-oluşturmak--yazmak)
    - [b) Dosya Okumak](#b-dosya-okumak)
    - [c) Dosya Adı Değiştirmek / Taşımak](#c-dosya-adı-değiştirmek--taşımak)
    - [d) Dosya Silmek](#d-dosya-silmek)
  - [3. Dosya/Klasör Bilgileri ve Özellikleri](#3-dosyaklasör-bilgileri-ve-özellikleri)
    - [a) Dosya Bilgilerini Almak (os.FileInfo)](#a-dosya-bilgilerini-almak-osfileinfo)
  - [4. Okuma, Yazma, İzin Kontrolü](#4-okuma-yazma-izin-kontrolü)
  - [5. Geçici Dosya ve Klasörler ile Çalışmak](#5-geçici-dosya-ve-klasörler-ile-çalışmak)
  - [6. io/ioutil Paketi ile Pratik Kısa İşlemler](#6-ioioutil-paketi-ile-pratik-kısa-işlemler)
    - [a) Dosya İçeriğini Tek Satırda Okumak](#a-dosya-içeriğini-tek-satırda-okumak)
    - [b) Dosyaya Tek Satırda Yazmak](#b-dosyaya-tek-satırda-yazmak)
    - [c) Geçici Dosya/Klasörler](#c-geçici-dosyaklasörler)
    - [d) Klasördeki Tüm Dosyaların İsimlerini Almak](#d-klasördeki-tüm-dosyaların-isimlerini-almak)
  - [Sık Kullanılan Fonksiyonlar Tablosu](#sık-kullanılan-fonksiyonlar-tablosu)
  - [8. Ekstra: Klasör/Dosya Silerken Dolu-Boş Durumu](#8-ekstra-klasördosya-silerken-dolu-boş-durumu)
  - [9. Hızlı Notlar & İpuçları](#9-hızlı-notlar--ipuçları)

---

# 1. Klasör İşlemleri (os paketi)

## a) Klasör Oluşturmak

```go
import "os"

// Tek bir klasör oluşturmak
err := os.Mkdir("yeni_klasor", 0755)

// Tüm alt klasörleriyle oluşturmak
err := os.MkdirAll("a/b/c", 0755)

```

## b) Klasör İçindeki Dosyaları Getirmek

```go
files, err := os.ReadDir("klasor_adı")
for _, f := range files {
    fmt.Println(f.Name(), f.IsDir())
}

```

## c) Klasör Adı Değiştirmek / Taşımak

```go
err := os.Rename("eski_klasor", "yeni_klasor")
// Taşıma işlemi de aynı fonksiyonla, yeni path farklı klasörde olabilir
err := os.Rename("a/klasor", "b/klasor")

```

## d) Klasörü Silmek

```go
// Sadece BOŞ klasörü siler
err := os.Remove("klasor_adı")

// İçi DOLU klasörü ve altındaki her şeyi silmek için:
err := os.RemoveAll("klasor_adı")

```

# 2. Dosya İşlemleri (os paketi)

## a) Dosya Oluşturmak / Yazmak

```go
// Dosya oluşturur (varsa üzerine yazar)
f, err := os.Create("dosya.txt")
defer f.Close()
f.WriteString("Merhaba, Go!") // Basit yazma

// Dosya açıp ekleme yapmak
f, err := os.OpenFile("dosya.txt", os.O_APPEND|os.O_WRONLY, 0644)
defer f.Close()
f.WriteString("Devamını yaz...")

```

## b) Dosya Okumak

```go
f, err := os.Open("dosya.txt")
defer f.Close()
buf := make([]byte, 100)
n, err := f.Read(buf)
fmt.Println(string(buf[:n]))

```

## c) Dosya Adı Değiştirmek / Taşımak

```go
err := os.Rename("eski.txt", "yeni.txt")
err := os.Rename("a.txt", "yeni_klasor/b.txt")

```

## d) Dosya Silmek

```go
err := os.Remove("dosya.txt")

```

# 3. Dosya/Klasör Bilgileri ve Özellikleri

## a) Dosya Bilgilerini Almak (os.FileInfo)

```go
info, err := os.Stat("dosya.txt")
fmt.Println("Ad:", info.Name())
fmt.Println("Klasör mü?", info.IsDir())
fmt.Println("Boyut:", info.Size())
fmt.Println("İzin:", info.Mode())
fmt.Println("Düzenlenme zamanı:", info.ModTime())

```



# 4. Okuma, Yazma, İzin Kontrolü

| Fonksiyon                       | Açıklama                                   | Kullanım                        |                     |
| ------------------------------- | ------------------------------------------ | ------------------------------- | ------------------- |
| `os.Open(name)`                 | Sadece okuma için dosya açar               | `f, _ := os.Open("a.txt")`      |                     |
| `os.OpenFile(name, flag, perm)` | Farklı modlarda dosya açar (yazma, ekleme) | `os.OpenFile("a.txt", os.O_RDWR | os.O_CREATE, 0644)` |
| `os.ReadDir(dirname)`           | Klasördeki dosya/klasörleri döner          | `os.ReadDir(".")`               |                     |
| `os.Stat(name)`                 | Dosya/klasör bilgisi (boyut, izin, vs)     | `os.Stat("a.txt")`              |                     |
| `os.Chmod(name, perm)`          | Dosya/klasör izni değiştirir               | `os.Chmod("a.txt", 0644)`       |                     |
| `os.Chown(name, uid, gid)`      | Sahip değiştirir (Unix)                    | `os.Chown("a.txt", 1000, 1000)` |                     |
| `os.IsNotExist(err)`            | Hata dosya yoksa true döner                |                                 |                     |
| `os.TempDir()`                  | Temp klasör yolunu verir                   | `os.TempDir()`                  |                     |
| `os.CreateTemp(dir, pattern)`   | Geçici dosya oluşturur                     |                                 |                     |
| `os.MkdirTemp(dir, pattern)`    | Geçici klasör oluşturur                    |                                 |                     |


# 5. Geçici Dosya ve Klasörler ile Çalışmak


```go
// Geçici dosya oluştur
f, err := os.CreateTemp("", "gecici-*.txt")
fmt.Println(f.Name())
f.WriteString("Bu dosya geçici!")
f.Close()

// Geçici klasör oluştur
dir, err := os.MkdirTemp("", "gecici-klasor-*")
fmt.Println(dir)

```

# 6. io/ioutil Paketi ile Pratik Kısa İşlemler

    Not: io/ioutil bazı fonksiyonları Go 1.16+ ile os ve io içine taşındı ama hâlâ çok kullanılır ve kodlarda sıkça karşına çıkar.

## a) Dosya İçeriğini Tek Satırda Okumak

```go
import "io/ioutil"

data, err := ioutil.ReadFile("dosya.txt")
fmt.Println(string(data))

```

## b) Dosyaya Tek Satırda Yazmak

```go
err := ioutil.WriteFile("cikti.txt", []byte("Merhaba!"), 0644)

```

## c) Geçici Dosya/Klasörler

```go
f, err := ioutil.TempFile("", "ornek-*.txt")
f.Write([]byte("geçici içerik"))
f.Close()

dir, err := ioutil.TempDir("", "gecici-klasor-*")
fmt.Println(dir)

```

## d) Klasördeki Tüm Dosyaların İsimlerini Almak

```go
dosyalar, err := ioutil.ReadDir(".")
for _, d := range dosyalar {
    fmt.Println(d.Name())
}

```

# Sık Kullanılan Fonksiyonlar Tablosu

| Fonksiyon                                     | Paket     | Açıklama                               |
| --------------------------------------------- | --------- | -------------------------------------- |
| `os.Mkdir`, `os.MkdirAll`                     | os        | Klasör oluşturma                       |
| `os.Remove`, `os.RemoveAll`                   | os        | Dosya/klasör silme                     |
| `os.Rename`                                   | os        | Dosya/klasör taşıma/yeniden adlandırma |
| `os.Create`, `os.Open`, `os.OpenFile`         | os        | Dosya oluşturma/açma                   |
| `os.ReadDir`, `ioutil.ReadDir`                | os/ioutil | Klasör içeriğini listeleme             |
| `os.Stat`                                     | os        | Dosya/klasör bilgisi                   |
| `os.Chmod`                                    | os        | Dosya/klasör izin değiştirme           |
| `os.TempDir`, `os.CreateTemp`, `os.MkdirTemp` | os        | Geçici dosya/klasör oluşturma          |
| `ioutil.ReadFile`                             | ioutil    | Dosya içeriğini doğrudan okuma         |
| `ioutil.WriteFile`                            | ioutil    | Dosyaya doğrudan yazma                 |
| `ioutil.TempFile`                             | ioutil    | Geçici dosya                           |


# 8. Ekstra: Klasör/Dosya Silerken Dolu-Boş Durumu

- os.Remove("klasor") → Sadece BOŞ klasörü siler.
- os.RemoveAll("klasor") → Dolu bile olsa tüm içindekilerle birlikte siler.

# 9. Hızlı Notlar & İpuçları

- Path birleştirme için path/filepath.Join kullan (platform bağımsız).
- Dosya/kalsör üzerinde işlemden sonra Close() etmeyi unutma!
- Var olup olmadığını kontrol etmek için:

```go
if _, err := os.Stat("dosya.txt"); os.IsNotExist(err) {
    fmt.Println("Dosya yok.")
}

```

- Unix’te izinler:
- 0755: Klasör/dosya sahibi yazabilir, herkes okuyabilir
- 0644: Dosya sahibi yazabilir, herkes okuyabilir