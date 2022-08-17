# GORM 
**GORM** paketi ile yapılabilir.

> go get -u gorm.io/gorm 



```go
import (
    "gorm.io/driver/mysql",
    "gorm.io/gorm"
)

type User struct{
    gorm.Model()    // ID, CreatedAt, UpdatedAt, DeletedAt
    Username string
    Password string 

}

func main(){
    dsn := "username:password@tcp(127.0.0.1:3306)/dnmae?charset=utf8mb4&parseTime=True&loc=Local"
    db, _ := gorm.Open(mysql.Open(dsn), &gorm.Config{})

    // DB de kayıt oluşturmak
    db.AutoMigrate(&User{}) // User tipinden db'de tablo oluşturur. Tablo adını users yapar.

    // DB INSERT
    db.Create(&User{Username:"asw13tr", Password: "pass123"})

    // DB SELECT
    var user User 

    // birincil anahtara göre tek kayıt
    db.First(&user, primaryKeyValue) // id=primaryKeyValue select 

    // sql sorgusuna göre e tek kayıt
    db.First(&user, "password=?", "pass123")


    // Birden fazla değer almak 
    var users = []User 
    db.Find(&users, "level>?", 0)

    // DB UPDATE
    var user User 
    db.First(&user, 517)
    db.Model(&user).Update("username","newusername")
    db.Model(&user).Update(User{Username: "newusername", "Passoword":"newPassword", "email":"Nnew@email.com"})

    // DB DELETE 
    db.Delete(&User{}, primarykey)
    






}
```