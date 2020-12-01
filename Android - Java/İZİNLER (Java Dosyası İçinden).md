# İZİN ALMA İŞLEMLERİ
## HAZIR KODLAR DAHA AŞAĞIDA

• ContextCompat: İçerik Uyumluluğu
Check Self Permission: Kendinden izin al
PackageManager: Paket yöneticisi
PERMISSION_GRANTED : izin verildi

### • İZİNLERİ JAVA DOSYASINDAN İSTEMEDEN ÖNCE AndroidManifest.xml DOSYASINDA BELİRTLİLMELİ
```java
// İZİN VERMİŞ İSE
if(ContextCompat.checkSelfPermission( activityContext, Manifes.permissions.IZIN_ISMI ) == PackageManager.PERMISSION_GRANTED){

}

// İZİN VERİLMEMİŞ İSE
if(ContextCompat.checkSelfPermission( activityContext, Manifes.permissions.IZIN_ISMI ) != PackageManager.PERMISSION_GRANTED){

}

// İZNİ İSTEYEBİLECEK MİYİZ?
// Daha önceki izin isteme işleminde kullanıcı "Bir daha gösterme" seçeneğini seçmiş ise izin istenemez.
if( ActivityCompat.shouldShowRequestPermissionRationale(activity, Manifest.Permission.IZIN_ISMI) ){

}

// İZİN İSTEME İŞLEMİ
// 2. parametre bir string dizisi çünkü birden fazla izin aynı anda istenebilir
// requestCode daha sonra izni kontrol etme işlemi için bizim belirlediğimiz hehangi bir kod olmalı
ActivityCompat.requestPermission(activity, new String[]{Manifes.permissions.IZIN_ISMI}, requestCode);


// İZİN VERİLEMİYORSA KULLANICIYI İZİN SAYFASINA YOLLAMAKA
Intent intent = new Intent();
intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
Uri uri = Uri.fromParts("package", MainActivity.this.getPackageName(), null);
intent.setData(uri);
MainActivity.this.startActivity(intent);
```




#JAVA DOSYASI İÇİNDE İZİN ALMAK
```java
//...

public class MainActivity extends BlaBlaBla{

    //...

    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

        //İSTENİLEN İZİN VERİLMEMİŞ İSE
        if(ContextCompat.checkSelfPermission(this, Manifest.permission.ALINACAK_IZIN_KODU) != PackageManager.PERMISSION_GRAND){
            // İZNİ İSTE
            ActiviyCompat.requestPermission(this, new String[]{ Manifest.permission.ALINACAK_IZIN_KODU }, intDeğerindeBirSayı);
        }else{
            // ZATEN İZİN VERİLMİŞ İSE ÇALIŞACAK KODLAR
        }

    }

    //KULLANICI BU DOSYA İÇİNDEN İZİN VERİRSE ÇALIŞACAK KODLAR
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if(grantResults.length > 0){
            // HANGİ İZNİ VERDİĞİNİ YAKALAMAK
            if(requestCode==requestPermissionFonksiyonundaBelirtilmişIntDeğerindeBirSayı){
                // İZİN VERİLDİ Mİ
                if(ContextCompat.checkSelfPermission(this,Manifest.permission.ALINACAK_IZIN_KODU) == PackageManager.PERMISSION_GRANTED){
                    // İZİN VERİLDİĞİNCE ÇALIŞACAK KODLAR
                }
            }
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }



}
```

#NOT
İzin verme işlemleri 23 versiyonundan sonra çıkmış bir işlemdir. Eğer programı 23 versiyonundan önceki bir telefon çalıştırırsa izinler gerekmeden çalışır. Aşağıdaki kodlar ile 23 versiyonundan yukarı ise izin iste tarzında kod çalışır

```java

class MainActivity extends BlaBlaBla{

    public void funcName()
    private void uncName()
    {
        if(Build.VERSION.SDK_INT >= 23){
            if(checkSelfPermission(Manifest.permission.ALINACAK_IZIN_KODU) != PackageManager.PERMISSION_GRAND){
                requestPermission(new String[]{ Manifest.permission.ALINACAK_IZIN_KODU }, intDeğerindeBirSayı);
            }else{
                // ZATEN İZİN VERİLMİŞ İSE ÇALIŞACAK KODLAR
            }
        }else{
            //VERSION 23 DEN AŞAĞISI İÇİN ÇALIŞACAK KODLAR
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if(grantResults.length > 0){
            // HANGİ İZNİ VERDİĞİNİ YAKALAMAK
            if(requestCode==requestPermissionFonksiyonundaBelirtilmişIntDeğerindeBirSayı){
                // İZİN VERİLDİ Mİ
                if(ContextCompat.checkSelfPermission(this,Manifest.permission.ALINACAK_IZIN_KODU) == PackageManager.PERMISSION_GRANTED){
                    // İZİN VERİLDİĞİNCE ÇALIŞACAK KODLAR
                }
            }
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

}

```
