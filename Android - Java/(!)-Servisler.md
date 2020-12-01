# Android Servisler
Nedir: Servisler genel olarak uygulamada arka planda kullanılan uzun süren işlemleri yapmaya yarayan işlemlerdir.
Kullanıcılar servisleri görmez. Servis arka planda çalışır.

Bazı servisler ön planda da çalışabilir.
Bound servisler de vardır. Başka compenentlerle beraber çalışır.

# SERVİS SINIFI OLUŞTURMAK

AndroidManifest.xml içine oluşturduğun servis sınıfını eklemeyi unutma
<application> içine activitylerden sonra
> <service android:name=".CustomClass"></service>

```java
class CustomClass extends Service{

    @Nullable
    @Override
    public IBinder onBind(Intent intent){
        return null;
    }

    // Bu sınıfa ait  Override edilebilir. lifecycle methodları vardır.
    // onCreate, onDestroy, onStartCommand,

}
```

## SERVISLERİ BAŞLATMAK YADA DURDURMAK
```java

Intent intent = new Intent(getApplicationContext(), CustomServiceClass.class);
startService(intent);

Intent intent = new Intent(getApplicationContext(), CustomServiceClass.class);
stopService(intent);



```

# THREAD İŞLEMLERİ

## ÇALIŞAN THREAD İSMİNİ ALMAK
> Thread.currentThread().getName();

## THREAD BEKLETMEK
> Thread.sleep(1000);

---
# ASENKTRON İŞLEMLER YAPAN ALT SINIF OLUŞTURMAK
```java
class MainActivity{

    public void methodName(){
        AsyncTaskingClass asyncTaskingClass = new AsyncTaskingClass();
        asyncTaskingClass.execute(1.parametre, 2.parametre);
    }

    class AsyncTaskingClass extends AsyncTask<Input, Progress, Result>{
        /*
            3 parametre verilecek AsyncTask<?, ?, ?> Bu değerler şölye
            1. Biz ne değer vereceğiz sayı ise Integer yazıiçin String vs
            2. Progress bar için değer kullanmayacaksan Void gir
            3. Bize ne değer döndürecek kullanmayacaksan Void    

        */

        // Override methodları
        protected void doInBackground(Type... params){ // Arkaplanda çalışacak kodların methodu    

            //params[0];
            //params[1];
            //params[2];

        }
        // onPreExecute() // doInBackground işleminden önce çalıaşcak
        // onPostExecute()  // doInBackground işleminden sonra çalışacak
        // onProgressUpdate()  // progress süresince bir update yapmak istersek o

    }

}
```

# AsyncTask KULLANMADAN DOWNLOAD İŞLEMİ BAŞKA BİR THREAD KULLANMAK

2 tane sınıf olacak
- MainActivity yada CustomActivity,
- Arkaplanda çalışacak olan kod sınıfı.


### INTENT SERVİSLER
```java
class DownloadClass extends IntentService{

    public DownloadClass(){
        super("Random Name");
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent){        String var = intent.getStringExtra('key'); // Activitiden herhangi bir değer almak.
        ResultReceiver resultReceiver = intent.getParcelableExtra('resultReceiver'); // Activiteye sonucu döndüreceğiz.

        Bundle bundle = new Bundle();
        bundle.putString('result', values);
        resultReceiver.send(customResutlCode, bundle); // DownloadClass dan resultReceiver aracılığı ile Activiteye veri göndermek.
    }

    // onCreate
    // onDestroy

}
```
## INTENT SERVİSİNİ KULLANMAK
```java
class mainActivity{

    //...

    Handler handler = new Handler();

    public void currentMethod(){
        ResultReceiver resultReceiver = new MyResultReceiver(null);

        Intent intent = new Intent(this, DownloadClass.class);
        intent.putExtra('key', val);
        intent.putExtra('resultReceiver', resultReceiver);

        startService(intent); // Arkaplanda DownloadClass onHandleIntent methodu çalışır.
    }


    public class MyResultReceiver extends ResultReceiver{

        public MyResultReceiver(Handler handler){
            super(handler);
        }

        public void onReceiveResult(int resultCode, Bundle resultData){
            if(resultCode == customResutlCode && resultData != null){
                handler.post(new Runnable{

                    @Override
                    public void run(){
                        String result = resultData.getString('DownloadClassdan 1 bundle key');

                    }
                });
            }
            super.onReceiveResult(resultCode, resultData);
        }

    }

}
```

---
# STICKY SERVIS
---
## UYGULAMA KAPANSA BİLE ARKAPLANDA ÇALIŞAN SERVİS YAZMAK
**Oluştur:** StickyService.java
```java
public class StickyService extends Service{

    @Nullable
    @Override
    public IBinder onBind(Intent intent){

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId){

        // Çalışacak kodlar
        return super.onStartCommand(intent, flags, startId);
        /*
        ### return için verilebilecek öğeler ###
        return START_STICKY; Arkaplanda devamlı çalışması gereken işlemler için verilir.
        return START_NON_STICKY;
        */
    }

    @Override
    public void onDestroy(){
        super.onDestroy();
    }

}
```

#### SERVİSİ AndroidManifest dosyasında tanımla
```xml
<application>
    <service android:name=".ServiceClassName"></service>
</application>
```

### SERVİSİ KULLANMAK
```java
class MainActivity extends AppCompatActivity{

    public void baslat(){
        // Seervice dosyasındaki onStartCommand() methodunu çalıştırır.
        Intent intent = new Intent(this, ServiceClass.class);
        startService(intent);
    }

    public void durdur(){
        // Service dosyasındaki onDestroy komutunu çağırır.
        Intent intent = new Intent(this, ServiceClass.class);
        stopService(intent);
    }

}
```























#
