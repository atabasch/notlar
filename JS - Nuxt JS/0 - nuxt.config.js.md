### mode

uygulamanın modunu belirler.
- universal (server side için kullanılır)
- spa (Tek sayfalı projelerde sadece client üzerinde)
- static



### head

HTML içersiindeki head tagına etki eder.
- title:
- meta:
- link:
- script:

#### ! Dinamik olarak title değiştirmek için.
Nuxt JS ile **pages** ler içerisindeki vue nesnelerinde **head** objesini dinamik olark değiştirebilirsin. Yani dinamik title işlemi için aşağıdaki gibi yazman yeter.
pages/posts/index.vue
```js
    export default{
        head: {
            title: "Posts List"
        }
    }
```


## loading
nuxt projelerinde nuxt a ait sayfanın en üstünde sayfa işlemesini gösteren bir loadingbar vardır. Bununla ilgili ayarlar.

- color:
- height:
- failedColor: //hata olunca alacağı renk
-

Loading Barı tamamen kaldırmak için.
```js
loading: false
```

#### loadingIndicator
Eğer uygulama modu **spa** ise çalışan. Sayfanın ortasında olan bir loading bar.
```js
loadingIndicator: {
        name: "circle",
        color: "#abc"
}
```






## css
Global olarak bütün uygulamada etki etmesini istediğimiz css dosyalarını buraya eklemeliyiz.  
**@** ve **~** işareti **root** anlamına gelmektedir.
```js
    css: [
        '~/assets/style/main.css',
        '@/assets/style/custom.css',
    ]
```



## dev
sadece boolean değer alır. Projenin developer modda mı yoksa yayın modunda mı olur.


## env
Uygulama içerisinde kullanmak istediğimiz global değişkenlerin oluşturulduğu yer.
```js
env: {
    baseUrl: "http://..."
}

//KULLANIMI
process.env.baseUrl
```


## generate
**universal** mod uygulamayı static olarak ayarlamaya yarar.


## rootDir: "/path"
string bir değer alır eğer ki uygulamayı bir klasör altına almak istiyorsan node_modules dahil tüm

## srcDir: "/path"
Node JS değil sadece NuxtJs içerisindeki belirli klasörler sadece bir dizinde olsun istiyorsan.















#
