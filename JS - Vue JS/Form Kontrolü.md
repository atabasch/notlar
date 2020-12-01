## Vue.JS Form İşlemleri

#### v-model="degisken_adi"

Bir form elemanı ile Vue nesnesi içerisindeki data nesnesi içindeki değişkenler arasında ilişki kurar.
Herhangi bir tarafta değişen veri anlık olarak diğer tarafa uygulanır.

- input ve textarea nesnelerine girilen değeri direkt alır
- select de seçilen option value değerini alır
- radio ve checkbox nesnelerinde seçilenin value değerini alır.
- checkbox nesnesini bir dizi ye bağlayarak birden fazla seçim alabilirsin.
- select multiple nesnesini bir dizi ye bağlayarak birden fazla seçim alabilirsin.

```html
<div id="app">
    <!-- JS'nin "input" özelliği ile Vue nesnesindeki data nesnesindeki değişkenle anında eşitlik oluşturur. -->
    <input type="" v-model="degisken" />

    <!-- JS'nin "input" değil "change" metodu ile data nesnesindeki değişkene veri gönderir. -->
    <input type="" v-model.lazy="degisken" />

    <!-- Değişkene trim metodunu uygulayarak baş ve sondaki boşlulkları siler. -->
    <input type="" v-model.trim="degisken" />

    <!-- Sanırım type="number" ile aynı işlev -->
    <input type="" v-model.number="degisken" />

    <!-- 3 işlevi birden uygular -->
    <input type="" v-model.lazy.number.trim="degisken" />
</div>

<script>
const app = new Vuew({
    data: {
        degisken: null
    }
});
</script>
```


#### Butona Tıklanınca Submit İşlevini Kontrol Etmek
```html
<form action="xxx" method="xxx">
    <!-- ... -->
    <button @click.prevent="submitForm"></button>
</form>

<script>
const app = new Vuew({
    methods: {
        submitForm: function(){
            if(formuPostEttirmeKoşulları){
                this.$el.querySelector('form').submit();
            }
        }
    }
});
</script>
```



#### Özel Form Componenti Yazmak
Örneğin bir Açık/Kapalı switch animasyonu yaparak bir işlemde açma ve kapama yaptırmak istiyorsun bunun için kendi form nesnesi yazmış gibi düşün.

```html

<script>
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
});
</script>

<div>
    <base-checkbox v-model="lovingVue"></base-checkbox>
</div>
```
