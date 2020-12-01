# VUE-ROUTER
- aynı uygulama içerisinde farklı componentler çağrılarak tek sayfa siteler yapmaya yarar.
- Url kısmındaki link değişir ancak sayfa Refresh olmaz.






# Kurulum

### 1) kütüphaneyi indir.
> npm i --save vue-router



### 2) routes.js dosyası oluştur ve içinde tanımlamaları yap
```js
import HomeScreen from "./screens/HomeScreen"; // HomeScreen.vue
import PostsScreen from "./screens/PostsScreen"; // PostsScreen.vue
import PostDetail from "./screens/PostDetail"; // PostDetail.vue

export const routes = [
    { path: "/", component: HomeScreen },
    { path: "/posts", component: PostsScreen, name: 'icerikler' },
    { path: "/post/:id", component: PostDetail },

]
```

### 3) main.js içinde tanımlamaları yap.
**main.js**
```js
import VueRouter from "vue-router";
import {routes} from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
    mode: 'history', // history => site.com/slug | hash => site.com/#/slug

});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
```

### 4) App.vue içerisinde nerede görüntüleneceğini yap
```html
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/">Anasayfa</router-link></li>

                <router-link tag="li" to="/posts"><a>Yazılar</a></router-link>

                <router-link tag="button" to="/contact" class="btn btn-primary">İletişim</router-link>

                <li>
                    <router-link active-class="active" to="/slug">Deneme</router-link>
                    <!-- eğer linkde tamamen to içindeki ile uyuşması gerekiyorsa ki normali budur exact ekle -->
                    <router-link active-class="active" exact to="/slug">Deneme</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
```


# Kullanımlar

## 1) methods ile redirect işlemi
```html
<template>

</template>

<script>
    export default {
        methods: {
            goHome: function(){
                this.$router.push("/posts");
                this.$router.push({ path: '/posts' });
                this.$router.push({ name: 'icerikler' });

            }
        }
    }
</script>
```

## 2) Parametreler ile çalışmak
```html
{{ $route.params.id }}
```

```js
// Oluşturma
{path:'/post/:id', component: PostDetail}

// almak  
data(){
    return {
        id: this.$route.params.id;
    }
},

watch: {
    "$route"(newVal, oldVal){ // route'da değişiklik olunca çalışır.
        this.id = newVal.params.id;
    }
}
```






## 3) Link verme işlemleri
Örnek **routes.js** dosyası
```js
export const router = [
    // Direkt linkleme işlemleri
    { path: "/", component: FrontPage },
    { path: "/posts", component Posts },
    { path: "/contact", component Contact },

    // Query ile (Bunu route-link in to kısmına yazmalısın)
    { path: "/search", query: { type:"post", search:"" } },

    // # ile (Bunu route-link in to kısmına yazmalısın)
    { path: "/guide", hash: "#start" },

    // Name ile linkleme işlemleri
    { path: "/products", component: Products, name: "urunler" },
    { path: "/product-cateogry", component: ProductCategory, name: "urun-kategorileri" },
    { path: "/product/:id", component: ProductDetail, name: "urun-detay" },

    // İÇ İÇE LÜNKLEME İŞLEMİ
    { path: "/user", component:User,   // NOT: User komponenti içerisinde template içine <router-view></router-view> eklenmeli.
        children: [
            { path:'', component: Users },              // /user da Users komponenti çalışacak
            { path:':id', component: UserDetail },      // /user/x da UserDetail komponenti çalışacak
            { path:':id/edit', component:UserEdit },   // /user/x/edit de UserEdit komponenti çalışacak
        ]
    },


    // DİRECT YÖNLENDİRME
    { path: "/redirect", redirect: "/" }, // /redirect sayfasına girince / a yönlendir
    { path: "*", redirect: "/404" }
]
```

```html
<template>
    <!-- li > a[href=/] -->
    <li><router-link to="/">Direkt link</router-link></li>

    <!-- li > a[href=/posts] -->
    <router-link tag="li" to="/posts"><a>Direkt link</a></router-link>

    <!-- button[to=/contact] -->
    <router-link tag="button" to="/contact" class="btn btn-primary">Button link</router-link>

    <!-- a[hewf=/products] -->
    <router-link :to="{name:'products'}">Ürünler</router-link>

    <!-- a[hewf=/product-category] -->
    <router-link :to="{name:'product-cateogry'}">Ürün Kategorileri</router-link>

    <!-- a[hewf=/product/1] -->
    <router-link :to="'/product/'+product.id">Ürün 1</router-link>

    <!-- a[hewf=/product/2] -->
    <router-link :to="{name:'urun-detay', params: { id: 2 } }">Ürün 2</router-link>
</template>
```











