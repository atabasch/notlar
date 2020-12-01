### npm ile oluşturulmuş işlemler için eklenecek kod.
```js
import "firebase/auth";
```
**NOT** Google Firebase Authentication sayfasından kullanılacak olan giriş yöntemini seçmen gerekir.

## 1) Oturum İşlemlerini Dinlemek
Oturum işlemlerini senkronize olarak dinler. Bir kişi login yada logout olduğunda bilgilerini döndürür.
 ```js
 firebase.auth().onAuthStateChanged( firebaseUser => {
     console.log(firebaseUser);
 } )
 ```

## 2) Email ile Kullanıcı Hesabı Oluşturmak
```js
firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( user => {

} ).catch( err => {

} )
```

## 3) Email ile Oturum Açma İşlemi
İşlem gerçekleştiğinde **onAuthStateChanged** tetiklenecektir ve promise olarak login olan user bilgisi return edilecek.
```js
firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( user => {

} ).catch( err => {

} )
```

## 4) Oturum Kapatma
```js
firebase.auth().signOut();
```
