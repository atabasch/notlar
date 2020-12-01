# Component
Componentlerde ana vue nesnesinin aksine data anahtarı bir **function** olmalı ve geriye bir **obje return etmelidir.**,


```js
Vue.component('component-tag', {
    data: function(){
        return {
            var: val,
            var: val
        }
    },

    template: '<html kodları...>',


    methods: {

    }
});

```

Componenetleri 1 kez tanımladığında her app divi içinde çalışır eğer bir komponentin sadece 1 app içinde çalışmasını istiyorsan.

```js
var component1 = {
    data: function(){ return {} },
    template: '...'
};

var app = new Vue({
    data: {},
    components: {
        'component-tag': componenet1,
        'componentTag': compontent2 // CamelCase isimleri html içinde camel-case gibi yazabilirsin.
    }
});
```


# 2) Component İçerisine Değer Göndermek

## 2.1) Component içerisine değer yollamak

###### 📝 SubComponent.Vue
**slot** etiketinin olduğu yere gönderilen içerikler gelir.
```html
<template>
    <div> ...
        <slot></slot>
... </div>
</template>

<script> /*...*/ </script>
<style> /*...*/ </style>
```

###### 📝 ParentComponent.Vue
```html
<SubComponent>
    <h1></h1>
    <p></p>
</SubComponent>
```

## 2.2) Belirli yerlere içerik yollama

###### 📝 SubComponent.Vue
Tıpkı bir fonksiyona parametre göndermek gibi yeri belli nesneler
```html
<template>
    <tags>
        {{ data1 }}
        {{ data2 }}
        <header><slot name="title"></slot></header>
        <article><slot name="content"></slot></article>
        <footer>
            <slot name="date">Default değer olacaksa içine yaz</slot>
        </footer>
        <section>
            <slot> Belirtilmemiş tüm nesneler buraya gelir. </slot>
        </section>
    </tags>
</template>
<script>
export default {
    props: ['data1', 'data2']
}
</script>
<style> /*...*/ </style>
```

###### 📝 ParentComponent.Vue
```html
<component data1="" data2="">
    <h1 slot="title">Başlık</h1>
    <p slot="content">İçerik metni</p>
    <span slot="date">10 10 2010</span>
    <!-- Aşağıdaki nesnelerin tümü sadece <slot> olan yere gider -->
    <a href=""></a>
    <button></button>
</component>
```


## 2.3) Dinamik Component Kullanımı

Bu işlem bir tab penceresi işlemi olabilir.
- X kadar component sayfaya dahil edilir.
- Verilen değere göre component çağırılır.

```html
<template>
    <button @click="showedComponent='firstComponent'"></button>
    <button @click="showedComponent='secondComponent'"></button>
    <button @click="showedComponent='thirtyComponent'"></button>

    <!-- Her çaırılan component sıfırdan instance edilir -->
    <component :is="showedComponent"></component>

    <!-- Çağırılan Komponent değiştiğinde sıfırlanmaz -->
    <!-- Kullanılan bir komponent yeniden kullanıldığında değerler kaldığı yerden devam eder. -->
    <keep-alive>
        <component :is="showedComponent"></component>
    </keep-alive>
</template>

<script>
    import FirstComponent from './FirstComponent';   // FirstComponent.Vue
    import SecondComponent from './SecondComponent'; // SecondComponent.Vue
    import ThirtyComponent from './ThirtyComponent'; // ThirtyComponent.Vue

    export default{
        data: function(){
            return{
                showedComponent: "firstComponent"
            }
        },
        components: {
            firstComponent: FirstComponent,
            secondComponent: SecondComponent,
            thirtyComponent: ThirtyComponent
        }
    }
</script>
```
