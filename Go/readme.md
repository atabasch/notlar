# İçindekiler

1. [Başlangıç](01-Start.md)
    1. [Özel Paket Oluşturma](01.1-Packets.md)
    2. [Hata alma ve oluşturma](01.2-Errors.md)
2. [Değişkenler ve Sabitler](02-Variables.md)
3. [Dizi ve Dilimler](03-Arrays.md)
4. [Özel Türler (type ... Struct)](04-Structur.md)
5. [Map - Sözlük](05-Map.md)
6. [Fonksiyonlar - (func)](06-Functions.md)
7. [Operatörler](07-Operators.md)
8. [Koşullar - (if, else, switch, case)](08-Conditions.md)
9. [Döngüler - (for, for range)](09-Loops.md)
10. [En son çalışacak satırı ayarlamak - (defer)](10-Defer.md)
11. [Metinsel İşlemler - (strings)](11-Strings.md)
12. [Veritabanı İşlemleri - (database - mysql)](12-Database.md)
13. [GORM ile Veritabanı İşlemleri - (gorm paketi)](13-Database-Gorm.md)
14. [GIN frameworkü ile REST API](14-Framework-Gin.md)
15. [Eşzamanlı İşlemler - (go, chan)](15-Go-Chan.md)
16. [Klasör ve Dosya İşlemleri - (os)](16-Folder-and-Files.md)
17. [JSON veri tipi ile çalışmak](17-Json.md)

# Paketler
| Paket Adı       | Ne İşe Yarar?                                 | Ne Zaman Kullanılır?                                            |
| --------------- | --------------------------------------------- | --------------------------------------------------------------- | 
| [fmt](Packages/01-fmt.md)           | Formatlı çıktı, yazdırma ve okuma             | Konsola veri yazarken, kullanıcıdan girdi alırken               |
| [os](Packages/02-os.md)            | Dosya, dizin işlemleri, ortam değişkenleri    | Dosya/dizin oluşturma, okuma, silme, programdan çıkış           |
| [strconv](Packages/03-strconv.md)       | String <-> int, float, bool dönüşümleri       | String’i sayıya ya da tam tersi çevirirken                      |
| [time](Packages/04-time.md)          | Tarih, saat işlemleri, timer, formatlama      | Şu anki zamanı almak, timer kurmak, zaman aritmetiği            |
| [io](Packages/05-io.md)            | Akış (stream) tabanlı okuma/yazma             | Dosya/stream ile veri aktarırken, custom Reader/Writer yazarken |
| [bufio](Packages/06-bufio.md)         | Buffer'lı okuma/yazma                         | Çok satırlı/çoklu veri okurken, Scanner ile satır satır okuma   |
| [strings](Packages/07-strings.md)       | String üzerinde işlem yapma                   | Parçalama, birleştirme, arama, değiştirme                       |
| [regexp](Packages/08-regexp.md)        | Regular Expression (düzenli ifade) işlemleri  | Karmaşık string aramaları, pattern ile eşleştirme               |
| [errors](Packages/09-errors.md)        | Hata oluşturma ve hata yönetimi               | Kendi hata mesajlarını tanımlamak                               |
| [log](Packages/10-log.md)           | Basit loglama                                 | Hata, bilgi, uyarı loglarını konsola/ dosyaya yazmak            |
| [math](Packages/11-math.md)          | Matematiksel fonksiyonlar (karekök, log, vs.) | İleri matematik işlemlerinde                                    |
| [sync](Packages/12-sync.md)          | Paralel programlama, kilitler, WaitGroup      | Goroutine’leri senkronize etmek, veri yarışını engellemek       |
| [net/http](Packages/13-net-http.md)      | HTTP sunucu/istemci yazmak                    | API, web server, HTTP istekleri atmak/almak                     |
| [path/filepath](Packages/14-path-filepath.md) | Dosya/dizin yolları ile işlem yapmak          | Dosya yollarını birleştirirken, ayrıştırırken                   |
| [encoding/json](Packages/15-encoding-json.md) | JSON kodlama/çözme                            | JSON verisi ile çalışmak (REST API, veri transferi, vs.)        |
| [context](Packages/16-context.md)       | İşlemler arası bağlam, iptal ve zaman aşımı   | API isteklerinde, uzun süren işlemleri iptal etmek için         |
| [reflect](Packages/17-reflect.md)       | Tip yansıtma, dinamik tip işlemleri           | Bilinmeyen tiplerle çalışma, generic kod yazmak                 |
| [flag](Packages/18-flag.md)           | Komut satırı argümanlarını okumak        | Terminalde çalışacak programlarda               |
| [sort](Packages/19-sort.md)           | Slice ve dizileri sıralamak              | Liste sıralama işlemlerinde                     |
| [bytes](Packages/20-bytes.md)          | Byte slice ile string benzeri işlemler   | Dosya/parçalı veri ile uğraşırken               |
| [testing](Packages/21-testing.md)        | Unit test yazmak                         | Go testleri yazarken                            |
| [os/exec](Packages/22-os-exec.md)        | Dış komut/program çalıştırmak            | Başka programları başlatmak gerektiğinde        |
| [database/sql](Packages/23-database-sql.md)   | SQL veritabanına bağlanmak               | DB işlemleri, veri kaydetme/okuma               |
| [mime/multipart](Packages/24-mime-multipart.md) | Dosya upload ve form-data işlemleri      | HTTP ile dosya upload edilirken                 |
| [unicode/utf8](Packages/25-unicode-utf8.md)   | Unicode karakter işlemleri               | Farklı alfabeler, özel karakterlerle çalışırken |
| [crypto/*](Packages/26-crypto--.md)       | Kriptografi işlemleri (md5, sha256, vs.) | Şifreleme, hash, şifre kontrolü, token üretimi  |

