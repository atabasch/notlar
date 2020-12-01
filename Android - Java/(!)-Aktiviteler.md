## FONKSİYONLARIN ÇALIŞTIĞI ANLAR
- **onCreate** Aktivite daha açılmadan çalışan kodlar.
    (Uygulama tamamen kapatılıp açıldığında çağırılır.)

- **onStart** Aktivite açıldıktan sonra ilk çalışan kodlar.
    (Aktivite açılmıştır ancak kullanıcı etkileşime girmemiştir. Yani kullanıcının bir butona bile basmasına izin verilmeden önce çalışır.)
    (Uygulama alta alınıp tekrar açıldığında da çalışır.)

- **onResume** Aktivite açıldıktan sonra çalışan kodlardır.
    (Kullanıcı artık etkileşime geçmeye başlamıştır.)
    (Uygulama alta alınıp tekrar açıldığında da çalışır.)




- **onPause** Uygulama alta alındığında, Telefon uyku moduna geçtiğinde, Uygulama kapatıldığında çalışır.
- **onStop** Uygulama kapatıldığında çalışacak kodlardır.
- **onDestroy**  Onstop işleminden sonra çalışır.
    (Uygulama kapatılınca çalışır)


**Kırmızı Not:** Ekran döndürüldüğünde 5 method tekrar çalışır.

- **onSaveInstanceState** bir Bundle nesnesi içine veri depolar.
- **onRestoreInstanceState** bir Bundle nesnesi içinden verileri çıkarır.
Üstteki iki fonksiyon sayesinde ekran çevrildiğinde veriler tutulabilir.
iki kodda sırayla çalışır.
Veri kaydetmek.
> outState.putType("key", "val");

### UYGULAMALI İLK AÇILINCA
onCreate
onStart
onResume
onPostResume

### KARE TUŞUNA BASILINCA ÇALIŞAN kodlar
onPause
onSaveInstanceState
onStop

### ALTA ALINMIŞ OYUNA TEKRAR GİRİNCE
onRestart
onStart
onResume

### AKTİVİTE DEĞİŞİRKEN ÇALIŞAN KODLAR
onPause
onSaveInstanceState
onStop

### 2. AKTİVİTEDE GERİ TUŞUNA BASILINCA.
onStart
onResume

### finish() fonksiyonu kullanılan kodda çalışan fonksiyonlar
onPause
onStop
onDestroy

### UYGULAMA KAPANINCA ÇALIŞAN kodlar
onPause
onSaveInstanceState
onStop
onDestroy
