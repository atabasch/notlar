# JAVA İLE ANİMASYON İŞLEMLERİ
```java
public void showTranslate(View view){
    obj.animate()
        .scaleX(0.0f)
        .alpha()
        .rotation()
        .translationX()
        .setDuration()
        .setListener(new Animator.AnimatorListener() {
            @Override
            public void onAnimationStart(Animator animation) {}
            @Override
            public void onAnimationCancel(Animator animation) {}
            @Override
            public void onAnimationRepeat(Animator animation) {}
            @Override
            public void onAnimationEnd(Animator animation) {}
    });
}
```


# ANİMASYON DOSYALARI İLE ANİMASYON İŞLEMLERİ
Animasyon işlemleri animasyon xml dosyaları içerisinde oluşturulur.
- res > sağ tuş > new directory > anim seçilir ve klasör oluşturulur.
- anim klasörü altına yeni bir animasyon xml dosyası oluşturulur ve animasyon işlemleri içinde belirlenir.


## BİR NESNEYEE ANİMASYON DOSYASINI ATAMAK
```java
Animation animation = AnimationUtils.loadAnimation(getApplicationContext(), R.anim.animasyon_dosya_adi); // Animasyonu oluştur
ObjType objVar = findViewById(R.id.blablabla); // Nesneyi tanımla
objVar.startAnimation(animation); // Nesneye animasyonu bağla
```


## ANİAMSYON FONKSİYONLARI
| Method Adı |  |
| :--- | :--- |
| start() | This method starts the animation. |
| setDuration(long duration) | This method sets the duration of an animation. |
| getDuration() | This method gets the duration which is set by above method |
| end() | This method ends the animation. |
| cancel() | This method cancels the animation.|

## HAZIR ANİMASYON KODLARI

### NESNE BOYUNU DEĞİŞTİREN ANİMASYON
```xml
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">

   <scale xmlns:android="http://schemas.android.com/apk/res/android"
      android:fromXScale="0.5"
      android:toXScale="3.0"
      android:fromYScale="0.5"
      android:toYScale="3.0"
      android:duration="5000"
      android:pivotX="50%"
      android:pivotY="50%" >
   </scale>

   <scale xmlns:android="http://schemas.android.com/apk/res/android"
      android:startOffset="5000"
      android:fromXScale="3.0"
      android:toXScale="0.5"
      android:fromYScale="3.0"
      android:toYScale="0.5"
      android:duration="5000"
      android:pivotX="50%"
      android:pivotY="50%" >
   </scale>

</set>
```


### ÖNCE SAAAT YÖNÜNE SONRA TERSİNE DÖNEN ANİMASYON
```xml
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">

   <rotate xmlns:android="http://schemas.android.com/apk/res/android"
      android:fromDegrees="0"
      android:toDegrees="360"
      android:pivotX="50%"
      android:pivotY="50%"
      android:duration="5000" >
   </rotate>

   <rotate xmlns:android="http://schemas.android.com/apk/res/android"
      android:startOffset="5000"
      android:fromDegrees="360"
      android:toDegrees="0"
      android:pivotX="50%"
      android:pivotY="50%"
      android:duration="5000" >
   </rotate>

</set>
```



### ŞEFFAFLIĞI DEĞİŞEN ANİMASYON ANİMASYON
```xml
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android"
   android:interpolator="@android:anim/accelerate_interpolator" >

   <alpha
      android:fromAlpha="0"
      android:toAlpha="1"
      android:duration="2000" >
   </alpha>

   <alpha
      android:startOffset="2000"
      android:fromAlpha="1"
      android:toAlpha="0"
      android:duration="2000" >
   </alpha>   

</set>
```



### YANIP SÖNEN ANİMASYON
```xml
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">
   <alpha android:fromAlpha="0.0"
      android:toAlpha="1.0"
      android:interpolator="@android:anim/accelerate_interpolator"
      android:duration="600"
      android:repeatMode="reverse"
      android:repeatCount="infinite"/>
</set>
```



### HAREKET ANİMASYONU
```xml
<?xml version="1.0" encoding="utf-8"?>
<set
   xmlns:android="http://schemas.android.com/apk/res/android"
   android:interpolator="@android:anim/linear_interpolator"
   android:fillAfter="true">

   <translate
      android:fromXDelta="0%p"
      android:toXDelta="75%p"
      android:duration="800" />
</set>
```


### SLİDE ANİMASYON
```xml
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android"
   android:fillAfter="true" >

   <scale
      android:duration="500"
      android:fromXScale="1.0"
      android:fromYScale="1.0"
      android:interpolator="@android:anim/linear_interpolator"
      android:toXScale="1.0"
      android:toYScale="0.0" />
</set>
```


###  ANİMASYON
```xml

```

###  ANİMASYON
```xml

```
