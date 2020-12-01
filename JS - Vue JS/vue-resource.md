# vue-resource
- http işlemleri yapmak için kullanılan bir vue js kütüphanesidir.
- axiox, fetch, jqueryAjax alternatifidir.


# Kurulum

### Kütüphaneyi indir.
> npm i --save vue-resource

### main.js dosyasını düzenle
```js
import VueResource from "vue-resource";

Vue.use(VueResource);
```

**NOT** Vue resource'e tüm uygulama içindeki .vue componentlerinde `this.$http` anahtarını kullanarak ulaşabilirsin.

# Kullanımlar



## GET isteği göndermek
```js
getData: funcrion(){

    this.$http.get("url")
    .then( response => { response.body } )
    .catch( error => {  } );

}
```


## POST isteği göndermek
```js
save: function(){

    this.$http.post("url", {post:datas})
    .then( response => {  } )
    .catch( error => {  } );

}
```



## DELETE isteği göndermek
```js
save: function(){

    this.$http.delete("url", {post:datas})
    .then( response => {  } )
    .catch( error => {  } );

}
```




## vue-resource için GLOBAL ayarlar tanımlamak
**main.js** dosyasında `Vue.use(VueResource);` satırının altına eklemeler yapabilirsin.
```js
Vue.http.options.root = "http://localhost:3000/api";
/*  Yukarıdaki kod sayesinde http işlemlerinde url girmene gerek kalmaz.
    Url parametresini ya boş bırakırsın yada url yerine /api nin sonuna eklemek istediklerini yazarsın.
    this.$http.get().then();
    this.$http.get("show/2").then();
    this.$http.post("create", datas).then();   */


```


## Request için interceptor kullanımı.
Yapılan http işlemlerinde bazen araya girip bir değişiklik yapmak için kullanılır.
**main.js** dosyası içerisinde kullanılır.

**Örneğin** POST işlemlerinde araya girip POST methodunu PUT ile değiştirmek.
```js
Vue.http.interceptors.push( (request, next) => {

    if(request.method == "POST"){
        request.method = "PUT";
    }
    next();

} );
```




## Response için interceptor kullanımı.

```js
Vue.http.interceptors.push( (request, next) => {

    // ...
    next( response => {

    } );

} );
```






# neden Resource
- resource vue-resource tarafından sağlanan bir tür maping hizmetidir.
- post, get, put, delete dışında özel methodlar tanımlayıp o methodlar ile işlem yapabilme imkanı.
- kendimize özel methodlar oluşturarak bu işlemleri yapabiliriz.

```js
this.$resource("url").save({varsa: options}, { username:'username', email:'email' }).then().catch();
/*
    .get() => GET,
    .query() => GET,
    .save() => POST,
    .update() => PUT,
    .remove() => DELETE,
    .delete() => DELETE,
*/
```



## Custom Resource - Kendimize özel resource üretmek.
**main.js** dosyası içerisinde **vue** nesnesinin **created** methodu içerisine yazılır.

```js
data(){
    return {
        resource: {}
    }
},
created(){
    const customActions = {
        kaydet: { method: 'POST', url: "post/create" },
    }
    this.resource = this.$resource("default_url", {}, customActions)
}
```

##### Kullanım.
```js
this.$resource.kaydet({}, {username:'username', email:'email'})
```


#
