Firebase Google'ın sağladığı bir cloud hizmeti.
Database, Login, Dosya yüklenecek alan gibi hizzmetler sağlar.
Kendi modülleri ile otomatik işlemler yaptırır.

# KURULUM
- Firebase gir
- Login ol
- Yeni Proje Oluştur
- Proje Adı: İstediğini Yaz
- Google analitik bilgisi vermek zorunda değilsin.
- Create Project ile oluştur
- Continuie tıkla
- Develop Kısmından kullanmak istediğin modüle tıkla.

# PROJEYİ BAĞLAMAK
- Firebase sayfasında Project Settings
- ANDROİD BUTONUNA TIKLA
- Package name i projeden al ve yaz.
- App için bir nickname
- Register App
- Dosya verecek dosyayı al ve söylenen gibi projene ekle
- SDK ekleme işlemini sitede görüldüğü gibi yap.
- Sync Now tıkla
- implementasyon linklerini developer andoir sitesinden bulmalısın.

# KULLANICI İŞLEMLERİ
- Firebase sayfasında "Authentication" hizmeti ile yapılan işlemlerdir.
- Google Firebase sayfasında bu hizmeti öncelikle aktif etmek gerekir.
- Kullanıcıları nasıl kaydedeceğimizi seçmemiz gerekir.
- E-mail/Password gibi

```kotlin
val auth = FirebaseAuth.getInstance()

// KAYIT İŞLEMİ
auth.createUserWithEmailAndPassword(email, password)
.addOnCompleteListener{ task ->
  task.isComplete
  task.isCancelled
  if(task.isSuccessful){

  }
}.addOnFailureListener{ exception ->
  if(exception != null){ // MESAJ => exception.localiteMessage.toString() }
}

// LOGİN İŞLEMİ
auth.signInWithEmailAndPassword(email, password)
.addOnCompleteListener{ task -> }
.addOnFailureListener{ exception ->}

// LOGOUT İŞLEMLERİ
auth.signOut()

// KULLANICI HATIRLAMA GİRİŞ YAPMIŞ KULLANICIYI BULMAK
val currentUser = auth.currentUser
if(currentUser != null){

}
```



#
