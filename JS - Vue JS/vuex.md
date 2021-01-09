# Vuex
- Vue JS içerisindeki state yönetimi yapmak için kullanılır.
- Yani componentler arası veri alışverişi.
- Aynı değişkenlere farklı componentlerden erişebilirsin.
- Veriler **Central Store** da tutulur.

**vue resource** vuex içerisinde resource e ulaşmak istiyorsan. vue yi import et ve direkt Vue.http diye ulaş.

# Kurulum

### 1) npm' den vuex i indir.
> npm i --save vuex


### 2) Verilerin saklanacağı dosyayı oluştur

**/src/store/store.js** dosyasını oluştur.

```js
import Vue from "vue";
import Vuex from "vuex";

export const store = new Vuex.Store({
    state: {
        variable: value,
        key: val
    }
});
```

### 3) App.vue dosyasını düzenle
```js
import {store} from './store/store';

new Vue({
    el: "#app",
    store: store,
    render: //...
})
```


### 3) Component.vue den ulaş
```js
export default {

    method: (){

        this.$store.state.variable = newValue;

    }

}
```

# KULLANIMLAR

## NE NE DEMEKTİR?
- **state (object):** key:val mantığında değerlerin tutulduğu depodur.
  - **template** içinde `store.state.key` olarak çağırılır.
  - **script** altında `this.$store.state.key` şeklinde çalıştırılır.


- **getters (object):** veri getiren get fonksiyonlarının bulunduğu obje.
  - **state** parametresi alır ve sadece veri return eder
  - **state** güncellendiğinde yeni değerleri döndürür. Bu yüzden bir yere veri çağırırken state ile değil getter ile çağırman iyi.
  - **template** içinde `store.getters.getterMethodName` şeklinde çağrılır sonuna (parantez) eklenmez.
  - **script** altında `this.#store.getters.getterMethodName` şeklinde çağrılır.
  - **script** altında **computed** objesine eklenir.


- **mutations (object):** state leri güncelleyen methoddur.
  - **(state, payload)** şeklinde 2 parametre alır.
    - **state** statelere erişebilmesi için kullanacağı parametredir.
    - **payload** commit fonksiyonu ile gönderilen değerler yüklerdir.
  - **script** altında `this.$store.commit("mutationmethod", "val")` olarak çalıştırılır.
  - **script** içinde **methods** anahtarlı objeye eklenebilir.
  - Sadece set işlemi yapar senkron çalışır o yüzden bekleten işler bu methodlar altında yapılmaz. Eğer **setTimeout, Axios, Ajax, vs** uzun süren işlemler kullanacaksan **actions** kullanıp **actions** içerisinde mutationsu çalıştırarak state güncellemelisin.


- **actions (object):** mutations çalışmadan önce araya koyulabilen asenkron middleware yapılarıdır.
  - **script** altında `this.$store.dispatch("actionMethodName", "value")` olarak çalıştırılır
  -  **script** altındaki **methods** anahtar isimli objeye eklenir.
  - action methodları **context, payload** parametreleri alırlar.
    - **contex** action methodunda **context.commit("mutationmethod")** kullanılarak mutations çalıştırılır.
    - **contex** içerisinde **commit, dispatch, state, getters** vardır.
      - **contex** yerine 1. parametreye **{commit}** yazarak sadece commit methodunu alırsın böylece **commit("mutationname")** şeklinde mutasyon çalıştırırsın.
    - **payload** yük anlamına gelir **dispatch** ile gönderilmiş olan parametreleri getirir.
    - **payload** kısmında veriyi obje olarak göndermek daha faydalı olabilir.



## 1) GETTERS lar ile get methodlarını componentlere almak
- store.js içerisinde Vuex nesnesine bir eleman olarak eklenir.ve içerisine methodlar alır.
- **not not not** getter fonksiyonlarını çalışrırken PARANTEZ kullanma.

```js
export const store = new Vuex.Store({
    state: {
        variable: value,
        key: val
    },

    getters: {

        // GETTER FONKSİYONLARI ÇAĞRILIRKEN () kullanma
        getVariable(state){
            return state.variable
        } // this.$store.getters.getVariable

    }
});
```
### 1.2) GETTER ları Component içinde kullanmak

