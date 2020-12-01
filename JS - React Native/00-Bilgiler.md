## PROJE OLUŞTURMAK
> react-native init projectname

Kursda öğrendiğin version 0.60 dan öncesi 060 dan sonra bir şeyler değişmiş bunu kurman daha iyi.

> react-native init projectname --version 0.59.8

## Uygulama adını değiştirmek.
Global olarak isim değiştiriciyi kur.
> npm install react-native-rename -g

Proje klasöründe aşağıdaki kod ile ismi değiştir.
> react-native-rename "Uygulama Adı"

Eğer **Android** cihazda uygulamayı yeniden başladığında uygulama çöküyorsa işlemleri geri al ve tıpkı android studiodaki gibi **manifest** dosyasından ismi değiş.

## Uygulama iconu belirlemek
- Bilgisayara **ImageMagick** kur.
- Global olarak icon ayarlayacak eklentiyi kur.
  - `npm install -g yo generator-rn-toolbox`
- Resim dosyanı hazırla.
- Aşağıdaki kodu çalıştır.

> yo rn-toolbox:assets --icon icon.png

Sadece IOS
> yo rn-toolbox:assets --icon icon.png --ios

Sadec Android
> yo rn-toolbox:assets --icon icon.png --android

Resmi boyutlandırarak çoğaltır ve ikon olarak ekler.

#### Uygulama iconu belirlemek 2 (Android)
- Googlela `android launcher icon generator`
- Açılan sitede iconunu hazırla ve download et.
- inen dosyaları res klasörünün altındaki klasörleri kopyala
- proje/android/app/src/res klasörüne kopyala.


## Splash Ekran Hazırlama (Sadece Resimli)
- Bilgisayara **ImageMagick** kur.
- Global olarak icon ayarlayacak eklentiyi kur.
  - `npm install -g yo generator-rn-toolbox`
- Resim dosyanı hazırla.  Minimum **2208x2208** ölçülerinde kare bir resim olmalı.

> yo rn-toolbox:assets --splash splashimage.psd[png,jpg,..] --ios
