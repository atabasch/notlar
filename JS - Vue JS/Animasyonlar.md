# Animasyonlar
- Eldeki animasyonun attach edilmemiş olması. Dom'a henüz eklenmemiş olması anlamına gelir.

**NOT** Animasyonlar arasındaki zaman farklılıkları sebebiyle bir sıkıntı çıkarsa transition nesnesine type="animation" yada  type="transition" özelliği verebilirsin.
Böylece animasyonların 1i tamamlandığında diğerleri bitmiş olur.  Yani animasyonun gerçek süresinin hangisine göre gerçekleşeceğini belirtirsin.
(Mesela bi kutu hem kayacak hemde opacity si azalacak. 1 saniyede kaydı ama opacity hala bitmedi o zaman kötü görüntü oluyor.  
    Bu durumda kullanılır. )

## Fade opacity ile Göster/Gizle işlemleri.

- Animasyon eklenecek nesneni transition etiketi içine yaz.
- transition nesnesine bir name="" özelliği ata
- Bu name özelliğine ait 4 adet style sınıfı oluştur. (* transition name özelliğinin değerini temsil eder)
  - *-enter = Animasyon başlangıcının 0. karesi
  - *-enter-active = Animasyon başlangıcının son karesi
  - *-leave = Animasyon başlangıcının son karesi karesi
  - *-leave-active = Animasyon başlangıcının 0. karesi


```html
<template>

    <button @click="show = !show">Göster/Gizle</button>

    <transition name="animationName">
        <div class="card" v-if="show">Bu kart Göster/Gizle şeklinde olacak</div>
    </transition>

</template>

<script>
    export default{
        data(){ return {
            show: false
        } }

    }
</script>

<style>
.animationName-enter{
    opacity: 0;
}
.animationName-enter-active{
    transition: opacity 1s;
    opacity: 1;
}
.animationName-leave{
    opacity: 1;
}
.animationName-leave-active{
    transition: opacity 0.5s;
    opacity: 0;
}
</style>
```

## 2) Slider Transition Oluşturmak. (Kayarak gelip gitmek)
```html
<template>
    <button @click="show = !show">Göster/Gizle</button>
    <transition name="animationName">
        <div class="card" v-if="show">Bu kart Göster/Gizle şeklinde olacak</div>
    </transition>
</template>
<script>/*...*/</script>
<style scoped>
.animationName-enter{}
.animationName-enter-active{ animation: animasyonlu-gel 1s ease-out forward; }
.animationName-leave{}
.animationName-leave-active{ animation: animasyonlu-git 1s ease-out forward; }

@keyframes animasyonlu-gel {
    from{ transform: translateY(-20px); }
    to{ transform: translateY(0px); }
}
@keyframes animasyonlu-git {
    from{ transform: translateY(0px); }
    to{ transform: translateY(20px); }
}
</style>
```

## 3) Sayfa yüklenince animasyonun çalışması.
Bir butona tıklanınca değil de sayfa onload olduğunda animasyonların hemen çalışması için.  
transition nesnesine appear etiketi eklemek yeter.
```html
<template>
    <transition name="animationName" appear>

    </transition>
</template>
```


## 4) Başka bir CSS kütüphanesini kullanarak animasyon yaptırmak.
```html
<transition
    enter-class=""
    enter-active-class="animated xyz"
    levale-class=""
    levale-active-class="animated xyz"
  >

</transition>
```  




## 4) 1 transition içinde 2 farklı element ile animasyon yapmak.

- **mode** önce çıkış sonra giriş olsun out-in
- **mode** önce giriş sonra çıkış olsun in-out

```html
<transition namde="animationName" mode="out-in">
    <div class="kirmizi" v-if="showed" key="wait"></div>
    <div class="yesil" v-else key="success"></div>
</transition>
```


# 2 Fonksiyonlar ile Animasyon yapmak
### Kullanılan methodlar
- **@before-enter** Girişden önce tetiklanan fonksiyon
- **@enter** Girerken tetiklenen fonksiyon
- **@after-enter** Girdikten sonra tetiklenen fonksiyon.
- **@after-enter-cancelled** Herhangi bir sebepten animasyon iptal olursa çalışan Fonksiyon.
- **@before-leave**
- **@leave**
- **@after-leave**
- **@after-leave-cancelled**

```html
<template>
<transition
    :css="false"
    @before-enter=""
    @enter=""
    @after-enter=""
    @after-enter-cancelled=""
    @before-leave=""
    @leave=""
    @after-leave=""
    @after-leave-cancelled="" >

</transition>
</template>

<script>
export default {
    methods: {

        beforeEnter(element){

        },
        enter(element, done){

            done(); // callbackdir.
        },
        afterEnter(el){

        },
        afterEnterCancelled(el){

        },
        beforeLeave(el){

        },
        leave(el, done){

        },
        afterLeave(el){

        },
        afterLeaveCancelled(el){

        },

    }
}
</script>
```

## Listelere animasyon eklemek
transition-group elementine 2 ek css sınıf adı daha gelir.
- 1. slidename-move (Elemanlardan birinin yeri oynadığında çalışır.)
- 2.
```html
<template>
    <ul id="liste">
        <transition-group name="slidename">
            <li v-for="(data, index) in datas" v-key="index"></li>
        </transition-group>
    </ul>
</template>

<style>
.slidename-leave-active{
    /* Listeden eleman silerken atlama olmaması için bu ekranda liste elemanını  position absolute yapabilirsin. */
    position: absolute;
}
.slidename-move{
    transition: transform 1s; /* Listeye eleman getirirken. Listeler birden küçülüp büyürse, atlama olursa bu düzeltir. */
}
</style>
```

















#
