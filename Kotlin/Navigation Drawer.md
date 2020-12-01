# YANDAN KAYARAK GELEN NAVİGASYON MENÜSÜ

Versionu ayarla
> implementation 'com.android.support:design:28.0.0'

## 1. AÇILIR MENÜ İÇİN BİR MENÜ OLUŞTUR
Önccelikle "res" klasörü üzerinde sağ click "new res directory" diyerek "menu" klasörü oluşturulmalı

Daha sonra menu içinde sağ tuş new menu resource file diyerek bir menu dosyası oluşturulmalı
```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <group android:checkableBehavior="single" >
        <item
            android:id="@+id/navProducts"
            android:icon="@drawable/ic_store_black_24dp"
            android:title="Ürünler" />
        <item
            android:id="@+id/navOrder"
            android:icon="@drawable/ic_local_grocery_store_black_24dp"
            android:title="Siparişler" />
    </group>
    <item android:title="İletişim" >
        <menu>
            <item
                android:id="@+id/navContact"
                android:icon="@android:drawable/stat_sys_speakerphone"
                android:title="Bize Ulaşın" />
        </menu>
    </item>
</menu>
```

## AnaActivity İÇİNDEKİ ANA LAYOUTU DrawerLayout ile değiştir
- activity_layout un Dış layoutubu "DrawerLayout" olarak ayarla ve
- "DrawerLayout" un fitSystemWindows özelliğini true yap
