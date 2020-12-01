# Vue JS
Vue JS tıpkı Angular & React JS gibi bir javascript front end motorudur. Daha performanslı ve kolaydır. Tıpkı JQuery gibi bir js dosyası import ederek de çalışabilir.
Ama nodejs ile ek paketler kullanarak router yapısıyla da kullanılabilir.

## Basit Kullanım
- VueJS kodlarının çalışacağı bir alan belirlemek için çalışma alanının en üst divine bir id ver.
- v-on:[event]="funcName(par)" şeklinde bir nesnede belirlenen bir eventde çalışacak fonksiyonu belirlersin.
- @event="funcName(par)" ile bir event ile fonksiyon çalıştırıalbilir.
- @event.native="functname(par)" eğer bir html nesnesi değilde vue componentine event verilecekse native kullan.
- v-bind:[tag]="degisken" Yazılan nesnenin belirlenen takına girilen değeri yazar.
- :tag="degisken"
- v-model="degisken" input, textarea gibi giriş alan nesnelerin değerlerinin eşitlendiği bir değişken.
- {{ degisken }} Değişkeni yazdırır.
- v-text="degisken" Değişkeni içeriğini nesnein içine yazdırır.
- v-html="degisken" Değişkeni içeriğini nesnein içine html i varsa html li yazdırır.
- v-for="item in items" İçine yazıldığı nesneyi items kadar basar ve item ile içinde değeri kullandırır.
- v-if="degisken" değişken true ise nesneyi gösterir.
- v-else bir önceki if false ise bu işe yarar.

**index.html**
```html
<html>
<body>
    <div id="app">

        <div id="hesapMakinesi">
            <input type="text" placeholder="1. Sayı" v-model="number1">
            <input type="text" placeholder="2. Sayı" v-model="number2">
            <div>
                <button v-on:click="calculate('+')">+</button>
                <button v-on:click="calculate('-')">-</button>
                <button v-on:click="calculate('/')">/</button>
                <button v-on:click="calculate('*')">x</button>
            </div>
            <input type="text" placeholder="Sonuç: " v-bind:value="result" disabled>
        </div>

        <h3>Son İşlemler</h3>
        <ul>
            <li v-for="item in history">{{ item }}</li>
        </ul>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="custom.js"></script>
</body>
</html>
```

**custom.js**
```js
var app = new Vue({

    el: '#app', // el yi burada belirtmeyip daha sonra app.$mount('#app') şeklinde uygulayabilirsin.
    data: {
        number1: null,
        number: null,
        result: null
        history: []
    },
    mount: function(){ // Sayfa yüklenince çalışacak ilk fonksiyon
        this.funcname();
    },
    methods: {
        hesapla: function(islem){
            switch(islem) {
                case '+':
                    this.result = parseInt(this.number1) + parseInt(this.number2);
                    this.history.push(`${this.number1} + ${this.number2} = ${this.result}`);
                    break;

                case '-':
                    this.result = parseInt(this.number1) - parseInt(this.number2);
                    this.history.push(`${this.number1} - ${this.number2} = ${this.result}`);
                    break;

                case '/':
                    this.result = parseInt(this.number1) / parseInt(this.number2);
                    this.history.push(`${this.number1} / ${this.number2} = ${this.result}`);
                    break;

                case '*':
                    this.result = parseInt(this.number1) * parseInt(this.number2);
                    this.history.push(`${this.number1} x ${this.number2} = ${this.result}`);
                    break;

                default: this.result = 0; break;
            }
            this.number1 = null;
            this.number2 = null;
        },

    },
    computed: {
        // computed başlığına git.
        methodname: function(){

        }
    }
});

```










## Template Yapısı - component

- Vue.componenet ile bir komponent oluştur.
- 2 parametre alır.
  - 1. component adı
  - 2. component içeriği
- 2. parametre obje olarak verilir ve içerisine template ve props gibi keyler ile template hazırlanır.

Aşağıdaki örnekte makalelerin görüntüleneceği bir componenet hazırladım.

**custom.js**
```js
Vue.component('post-item', {
    props: ['item'],
    template: `<article class="post">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <a href="{{ item.url }}">Devamını oku</a>
        <button v-on:click="openInfo(item.id)"></button>
    </article>`;,
    methods: {
        openInfo: function(id){
            alert(id);
        }
    }
});

var app = new Vue({
    el: "#app",
    datas: {
        posts: [
            {id:1, title:'...', description:'......', url:'...'},
            {id:2, title:'...', description:'......', url:'...'},
            {id:3, title:'...', description:'......', url:'...'},
            {id:4, title:'...', description:'......', url:'...'}
        ]
    }
});
```


