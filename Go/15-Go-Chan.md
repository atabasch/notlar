# Go’da Eşzamanlı Programlama: Goroutine ve Kanallar

## 1. Eşzamanlılık Nedir?

- **Eşzamanlılık (Concurrency):** Bir programda aynı anda birden fazla iş parçacığı (iş akışı) yürütülebilmesidir.
- Go’da eşzamanlılık çok kolaydır ve sistem kaynaklarını verimli kullanmak için tasarlanmıştır.

---

## 2. Goroutine Nedir?

- **Goroutine:** Go’da çok hafif, yönetilen “iş parçacıkları”dır.
- Sıradan fonksiyonlar gibi yazılır, başına sadece `go` anahtar kelimesi eklenir.
- Gerçek işletim sistemi thread’lerinden daha hafiftir. Binlerce, hatta milyonlarca goroutine açabilirsin.
- **Aynı anda** (eşzamanlı) veya **paralel** çalışırlar (paralellik, CPU çekirdek sayısına bağlıdır).

### Goroutine Kullanımı ve Örnekleri

#### Basit Goroutine

```go
package main

import (
    "fmt"
    "time"
)

func selamla() {
    fmt.Println("Selam dünya!")
}

func main() {
    go selamla()        // Fonksiyon ayrı bir goroutine’de çalışır
    fmt.Println("Ana fonksiyon!")
    time.Sleep(1 * time.Second) // Goroutine’in çalışması için ana fonksiyon biraz bekler
}
``` 


**Not:** Ana fonksiyon biterse tüm goroutine’ler de biter! O yüzden beklemek gerekebilir (time.Sleep, sync.WaitGroup, vs.).

#### Birden Fazla Goroutine


```go

for i := 1; i <= 5; i++ {
    go func(n int) {
        fmt.Printf("%d. Goroutine çalışıyor!\n", n)
    }(i)
}
time.Sleep(1 * time.Second)

```


# 3. Kanal (Channel) Nedir?

- Channel: Goroutine’ler arasında güvenli ve eşzamanlı veri alışverişi sağlayan “tüp” gibidir.
- Bir kanala bir goroutine veri yazarken, başka bir goroutine o veriyi okuyabilir.
- Veri tipine göre oluşturulur (ör: chan int, chan string).
- Channels sayesinde “kilit” (mutex) gibi karmaşık şeylerle uğraşmadan veri aktarımı sağlanır.

## Channel Kullanımı ve Örnekleri

#### Kanal Oluşturmak

```go
ch := make(chan int) // int tipinde bir kanal oluşturur

```

#### Kanala Veri Göndermek ve Okumak

```go
ch := make(chan string)

go func() {
    ch <- "merhaba kanal!"   // Kanala veri gönder
}()

msg := <-ch                 // Kanaldan veri oku (bloklar!)
fmt.Println(msg)

```

#### Channel ile Senkronizasyon

```go
done := make(chan bool)

go func() {
    fmt.Println("Uzun iş...")
    time.Sleep(2 * time.Second)
    done <- true
}()

<-done  // İş bitene kadar bekler
fmt.Println("Bitti!")
```


#### Buffered Channel (Tamponlu Kanal)

- Normal channel, bir şey okunmazsa “kilitlenir”.
- Buffered channel ise belirli sayıda veriyi tutabilir, hepsi okunmadan bloklamaz.


```go
ch := make(chan int, 3) // 3 elemanlık buffer
ch <- 1
ch <- 2
ch <- 3
fmt.Println(<-ch) // 1
fmt.Println(<-ch) // 2

```

#### Kanalı Kapatmak

```go
close(ch)

```
    Kapalı bir kanaldan veri okuyabilirsin (sıfır değer gelir), ama yazamazsın (panic olur).


#### Kanalı Range ile Gezmek

```go
ch := make(chan int)

go func() {
    for i := 1; i <= 5; i++ {
        ch <- i
    }
    close(ch)
}()

for v := range ch {
    fmt.Println("Kanaldan gelen:", v)
}

```


# 4. Select ile Birden Fazla Kanalı Dinlemek

- select ile aynı anda birden fazla kanal dinlenir, hangisi veri verirse o çalışır.

```go
ch1 := make(chan string)
ch2 := make(chan string)

go func() { ch1 <- "birinci" }()
go func() { ch2 <- "ikinci" }()

select {
case msg1 := <-ch1:
    fmt.Println("ch1:", msg1)
case msg2 := <-ch2:
    fmt.Println("ch2:", msg2)
}

```


# 5. Senkronizasyon: sync.WaitGroup

- Goroutine’lerin tamamlanmasını beklemek için kullanılır.


```go
import "sync"

var wg sync.WaitGroup

for i := 1; i <= 3; i++ {
    wg.Add(1)
    go func(n int) {
        defer wg.Done()
        fmt.Println("Goroutine:", n)
    }(i)
}

wg.Wait() // Tüm goroutine’ler bitene kadar bekler
fmt.Println("Hepsi tamam!")

```