##### Direkt olarak "computed" içerisine çağırmak
Component.vue
```html
<template>
{{ customMethodName }}
</template>

<script>
export default {
    computed: {

        customMethodName(){
            return this.$store.getters.getVariable;
        }        
    }
}
</script>
```

##### mapGetters ile ismi verilen methodları çağırmak.
```html
<template>
    {{ methodName1 }}
</template>

<script>
import {mapGetters} from "vuex";
export default {
    computed: mapGetters(["methodName1", "methodName2"]),

    // YADA METHODLAR component içindeki methodla çakışmasın istiyorsan adlarını değiştirmek için obje olarak al
    computed: mapGetters({
        'customMethodName1': "methodName1",
        'customMethodName2': "methodName2",
    }),

    // KENDİ COMPUTED METHODLARININ YANINA KOYMAK
    computed: {
        method1(){},
        method2(){},
        ...computed: mapGetters(["methodName1", "methodName2"])
    }
}
</script>
```



## 2) MUTATIONS lar ile set methodlarını componentlerden yollamak
Mutationslar senkron çalıştıkları için eğer bir yere istek atıp dönen veriye göre değişiklik yapacaksan hemen bir değer değiştirme işlemi yapmayacaksan **ACTIONS** kullan.

### 2.1) store.js içerisinde mutationsları ayarla
```js
export const store = new Vuex.Store({
    state: {
        variable: value,
        key: val
    },

    mutations: {

        stateMutationsMethodNameWithoutParams(state){
            this.state = "value";
        },

        stateMutationsMethodName(state, value){
            this.state = value;
        } // this.$store.getters.getVariable

    }
});
```

#### 2.2) Componentten mutations methodunu çalıştır.

##### 2.2.1) Direkt methodlar içinde çağırmak
```js
export default {
    methods: {
        runStateMethod(){
            this.$store.commit('stateMutationsMethodNameWithoutParams');
            this.$store.commit('stateMutationsMethodName', 'newValue');
        }
    }
}
```


##### 2.2.2) mapMutations ile çağırmak
```js
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations(["methodName", "methodName"]),

        // YADA
        ...mapMutations({
            methodName: "methodName"
        }),
    }
}
```



## 3) ACTIONS lar ile set methodlarını componentlerden yollamak
- Actionslar Component ile Mutations arasına girer.
- [Component] => [Actions] => [Mutations]
- Direkt **mutations** kullanılabilir işlemlerde ancak
  **actionsların** en büyük faydası asenkron çalışmalarıdır.

#### 3.1) store.js in hazırlanması
**store.js** dosyasında **Vuex** objesine **actions** anahtarını ekle.
```js
//....
actions: {

    actionMethodName({commit}, params){ // commit ile bütün mutationslara erişebilirsin.
        let sql = params.sql;
        dbquery("sql", () => {
            commit("mutationMethodName", sql);
        });
    }

},

mutations: {

    mutationMethodName(state, sql){
        // Yapılacak asıl işlemler
    }

},
//...
```


#### 3.2) Component.vue dosyasnın hazırlanması
```html
<template>
    <button type="button" @click="methodName({sql:'sql'})"></button>
</template>

<script>
methods: {
    methodName(sql){
        this.$store.dispatch("actionMethodName");
    }
}
</script>
```

#### mapActionsları direk almak
**Component.vue**
```html
<template>
    <button type="button" @click="methodName({var:val})"></button>
</template>

<script>
methods: {
    ...mapActions( {'methodName': "actionMethodName"} )
}
</script>
```


## MODÜL yapısı ile verileri klasör klasör ayırmak
- store  
    - modules  
      - users.js  
      - posts.js  
    - store.js

###### users.js
```js
const state = {  }
const getters = {  }
const mutations = {  }
const actions = {  }
export default { state, getters, mutations, actions }
```

###### store.js
```js
import users from 'modules/users';
import posts from 'modules/posts';

new Vuex.Store({

    modules: {
        users: users,
        posts: posts
    }
})
```


**İŞLEMLERE MODÜL ADI İLE ULAŞABİLİRSİN.**  
`this.$store.state.modulname.statekey`








#
