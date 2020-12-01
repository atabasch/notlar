# EN KOLAY YOL

- Activitiye Toolbar elemanı ekle ID ver
- Aşağıdaki kodları onCreate methoduna yaz.
```kotlin
    setSupportActionBar(toolbarID)
    val mToolbar = supportActionBar
    mToolbar!!.setTitle("")
```


# Yeni layout dosyası oluştur
- Root elementi **Toolbar**

# Eklenecek Activitiye **include** elemanı ekle
    - id ver
    - layout özelliğine oluşturduğun toolbarı ekle

# Activity Classı içinde onCreate methoduna
```kotlin
    var toolbar = findViewById(R.id.include_id) as Toolbar
    setSupportActionBar(toolbar)
    toolbar.setTitle("Başlık")
    toolbar.setTitleTextColor(RENK)

    // import androidx.appcompat.widget.Toolbar

```

# TOOLBARA MENÜ EKLEMEK
- res > menu içine yeni menu oluştur.
- Toolbarı eklediğin activity classının içine aşağıdaki fonksiyonu override et ve menuyu göster

```kotlin
override fun onCreateOptionsMenu(menu: Menu?): Boolean {
    menuInflater.inflate(R.menu.menu_dosyasi_ismi, menu)
    return true
}
```


# MENÜ ELEMANLARINA TIKLANINCA İŞ YAPMAK
 ```kotlin
override fun onOptionsItemSelected(item: MenuItem): Boolean {
    when(item.itemId){
        R.id.menu_item_id -> yapılacak iş
    }
    return true
}
 ```
