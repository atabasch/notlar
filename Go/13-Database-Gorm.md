# Go – GORM ile MySQL Veritabanı İşlemleri Ders Notu

## Gerekli Paketler

- **gorm.io/gorm**: GORM’un ana ORM paketi  
- **gorm.io/driver/mysql**: MySQL sürücüsü (GORM ile uyumlu)

```go
import (
    "gorm.io/gorm"
    "gorm.io/driver/mysql"
)
```

---

## GORM Temel Fonksiyonları Tablosu

| Fonksiyon / Method                        | Ne İşe Yarar?                         | Döndürdüğü Tip    | Kısa Kullanım                                 |
|-------------------------------------------|----------------------------------------|-------------------|-----------------------------------------------|
| `gorm.Open(driver, dsn)`                  | DB bağlantısı kurar                    | `*gorm.DB, err`   | `db, err := gorm.Open(mysql.Open(dsn), ...)`  |
| `db.AutoMigrate(&Model{})`                | Tabloyu otomatik oluşturur/günceller   | `error`           | `db.AutoMigrate(&User{})`                     |
| `db.Create(&model)`                       | Yeni kayıt ekler                       | `*gorm.DB`        | `db.Create(&user)`                            |
| `db.Find(&models)`                        | Tüm kayıtları getirir                  | `*gorm.DB`        | `db.Find(&users)`                             |
| `db.First(&model, id)`                    | ID ile tek kayıt getirir               | `*gorm.DB`        | `db.First(&user, 5)`                          |
| `db.First(&model)`                        | İlk kaydı getirir                      | `*gorm.DB`        | `db.First(&user)`                             |
| `db.Where(...).Find(&models)`             | Filtreli sorgu ile çoklu kayıt getirir | `*gorm.DB`        | `db.Where("age > ?", 18).Find(&users)`        |
| `db.Model(&model).Updates(map)`           | Kayıt günceller                        | `*gorm.DB`        | `db.Model(&user).Updates(User{Age: 30})`      |
| `db.Delete(&model, id)`                   | Kayıt siler                            | `*gorm.DB`        | `db.Delete(&user, 7)`                         |
| `db.Raw(sql, args...).Scan(&dest)`        | Doğrudan SQL çalıştırır, struct’a basar| `*gorm.DB`        | `db.Raw("SELECT * FROM users").Scan(&users)`   |
| `db.Exec(sql, args...)`                   | Doğrudan SQL çalıştırır (dönüşsüz)     | `*gorm.DB`        | `db.Exec("DELETE FROM users WHERE id = ?", 1)` |
| `db.Transaction(func(tx *gorm.DB) error)` | Transaction başlatır                   | `error`           | ...                                           |
| `db.Save(&model)`                         | Varsa günceller, yoksa ekler           | `*gorm.DB`        | `db.Save(&user)`                              |

---

## Örnekler

### 1. Gerekli Kütüphaneleri import etmek

```go
import (
    "gorm.io/gorm"
    "gorm.io/driver/mysql"
    "fmt"
)
```

### 2. Model Tanımlama

```go
type User struct {
    ID   uint   `gorm:"primaryKey"`
    Name string
    Age  int
}
```

### 3. DB Bağlantısı ve Otomatik Migration

```go
dsn := "kullanici:sifre@tcp(localhost:3306)/veritabani?charset=utf8mb4&parseTime=True&loc=Local"
db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
if err != nil {
    panic(err)
}

// Tabloyu oluşturur/günceller
db.AutoMigrate(&User{})
```

### 4. Yeni Kayıt Ekleme

```go
user := User{Name: "Ali", Age: 24}
db.Create(&user)
fmt.Println("Yeni kullanıcı ID:", user.ID)
```

### 5. Çoklu Kayıt Getirme (SELECT)

```go
var users []User
db.Find(&users)
for _, u := range users {
    fmt.Println(u.ID, u.Name, u.Age)
}
```

### 6. Tek Kayıt Getirme

```go
var user User
// ID ile
db.First(&user, 5)
fmt.Println(user)
// İlk kayıt
db.First(&user)
```

### 7. Filtreli Sorgu

```go
var adults []User
db.Where("age >= ?", 18).Find(&adults)
```

### 8. Kayıt Güncelleme

```go
db.Model(&user).Updates(User{Name: "Mehmet", Age: 30})
// veya
db.Model(&user).Update("Age", 35)
```

### 9. Kayıt Silme

```go
db.Delete(&user) // struct ile
db.Delete(&User{}, 7) // ID ile
```

### 10. Doğrudan SQL ile Sorgu

```go
var users []User
db.Raw("SELECT * FROM users WHERE age > ?", 18).Scan(&users)
```

### 11. Prepare (Parametreli) Kullanım

> GORM, otomatik olarak parametreli sorguları (SQL Injection güvenliğiyle) yönetir.
> Ek olarak, `Raw`, `Where` ve `Exec` fonksiyonlarında parametre kullanımı desteklenir.

```go
db.Exec("UPDATE users SET age = ? WHERE id = ?", 28, 5)
```

---

## Önemli İpuçları ve Güvenlik Tüyoları

- **SQL Injection’a karşı güvenli:**  
  `?` kullanarak parametre geçir, GORM otomatik koruma sağlar.
- **Model struct’larında `gorm:"..."` etiketiyle alanları özelleştirebilirsin.**
- **Mutlaka migration (AutoMigrate) yap.**  
  Veri kaybına karşı tablonu ve modeli yedekle.
- **Transaction ile toplu işlemleri güvenli yap.**
- **Yazdığın her sorgudan sonra `.Error` alanını kontrol et:**  
  `if err := db.Error; err != nil { ... }`
- **Tarihlerde Go’nun `time.Time` tipini kullanabilirsin.**
- **ID alanı uint olursa otomatik artan (auto-increment) olur.**
- **Soft delete (yumuşak silme) için `gorm.Model` veya `DeletedAt` alanı ekleyebilirsin.**
- **Performans için filtreleri mümkün olduğunca WHERE ile kullan.**
- **Büyük query’lerde paginasyon uygula (`Limit`, `Offset` fonksiyonları ile).**
- **GORM dökümantasyonunu mutlaka incele:**  
  [https://gorm.io/docs/](https://gorm.io/docs/)

---

## Kısa Faydalı Kaynaklar

- [GORM Getting Started](https://gorm.io/docs/)
- [GORM Models](https://gorm.io/docs/models.html)
- [GORM CRUD](https://gorm.io/docs/crud.html)
- [GORM Security](https://gorm.io/docs/security.html)
