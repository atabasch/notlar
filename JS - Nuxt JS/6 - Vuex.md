# Vuex

Vue.JS projelerinde anlık olarak veri depolama ve yönetmek için kullanılan javascript kütüphanesidir.

#### Classic Mode

- **Store** klasörü içerisinde **index.js** dosyası oluştur.
- Uygulama için **1 store** ve **1 modül** destekler.
- Tüm **state, getters, mutations** ve **actions** methodları bu **index.js** içerisinde bulunur.

#### Modules Mode

- Store klasöründe birden fazla js dosyası oluşturulabilir.
- Tüm .js dosyaları modul namespaced olarak gelir.
- **state, getters, mutations** ve **actions** methodları ayrı ayrı **.php** dosyaları içerisinde bulunur.

## 2) Başlangıç
```js
import "Vuex" from vuex;

const createStore = () => {
    return new Vuex.Store({
        state: {
            posts: []
        },

        getters: {
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



```js

```



```js

```


```js

```
