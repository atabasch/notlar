#


### Kurulum
> npm install -g vue-cli

[https://cli.vuejs.org](https://cli.vuejs.org)



## NOT
**Eğer ki component içerisinde setInterval kullanacaksan. methods içinde bir fonksiyon tanımla ve o fonksiyonu parametresiz çalıştırmayı dene.**
```js
startLoop: function(){
    this.loop = setInterval( this.itemLoop, 500);
},
stopLoop: function(){
    clearInterval(this.loop);
    this.loop = null;
},
itemLoop: function(){
    this.showed+=1;
}
```




### Vue Projesi Oluşturmak
> vue init webpack-simple projectName

> cd projectName

> npm install

> npm run dev



### Component Oluşturmak.

- **.vue** uzantılı dosyaslar içerisine yazılır.
- **temlplate**, **script** ve **style** tagları içinde olmalı.
- **data** anahtarı bir fonksiyon olmalı ve geriyor **obje** {} **return** etmeli.
- **<template>** içinde kesinlikle 1 tane kapsayıcı nesne olup diğer her şeyi o içine almalı.

###### src/ComponentAdı.vue
```html
<template>
    <div>
        <p>Lorem ipsum ... {{ variable }}</p>
        <hr>
        <button @click="methodName"></button>
    </div>
</template>


<script>
// Eğer component içine component çekeceksen burada da çekebilirsin.
import SubComponent from './SubComponent'; // src/SubComponent.vue çağırıldı
export default {
    // Eğer alt component kullanacaksan componenets anahtarında belirt.
    components: {
        'component-tag': SubComponent
    },
    data: function(){
        return {
            variable: value
        }
    },
    methods: {
        methodName: function(){

        }
    }
}
</script>

<!-- Eğer farklı kompontler içinde aynı class yada aynı id ye verilen farklı style işlemleri olursa -->
<!-- Her style kodunun kendi componentine etki etmesi için scoped ekle -->
<style scoped>

</style>
```


###### src/main.js
```js
import ComponentName from './ComponentFile';
Vue.component('component-tag', ComponentName);
```

**NOT:** Ana componenetlerin hepsi App.vue dosyasında oluşturulacak.






### Klasör Yapısı

**.babelrc** ES6 yı ES5 e çevirir.
**src/App.vue** Templateler .vue uzantılı dosyalara yazılır böylece ayrı ayrı componentler oluşturulur.  
**src/main.js** ana js dosyası Templateler bu dosya içinde birleşir ve çalışır.  

**NOT** Her .vue uzantılı dosya içinde 3 tag mecbur olacak <template>, <script>, <style>






### Derleme
Bütün işlemleri yapıp kodlarını tamamladığında.

> npm run build

kodunu çalıştırarak **dist/build.js** dosyasını oluşturup istediğin sitede kullanabilirsin.

#####  Komponentler arası iletişim.

- component içindeki objeye props ile bir array nesnesi verip içerisine sonradan bind edilecek değerleri yaz ve componenet içinde kullan.

##### Componentslere gönderilen propslarda validation

 - propsu dizi olarak değil obje olarak oluşturarak karşılığında validate belirtmeleri yapabilirsin.

```js
props: {
    name: [String],
    persons: [String, Array], // Strgin yada Array
    user: {
        type: String,
        required: true,
        default: "admin"
    },
    items: {
        type: Object,
        default: function(){ return {} }
    }
}
```

#### Child Parent arası iletişim
**child içindeki bir methodda**
```js
this.$emit('key', val);
```

**Parent dosyasında**
```html
<component-item @key="variable = $event" ..></component-item>

<script>
    //...
    variable = null;
    //...
</script>
```


#### Child ve Child arası veri akışını sağlamak
- Vue de iki child component arasında veri iletişimi yoktur.
- Veriler arası iletişim kurabilmek için  Child Parent arası iletişimi kullanıp chillden parente ve parentten diğer childe veri aktarılır.


#### 2. YÖNTEM Child ve Child arası veri akışını sağlamak
- **main.js** dosyasını aç.
- **new Vue** kodundan hemen önce aşağıdaki kodu yaz.
- `export const eventBus = new Vue();`
- bir componente gir ve içine aşağıdaki kodları yaz.

```js
import {eventBus} from './main';
//....
eventBus.$emit('key', val);

```

- 2. verinin gönderileceği componenete git ve eventBus u yine dahil et.
- `import {eventBus} from './main';`

componentin created fonksionunda kullan.
```js
//...
created: function(){
    eventBus.$on('key', (data) => {
        this.variable = data;
    });
}
```


#### 3. YÖNTEM Child ve Child arası veri akışını sağlamak
- 1 tane ana eventBus oluştur ve tüm childler arasındaki etkileşimi üzerinde kur.

**main.js**
```js
export const eventBus = new Vue({
    data: {

    },
    methods: {
        funcName: function(val){
            this.$emit('key', val);
        }
    }
});
```

**deger-gonderen-subcomponents.js**
```js
import {eventBus} from './main';
//...
methods: {
    otherFuncName: function(val){
        eventBus.funcName(val);
    }
}
```


**degerialan-components.js**
```js
import {eventBus} from './main';
///....
created: function(){
    eventBus.$on('key', (data) => {
        this.variable = data;
    });
}
```





#
