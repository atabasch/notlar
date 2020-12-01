# MENÜ OLUŞTURMA İŞLEMLERİ
- **res (sağ tuş) > new directory > name=menu (Oluştur)**
- res > menu (sağ tık) > new > Menu resource file > menü adı gir oluştur
- xml dosyası içine
> <item android:id="@+id/custom_id_name" android:title="Başlık"></item>

- Activity içine gir ve iki fonksiyon override et

```java
// Oluşturulan menüyü buraya bağla
override fun onCreateOptionsMenu(menu: Menu?): Boolean {
    var menuInflater = menuInflater
    menuInflater.inflate(R.menu.file_name, menu)
    return super.onCreateOptionsMenu(menu)
}

// Tıklanan menüyü bulmak
override fun onOptionsItemSelected(item: MenuItem): Boolean {
    if(item.itemId == R.id.menu_item_id){
        // Yapılacak işlemler
    }
    return onOptionsItemSelected(item)
}
```
