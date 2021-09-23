# Vuex

Vue.JS projelerinde anlık olarak veri depolama ve yönetmek için kullanılan javascript kütüphanesidir.

#### Classic Mode

- **Store** klasörü içerisinde **index.js** dosyası oluştur.
- Uygulama için **1 store** ve **1 modül** destekler.
- Tüm **state, getters, mutations** ve **actions** methodları bu **index.js** içerisinde bulunur.

#### Modules Mode

- Store klasöründe birden fazla js dosyası oluşturulabilir.
- Tüm .js dosyaları modul namespaced olarak gelir.
- **state, getters, mutations** ve **actions** methodları ayrı ayrı **.js** dosyaları içerisinde bulunur.




#1 NuxtJS Vuex Kullanımı

## Modüler Kullanım
**store/index.js**
```js
import Vue from "vue";
import Vuex from "vuex";

import PageModule from './page';
import PostModule from './post';

Vue.use(Vuex);

new Vuex.Store({
  modules: {
    page: PageModule,
    post: PostModule,
  }
});
```


**store/page.js**
```js
export default {
  state: ()=>{ return {
    title: '',
    slug: ''
  } },
  getters: {},      // -> this.$store.getters['page/getterMethodName']
  mutations: {},    // -> this.$store.commit('page/mutationMethodName', value);
  actions: {}       // -> this.$store.dispatch('page/actionMethodName')
}
```

## 2) Düz Kullanım [BUNU KULLANMAK İYİ]
```js
import "Vuex" from vuex;

const createStore = () => {
    return new Vuex.Store({
        state: {
            posts: []
        },

        getters: {
            // this.$store.getters.getPosts
            getPosts(state){
                return state.posts;
            }
        },

        mutations: {

            // Vuex içerisinde bu fonksiyonu "this.$store.commit("setPosts", data)" şeklinde kullanırsın
            setPosts(state, post){
                state.posts.push(post);
            }
        },

        actions: {

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
            /* Bu  method içinde işlemler bir sonuç vermiyorsa sorun return edilmemesidir. */
            nuxtServerInit(context,  payload){
                // NUXT a ait bir method ismi. burada belirlenir. Sayfa yenilendiğinde otomatik olarak 1 kez çalışır.
                // Bunun içerisinde sunucudan postlarını getirebilirsin, vs sayfa ilk yüklendi,ğinde yapılmasını istediğin şeyleri yapabilirsin.
            },

            // Bir yerlerde vue içerisinde "this.$store.dispatch('setPosts', {posts: posts})" çalıştırımalı.
            setPosts(context, payload){
                payload.posts.forEach( post => {
                    context.commit('setPosts', post);
                } );
            }
        }
    });
}

export default createStore;
```

**NOT:** Nuxt.JS de projeye bir modül dahil edersen sunucuyu yeniden başlatman gerekebilir.

#2 Manuel Olarak Vuex Kurulumu ve Kullanımı (2. Video anlatımı)

## 1) Kurulum
> npm install vuex --save


## 2. Store Dosyası oluşturmak
**store** adında bir klasör oluştur e içerisine index.js dosyasını aç.   

**store/index.js**
```js
// Import işlemleri
import Vue from 'vue';
import Vuex from 'vuex';

// Vue'ye vuex kullanmasını söyle.
Vue.use(Vuex);

// Objeleri oluştur.
const state = {};
const getters = {};
const mutations = {};
const actions = {};

// Yeni bir vuex objexi oluştur ve yukarıdaki oblejeri içinde belirt.
new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

// Main dosyasında import edebilmek için dışa aktar.
export default Vuex;

```

## 3. Main Dosyasında Oluşturduğun Vuex stora dosyasını çağır.
**main.js**
```js
import store form './store'

new Vue({
    el: "#app",
    render h=> h(App),
    store
})
```

## 4. Storedaki bir state'i kullanmak

#### 4.1 Store içinde stateler belirledim.

**store/index.js**
```js
const state = {
    ad: 'Furkan',
    soyad: 'Atabaş'
}
```

#### 4.2 Hehrnagi bir vue componentinde kullanmak için.
```html
<template>
    <div>{{ ad }} {{ soyad }}</div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'app',
        computed: {
            ..mapState(['ad', 'soyad']) // store içindeki ad ve soyadı bu component içine çekebildim.
        }
    }
</script>
```

## 5. Getterlarla çalışmak

Getterlar statelerin verilerini döndürmek için kullanılırlar. Bir state değeri değişince get yeni değeri de anlık olarak verecektir.  

**store/index.js**
```js
const state = {
    ad: 'Furkan',
    soyad: 'Atabaş'
}

const getters = {
    welcomeMessage(state){  // Parametre olarak girilen state bizim oluşturduğumuz state'i alır.
        return `Hoşgeldiniz: ${state.ad} ${state.soyad}`
    }
}
```


```html
<template>
    <div>{{ welcomeMessage }}</div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: 'app',
        computed: {
            ..mapState(['ad', 'soyad']), // store içindeki ad ve soyadı bu component içine çekebildim.
            ..mapGetters(['welcomeMessage'])
        }
    }
</script>
```

## 6. Mutationslar ve Actionlar ile çalışmak.

Mutations ile çalışarak state verilerini güncelleyebiliriz. Ancak konsept gereği mutationslar tek başına kullanılmazlar.
Önce bir Action çalıştırılacak ve daha sonra o action mutations'u çalıştıracak.

**NOT:** Mutasyonların aksiyonlar ile kullanılmasının sebebi; Mutasyonlar veriyi hemen değiştirebilmeli içerisinde beklenecek işlemler yapılmamalı.
Eğer bir request isteği atıp gelen veriyi alıp bit state değişeceksek bu işlemi actions da yapıp yeni veriyi mutationsa gönderip orada state değiştirecez.

**store/index.js**
```js
const state = {
    firstname: 'Furkan',
    lastname: 'Atabaş'
}

const mutations = {
    setFirstname(state, newName){  // Parametre olarak girilen state bizim oluşturduğumuz state'i alır.
        state.firstname = newName
    }
}

const actions = {
    updateFirstname({commit}, newName){  // Parametre olarak girilen state bizim oluşturduğumuz state'i alır.
        // commit ile adını verdiğimiz mutationsu çalıştırıyoruz.
        commit( "setFirstname", newname )
    }
}
```


**Herhangi bir component**
```html
<template>
    <div>
        <button @click="updateName">İsmi Değiştir.</button>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'app',
        computed: {
            ..mapGetters(['welcomeMessage']),
        },
        methods: {
            ..mapActions(['updateFirstname']),
            updateName(){
                this.updateFirstname("new Name");
            }
        }
    }
</script>
```


# MODULES kullanımı.


```js

```



```js

```


```js

```

#
