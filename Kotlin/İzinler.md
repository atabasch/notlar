# İZİNLER AndroidManifes.xml dosyasına eklenmeli

> <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"></uses-permission>

# .KT DOSYASINDAN İZİN İSTEME
```java
    //KULLANICI İZİN VERMEDİYSE
    if(ContextCompat.checkSelefPermission(this(context), Manifes.permission.IZIN_ADI) != PackageManager.PERMISSION_GRANTED){
        // İZİN İSTE
        ActivityCompat.requestPermissions(this(activity), arrayOf(Manifes.permission.IZIN_ADI), CUSTOM_REQUEST_CODE)
    }else{
        // ZATEN İZİN VERİLMİŞ İSE YAPILACAK İŞLER.
    }

    // İZİN İSTENEN POPUPTA KULLANICININ BASTIĞI BUTTON İŞLEMLERİ
    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        // İZİN İŞLEMİ YAPILDIYSA VE İZİN VERİLDİYSE
        if(grantResults.size > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED && requestCode==CUSTOM_REQUEST_CODE){
            // KULLANICI İZİN VERDİYSE YAPILACAK İŞ
        }else{
            // İZİN VERMEDİYSE YAPIALCAK İŞ
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    }
```
