# Bitmap İşlemleri
## Bitmap görsellerin tanımlandığı bir sınıftır.

> var img = BitmapFactory.decodeResource(applicationContext.resources, R.drawable.gorsel)

# Bitmap To ByteArray VE SIKIŞTIRMAK
```java
var byteArrayOutpuStream = ByteArrayOutputStream();
imgBitmap.compress(Bitmap.CompressFormat.EXT, Quality, byteArrayOutpuStream)
var imgByteArray = byteArrayOutpuStream.toByteArray()
```

# BLOB to BITMAP
```java
var byteArray = BLOB_VERİ
var bitmap = BitmapFactory.decodeByteArray(byteArray, 0, byteArray.size)
```

# BİTMAP THUMBNAİLİ YAPMAK
```java
    fun bitmapThumbnail(image: Bitmap, maximumSize: Int) : Bitmap{
        var w = image.width // Görselin enini alır.
        var h = image.height // Görselün yüksekliğini alır.

        var imgRatio : Double = w.toDouble() / h.toDouble() // Sonuç 0 dan büyükse görsel yataydır. değilse dikey
        if(imgRatio > 0){
            w = maximumSize
            var scaleHeight = w / imgRatio
            h = scaleHeight.toInt()
        }else{
            h = maximumSize
            var scaleWidth = h * imgRatio
            w = scaleWidth.toInt()
        }
        return Bitmap.createScaleBitmap(image, w, h, true)
    }

    var kucukBitmap = bitmapThumbnail(imgBitmap, 500)
```


# CİHAZDAN RESİM ALMAK
#### Gerekli İzin:
> android.Manifest.permission.READ_EXTERNAL_STORAGE

#### GALERİYİ AÇ
```java
var intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
startActivityForResult(intent, INT_RESULT_CODE)
```

#### KULLANICI RESMİ SEÇTİKTEN SONRA
```java
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if(requestCode==INT_RESULT_CODE && resultCode == Activity.RESULT_OK && data != null){
        var imgUri : Uri = data.data
        if(Build.VERSION.SDK_INIT < 28){
            var imgBitmap  = MediaStore.Images.Media.getBitmap(this.contentResolver, imgUri) // 28 öncesi telefonlarda çalışır.
        }else{
            var source = ImageDecoder.createSource(this.contentResolver, imgUri!!)
            var imgBitmap = ImageDecoder.decodeBitmap(source)
        }
    }
    super.onActivityResult(requestCode, resultCode, data)
}
```

| Parametre | İşlev |
| --- | --- |
| requestCode | Belirlediğimiz Request code |
| resultCode | Activity.RESULT_OK veya Activity.RESULT_CANCEL olarak döner. |
| data | Gelen daha data.data olark al |
