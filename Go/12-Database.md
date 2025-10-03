# Go ile MySQL Veritabanı İşlemleri – Ders Notu

## Gerekli Paketler

- **database/sql**: Go’nun veritabanı arayüzü.
- **MySQL driver**: Go için MySQL sürücüsü (örn: `github.com/go-sql-driver/mysql`)

```go
import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)
```

Not: MySQL driver’ı genellikle import edilir ama doğrudan kullanılmaz (bağlantı açılırken otomatik devreye girer).

## Fonksiyonlar Tablosu

| Fonksiyon / Method          | Ne İşe Yarar?                            | Döndürdüğü Tip        | Kısa Kullanım                       |
| --------------------------- | ---------------------------------------- | --------------------- | ----------------------------------- |
| `sql.Open(driver, dsn)`     | Bağlantı nesnesi oluşturur               | `*sql.DB`, `error`    | `db, err := sql.Open("mysql", dsn)` |
| `db.Ping()`                 | Bağlantıyı test eder                     | `error`               | `err := db.Ping()`                  |
| `db.Query(sql, ...args)`    | Çoklu sonuç döner (SELECT)               | `*sql.Rows`, `error`  | `rows, err := db.Query(...)`        |
| `db.QueryRow(sql, ...args)` | Tek satır döner (SELECT)                 | `*sql.Row`            | `row := db.QueryRow(...)`           |
| `db.Exec(sql, ...args)`     | Dönüşsüz işlem (INSERT, UPDATE, DELETE)  | `sql.Result`, `error` | `res, err := db.Exec(...)`          |
| `rows.Next()`               | Sonraki satıra geçer                     | `bool`                | `for rows.Next() { ... }`           |
| `rows.Scan(&a, &b, ...)`    | Satırdan değişkenlere veri çeker         | `error`               | `rows.Scan(&id, &ad)`               |
| `row.Scan(&a, ...)`         | Tek satırda veri okur                    | `error`               | `row.Scan(&ad)`                     |
| `db.Prepare(sql)`           | Sorgu hazırlamak (preparing)             | `*sql.Stmt`, `error`  | `stmt, err := db.Prepare(...)`      |
| `stmt.Exec(...args)`        | Hazırlanan sorguyu çalıştırır            | `sql.Result`, `error` | `stmt.Exec("Ali", 25)`              |
| `stmt.Query(...args)`       | Hazırlanan SELECT ile çoklu veri getirir | `*sql.Rows`, `error`  | `rows, err := stmt.Query(...)`      |
| `db.Close()`                | Bağlantıyı kapatır                       | `error`               | `db.Close()`                        |

## Örnekler

#### 1. Gerekli Kütüphaneleri import etmek 

```go
import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
    "fmt"
)

```

#### 2. DB bağlantısı

```go
dsn := "kullanici:sifre@tcp(localhost:3306)/veritabani"
db, err := sql.Open("mysql", dsn)
if err != nil {
    panic(err)
}
defer db.Close()

if err := db.Ping(); err != nil {
    panic(err)
}
fmt.Println("Bağlantı başarılı!")

```


#### 3. Veritabanından çoklu veri getirme (SELECT)

```go
rows, err := db.Query("SELECT id, ad, yas FROM users")
if err != nil {
    panic(err)
}
defer rows.Close()

for rows.Next() {
    var id int
    var ad string
    var yas int
    if err := rows.Scan(&id, &ad, &yas); err != nil {
        panic(err)
    }
    fmt.Println(id, ad, yas)
}

```


#### 4. Tek bir satır veri almak

```go
var ad string
err := db.QueryRow("SELECT ad FROM users WHERE id = ?", 5).Scan(&ad)
if err != nil {
    if err == sql.ErrNoRows {
        fmt.Println("Kayıt yok.")
    } else {
        panic(err)
    }
} else {
    fmt.Println("Ad:", ad)
}

```


#### 5. Veri eklemek

```go
res, err := db.Exec("INSERT INTO users(ad, yas) VALUES(?, ?)", "Mehmet", 32)
if err != nil {
    panic(err)
}
id, _ := res.LastInsertId()
fmt.Println("Yeni kayıt ID:", id)

```


#### 6. Veri güncellemek

```go
res, err := db.Exec("UPDATE users SET yas = ? WHERE id = ?", 35, 7)
if err != nil {
    panic(err)
}
etki, _ := res.RowsAffected()
fmt.Println("Güncellenen kayıt sayısı:", etki)

```


#### 7. Veri silmek 

```go
res, err := db.Exec("DELETE FROM users WHERE id = ?", 3)
if err != nil {
    panic(err)
}
etki, _ := res.RowsAffected()
fmt.Println("Silinen kayıt sayısı:", etki)

```


#### 8. Preparing ile SQL hazırlamak ve parametre göndermek 

```go
stmt, err := db.Prepare("INSERT INTO users(ad, yas) VALUES(?, ?)")
if err != nil {
    panic(err)
}
defer stmt.Close()

_, err = stmt.Exec("Ayşe", 24)
if err != nil {
    panic(err)
}

```

## Önemli İpuçları ve Güvenlik Tüyoları

- Asla kullanıcıdan gelen veriyi doğrudan SQL’e ekleme! Her zaman `?` veya prepared statement kullan. Bu SQL injection’ı engeller.
- Her `rows` nesnesini mutlaka `Close()` et! Aksi halde bağlantı sızar.
- Hataları kontrol et, yutma!
- Pool yönetimini `database/sql` otomatik yapar.
- Küçük sorgularda `QueryRow`, çoklu sonuçlarda `Query` kullan.
- Parametre sırası önemlidir, yanlış yerle karışıklık olur.
- Fazla büyük sorgularda, tek seferde çok veri çekmek yerine paginasyon uygula.
- Bağlantı hatası veya kayıtsız işlem için `sql.ErrNoRows` kontrolü yap.
- Şifre/DSN bilgisini kodda tutma, ortam değişkeniyle yükle!
- Zaman ve tarih tiplerinde Go’nun `time.Time` tipini kullanabilirsin.