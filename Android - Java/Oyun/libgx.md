# LIBGDX OYUN YAZMAK İÇİN GELİŞTİRİLEN BİR KÜTÜPHANEDİR.

## KURULUM
- https://libgdx.badlogicgames.com web sitesine git.
- Download > "Download Setup App" ile .jar dosyasını indir.
- .jar dosyasına çift tıkla. Bir proja oluşturmakl için kurulum ekranı gelecek.
- NAME: Proje Adı
- PACKAGE: com.kullanıcıadı.projeadi
- GameClass: BirClassName
- Destination: Proje neryee kayıt edilecek
- Android SDK: SDK yolu girilmeli: *Sdk yolunu "Android studio > Tools > Android > SDK Manager" dan öğrenebilirsi.*
- SUB PROJECTS: Oyun hangi platformlar içinb yazılacak.
- GENERATE butonuna tıkla.
- BUİLD SUCCESSFUl yazısı gelince Libgdx kurulum programını kapatabiliriz.
- Android Studio da Open Project ne ve "Destination" bölümüne yazdığın klasörü seç.
- Kodları Core klasörü altında yazacaksın.

**Yapacağın oyun için ücretsiz görseller istersen**
https://opengameart.org

- resim görselleri "core > assets" klasörü içerisine eklenmeli.
- Oyun kodları "core" klasörü altındaki java dosyalarına yazılır.
- **create** methodu oyun ilk açıldığında çalışan kodlara aittir. Benzer: onCreate
- **render** methodu oyun içinde sürekli çalışan kod bloğudur.


### GÖRSELLERİ ALIP EKRANA ÇİZMEK
```java
    SpriteBatch batch = new SpriteBatch(); //Çizimler ile alakalı nesne
	Texture img = new Texture("assets-klasöründeki-resim-dosyasi.uzanti"); // Texture her görselin kendisi anlamına gelir.

    batch.begin(); // Çizime başla
	batch.draw(img, X, Y, W, H); //görseli ekranın X be Y noktasına W, H boyutlarında çiz
	batch.end(); // Çizimi bitir
```

### EKRAN ATIKLAMA ALGILAMA
Bu kod render fonksiyonu içine yazılır.

> if( Gdx.input.justTouch() ){ // Çalışacak kodlar }


### NESNELERİN BİRBİRİNE DEĞİMESİNİ ANLAMAK
Nesnelerin birbirine değmesini anlamak için.
Nesneler dışında kare, daire gibi şekiller çizmemiz gerekiyor.
Ardından bu şekillerin birbirine değdiğini algılayabiliriz.

#### GÖRÜNMEYEN DAİRE ÇİZMEK
**not** X ve Y koordinatları erkandaki objenin x ve y koordinatlarına genişlik ve yükseklik değerlerinin yarısının eklenmiş hali olmalı.
Ör: Ekranda 300 x 200 koordinatına eklenmiş 100x100 ölçülerinde bir görsel için çizilen dairenin x ve y koordinatları 350, 250 olmalı.
Yarıçap olarakta nesnenin boyutunun yarısı girilmeli 200 boyutundaki nesne için tam daire yarı çapı 100 dür.

```java
Circle objDaire = new Circle(); // Daire çizimi için nesneyi oluştur
objDaire.set(XforScreen, YforScreen, Yarıçap);
```

#### ÇARPIŞAN ŞEKİLLERİ BULMAK
Bu kodu render fonksiyonu altına yazabilirsin.
```java
if(Intersector.overlaps(1.daireObjesi, 2.daireObjesi)){ // parametrelerdeki 2 Circle objesi çarpışırsa kod çalışır.
    // 2 obje çarpışınca çalışacak kodlar
}
```

### EKRANA GÖRÜNÜR ŞEKİL ÇİZMEK
```java
public ShapeRenderer shapeRenderer;
shapeRenderer = new ShapeRenderer();

shapeRenderer.begin(ShapeRenderer.ShapeType.Filled);
shapeRenderer.setColor(new Color(100, 0, 100, 0.2f));
shapeRenderer.circle(XforScreen, YforScreen, Yarıçap); // 1. ÇİZİM
shapeRenderer.circle(XforScreen, YforScreen, Yarıçap); // 2. ÇİZİM
shapeRenderer.circle(XforScreen, YforScreen, Yarıçap); // 3. ÇİZİM
shapeRenderer.circle(XforScreen, YforScreen, Yarıçap); // 4. ÇİZİM
shapeRenderer.end();
```


### EKRANA YAZI YAZDIRMAK
Yazılacak yazılar batch.end kodundan önce yazılmalı.
Çünkü 1. parametre SpriteBatch nesnesi olacaktır.
```java
BitmapFont bitmapFont = new BitmapFont();
bitmapFont.setColor(Color.WHITE);
bitmapFont.getData().setScale(5);
bitmapFont.draw(SpriteBatchNesnesi, "String değer", X, Y);
```
