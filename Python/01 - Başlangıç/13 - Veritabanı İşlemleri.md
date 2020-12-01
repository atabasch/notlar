
# VERİ TABANI İŞLEMLERİ


## VERİTABANI KÜTÜPHANESİ İMPORT ETMEK

### MYSQL
```python
import MySQLdb
db = MySQLdb.connect("host","username","password","database" )
```

veya
> pip3 install mysql-connector

```python
import mysql.connector
db = mysql.connector.connect(
        host=hostname,
        user=username,
        passwd=password,
        databse=database
    )
```

### SQLITE 3

```python
import sqlite3
db = sqlite3.connect("name.sqlite3")
```

### POSTGRESQL
> pip3 install psycopg2

```python
import psycopg2
connstr = "dbname=database user=username pasword=password host=hostname"
db = psycopg.connect(connstr)
```

## Mysql komutlarını çalıştmark  için cursor oluşturulmalı
> cursor = db.cursor()

## SQL Komutu çalıştırlmak
> cursor.execute("SQL CODE")

## INSERT, UPDATE ve DELETE işlemlerinde execute işlemini veritabanına uygulamak
> db.commit()

## Commit edilmemiş olan execute işlemini geri almak
> db.rollback()

## SELECT işlemi ile Execute işlemi sonrası veri çekmek. 

### Tek veri almak
> data = cursor.fetchone()

### Tüm verileri çekmek
> datas = cursor.fetchall()

### Limit kadar veri çekmek
> datas = cusror.fetchmany(x)

### Çekilen satır sayısını almak
>datas = cursor.rowcount

## Güvenli execute işlemi
```python
try:
	cursor.execute("SQL CODE")
	db.commit()
except:
	db.rollback()
```

## Veritabanı bağlantısını kapatmak
> db.close()


## VERİTABANI İŞLEMLERİ İÇİN ÖRNEK BİR HIZLI METOT
```python
def getir(sql, tumu=True):
    connection = sqlite3.connect("database.db3")
    cursor = connection.cursor()
    cursor.execute(sql)
    
    if tumu == 1: tumu = False
    if tumu == True:
        result = cursor.fetchall()
    elif tumu == False:
        result = cursor.fetchone()
    else:
        result = cursor.fetchmany(tumu)
    
    connection.close()
    
    return result
```


