## KURULUM
> install nmp mysql --save

### PROJEYE EKLEME
---
> const mysql = require('mysql');

### DB BAĞLANTISI
---
```js
const conenction = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:'',
    multipleStatements: true // çoklu sorgu işlemleri
});
connection.connect(function(err){
    // BAĞLANTI SAĞLANDIKTAN SONRA YAPILACAK İŞLEMLER
    // INSERT, UPDATE, DELETE ve QUERY işlemleri bu alanda daha iyi olur.
});
```

Her js dosyasında yeniden bağlanmak gerekir.
Her seferinde uğraşmamak için en iyi yöntem bir dosya içinde bağlantıyı yapıp dışarı exports etmektir.

#### **ÖRNEK DB MODÜLÜ**

**db.js**
```js
const mysql = require('mysql');
const conenction = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:'',
});
module.exports = connection;
```
**kullanilacak_dosya.js**
```js
const db = require('db');
db.connect(function(err){
    db.query('sql', datas, function(err, result, fields){

    });
});
```







### INSERT / QUERY / DELETE / UPDATE İŞLEMLERİ
---
**1. yöntem (Düz yöntem)**
```js
db.connect(function(err){
    let sql = "INSERT INTO table(col1, col2) VALUES(val1, val2)";
    db.query(sql, function(err, result, fields){
        // KAYIT İŞLEMİ SONRASI KODLAR

    });
});
```

**2. yöntem (Parametre Göndermeli)**
```js
db.connect(function(err){
    let sql = "INSERT INTO table(col1, col2) VALUES(?, ?)";
    db.query(sql, [val1, val2], function(err, result, fields){
        // KAYIT İŞLEMİ SONRASI KODLAR
    });
});
```

**3. yöntem (Obje Göndermeli)**
```js
db.connect(function(err){
    let datas = {
        col1: 'val1',
        col2: 'val2'
    }
    db.query("INSERT INTO table SET ?", datas, function(err, result, fields){
        // KAYIT İŞLEMİ SONRASI KODLAR
    });
});
```

**4. yöntem (Timeout, obje gönderme)**
```js
db.connect(function(err){
    let datas = {
        col1: 'val1',
        col2: 'val2'
    }
    let sql = {
        sql: "INSERT INTO table SET ?",
        timeout: 3000,
        values: datas
    }
    db.query(sql, function(err, result, fields){
        // KAYIT İŞLEMİ SONRASI KODLAR
    });
});
```



### QUERY DEN DÖNEN PARAMETRELER
---
**RESULT**
```js
// INSERT SONUCU SONRASU RESULT
OkPacket {
  fieldCount: 0,
  affectedRows: 1,  // İŞLEMDEN ETKİLENEN SATIR SAYISI
  insertId: 1,      // INSERT ILE SON EKLENEN KAYDIN ID NUMARASI
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0    // UPDATE İŞLEMLERİNDE GÜNCELLEMEYE UĞRAYAN KAYIT SAYISI
}

//QUERY SONRASI RESULT DÖNEN VERİLERİ TUTAR
[
  RowDataPacket {
    col: 'val1',
    col: 'val2',
  },
  RowDataPacket {
      col: 'val1',
      col: 'val2',
  }
]
```


**FIELDS**
```js
//QUERY SONRASI
[
  FieldPacket {
    catalog: 'def',
    db: 'aswtestdb',
    table: 'users',
    orgTable: 'users',
    name: 'id',
    orgName: 'id',
    charsetNr: 63,
    length: 11,
    type: 3,
    flags: 16899,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true
  },
  ...
]
```


#### (!) TABLO, HÜCRE İSİMLERİNİ \` İŞARETİ İÇİNE ALMAK
```js
const hucre = 'date';
const sql    = 'SELECT * FROM posts ORDER BY ' + connection.escapeId(hucre);
// SELECT / FROM posts ORDER BY `date`
```

#### (!) İKİ ?? İŞARETİ İLE AYRI DATALAR YOLLAMAK
```js
var userId = 1;
var columns = ['username', 'email', 'level'];
var query = db.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userId], function (error, results, fields) {
  if (error) throw error;
  // ...
});
```
#### (!) :COL_NAME ŞEKLİNDE DAHA YOLLAMA YÖNTEMİ
**db.js**
```js
connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};
```

**çalışan_dosya.js**
```js
db.query("UPDATE posts SET title = :title", { title: "Hello MySQL" });
```
