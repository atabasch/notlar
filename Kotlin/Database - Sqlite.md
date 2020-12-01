# BAĞLANTI
> val db = this.openOrCreateDatabase("databasename", Context.MODE_PRIVATE, null)

## KODLAR TRY CATHC İÇİNDE YAZILMALI
## INSERT, UPDATE, DELETE KOMUTU ÇALIŞTIRMA

```java
    try{
        val db = this.openOrCreateDatabase("databasename", Context.MODE_PRIVATE, null)
        db.execSql("SQL KODU")
    }catch(e:Exception){
        e.printStackTrace()
    }
```

## SELECT KOMUTU ÇALIŞTIRMA

```java
    try{
        val db = this.openOrCreateDatabase("databasename", Context.MODE_PRIVATE, null)
        var cursor = db.rawQuery("SQL KODU", null)
        var cursor = db.rawQuery("SQL KODU WHERE col=?", arrayOf(isaretİcinDeger.toString()))
        var colIndex = cursor.getColumnIndex("col_name")

        while(cursor.moveToNext()){
            cursor.getString(colIndex)
        }

        cursor.close()
    }catch(e:Exception){
        e.printStackTrace()
    }
```


## PARAMETRE GÖNDERMELİ İŞLEM BİTMAP İLE
```java
    try{
        val db = this.openOrCreateDatabase("databasename", Context.MODE_PRIVATE, null)
        var sql = "INSERT INTO table(col1, col2) VALUES(?, ?)"
        var statement = db.compileStatement(sql)
        // soru işaretlerinin sırası 1 den başlar
        statement.bindString(1, value)
        statement.bindBlob(2, byteArray) // byteArray a çevrilmiş bir bitmap olabilir.
        statement.bindInt(sira, val)
        statement.bindDouble(sira, val)
        statement.execute()
    }catch(e:Exception){
        e.printStackTrace()
    }
```
