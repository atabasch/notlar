# DEĞİŞKENLER
```kotlin
// Değişkenler
var pi = 3.14
var isim = "Furkan"

//Double Float
val pi = 3.14  // 64bit double
val myFloat = 3.14f // 32bit float

// SABİTLER
val sabit = "değer"


//#############################################################
// SONRADAN DEĞER ATAMALIK
var myName : String
myName = "Furkan"

val myInt : Int
myInt = 3

var x : Byte = 7
var x : Short = 7
var x : Int = 7
var x : Long = 7
var x : Double = 7
var x : Float = 7
var x : Boolean = true

//#############################################################
// DÖNÜŞÜM İŞLEMLERİ
myNumber.toInt()
myNumber.toIntOrNull()
myNumber.toBigInteger()
myNumber.toLong()
myNumber.toDouble()
myNumber.toDouble()


//#############################################################
//String içine değer atamak
"Herhangi bir string ${değişken} veya ${dizi[x]}"


//#############################################################
// Arraylar
// Array eleman sayısı başta belirlenir sonradan fazladan eklenme yapılamaz
var dizi = arrayOf("Adana", "Merkez", "Patlıyor", "Herkes")
doubleArrayOf()
intArrayOf()
...
dizi[index]
dizi[index] = "Yeni Değer"
dizi.get(index)
dizi.size
dizi.set(index, "Yeni değer")
dizi.reverse()
dizi.sort()

//#############################################################
// Listeler - Array Listler
Diziler gibi çalışır sonradan ekleme yapılabilir
var list = ArrayList<String>(v1, v2, v3)
var list = arrayListOf<String>(v1, v2, v3)
var list = ArrayList<String>() // İlk  belirleme de değer almaz
var list = ArrayList<Any>() // Karışık tipte değerler atanabilir.
list.add(newData)
list.add(key, newData)
list[key]

//#############################################################
// Set - Her elemandan içinde 1 tane olan dizilerdir.
var dizi = setOf<Int>(1,2,3,3,4,5,5,6,7)
dizi.size

var dizi = HashSet<String>()
dizi.add(val)
dizi.add(val)


//#############################################################
// Map - HashMap key => val eşleşmesi yapar .

var sozluk = HashMap<Type, Type>()
var sozluk = hashMapOf<Type, Type>("key" to Val, key to val2)
var sozluk = hashMapOf<Type, Type>()
sozluk.put(key, val)
sozluk.get(key)

// IF KONTROLLERİ
if(koşul){

}else if(koşul){

}else{

}

var degisken = deger? ?: default // kısa if


// swıtch
when(val){
    1 -> komut
    2 -> komut
    3 -> komut
    else -> komut
}

// DÖNGÜLER - LOOPS
for(val in values){

}

for(index in dizi.indices){
    dizi[index]
}

for(number in 0..10){

}


while(koşul){

}

# TRY - CATCH
try{

}catch(e: Exceptio){
    e.printStackTrace()
}











```
