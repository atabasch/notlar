
# (2) Storage
Resim ve Video barındırma alanıdır.

```js
//npm kullanıyorsun bunu da import etmelisin.
import "firebase/storage";

// erişim yolu
firebase.storage()
```


#### Klasörler arası gezinme
```js

let img = firebase.storage().ref('path/img.png');

let ref = firebase.storage().ref();

let img = ref.child('path/img.png');

let img = ref.child('path').parent.child('img.png');

let img = ref.child('path/path2/path3').root.child('img.png');

img.fullPath;

img.name;

```

## (2.1) Dosya Yükleme
```js
firebase.storage().ref().put(Blob or File).then( snapshot => {} );


firebase.storage().ref().putFile(base64 || base64url || data_url).then(s=>{});
```


## (2.2) Dosya Url Bulma
Dosya okumak için Kurallardan okuma izniini vermen gerekiyor.
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow write: if request.auth != null;
      allow read;
    }
  }
}
```

```js
firebase.storage().ref('/path/img.png').getDownloadURL().then( url => {
  this.src = url;
} );
```
