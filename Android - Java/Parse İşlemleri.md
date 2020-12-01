#PARSE nedir
Parse farklı yazılım dilleri ile kulllanılabilen online bir paltform.
Kayıt olunca Ayda 10k istek gönderilebilen bir database olur.

## KURULUM
https://parseplatform.org
android için uygun sürümü bul ve kurulum yap.



### 1.17.3 için
"build.gradle"
```
ext {
    parseVersion = "1.17.3"
}
dependencies {
    ...
    implementation "com.parse:parse-android:$parseVersion"
    implementation "com.parse:parse-fcm-android:$parseVersion"
}
```

### HANGİ SİTELERDEN KULLANILABİLİR.
#### back4app.com
• back4app.com üye ol
• App oluştur
• App içinde Server Settings > Core Settings sayfasından gerekli bilgileri bul.

#### asw.amazon.com
• Alternatif olarak https://aws.amazon.com dan yapabilirsin.
• Compute > EC2 servisine gir.
• Launce Instance
• ASW Marketplace Arat: Parse
• Parse Server bitnami SELECT  oanyla
• Instance type seç
• Launce tıkla
• keypari oluştur kaybetme




Ardından **ParseStarterClass.java** dosyası oluştur ve içine aşağıdaki kodları yaz.
```java
public class ParseStarterClass extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        Parse.setLogLevel(Parse.LOG_LEVEL_DEBUG);
        Parse.initialize( new Parse.Configuration.Builder(this)
            .applicationId("APPLOCATION_ID")
            .clientKey("CLIENT_KEY")
            .server("SERVER_URL")
            .build()
        );


    }

}
```



## VERİ KAYIT İŞLEMİ
```java
ParseObject parseObject = new ParseObject("object_yani_tablo_adı");
parseObject.put("key", value);
parseObject.put("key", value);
parseObject.saveInBackground(new SaveCallback() {
    @Override
    public void done(ParseException e) {
        if(e != null){
            e.getMessage()
            e.getCode();
            e.printStackTrace();
        }else{
            // KAYIT İŞLEMİ BAŞARILI
        }
    }
});
```



## VERİ KAYIT İŞLEMİ GÖRSELLİ
```java
ParseObject parseObject = new ParseObject("object_yani_tablo_adı");
parseObject.put("key", value);
parseObject.put("key", value);

Bitmak image = bitmapa_dönüştürülmüş_resim;
ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
image.compress(Bitmap.CompressFormat.PNG, 75, byteArrayOutputStream);
byte[] imgByte = byteArrayOutputStream.toByteArray();

ParseFile parseFile = new ParseFile("image.png", imgByte);
parseObject.put("image", parseFile);

parseObject.saveInBackground(new SaveCallback() {
    @Override
    public void done(ParseException e) {
        if(e != null){
            // HATALI OLURSA YAPILACAK İŞLEM
        }else{
            // İŞLEM BAŞARILIYSA YAPILACAK İŞLEM
        }
    }
});
```




## KULLANICI KAYIT İŞLEMİ YAPMAK
```java
ParseUser parseUser = new ParseUser();
parseUser.setUsername("Kullanıcı Adı");
parseUser.setPassword("Şifre");
parseUser.setEmail("Email Adresi");
parseUser.signUpInBackground(new SignUpCallback() {
    @Override
    public void done(ParseException e) {
        if(e != null){
            // İşlem sonucu hatalıyas
        }else{
            // Kayıt işlemi başarılıysa
        }
    }
});
```





## KULLANICI GİRİŞ İŞLEMİ YAPMAK
```java
ParseUser.logInInBackground("username", "setPassword", new LogInCallback(){
    @Override
    public void done(ParseUser user, ParseException e) {
        if(e != null){
            // İŞLEM BAŞARISIZ OLUNCA
        }else{
            // GİRİŞ İŞLEMİ BAŞARILI OLUNCA YAPILACAK İŞLEMLER
        }
    }
});
```




## KULLANICIYI HATIRLAMA
```java
// oncreate içine direk yazılabilir.
ParseUser parseUser = ParseUser.getCurrentUser();
if(parseUser != null){
    parseUser.getUsername()
}
```




## TEK VERİ ÇEKME İŞLEMİ
```java
ParseQuery<ParseObject> query = ParseQuery.getQuery("object_yani_tablo_adı");
query.getInBackground("itemID", new GetCallback<ParseObject>() {
    @Override
    public void done(ParseObject object, ParseException e) {
        if(e != null){
            // İŞLEM HATALIYSA
        }else{
            // VERİ ÇEKİLDİYSE YAPILACAK İŞLEM
            String key = object.getString("val");
            int key = object.getInt("val");
        }
    }
});
```




## ÇOKLU VERİ ÇEKME İŞLEMLERİ
```java
ParseQuery<ParseObject> parseQuery = ParseQuery.getQuery("object_yani_tablo_adı");
//parseQuery.whereEqualTo() a==b
//parseQuery.whereLessThan(k, v); k < v
//parseQuery.whereLessThanOrEqualTo();    k <= v
//parseQuery.whereGreaterThan(); k> v
//parseQuery.whereGreaterThanOrEqualTo() v>=v
parseQuery.findInBackground(new FindCallback<ParseObject>() {
    @Override
    public void done(List<ParseObject> objects, ParseException e) {
        if(e != null){
            // VERİ ÇEKİLEMEZSE ÇALIŞACAK KODLAR
        }else{
            // VERİ ÇALIŞINCA ÇALIŞAN KODLAR
            for (ParseObject obj : objects){
                String key = obj.getString("key");
                int key = obj.getInt("key");
            }
        }
    }
});
```


## VERİ ÇEKERKEN GÖRSEL ÇEKMEK
```java
ParseFile parseFile = obj.getParseFile("image_key");
parseFile.getDataInBackground(new GetDataCallback() {
    @Override
    public void done(byte[] data, ParseException e) {    
        if( e != null){
            // Hata olunca çalışacak kodlar
        }else{
            Bitmap bitmap = BitmapFactory.decodeByteArray(data, 0, data.length);
        }
    }
});
```

#### ÖRNEK KULLANUM
```java
ParseQuery<ParseObject> parseQuery = ParseQuery.getQuery("object_yani_tablo_adı");
parseQuery.findInBackground(new FindCallback<ParseObject>() {
    @Override
    public void done(List<ParseObject> objects, ParseException e) {
        if(e != null){
            // VERİ ÇEKİLEMEZSE ÇALIŞACAK KODLAR
        }else{
            // VERİ ÇALIŞINCA ÇALIŞAN KODLAR
            for (ParseObject obj : objects){


                // RESİM ÇEKME İŞLEMİ BAŞLANGICI
                ParseFile parseFile = obj.getParseFile("image_key");
                parseFile.getDataInBackground(new GetDataCallback() {
                    @Override
                    public void done(byte[] data, ParseException e) {    
                        if( e != null){
                            // Hata olunca çalışacak kodlar
                        }else{
                            Bitmap bitmap = BitmapFactory.decodeByteArray(data, 0, data.length);
                        }
                    }
                });
                // RESİM ÇEKME İŞLEMİ SONU


            }
        }
    }
});
```
