# nuxt.config.js dosyası

1. Mode
2. Head
3.
4.
5.
6. [Modüller - Modules](#modules)
7.

# 1) mode

uygulamanın modunu belirler.
- universal (server side için kullanılır)
- spa (Tek sayfalı projelerde sadece client üzerinde)
- static



# 2) head

HTML içersiindeki head tagına etki eder.
- title:
- meta:
- link:
- script:

## 2.1) ! Dinamik olarak title değiştirmek için.
Nuxt JS ile **pages** ler içerisindeki vue nesnelerinde **head** objesini dinamik olark değiştirebilirsin. Yani dinamik title işlemi için aşağıdaki gibi yazman yeter.
pages/posts/index.vue
```js
    export default{
        head: {
            title: "Posts List"
        }
    }
```


# 3) loading
nuxt projelerinde nuxt a ait sayfanın en üstünde sayfa işlemesini gösteren bir loadingbar vardır. Bununla ilgili ayarlar.

- color:
- height:
- failedColor: //hata olunca alacağı renk
-

Loading Barı tamamen kaldırmak için.
```js
loading: false
```

## 3.1) loadingIndicator
Eğer uygulama modu **spa** ise çalışan. Sayfanın ortasında olan bir loading bar.
```js
loadingIndicator: {
        name: "circle",
        color: "#abc"
}
```






# 4) css
Global olarak bütün uygulamada etki etmesini istediğimiz css dosyalarını buraya eklemeliyiz.  
**@** ve **~** işareti **root** anlamına gelmektedir.
```js
    css: [
        '~/assets/style/main.css',
        '@/assets/style/custom.css',
    ]
```

# 5) PLUGINS (JS DOSYASI EKLEMEK)

İstediğin JS Dosyalarını global olarak tanımlayıp projeyte yüklemek için kullan

```js
    plugins: [
        '~/assets/js/jquery.js',
    ]
```

#### 1 DEN FAZLA COMPONENT SAYFA İÇERİSİNDE KULLANACĞAIN KOMPONENTLERİ DE BURADAN GLOBAL OLARAK ALABİLİRSİNN.

Örneğin her sayfada kullanmak istediğin Header, Footer ve Logo adında 3 vue komponentin var. Bunları her vue page inde import edip kullanmaktansa burada import ederek her componentte direkt kullanabilirsin.


##### plugins/global_components.js
```js
    import Vue from "vue"
    import Header from "@/components/Header";
    import Logo from "@/components/Logo";
    import Footer from "@/components/Footer";

    Vue.component("Header", Header);
    Vue.component("Logo", Logo);
    Vue.component("Footer", Footer);
```

##### nuxt.config.js
```js
    plugins: [
        '~/plugins/global_components.js',
    ]
```

# 6) Modules <a name="modules">fas</a>

Nuxt modüllerini global olarak belirleyerek proje içindeki herhangi bir yerden kullanabilme imkanı sağlıyor.  
Mesela **axios** modülünü gidip her componentte import etmek yerine NuxtJs e ait olan axiosu indirerek buradan dahil edip bütün componentler içerisinde kullanabilirsin.


Modüller: https://modules.nuxtjs.org  
Hangi modül nasıl indirilir ve nasıl kullanılır buradan dökümantasyonlarını okuyabilirsin.  
**NOT:** Modüllerin NuxtJs in düzenlediği şekilde olmasını unutma.

### Axios Örneği Kullanmak

#### 1. Axios İndir.
> npm install @nuxtjs/axios

#### 2. Modüllere Dahil et.
**nuxt.config.js**
```js
export default {
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxy: true
  }
}
```

#### 3. Kullan

**HERHANGİ BİR KOMPONENT İÇERİSİNDE**

```js
async asyncData({ $axios }) {
  const ip = await $axios.$get('http://icanhazip.com')
  return { ip }
}
```

**Herhangi bir componentind methodu içerisinde kullanıumı. Mesela butona basınca**
```js
methods: {
  async fetchSomething() {
    const ip = await this.$axios.$get('http://icanhazip.com')
    this.ip = ip
  }
}
```

**Doğrudan Kullanım**
```js
// Normal usage with axios
let data = (await $axios.get('...')).data

// Fetch Style
let data = await $axios.$get('...')
```

# 6) dev
sadece boolean değer alır. Projenin developer modda mı yoksa yayın modunda mı olur.


# 7) env
Uygulama içerisinde kullanmak istediğimiz global değişkenlerin oluşturulduğu yer.
```js
env: {
    baseUrl: "http://..."
}

//KULLANIMI
process.env.baseUrl
```


# 8) generate
**universal** mod uygulamayı static olarak ayarlamaya yarar.


# 9) rootDir: "/path"
string bir değer alır eğer ki uygulamayı bir klasör altına almak istiyorsan node_modules dahil tüm

# 10) srcDir: "/path"
Node JS değil sadece NuxtJs içerisindeki belirli klasörler sadece bir dizinde olsun istiyorsan.

# 11) Routing

- **nuxt.congif.js** dosyasını açarak **router** adında bir obje oluştur.
- **router** objesine **extendRoutes(routes, resolve)** methodunu ekle.
- **extendRoutes** Methodunun içinde **routes** dizisine routerları ekle.

```js
router: {
    // routes: pages içerisinde oluşturulmuş olan routing haritasını içinde tutar.
    extendRoutes(routes, resolve){
        routes.push({
            name: 'about', // zorunlu değildir. Eğer pages klasörü içerisinde oluşmuş bir about.vue varsa bu zaten hata verecek. Routingin için pages içinde bulunmayan benzersiz bir ad.
            path:'/about-us', // Address satırı
            component: resolve(__dirname, "pages/about-us.vue") // çalıştırılacak vue dosyası
        });
    }
}
```

# 12) Transition (Sayfa geçişlerini animasyonlandırma)

### transition anahtarını bir obje olarak ekle.

```js
transition: {
    name: 'layout', //
    mode: 'out-in'
}
```

### animasyon css dosyasını oluştur ve improt et.

css dosyasının adı fark etmez ama cssleri yazarken kullanılan sınıf isimleri transition objesindeki name ile başlamalı.

**/assets/css/custom-style.css**
```css
.layout-enter, .layout-leave-to{
    opacity: 0.5;
}

.layout-enter-active, .layout-leave-active{
    transition: opacity .5s;
}
```

```js
css: [ '~/assets/css/custom-style.css' ]
```


```js

```

```js

```


```js

```


```js

```

```js

```

```js

```






#
