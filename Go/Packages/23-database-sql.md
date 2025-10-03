# database/sql

Go’nun standart veritabanı erişim arayüzüdür. MySQL, PostgreSQL, SQLite gibi DB’ler için sürücüyle birlikte kullanılır.

| Tip / Fonksiyon                | Açıklama                                      | Kullanım / Kod Örneği                                      |
| ------------------------------ | --------------------------------------------- | ---------------------------------------------------------- |
| `sql.Open(driver, dsn)`        | DB bağlantısı açar (örn: "mysql", dsn)        | `db, _ := sql.Open("mysql", dsn)`                          |
| `db.Ping()`                    | Bağlantı kontrolü                             | `db.Ping()`                                                |
| `db.Query(query, args...)`     | Sorgu yapar, çoklu satır döner                | `rows, _ := db.Query("SELECT id FROM users")`              |
| `db.QueryRow(query, args...)`  | Tek satır döner                               | `row := db.QueryRow("SELECT ad FROM users WHERE id=?", 5)` |
| `db.Exec(query, args...)`      | Sorgu çalıştırır (INSERT, UPDATE, DELETE)     | `db.Exec("INSERT INTO users(ad) VALUES(?)", "Ali")`        |
| `rows.Next()`                  | Sonraki satıra geçer                          |                                                            |
| `rows.Scan(&col1, &col2, ...)` | Sonraki satırdaki sütunları değişkene aktarır |                                                            |
| `row.Scan(&col1, ...)`         | Tek satırlık sorguda değer okur               |                                                            |
| `db.Begin()`                   | Transaction başlatır                          |                                                            |
| `db.Prepare(query)`            | Sorgu hazırlama (parametreli, performans)     |                                                            |
| `db.Close()`                   | Bağlantıyı kapatır                            |                                                            |


Örnek
```go
db, _ := sql.Open("mysql", "root:1234@tcp(localhost:3306)/emeyz")
rows, _ := db.Query("SELECT id, ad FROM users")
defer rows.Close()
for rows.Next() {
    var id int
    var ad string
    rows.Scan(&id, &ad)
    fmt.Println(id, ad)
}

```

**Not:**
Kullanmak için örneğin [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql)  gibi bir sürücü kurman gerekir.