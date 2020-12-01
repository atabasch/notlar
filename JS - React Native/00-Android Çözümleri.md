# ► GENEL GRADLE HATASI
Bir gradle hatası aldığında uygulamanın **android** klasörünü **Android Studio** programı ile aç ve yeni eklenen kütüphaneler varsa onların **build.gradle** dosyalarının güncellenmesini bekle.

# ► FlatView Sınırsız Scroll Sorunu

- **onEndReachedThreshold** Android platformda  0 değeri alamaz. **.2** olarak vermeyi dene.
- Bir arama yapıldığında yada ekranın yüksekliğini dolduran içerik olmadığında **onEndReached** sürekli çalışmaya devam edecektir. Bunu aşağıdaki gibi engelle.

```js
constructor(){
    super()
    this.duringMomentum = false;
}

loadMoreFonksiyonu = ()=>{
    if(!this.duringMomentum){
        // Daha fazla yükleme işlemleri
        this.duringMomentum=false;
    }
}

aramaKutusuRender = ()=>{
    return(
        <TextInput
        onFocus={ () => this.duringMomentum=true } // Inputa focus olununca loadMore çalışmasın
        onBlur={ () => this.duringMomentum=false } // Inputtan focus iptal olunca loadMore artık çalışabilir.
        ></TextInput>
    );
}
```

# ► İZİN İSTEMEK
Döküman: https://facebook.github.io/react-native/docs/permissionsandroid

#### react-native kütüphanesinden izin nesnesini dahil et.
```js
import {PermissionsAndroid, Platform} from 'react-native';
export default class Uygulama extends Component {

 // Gereken yerde kullan.
 izinIstemeFonksiyonu = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA, // Hangi izin istenecekse
      {
        title: 'Cool Photo App Camera Permission', // İzin isterken ki başlık
        message: 'Cool Photo App needs access to your camera ', // İzin isterken ki mesaj
        buttonNeutral: 'Ask Me Later', // Sonra sor yazısı
        buttonNegative: 'Cancel', // İzin vermeme butonu
        buttonPositive: 'OK', // İzin verme butonu
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) { // İzin verildikten sonraki işlemler
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');  // İzin verilmezse yapılacak işlemler
    }
  } catch (err) {
    console.warn(err);
  }
}

  render() { }
}

```