**index.html**
```html
<div id="app">
    <section id="postList">

        <post-item
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:item="post"></post-item>

    </section>
</div>
```




### !► computed: ...

- Computed **new Vue** nesnesine yazılan bir anahtardır. tıpkı **data**, **methods** gibi ana bir özelliktir.
- **methods** gibi içerisinde fonksiyonlar oluşur.
- Ama ekran basarken {{ xxx }} **data** datakiler gibi () parantezler eklenmeden kullanılır.
- **methods** html içindeki bir **data** her değiştiğinde yeniden çalışır böylece performanssız olur.
- Ama **computed** Sadece kendi içindeki bir değişken değişiyor mu diye bakar ve o değişkenin değeri değştiğinde execute edilir. böylece dah aperformanslı olur

**KISACA**   
Tıpkı methods gibi fonksiyonlarını oluştur ancak parametre göndermeden sadece fonksiyon adını vererek () parantezler olmadan çağır. Ve daha performanslı işler yapımış ol.
```js
computed: {

    getCount: function(){
        return count;
    }, // {{ getCount }}

    currentData: {
        get(){
            return this.data;
        },
        set(data){
            this.data = data;
        }
    } // <input type="text" v-model="currentData">

}
```








### !► watch: ...

**watch** Vue nesnesine eklenen bir anahtar özelliktir. **data** içerisindeki değişkenleri gözlemler ve değerleri değişince devreye girer. Bunun yöntemi de izlenecek olan değişken ismi ile watch içerisindeki anahtar kelimenin aynı olması.

```js
data: {
    isFinish: false,
},
methods:{...},
...,
watch: {
    isFinish: function(value){
        // data içindeki isFinish değişkeninin değeri değiştiğinde burası çalışacaktır.
        obj = this;
        setTimeout(function(){
            this.restartFonksiyonu();
        }, 2000);
    }
}
```











### ►[v-bind:attribute] ile nesnelere attribute atanır.
```html
//
<nesne v-bind:attribute_name="variable" ...>

<input v-bind:value="" />

<a v-bind:href=""></a>

<img v-bind:src="" />

<img :src="kisaltilmiş" />
```











### ►[v-once] ile nesnelerin değişmemiş halini almak.
Vue nesnesi içerisinde **data** anahtarında oluşturulmuş bir değişkenin değerini **methods** içindeki bir fonksiyonda değiştirdiğini düşün.  
Eğer o değişkenin bir yerde kullanılırken ilk değişmemiş değeri ile yazılmasını istiyorsan o nesneye **v-once** ekle













### ►[v-html] ile html yazdırmak
JQuery de ki `$(secici).html(içerik); ` tarzındaki tanımlama. Web sitesinde {{ variable }} olarak yazdırılan içeriklerden html nesneleri string olarak sayılarak herşey ekrana yazılır.  
Eğer girilen değişken içerisinde html kodu varsa ve bu kodların da çalışmasını istiyorsak **v-html** kullanırız
```html
<script type="text/javascript">
    //...
    url: '<a href="https://....">Git</a>',
    //...
</script>

<p v-html="url"></p>
```













### ►[v-on:event] ile event çalıştırmak.
Örneğin bir butona tıklandığında işlem yaptırmak gibi.

```html
<script type="text/javascript">
    methods: {
        methodname: function(event){ //event ile js nin verdiği bir kaç bilgiyi kullanabilirsin.

        }
    }
</script>

<button v-on:click="methodname">Tıkla</button>

<button v-on:click="methodname('parametre')">Tıkla</button>

<!-- Parametre gönderilince event nesnesi çalışmıyor $event ile lazımsa gönderebilirsin. -->
<button v-on:click="methodname('parametre' $event">Tıkla</button>

<button @click="methodname('parametre' $event">Kısaltılmış</button>
```

| OLaylar | Açıklamaları|
|---|---|
| click   |   |
| mousemove   |   |
| keyup   |   |
| keydown   |   |
|   |   |

###### .stop ile işlem durdurmak.
Mesela bir uygulamada bir alan içinde farenin koordinatlarını almak istiyorsun ama o alan içindeki bir nesne üzerinde bunu istemiyorsun.   
Aynı şekilde örneğin a hreflere tıklandığında bir linke gitmesinin istemiyorsun.   
O zaman olaya .stop diyerek o nesne üzerinde olayın durmasını engelleyebilirsin.

v-on:mousemove.stop

v-on:click.stop