# 6. Sık Yapılan Hatalar ve İpuçları

- Ana fonksiyonun bitmesiyle tüm goroutine’ler de sona erer! Her zaman beklet veya WaitGroup kullan.
- Değişkeni closure ile goroutine’e geçirirken dikkat et:
Döngüde closure ile değişkeni doğrudan kullanmak yerine, parametre olarak geçir!
- Kanalı birden fazla goroutine’e açıkça paylaşabilirsin.
- Deadlock (kilitlenme) riskine dikkat et:
Hiçbir goroutine kanaldan okumazsa program kitlenir.
- Kapatılan kanala veri yazılmaz!
- Kanal kullanmazsan, veri paylaşımında mutex (sync.Mutex) de kullanabilirsin, ama genelde channel daha pratiktir.

# 7. Kısa Sözlük

| Terim      | Açıklama                                      |
| ---------- | --------------------------------------------- |
| Goroutine  | Go’da eşzamanlı çalışan çok hafif thread’ler  |
| Channel    | Goroutine’ler arası güvenli veri aktarım yolu |
| Buffered   | Kanalın içinde tutabileceği eleman sayısı     |
| Unbuffered | Sıfır buffer, karşı taraf okumadan bloklanır  |
| Deadlock   | Hiçbir goroutine’in ilerleyememesi, tıkanma   |
| WaitGroup  | Birden çok goroutine’in tamamlanmasını bekler |
| Select     | Birden fazla kanalı aynı anda dinler          |


# 8. Nerede / Nasıl

| Proje Fikri                           | Goroutine ve Channel Nerede/Nasıl Kullanılır?                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Web Scraper (Site Tarayıcı)**    | Farklı siteleri/URL’leri paralel olarak gezip verileri toplamak için her siteye ayrı goroutine açılır, bulunan sonuçlar channel ile ana fonksiyona gönderilir. |
| **2. Gerçek Zamanlı Chat Uygulaması** | Her gelen bağlantı (kullanıcı) için ayrı goroutine ile mesajlar alınır/gönderilir, yeni mesajlar bir channel üzerinden chat odasına aktarılır.                 |
| **3. Dosya Yedekleme Programı**       | Aynı anda birden fazla dosyayı kopyalamak için her dosya kopyalama işlemi ayrı goroutine’de yapılır, hata ve durumlar channel ile raporlanır.                  |
| **4. API Gateway**                    | Farklı mikroservislere gelen API istekleri için her çağrı bir goroutine’de işlenir, cevaplar channels ile toplanıp birleşik olarak döndürülür.                 |
| **5. Video/Resim İşleme Sunucusu**    | Upload edilen dosyaları (örneğin her resmi) farklı goroutine’de işler, işlemler bittiğinde channel ile “tamamlandı” bilgisi iletilir.                          |
| **6. Paralel Web Crawler**            | Birbiriyle ilişkili milyonlarca linki ziyaret etmek için her link ayrı bir goroutine olarak gezilir, yeni linkler kanalla iş kuyruğuna aktarılır.              |
| **7. IoT Sensör Verisi Toplama**      | Her sensörden gelen veri ayrı goroutine’de dinlenir, merkez sunucuya channels ile veri aktarılır (ör: sıcaklık, nem, hareket).                                 |
| **8. Email/SMS Bildirim Sistemi**     | Aynı anda binlerce kişiye mesaj göndermek için her alıcıya goroutine açılır, gönderim sonuçları/cevaplar bir channel’da toplanır.                              |
| **9. Canlı Skor Takip Uygulaması**    | Farklı liglerden verileri anlık çekmek için her lig/maç için goroutine açılır, anlık skorlar channel üzerinden UI’ya iletilir.                                 |
| **10. Büyük Veri Analiz Pipeline’ı**  | Veriyi parçalara bölüp (shard), her parçayı goroutine’de işler, sonuçları birleştirmek için channel ile merkezi analizciye yollar.                             |


### Açıklamalar ve Senaryolar

##### Web Scraper:
50 tane haber sitesi tarıyorsun, her biri ayrı goroutine’de işliyor, sonuçları channel ile ana programa gönderiyorsun. Böylece yavaş siteler beklenmeden hızlılar hemen döner.

##### Chat Uygulaması:
1000 kullanıcı aynı anda mesaj atıyor, her biri kendi goroutine’inde dinleniyor, kanallarla tüm odaya broadcast yapılıyor.

##### API Gateway:
Bir REST API endpoint’e gelen isteği 3 farklı servis sorguluyor, her sorgu goroutine’de başlatılıyor, cevapları channel ile toplayıp en hızlı sonuçları birleştirip dönüyorsun.

##### IoT:
10 ayrı sensörün veri akışını sürekli dinliyorsun. Her sensör için birer goroutine, ana program channel ile hepsinin verisini topluyor/logluyor.

##### Büyük Veri Pipeline:
10 milyon log kaydı var, 10 parça halinde her parçayı birer goroutine’de analiz ediyorsun, sonuçları channel ile toplayıp genel rapor oluşturuyorsun.