## 1. Flutter  Yüklemek
- Flutterın kendi web sitesine giderek zip dosyasını indir
- Zip dosyasını "c:/" dizinine çıkar.
- *Eğer bilgisayar git kurulu değilse git kurulmalı
- Ortam değişkenlerinde Path'e aşağıdaki yolları ekle
    - flutter dosyalarındaki **bin** klasörünü
    - Git yolundaki **bin** klasörünü
    - Git yolundaki **cmd** klasörünü
    - C:\Windows\system32
    - C:\Windows\System32\WindowsPowerShell\"burada versiyon klasörü"\
    - C:\Windows\System32\OpenSSH\

Aşağıdaki kod ile flutter kurulumunu test et.
> flutter doctor

Eğer terminalde flutter kodlarında hata alırsan terminali "Yönetici Olarak Başlat" ile çalıştır.


##  2. Proje Oluşturmak ve ilk çalıştırma

Terminalde projenin oluşacaı klasöre git ve aşağıdaki kodu yaz

```cmd
flutter create projectname --org com.projectname --platform=android,web

cd projectname

flutter run
```

**NOT:** Visual Studio Code programında sağ altta "No Device" yazan sekmeye tıklayarak oradan uygulamanın çalışacağı emülatörü yada tarayıcıyı seçebilirsin.

## 3. Widgetlar
Widgetler temel görünümlerdir. Sayfayı oluşturan komponenttir ve içi doldurulur. 
Ayrıca main içinde runApp'e parametre olarak verilip çalıştırılabilir.


## BAZI BİLGİLER
Değeri değişmeyecek olarak widgetlerin (ör: Daha fazla butonunun değerini ve sitilini dinamik olarak almıyorsan) : işaretinden sonra widget kodlanmaya başlarken "const" ile tanımlarsan performanslı olur.


### 3.1 Stateless Widget

```dart
import 'package:flutter/widgets.dart';

void main(){
    runApp(MyWidget); // Uygulamayı çalıştırır.
}

// Stateles widgetten yeni bir widget oluştur
class MyWidget extends StatelessWidget {

    const MyWidget({super.key})

    @override
    Widget build(BuildContext context){
        
        // Android görünümü oluşturmak için MaterialApp sınıfını kullandık.
        return MaterialApp(

            // Tasarımsal işlemler içinde  Scaffold
            // home: anasayfa için
            home: Scaffold(

                appBar: AppBar(
                    title: Text('App Bar Başlığı'),
                    centerTitle: true,
                    backgroundColor: Colors.indigo
                )

                body: Text('Merhaba')
            )
        )
    }

}

```


### 3.2 Uygulama Fontunu Değiştirmek

    1. Fontu bul ve indir. (Google Fonts olur)
    2. Root dizininde "/assets/fonts" yolunu oluştur ve .tff uzantılı font dosyalarını buraya taşı.
    3. pubspec.yaml dosyasını aç
    4. Yorum satırına alınmış olan **font** ayarlarını düzenle
    5. Fontun kullanılacağı yeri ayarla.
        1. Font tüm widgete etki edecekise "MaterialApp" e uygula.
    
```dart
//...
    return MaterialApp(

        // Tasarımsal işlemler içinde  Scaffold
        // home: anasayfa için
        home: Scaffold(

            theme: ThemeData(
                fontFamily: "", //pubspec.yaml içindeki fontFamily anahtarının değerini yaz.
            ),

            appBar: AppBar(),

            body: Text('Merhaba', 
                style: TextStyle(
                    fontWeight: TextWeight.w600,
                    color: Colors.black
                )
            )
        )
    )
//...
```

### 3.3 Görsel Göstermek

#### 3.3.1 URL den görsel ekleme
```dart
    Image.network('https://....',
        width: 200,
        height: 150,
        fit: BoxFit.cover
    );
```

#### 3.3.2 Assets klasöründen görsel ekleme

- Görseli assets klasöründe bir klasöre taşı
- pubspec.yaml dosyasında tanımla

```yaml
# subspec.yaml
assets:
    - assets/images/
```

```dart
// main.dart
    Image.asset('assets/images/logo.png',
        width: 200,
        height: 150,
        fit: BoxFit.cover
    );
```

### 3.4 Column (Alt Alta) ve Row (Yan yana) widgetleri

