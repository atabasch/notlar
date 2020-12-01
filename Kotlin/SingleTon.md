## EN BASİT OLUŞTURMA
````kotlin
class SingleTon{

    companion object CustomName{
        var degisken : String? = null
        var gorsel : Bitmap? = null
    }

}

// ## KULLANIMI
var item = SingleTon.CustomName
item.degisken = "Blabla"
item.gorsel = BitmapFactory.decodeResource(applicationContext.resources, R.drawable.gorsel)
```
