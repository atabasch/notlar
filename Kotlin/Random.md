# Random ile rastgele

Random nesnesş oluşturuldu
> var random = Random()

0 ile 9 arasında rastgele bir integer
> random.nextInt(10)

> random.nextFloat()

> random.nextBoolean()



## LİSTEDEN İSTENİLEN KADAR FARKLI RASTGELE ELEMAN GETİRİR.
```kotlin
fun getRandomList(limit:Int, items: MutableList<String>) : ArrayList<String>{
        val newItems = arrayListOf<String>()
        for(i in (1..limit)){
            val deger = items.random()
            items.remove(deger)
            newItems.remove(deger)
        }
        return newItems
    }
```
