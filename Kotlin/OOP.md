# OOP
# SINIF OLUŞTURMAK
```kotlin
class User{

    var isim : String = "" // Değer null olamaz

     // ? Değer null olabilir
     // private ile değişkene dışardan müdahale edilemez.
    private var yas : Int? = null


    // getter ve setter oluşturmak
    var memleket : String? = null
        private set // setMemleket private olur
        get         // getMemleket public olur




    //consturctor vs init
    // var user = User("Furkan", 28)
    consturctor(name:String, age:Int){
        this.isim = name
        this.yas = age
    }

    // Buda bir consturctor
    // Sınıf oluşturulduğunda ilk çalışan kodlar burada da çalışır.
    init {

    }

}
```

# HIZLI CONSTRUCTOR OLAN SINIF
```kotlin
class User(name:String, age:Int){

    // Aşağıdaki gibi bir eşitleme yapılmazsa.
    // CONSTRUCTOR anında alınan değişkenlere dışarıdan erişilemez.
    var name : String = name
    var age : Int? = age

}
```



# KALITIM EXTENDS
- extends edilebilecek olan sınıfların başına open yazılmalı.
- üst sınıfta bir consturctor varsa alt sınıfta kesin verilmeli.

```kotlin
// open ile sınıfı extends için açtım
open class Canli{

}

class Insan : Canli{

}
```

## ÜST SINIFINDA CONSTRUCTOR OLAN SINIFTAN TÜRETMEK
```kotlin
// open ile sınıfı extends için açtım
open class Canli(name:String, age:Int){

}

class Insan(name:String, age:Int) : Canli(name, age){

}
```

---
# POLYMORPHİSM
AYNI İSMİ KULLANARAK FARKLI İŞLEMLER YAPABİLME ÖZELLİĞİ

### STATIK POLYMORPHİSM
```kotlin
class Matematik{
    fun sum():Int{
        return 0
    }
    fun sum(x:Int, y:Int):Int{
        return x + y
    }
    fun sum(x:Int, y:Int, z:Int):Int{
        return x + y + z
    }
}
```

### DYNAMIC POLYMORPHİSM
```kotlin
open class Hayvan{
    open fun sesver(){
        println()
    }
}

class Kopek : Hayvan(){

    fun usttekiSesver(){
        super.sesver()
    }

    override fun sesver(){
        println()
    }

}
```

# ABSTRACT & INTERFACE
- Abstract sınıflar bir obje olarak çağrılamaz.
- Sadece extends edilebilirler.
- Extends işlemi sadece 1 sınıftan olur. 2 abstract sınıfı aynı anda extends edilemez.

> class CurrentClass : ParentClass{  }


## ABSTRACT SINIF
TEK 1 KEZ KALITIM ALINIR.

 ```kotlin
abstract class Name{

    fun information : String{
        return "deneme"
    }

}
 ```

## INTERFACE
1 DEN FAZLA INTERFACEDEN KALITIM ALINAİBLİR. (IMPLEMENTS)

```kotlin

// ### 1. INTERFACE SINIFIM
interface FirstInterface{

    // Interface içinde initilaze işlemi olmaz.
    // tip belirlenip bırakılırç
    var varOfFirstInterface : Type

    // Ne iş yapacağı belirtilmemiş olan fonksiyonlar
    // implement edilen sınıfta override edilmelidir.
    fun testFirst()

}

// ### 2. INTERFACE SINIFIM
interface SecondInterface{
    var varOfSecondInterface : Type

    fun testSecond(){
        println("Value")
    }
}

// ### INTERFACELERİ IMPLEMENT ETTİĞİM SINIF
class CurrentClass : FirstInterface, SecondInterface{

    // Interface içindeki değişkenler implements edilen sınıfta initalize edilirler.
    override var varOfFirstInterface : Type
        get() = "Value"
        set(value){}

    override var varOfSecondInterface : Type
        get() = "value"
        set(value){}


    // Interface de initalize edilmemiş fonksiyonları initalize et
    override fun testFirst(){
        println("kodlar")
    }

}
```
