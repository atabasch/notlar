## FİREBASE
Firebase de tıpkı parse gibi işlemler yapmamızı sağlayana ancak google tarafından verilen bir hizmettir.
Parse OpenSource dur Firebase ise Google'â aittir. Ancak sunucu hizmetini Parse da başka sitelerden alırken
Firebase de Google sunucu hizmetini verir.

### KURULUM
• firebase.google.com web sitesine giriş yap ve Yeni bir proje oluştur.
• Firebase uygulamanızı eklemek için tıklayın bölümünde *Android* ikonuna tıkla.
• Formu doldur
• Uygulamayı kaydet dediğinde uygulamnaya özel bir dosya oluşturuyor.
• AndroidStudio da Proje görünümüne geç ve app dizini altına dosyayı ekle.
• Sitede İleri butonuna tıkla
• Adımları takip ederek gradle ile entegrasyon işlemlerini yap.
• AndroidStudio Senkronizasyon işlemlerini yap.
• Google konsolda ileri de ve uygulamanı çalıştır ki google uygulamayı görsün.

### SİTEDE
Geliştirici menüsü altında
• Authentication altında kullanıcı giriş işlemleri için seçenekleri aktif edebilirsin.
• Database veritabanı
• Storage Dosyalar için alan
Ama bu özellikleri kullanabilmek için tek tek gradle sayfasına eklemelisin.
Android Studio > Tools > Firebase tıkla ve kullanmak istediğin özellikleri oradan nasıl ekleyeceğini görebilirsin.
Özellikler Firebase Toolsunda tek tıkla etkinleşebilir. Ama gradle a yazılan versiyonlar hata verirse versiyon değiştirip hatayı giderebilirsin.




## KULLANICI OLUŞTURMA
```java
private FirebaseAuth mAuth;

@Override
protected void onCreate(Bundle savedInstanceState) {
    ...
    mAuth = FirebaseAuth.getInstance();
}

public void KayıtMethodu(){
    mAuth.createUserWithEmailAndPassword("eposta@adres", "parola")
    .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
        @Override
        public void onComplete(@NonNull Task<AuthResult> task) {
            if(task.isSuccessful()){
                // KAYIT SONRASI YAPILACAK İŞLEMLER
            }
        }
    })
    .addOnFailureListener(this, new OnFailureListener() {
        @Override
        public void onFailure(@NonNull Exception e) {
            // KAYIT SONUCU HATALI OLURSA YAPILACAK İŞLEMLER
        }
    });
}
```


## KULLANICI GİRİŞİ

```java
private FirebaseAuth mAuth;

@Override
protected void onCreate(Bundle savedInstanceState) {
    ...
    mAuth = FirebaseAuth.getInstance();
}

public void actionLogin(View view){

    mAuth.signInWithEmailAndPassword("email@adresi", "şifre")
    .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
        @Override
        public void onComplete(@NonNull Task<AuthResult> task) {
            if(task.isSuccessful()){
                // GİRİŞ SONRASI YAPILACAK İŞLEMLER
            }
        }
    })
    .addOnFailureListener(this, new OnFailureListener() {
        @Override
        public void onFailure(@NonNull Exception e) {
            // GİRİŞ YAPILAMAZSA YAPILACAK İŞLEMLER
        }
    });

}
```

### GİRİŞ YAPMIŞ KULLANICIYI HATIRLAMA
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    ...
    mAuth = FirebaseAuth.getInstance();
    FirebaseUser user = mAuth.getCurrentUser();
    if(user != null){
        // KULLANICI GİRİŞİ YAPILMIŞSA ÇALIŞACAK KODLAR
    }
}
```


### ÇIKIŞ YAPMAK
> mAuth.signOut();



## DOSYA UPLOAD VE VERİTABANI İŞLEMLERİ

- Firebase konsoldan veritabanı oluştur.
- Firebase konsoldan storageyi aktif et.
- Tools > Firebase menüsüne tıkla ve veritabanı ile storage için kurulumlar yap.

### VERİTABANINA KAYIT İŞLEMİ
```java
public class BlaBlaActivity extends AppCompatActivity {

    FirebaseDatabase mFirebaseDatabase;
    DatabaseReference mDatabaseReference;
    FirebaseAuth mFirebaseAuth; // Kullanıcı bilgileri alınacaksa

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // ...
        mFirebaseDatabase = FirebaseDatabase.getInstance();
        mDatabaseReference = mFirebaseDatabase.getReference();
        mFirebaseAuth = FirebaseAuth.getInstance(); // Kullanıcı bilgileri için
    }


    public void saveDatabase(){
        String userID = mFirebaseAuth.getUid(); // Kullanıcı id si
        String primary_key = UUID.randomUUID().toString();
        mDatabaseReference.child("TableName").child(primary_key).child("column_name1").setValue(val1);
        mDatabaseReference.child("TableName").child(primary_key).child("column_name2").setValue(val2);
        mDatabaseReference.child("TableName").child(primary_key).child("column_name3").setValue(val3);
    }


}

```


### FİREBASE VERİTABANINDAN VERİ GETİRME ÇOKLU
```java
public class FeedActivity extends AppCompatActivity {