###### Klavye eventlerini yakalamak
Bir input içerisinde bazı tuşlara basıldığında işlem yapılsın istiyorsan kullanırsın.  Örneğin inputa bir şeyler yazılsın ama entera basılınca bir işlem çalışsın.

**v-on:keyup.enter="enterabasildi()"**

**v-on:keyup.enter.space="entera da boşluğa da basılsa()"**



Method içerisinde **event.target.value** ile değeri alabilirsin.











### {{  }} içerisinde yazılabilenler
```html
<!-- Süslü parantezler içerisinde tek satırlık js kodları yazılabilir -->

{{ degisken }}

{{ x > y ? 'A' : 'B' }}

{{ 2 + 2 }}


```










### ►[v-model] ile bir değişkeni 2 taraflı senkronize etmek

**v-model="degisken_adi"** kullanılarak JS tarafındaki bir değişkenle bir input değerini eşitleyebilirsin. Böylece 2 tarafta da veri değiştikçe 2 tarafta da veri güncellenir.

```html
<script>
data: {
    message: null
}
</script>

<input type="text" v-model="message">
```









### Nesnende class ve style ekleme
bind ile class attributesine sinif adı göndereceğiz.
```html

<div class="btn btn-block" :class="{ 'btn-primary': true, 'btn-danger': false}" ></div>
<!--  class="btn btn-block btn-primary" bir değişken ve fonksiyon ile düzenli değiştirebilirsin -->


<div :class="['var1', 'var2']" ></div>

<div :style="{ backgroundColor:'', 'background-size':'' }"></div>
```


## ►[v-if] ile koşullar
v-if içine yazılan koşul true ise o nesne gösterilir false ise nesne gizlenir.
```html
<div v-if="true"> Bu nesne görünecek</div>
<div v-if="false"> Bu nesne gizlenecek</div>
<div v-if="!true"> Bu nesne de gizlenecek</div>

<div v-if="koşul"> Bu nesne koşul true ise gözükecek</div>
<div v-else>Bu nesne üstteki nesne false ise görünecek</div>

<div v-if="koşul"> Bu nesne koşul true ise gözükecek</div>
<div v-else-if="2. koşul">Bu nesne koşul true ise gözükecek</div>
<div v-else>Bu nesne üstteki nesne false ise görünecek</div>

<!-- show komutu nesneye style="display:none" kodunu ekler -->
<div v-show="koşul">Koşul true ise gösterilir ancak else durumu olmaz</div>
```



## [v-for] ile listeleri döngülemek

Daha sonra güncelleme vs yapmak istediğin elemanlar olusa diye :key yada v-bind:key="" eklemeyi unutma

```html
<script type="text/javascript">
    renkler: ['kırmızı', 'yeşil', 'mavi'],
    uyeler: [
        {id:1, name:..., ...},
        ...
    ]
</script>


<ul>
    <li v-for="renk in renkler">{{ renk }}</li>
</ul>

<ul>
    <li v-for="(renk, index) in renkler">{{ renk }}</li>
</ul>

<!-- template yayınlama sırasında render edilmez sadece içindeki içeerik koşula göre gelir. -->
<template v-for="(renk, index) in renkler">
    <strong>{{ index }}</strong> <h3>{{ renk }}</h3>
</template>


<!-- Belli sayı kadar döngü -->
<p v-for="i in 5">{{ i }}</p>

<!-- key kullanarakk -->
<li v-for="uye in uyeler" v-bind:key="uye"> <strong>{{ uye.name }}</strong> </li>

<li v-for="uye in uyeler" v-bind:key="uye.id"> <strong>{{ uye.name }}</strong> </li>
```


### Vue ile bir nesneye ulaşmak
- Jquerydeki `$('#idname')` yada JS deki `document.querySelector('..')` tarzında bir nesneyi belirleyim vue içinde ulaşmak için nesneye ref attributesi ile bir isim verilir.
- Ama nesnenin içeriği değiştirilse bile eğer ki vue ile bir değişken yazdırma yada değer verme işlemi yapıldıysa nesnedeki değişiklik hemen silinir.
- Bu işlemi daha çok başka JS kodlarında nesne değerleri lazım olursa diye kullanırsın.

```html
<input type="text" ref="refname" />

<script type="text/javascript">
    var app = new Vue({
        this.$refs.refname.value
    });

    app.$refs.refname.value
</script>
```









### Html i JS tarafında oluşturup nesneyede basabilirsin.
```html
<div id="app"></div>

<script>
var vm = new Vue({
    template: '<h1>....</h1>'
});
vm.$mount('#app');
</script>
```



###



#
