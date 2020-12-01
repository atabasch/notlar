# KULLANICI İZİNLERİNİ ALMAK
Öncelikle gerekli olan isimleri AndroidManifest.xml dosyasına yazmak gerekiyor.
Bu izinler **normal** ve **tehlikeli** izinler olarak ayrılır. normal izinleri sadece manifeste eklemek gerekir.
Ama tehlikeli izinler için kullanıcıdan onay almak gereklidir.

## ADIM 1 → ManifestDosyasına gerekli izinleri eklemek
↓ "AndroidManifest.xml"
```xml
<manifest ...>

	<uses-permission android:name="android.permission.IZIN_ISMI"/>

	<application ...>
	...
	</application>
</manifest>
```

| ! | IZIN_ISMI | NEDİR? |
| :--- | :------------ | :------------ |
|  | INTERNET | İnternet erişimi için |
| ! | READ_EXTERNAL_STORAGE | Telefon ve SD kart media dosyalarına ulaşmak için |
| ! | WRITE_EXTERNAL_STORAGE | Telefon ve SD kart media dosyalarına yazmak için |
|  | READ_CALENDAR | Takvim etkinliklerini okuyabilme |
|  | WRITE_CALENDAR | Düzenleme vew yeni etkinlik ekleme  |
|  | CAMERA | Kamera izni |
|  | READ_CONTACTS | Kişileri görme |
|  | WRITE_CONTACTS | Yeni kişi ekleme |
|  | GET_ACCOUNTS | Hesap listesine etişme |
|  | ACCESS_COARSE_LOCATION | Hücresel veri ve Wi-Fi bağlantı noktaları kullanılarak yaklaşık olarak konumuza erişilebilir  |
|  | ACCESS_FINE_LOCATION | GPS ile tam konuma erişme |
|  | RECORD_AUDIO | Ses kaydı |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |


## ADIM 1 → Tehlikeli izinler için java ile izin almak
**Class içinde izin kontrolü**

```java
public void izninLazimOlacagiMethod(){
	// İZİN İSTEME İŞLEMLERİ
    if(ContextCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.IZIN_ISMI) != PackageManager.PERMISSION_GRANTED){
        ActivityCompat.requestPermissions(this, new String[]{ Manifest.permission.IZIN_ISMI }, IntegerTurundeIstegeBagliBirRequestKodu );
    }else{
        // İZİN ZATEN VERİLMİŞ İSE YAPILACAK İŞLMELER
    }
}

// İZİN İSTENDİĞİNDE KULLANICININ BASTIĞI DÜĞMELERLE ALAKALI İŞMELER
@Override
public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {

    if(requestCode == IntegerTurundeIstegeBagliBirRequestKodu){
        if( grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED ){
            // KULLANICI İZİN VER BUTONUNA BASMIŞ İSE YAPILACAK İŞLEMLER
        }
    }

    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
}

```
