# BROADCAST RECEIVERS
- Aktiviteler arası veri alış verişi.
- Sisteme mesaj gönderim mesaj almak
- Şarj durumunu almak
- Bir arama gelince farkına varmak
- Diğer uygulamalar arası iletişim.

---
# DYNAMIC BROADCAST RECEIVERS
---

**Oluştur:** BroadcastingReceiverClassName.java
```java
public class BroadcastingReceiverClassName extends BroadcastReceiver{

    // Yayın alınınca ne yapılacak?
    @Override
    public void onReceive(Context context, Intent intent){

    }

}
```

## Activity içinde kullanılma şekli.


```java
public class MainActivity extends ...{

    BroadcastingReceiverClassName broadcastingReceiverClassName;

    @Override
    protected void onCreate(){
        broadcastingReceiverClassName = new BroadcastingReceiverClassName();
    }

    @Override
    protected void onResume(){
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction(Intent.AACTION_NAME);
        registerReceiver(broadcastingReceiverClassName, intentFilter);
        /*
        TELEFON AİRPLANE MODA GEÇTİYSE
        TELEFON CEVAPLANDIYSA
        TELEFONUN BATARYA DURUMU DEĞİŞTİYSE
        BATARYA DURUMU KRİTİK HALE GELDİYSE
        Intent.ACTION_BATTERY_LOW = BATARYA DÜŞÜK SEVİYEYE GELDİ.
        */

    }

    @Override
    protected void onPause(){
        unregisterReceiver(broadcastingReceiverClassName);
    }

}
```


---
# STATIC - TEMEL BROADCAST KULLANMAK
---
### ANDROİD MANIFEST İÇİNE KAYIT EDİLEN ŞEKİLDE

---

#### ACTİVİTY İÇİNDE BROADCAST İLE ÇALIŞMAK
AndroidManifest.xml içinde tanımla
```xml
<application>
    <receiver android:name="">.MainActivity$İçerdekiBroadcastSinifi</receiver>
    <receiver android:name="">.FarkliBroadcastSinifi</receiver>
</application>
```


```java
class MainActivity extends ...{

    //...
    @Override
    protected void onCreate(){
        //...
    }

    public void calistir(){
        Intent intent = new Intent(this, BroadcastSinifi.class);
        sendBroadcast(intent);
    }

    // BU SINIFI ACTİVİTY İÇİNDE KULLANMAK YERİNE AYRI OLUŞTURABİLİRSİN.
    public static class BroadcastSinifi extends BroadcastReceiver{

        @Override
        public void onReceive(Context context, Intent intent){
            // Çalışacak kodlar
        }

    }

}
```

### BROADCAST İÇİNE VERİ YOLLAMAKA
###  #1
##### VERİYİ GÖNDERMEK
```java
Intent intent = new Intent(this, BroadcastClass.class);
intent.putExtra("key", "val");
sendBroadcast(intent);
```

##### VERİYİ ALMAK
```java
public void onReceive(Context context, Intent intent){
    String degisken = intent.getStringExtra("key");
}
 ```
---
 ###  #2
 ##### VERİYİ GÖNDERMEK
 ```java
 Intent intent = new Intent(this, BroadcastClass.class);

 Bundle bundle = new Bundle();
 bundle.putString("key", "val");
 bundle.putInt("key", val);

intent.putExtras(bundle);

 sendBroadcast(intent);
 ```

 ##### VERİYİ ALMAK
 ```java
 public void onReceive(Context context, Intent intent){
    Bundle bundle = intent.getExtras();
    bundle.getString("key");
 }
  ```





#
