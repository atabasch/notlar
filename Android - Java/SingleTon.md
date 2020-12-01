# Single Ton
- Tek nesneye ihtiyaç duyulduğu zaman kullanılır.
- Bu nesne 1 kez oluşturulur daha sonra sadece kopyası alınır.
- Örneğin 1 aktivide içine atılan bir veri başka aktivite de alınabilir.
- İçine sayaç koyup her oluşturmada kaç kez oluşturulmuş öğrenilebilir.
- Database, Dosya işlemleri, Soket işlemlerinde kullanılabilir.

```java
public class AswSingleTone {

    private static AswSingleTone aswSingleTone = null;
    private String name;

    private AswSingleTone(){
        // Nesne ilk oluşturulurken yapılması istenen işler.
    }

    // Nesne diğer sınıflarda bu fonksiyon ile çağrılır.
    // synchronized anahtar kelimemiz ile metodun aynı anda çalışmasını engelledik.
    public synchronized  static AswSingleTone getInstance(){
        if(aswSingleTone==null){
            aswSingleTone = new AswSingleTone();
        }
        return aswSingleTone;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }


    // İNTERNETTEN BULDUKLARIM
    //Sınıfı clone sihirli metoduyla kopyalamaya çalıştığımızda CloneNotSupportedException ile kopyalanmasını engelliyoruz.
    @Override
    public Object clone() throws CloneNotSupportedException
    {
        throw new CloneNotSupportedException("Ben eşsiz bir parçayım");
    }



}
```


## Kullanımı
> AswSingleTone aswSingleTone = AswSingleTone.getInstance();