## 4) ?q=v Query Parametreleri kullanmak
```js
$route.query.key;

this.$route.query.key;
```




## 5) Sayfa geçişlerinde animasyon kullanmak.
```html
<template>

    <transition name="pageAnimation" mode="out-in">
        <router-view></router-view>
    </transition>

</template>


<script>
    export default {

    }
</script>

<style>
.pageAnimation-enter{
    opacity: 0;
}
.pageAnimation-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}
.pageAnimation-leave{

}
.pageAnimation-leave-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

@keyframes slide-in {
    from{
        transform: translateY(20px);
    }
    to{
        transform: translateY(0px);
    }
}
</style>
```


## 6) # hash ile scroll kaydırarak çengelli konuya gitmek
main.js içinde ayarlama yap
```js
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPositions){
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    }
});
```

Component.vue
```html
<template>
    <router-link to="/guide#start">Start</router-link>
</template>

<script>
    export default {

    }
</script>
```



## 7) Route Koruma İşlemleri
##### Örneğin Login olmadan görülmeyecek componentleri ayarlamak

### 7.1) beforeEnter
Bir komponentin ilk açılış esnasında araya bir middleware sokarak sorgular yapmak.

#### 7.1.1} main.js içerisinde Root seviyesinde middleware tanımlamak.
**main.js** dosyasında **VueRouter** objesinde belirtilir.
```js
// bir route çalışmadan önce çalıştırılır.
router.beforeEach( (to, from, next) => {

    next(false); // işlem iptal
    next(); // ana dizine gider
    next("/slug"); // belirlediğimiz linke gider.
} )
```

#### 7.1.2} routes.js içerisinde Route seviyesinde middleware tanımlamak
```js
{ path: "/slug", component: ComponentName,
    beforeEnter: (to, from, next) => {

        next(false); // bu değer girilince bu route hiç çalışmaz.
    }
}
```


#### 7.1.3} ComponentName.vue içerisinde Component seviyesinde middleware tanımlamak
```js
export default{
    data(){},
    beforeRouteEnter(to, from, next){

        next();
    }

}
```


### 7.2) beforeLeave
Componentten route ile çıkış yaparken çıkmadan hemen önce sorgular yapmak.

#### 7.2.1) ComponentName.vue içerisinde Component seviyesinde middleware tanımlamak
saved değişkeni true değilse sayfadan çıkma
```js
export default{
    data(){ return { saved = false } },
    beforeRouteLeave(to, from, next){
        if(this.saved){ next(); }
    }

}
```




## Lazy Load
Bir component kullanıldığı zaman import edilir. Böylece büyük projelerde yükten kurtulmuş olunur.

**routes.js** içerisinde **component** dosyasları **import** etme işlemi değiştiriliyor.
```js
// EĞER YYY componenti kullanılacaksa o zaman import et.
const ComponentVariable = resolve => {
    require.ensure(["./components/xxx/yyy.vue"], () => {
        resolve(require("./components/xxx/yyy.vue"));
    })
}
```


### Gruplayarak 1 tanesi yüklendiğinde aynı grupdaki bütün componentler yüklensin.
```js
const ComponentVariable = resolve => {
    require.ensure(["./components/xxx/yyy.vue"], () => {
        resolve(require("./components/xxx/yyy.vue"));
    }, "GroupName")
}

const ComponentVariable = resolve => {
    require.ensure(["./components/xxx/yyy2.vue"], () => {
        resolve(require("./components/xxx/yyy2.vue"));
    }, "GroupName")
}

const ComponentVariable = resolve => {
    require.ensure(["./components/xxx/yyy3.vue"], () => {
        resolve(require("./components/xxx/yyy3.vue"));
    }, "GroupName")
}
```






```html
<template>

</template>

<script>
    export default {

    }
</script>
```
























#
