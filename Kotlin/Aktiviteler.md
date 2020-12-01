#INTENT
```kotlin
var intent = Intent(applicationContext, NextActivity::class.java)
intent.putExtra("key", "val")

// Eğer zaten açık olan bir aktivite tekrar başlatılıyorsa
// Daha önce açılan tüm aktiviteleri kapatmak gerekebillir.
// Örneğin CreateItemActivity den MainActivity e geri dönerken finish() yerine bu kullanılırsa
// Aşağıdaki kod bundan önceki tüm aktiviteleri kapatır.
intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)  

startActivity(intent)
```
## VERİ ALMAK
> var intent = intent

veya

> var intent = getIntent()

> intent.getStringExtra("key")

## BUNDLE İLE VERİ ALMAK
val bundle : Bundle = intent.extras
val degisken = bundle.getString("key", default)


## AYNI AKTİVİTEYİ EN BAŞTAN ALMAK
```kotlin
var intent = intent
finish()
startActivity(intent)
```
