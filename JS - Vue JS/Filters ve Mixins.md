# 1) Filters
Filterler ekrana bastırılan değerlere uygulanacak metodlardır.

### Local Filter oluşturmak

###### Customcomponent.Vue

```html
<template>
    {{ message | toUpperCase }}
</template>

<script>
export default{
    data(){
        return {
            message: 'bla bla bla'
        }
    },

    filters: {
        toUpperCase(value){
            return value.toUpperCase();
        }
    }
}
</script>
```

### Global Filter oluşturmak

###### main.js
```js
Vue.filter('filtername', (value)=>{
    // Yapılacak işlemler
    return value;
})
```


###### Customcomponent.Vue
```html
<template>
    {{ message | filtername }}
    {{ message | filtername | filtername2 }}
</template>
```

# 2) Mixins
Verileri 1 dosyada tanımlayıp daha sonra ihtiyacımız olan her dosya ve Componentte çağırma işlemi.

###### mixinItems.js
```js
export const mixinItems = {
    data(){
        return{
            searchText: '',
            items: [a,b,c,d,e,f,g,h]
        }
    },
    computed: {
        filtered(){
            return this.items.filter( item => {
                return item.match(this.searchText);
            } )
        }
    }
}
```

###### Items.Vue
```html
<template>

</template>

<script>
import {mixinItems} from './mixinItems'
export default{
    mixins: [mixinItems],
    //...
}
</script>
```