```dart
body: Column(
    // Col içindekileri col'a göre dikeyde ortala
    mainAxisAligment: MainAxisAligment.center, 

    // Col içindekile Colun kapsadığı alanma göre yatayda soldan başlat
    crossAxisAligment: CrossAxisAligment.start,

    children: [
        Image.asset('assets/images/1.png'),

        SizedBox(height:50), // 50px değerinde görünmez bir nesne

        Image.asset('assets/images/2.png'),
    ]

)
```

#### 3.4.1 Column ve Rowu Ortalama
```dart
// Colum komponenti yatayda ortalanır
body: Center(
    child: Column(
        children: [
            Image.asset('assets/images/1.png'),
            Image.asset('assets/images/2.png'),
        ]
    )
)
```

### 3.5 Ikonlar ve Butonlar
```dart
    // Buton görünümünde bir buton
    ElevatedButton(
        onPressed: (){}, // Boş fonksiyon
        style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue
        ),
        child: Text('Bana Tıkla', style: TextStyle( ... )) // Texte stil vermek için 
    )

    // Normal Yazı görünümünde tıklanabilir bir buton
    TextButton(
        onPressed: () => print('Tıklandı'),
        child: Text('Buraya Tıkla')
    )

    // Ikon
    Icon(Icons.iconname, color: Colors.red, size: 16),

    // Buton şeklinde oval bir ikonlu buton
    IconButton(
        onPressed: (){},
        icon: Icon(
            Icons.iconname,
            color: red,
            size: 40
        )
    )
```

### 3.6 Container
Stilsiz boş kutulardır şekillendirilip içine eklenebilir
```dart
Container(
    padding: EdgeInsets.all(20), // Her kenara boşluk
    padding: EdgeInsets.symetric(vertical: 20), // Sağdan soldan
    padding: EdgeInsets.only(top: 20), // Sadece üstten
    width: 400,
    height: 300,
    color: Colors.blueGrey, // arkaplan rengi
    child: Text('Deneme'), // Kutunun sol üstüne yazar
    alignment: Alignment.center,
    decoration: BoxDecoration( // ***box decoration kullanılıyorsa color bunun içinde olmalı
        color: Colors.blueGrey,
        borderRadius: BorderRadius.circular(15), // Köşeler oval
    )
)
```

### 3.7 Component

-  Bir fonksiyon gibi oluşturup çağırılabilir.

#### 3.7.1 Aynı Dosyada oluşturup çağırmak
```dart
// ...
child: CustomComponent()
// ...


Container CustomComponent() {
    return Container(
        padding: const EdgeInsets.all(20),
        child: const Text('Test')
    )
}
```

#### 3.7.1 Farklı Dosyada oluşturup çağırmak
**CustomComponent.dart**
```dart
class CustomComponent extends StatelessWidget{
    const CustomComponent({super.key})


    @override
    Widget build(BuildContext context){
        return Container(
            padding: const EdgeInsets.all(20),
            child: const Text('Test')
        )
    }

}
```

```dart
import 'CustomComponent.dart';

// ...
child: CustomComponent()
// ...

```

# 4. Sayfa Gaçişi Navigasyon
    
- /lib/screens/home_screen.dart
- /lib/screens/second_screen.dart

/lib/screens/home_screen.dart
```dart
class HomeScreen extends StatelessWidget{
    const HomeScreen({super.key})

    @everride
    Widget build(BuildContext context){
        return Scaffold(
            appBar: AppBar(/* ... */),
            body: Center(
                child: Column(
                    children: [

                        ElevatedButton(
                            onPressed: (){
                                // 2. Parametrede verilen ekranı 1. ekranın üstüne açar
                                Navigator.push( 
                                    context, 
                                    MaterialPageRoute(
                                        buildre: (context) => const SecondScreen()
                                    )
                                )

                                // 2. Ekranı açıp aktif ekranı kapatır
                                // Navigator.pushReplacement()

                                // İçinde bulunan ekranı kapatır.
                                // Navigator.pop()
                            } ,
                            child: const Text('Sayfa Değiş')
                        )

                    ]
                )
            )
        )
    }
}
``` 


# WIDGETS

## Stack Widget
**Üst üste "Layer Şeklinde" eleman eklemeye yarar.**
Bunu bir zikirmati görselinin ekran kısmına Text eklemek için kullanabilirsin.

```dart
body: Center(
    child: const Stack(
        // childrendeki elemanları ortalayarak üst üste koyar
        alignment: Alignment.center,

        children: [
            Image.asset(/*...*/),
            Text(/*...*/),

            // Text elemanını konumlandırır.
            Positioned(
                top: 20,
                right:50,
                child: Text(/*...*/)
            )
        ]
    )
)
``` 

```dart
``` 

```dart
``` 