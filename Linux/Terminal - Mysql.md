# Database yedekleme.
```sh
# Bir veritabanını sql olarak dışa aktarmak .
mysqldump -h localhost -u username -p database_name > file_name.sql;

# Bir sql dosyasından database'e import etmek 1
mysqldump -h localhost -u username -p database_name < file_name.sql;

# Biq sql dosyasından database'e import etmek 2;
sudo mysql -u username -p;  # Mysql'e giriş yap.
show databases;             # Databaseleri görüntüle.
use database_name;          # İşlem görecek database'i seç
SOURCE file_name.sql;       # Sql dosyasını import et.

```
