## BİR GÖRSELİ BYTE ARRAY OLARAK DÖNÜŞTÜRMEK (DB YÜKLEMEK İÇİN)
```java
ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
selectedImage.compress( Bitmap.CompressFormat.PNG, 50, outputStream );
byte[] byteArray = outputStream.toByteArray();

// Sql kodu ile bindBlob kullanarak byteArray değişkenini veritabanına kaydet.

// Veritabanından çekerkende getBlob ile çekilir
byte[] byteArray = cusror.getBlog( image_index );
Bitmap bitmap = BitmapFactory.decodeByteArray( byteArray, 0, byteArray.length );
```