    FirebaseDatabase mFirebaseDatabase;
    DatabaseReference mDatabaseReference;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //...
        mFirebaseDatabase = FirebaseDatabase.getInstance();
        mDatabaseReference = mFirebaseDatabase.getReference();
    }

    public void getData(){

        DatabaseReference databaseReference = mFirebaseDatabase.getReference("TableName"); // Tablodan referans oluşturur.
        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                // dataSnapshot.getChildren() => Tablodaki tüm satırları çeker.
                for(DataSnapshot ds : dataSnapshot.getChildren()){
                    HashMap<String, String> item = (HashMap<String, String>) ds.getValue();

                    item.get("key");
                    item.get("key");

                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });

    }

}
```

### BİR GÖRSELİ FİREBASE STORAGE DEPOSUNA UPLOAD ETME ÇİLESİ

```java
public class BlaBlaActivity extends AppCompatActivity {

    Uri selectedImage;
    StorageReference mStorageReference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //...
        mStorageReference = FirebaseStorage.getInstance().getReference();
    }

    // CİHAZ GALERİSİNİ AÇIP RESİM SEÇTİRME İŞLEMLERİ
    public void openGallery(){
        Intent galleryIntent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        startActivityForResult(galleryIntent, 2);
    }

    // BUTONA BASILINCA ÖNCE İZİN SOR İZİN VERİLMİŞ İSE GALERİYİ AÇ
    public void selectImage(View view){
        if(ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED){
            ActivityCompat.requestPermissions(this, new String[]{ Manifest.permission.READ_EXTERNAL_STORAGE }, 1);
        }else{
            openGallery();
        }
    }

    // İZİN İSTENDİĞİNDE İZİN VERİLİRSE YAPILACAK İŞLEMLER
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if( requestCode == 1 && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED ){
            openGallery();
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    // GÖRSEL GALERİDEN SEÇİLDİKTEN SONRA YAPILACAK İŞLEMLER
    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        if(requestCode == 2 && resultCode == RESULT_OK){
            selectedImage = data.getData(); // Seçilen resmi Uri tipinde almak

            // Resmi imageViewe koymak için Bitmapa çevirmek
            try {
                Bitmap bitmapImage = MediaStore.Images.Media.getBitmap( this.getContentResolver(), selectedImage );
                imageView.setImageBitmap( bitmapImage );
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    // SEÇİLİ GÖRSELİ UPLOAD ETMEK
    public void upload(){

        // Upload edilecke resim için random bir id oluştur.
        UUID newUUID = UUID.randomUUID();

        // Firebase Storage içinde images klasörü altına xyz.png olarak resmi kaydedecek bir StorageReferans objeji oluştur.
        final String uploadImagePath = "images/"+newUUID+".png";
        StorageReference storageReference = mStorageReference.child(uploadImagePath);

        // Referans değişkenini kullanarak putFile ile resmi upload etmek istediğini söyle
        // selectedImage: Uri tipinde olmalı ve değeri upload edilecek olan resmin yolu olmalı.
        storageReference.putFile(selectedImage)
        // Upload başarılı olursa yapılacak işlemler
        .addOnSuccessListener(this, new OnSuccessListener<UploadTask.TaskSnapshot>() {
            @Override
            public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {

                // Upload edilmiş olan görselin linkini alma işlemleri
                StorageReference storageReferenceForUploadedImg = FirebaseStorage.getInstance().getReference(uploadImagePath);
                storageReferenceForUploadedImg.getDownloadUrl().addOnSuccessListener(new OnSuccessListener<Uri>() {
                    @Override
                    public void onSuccess(Uri uri) { // görsel url uri değişkeninde
                        String imgUrl = uri.toString();
                    }
                });


            }
        })
        // Upload başarısız olursa yapılacak işlemler
        .addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(@NonNull Exception e) {
                e.printStackTrace();
            }
        });

    }


}

```


# CLOUD FIRESTORE İŞLMELERİ
- Realtime dışında yine firebase ile yapılan işlemler için kullanılır.
- Google Firebase sayfasından veritabanı olarak "Cloud Firestore" seçeneğini seç ve başlat.
- Tools > Firebase yardımcısından "... Cloud Fires" seçeneğinden gradle için uygulama yap

**NOT:** multi dex gibi bir hata verirse.
Gradle dosyasını aç

```java
defualtConfig{
    minSdkVersion xx // yükselt
    ...
    multiDexEnabled true // ekle
}

dependencies {
    implementation 'com.android.support:multidex:1.0.3' //ekle
}
```



## KAYIT EKLEME
```java
FirebaseFirestore db = FirebaseFirestore.getInstance();
FirebaseAuth mAuth = FirebaseAuth.getInstance();

HashMap<String, Object> newTweet = new HashMap<String, Object>();
newTweet.put("tweet", mesaj);
newTweet.put("user", mAuth.getCurrentUser().getUid());
newTweet.put("created_at", FieldValue.serverTimestamp());

db.collection("TableName").add(newTweet)
.addOnSuccessListener(new OnSuccessListener<DocumentReference>() {
    @Override
    public void onSuccess(DocumentReference documentReference) {
        // VERİ KAYIT EDİLDİ.
    }
})
.addOnFailureListener(new OnFailureListener() {
    @Override
    public void onFailure(@NonNull Exception e) {
        // VERİ KAYIT EDİLEMEDİ.
    }
});
```
