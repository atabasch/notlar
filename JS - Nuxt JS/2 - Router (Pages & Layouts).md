# Pages
Page ler Nuxt tarafından okunarak Server tarafında render edilen dosyalardır.

## Klasör/Dosya yöntemi ile Routing
<hr>
- '/' url path'i ile request yapılınca **pages/index.vue** den otomatik olarak gelir.
- '/slug' url path'i ile request işlemi yapılınca **pages/slug/index.vue** otomatik olarak gelir.

| url | file |
|---|---|
| **/**  | pages/index.vue  |
| **/slug** (file)   | pages/**slug**.vue |
| **/slug** (folder)  | pages/**slug**/index.vue |
| **/slug/:param** (file)  | pages/**slug**/**_param**.vue |
| **/slug/:param** (folder)  | pages/**slug**/**_param**/index.vue |
| **/slug/:param/sub_slug**  | pages/**slug**/**_param**/**sub_slug**.vue |
|   |   |

## Linklere bağlantı vermek
<hr>

```html
<tamplate>
    <!-- Sayfa yeniden yüklenerek bağlantıya gider -->
    <a href="/slug">Bağlantı Başlığı</a>

    <!-- Tıklanınca direkt yönlendirmek -->
    <a href="#" @click.prevent="$router.push('/slug/id')">Bağlantı</a>

    <!-- Tıklanınca methodslarla yönlendirmek -->
    <a href="#" @click.prevent="goUrl()">Bağlantı</a>

    <!-- vue js ile yönlenir -->
    <nuxt-link to="/slug" tag="a" class=""></nuxt-link>

    <!-- Tıklanınca methodslarla yönlendirmek -->
    <button @click="goUrl()">Bağlantı</button>
</tamplate>

<script>
    methods: {
        goUrl(){

            // Script yönlendirmesi (Norma) VueRouter kullanımı
            this.$router.push('path');
        }
    }
</script>
```


## Parametreleri Almak ve Kontrol etmek
<hr>

```html
<template>

</template>


<script>

export default{

    // NuxtJS e ait bir giriş methodu.
    // içinde False return edilirse sayfa hiç açılmaz.
    validate(arg){
        // parametre integer ise sayfa açılır değil ise hata verir;
        return /^\d+$/.test(arg.params.parName);
    },

    // Nuxt JS e ait bir method ancak içerisinde this methodu kullanılamaz. Bunun yerine 1. parametreyi kullanacaksın;

    asyncData(context, callback){
        let param = context.params.paramName;
        let datas : {
            key: val
        }

        // 1. parametre 404 sayfasına yönlendirmesi için.
        callback(new Error(), datas); // 2. parametredeki oble içeriği VUE nin data objesine gönderilir.
    },

    create(){
        // Vue Router yöntemi ile
        this.$route.params.parName;
    }

}
</script>
```



## İç içe Route yöntemi (Belli bir slug'a bağlı master page )

ÖRNEK: products a ait bir ana dosya oluşturulur ve products sayfalarının alacağı tema bu dosya içerisine yazılır. Daha sonra bu dosya içerisine sayfaların değişeceği yere <nuxt-child/> etiketi eklenir.

- 📂 **pages**
  - 📝 products.vue     `/products` (Master Page buradadır <nuxt-child/> eklenir.)
  - 📂 **products**
    - 📝 _id.vue        `/products/1`
    - 📂 **search**
      - 📝️ _search.vue    `/products/search/web-products`

**📝 products.vue**
```html
<template>
    <div class="">
        <header></header>
        <main>
            <div id="content">
                <nuxt-child/>
            </div>
            <aside></aside>
        </main>
        <footer></footer>
    </div>
</template>
```

## Layout
Master Page, Şablonlardır.

- 📂 **layouts**
  - 📝 **default.vue**

Bütün page'ler bu layout içinden gösterilir. default.vue var olmak zorundadır.
```html
<template>
    <div class="">
        <nuxt/>
    </div>
</template>
```

#### Page'lere özel layout tanımlamak

- Örneğin **products** lara özel bir sayfa şablonu hazırlayalım.
- **layouts/product.vue** dosyasını oluştur.
- **pages/products.vue** içerisine gir ve **export default** un içine `layout: "product"` ı ekle.

#### 404 için layout oluşturmak

- **layouts/*error.vue* dosyasını oluştur.













#
