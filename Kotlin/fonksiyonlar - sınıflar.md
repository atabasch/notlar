```kotlin

private = Sadece sınıf içinde kullanılabilir
protected = Kalıtım alınan sınıfta da  kullanılabilir.
internal = Bütüm projede ulaşılır sadece farklı modüllerle ulaşılamaz
public = Her yerde kullanılabilir.


// FONKSİYONLAR

class SınıfAdı : MirasAlınanSınıfAdı(){

    var degisken = değer
    var degisken : Type
    private var degisken : Type
    public var degisken : Type

    constructor(par:Type, par:Type){
        this.degisken = par

    }


    fun fonksiyonAdi(parametre:ParametreType){

    }

    protected fun fonksiyonAdi(parametre:ParametreType){

    }

    fun funcName(par:Type, par2:Type) : ReturnType{
        return result
    }

}


//constructor kullanmadan değişken tanımlamalı sınıf
class ClassName(var par:Type, var par:Type){

}


// KULLANIMI
var degisken = SınıfAdı()
degisken.sinifDegiskeni
degisken.sinifFonksiyonu()


// Nullable kullanımı
// Bir şeyin boş olabilmesi anlamına gelir.
// ? var mı yok mu valla bilmiyorum demek
// !! yemin billah bu değer null değil demek
class ClassName(){

    var degisken : Type? = null //?null değer olabilir
    var yas : Int? = null
    var isim : String? = null

    if( age?.compareTo(x) ){}

        

    println(yas!! * 10) // Normalde yas null olabilir diye hata verir. Ancak !! kesin olarak null değil anlamına gelir.


}


```
