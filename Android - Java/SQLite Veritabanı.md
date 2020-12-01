"
DROP TABLE IF EXISTS tablename
CREATE TABLE IF NOT EXISTS tablename (name VARCHAR, age INT(3))
id INTEGER PRIMARY KEY AUTOINCREMENT




# VERİ TABANI İŞLEMLERİ
> "CREATE TABLE IF NOT EXISTS tablename (id INT(11), name VARCHAR(255), age INT,  )"

## BAĞLANTI AÇMAK
> SQLiteDatabase db = this.openOrCreateDatabase("databasename", "mod", null);

mod = MOD_PRIVITE

## SQL KODU ÇALIŞTIRMAK
> db.execSQL("SQL KODU");

## VERİ ÇEKMEK
```java
Cursor cursor = db.rawQuery("SELECT * ...", null);

// Hücrelerin sırasını bulur
int col1_key = cursor.getColumnIndex("hucre_name");
int col2_key = cursor.getColumnIndex("hucre_name2");

//1. yöntem
cursor.moveToFirst();
while( cursor != null ){

	cursor.getString( col1_key );
	cursor.getInt( col2_key );

	cursor.moveToNext();
}

2. yöntem
while(cursor.moveToNext()){
	cursor.getString( col1_key );
	cursor.getInt( col2_key );
}

```

## SQL İÇİNE PARAMETRE GÖNDERMEK
String sqlCode = "SELECT * FROM table(col, col) VALUES(?, ?)";
SQLieteStatement statement = database.compileStatement(sqlCode);
statement.bindString(SIRA, DEĞER);
statement.bindString(1, DEĞER);
statement.bindBlog(2, DEĞER);
statement.execute();
