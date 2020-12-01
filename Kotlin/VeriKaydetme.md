SharedPrefences küçük veri kaydetmeye yarar. Sadece kendi telefonunda.

### PUBLİC BELİRLEME
lateinit var sharedPrefences : SharedPrefences

var sharedPrefences : SharedPrefences? = null

### SharedPrefences TANIMLAMAK
var sharedPrefences = this.getSharedPrefences("name=genelde_packagename", Context.MODE_PRIVATE)

### VERİYİ KAYDETME
sharedPrefences.edit().putInt("key", "val").apply()


### VERİYİ OKUMAK
sharedPrefences.getInt("key", default)


### VERİYİ SİLMEK
sharedPrefences.edit().remove("key").apply()
