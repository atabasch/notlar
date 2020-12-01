# Kurulum

Google firebase sayfasına git ve yeni bir proje oluştur sana verilen config ayarlarını bul ve al. Config ayarları bir javascript objesi şeklindedir.

Aşağıdaki örnekte firebase npm ile indirilmiştir ve herhangi bir nodejs projesine dahil ediliyor. Eğer düz JS ile kullanacaksan import işlemini google dökümanlarından script src ile yapman gerekiyor.

#### İndirme
> npm install --save firebase

###### Yapılandırma (firebase.js)
```js
import firebase from "firebase/app";

// firebase realtime database kullanmak için gerekir.
import "firebase/database";

const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "appname.firebaseapp.com",
    databaseURL: "https://appname.firebaseio.com",
    projectId: "appname",
    storageBucket: "appname.appspot.com",
    messagingSenderId: "YYY",
    appId: "ZZZ"
  };

// diğer dosyalardan direkt firebase import ederek kullanılacak
export default firebase.initializeApp(firebaseConfig);
```
