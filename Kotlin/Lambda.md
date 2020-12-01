# LAMBDA GÖSTERİMLERİ

1 SINIFI TEK SATIRDA YAZMAK İÇİN KULLANILAN GÖSTERİM ŞEKİLLERİDİR.

## EKRANA YAZDIRMA
### NORMAL TANIMLAMA
```kotlin
fun printString(str:String){
     println(str)
}
```
### LAMBDA TANOMLAMA
```kotlin
val printString = { str : String -> println(str) }
```


## SONUÇ DÖNDÜRMELİ TOPLAMA
### NORMAL TANIMLAMA
```kotlin
fun topla(x:Int, y:Int) : Int{
    return x + y
}
```

### LAMBDA TANIMLAMA
```kotlin
val toplam = { x:Int, y:Int -> x + y }
```

## DEĞİŞKEN TÜRÜ BELİRLEMELİ LAMBDA
> val topla : (Int, Int) -> Int = {x,y -> x+y}


# İLERİ SEVİYE LAMBDA
Asenkron işlemlerde daha çok kullanılır.
Örneğin bir fonksiyon yazıldı ve o fonksiyonun işi bittiği zaman bir işlem yapılması gerekiyor.
Bunun için bir complation parametresi kullanılabilir.
```kotlin
fun downloadData(url:String, complation:()->Unit){
    // İşlemleri yap
    complation()
}

downloadData("http://...", {
        // işlem sonunda yapılacak işlemler.
})
```

### PARAMETRELİ COMPLATION
```kotlin
fun downloadData(url:String, complation:(Object)->Unit){
    // İşlemleri yap
    val obj = Object(x,y,z)
    complation(obj)
}

downloadData("http://...", { objectVarName ->
        // işlem sonunda yapılacak işlemler.
})
```







#
