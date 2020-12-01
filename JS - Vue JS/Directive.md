# Özel Directive Yazmak

Directive'ler Component ve Nesneleri küçük işler yaptırmak için kullanılan anahtar kelimeler.  
Dahili Directive'ler **v-if, v-else, v-show, v-model, v-for, v-on, v-text, v-html**  

#### Directive Hook Methodları

###### ⚓ bind(el, binding, vnode)  
Directive elementi attach olduğunda çalışır.

- **el** Directive in kullanıldığı element.
- **binding** Directive in aldığı parametreler.
- **vnode** virtualnode verir.

###### ⚓ unbind(el, binding, vnode)  
Directive elementi unbind olduğunda çalışır.

- **el** Directive in kullanıldığı element.
- **binding** Directive in aldığı parametreler.
- **vnode** virtualnode verir.

###### ⚓ inserted(el, binding, vnode)  
Nesne doma eklenir eklenmez çalışır.

- **el** Directive in kullanıldığı element.
- **binding** Directive in aldığı parametreler.
- **vnode** virtualnode verir.


###### ⚓ updated(el, binding, vnode, oldVnode)

Directive'ind bind olduğu component update olduğunda.

- **el** Directive in kullanıldığı element.
- **binding** Directive in aldığı parametreler.
- **vnode** virtualnode verir.
- **oldVnode** eski update edilmemiş virtualnode verir.


###### ⚓ componentUpdated(el, binding, vnode, oldVnode)  
Directive'ind bind olduğu component ve altındaki elementlerden biri update olduğunda.

- **el** Directive in kullanıldığı element.
- **binding** Directive in aldığı parametreler.
- **vnode** virtualnode verir.
- **oldVnode** eski update edilmemiş virtualnode verir.


## Directive Tanımlamak
```html
<template>
    <p v-color="'red'">Yazının rengini değiştirmek için sadece value gönderiyorum.</p>
    <p v-color:bgcolor="'blue'">Arkaplan rengini değiştirmek için : ile argüman ekliyorum.</p>
    <p v-color.delay="değer">3 Saniye sonra renk siyaha dönsün diye .delay ile modifier yolluyorum.</p>
</template>

<script>
// v-color adında bir directive oluşturuluyor.
Vue.directive('color', {

    // bind hooku ile anında oluşacak bir directive elementi oluşturuluyor.
    bind(el, binding, vnode){
        //NOT: Üzerinde oynanacak eleman "el" ile gelen nesnedir.

        // Kullanılan directive'in özellikleri alınıyor
        // v-directivename:arg.modifier1.modifier2="value"
        let renk = binding.value;           // v-color="↓↓↓"
        let ozelanahtar = binding.arg;      // v-color:↓↓↓="değer"    
        let modifiers = binding.modifiers;  // v-color.↓↓↓.↓↓↓="değer"

        if(ozelanahtar=='bgcolor'){
            el.style.backgroundColor = renk;
        }else{
            el.style.color = renk;
        }

        if(modifiers['delay']){
            setTimeout(()=>{ el.style.color = 'black'; }, 3000);
        }
    }

});
new Vue({ /* ... */})
</script>
```


### Sadece 1 Component'e özel direvtive oluşturmak.
###### 📝 Customcomponent.Vue
```html
<template>
<!-- ... -->
</template>

<script>
export default {
    directives: {

        customdirectivename: {
            bind(el, binding, vnode){
                //...
            }
        }

    }
}
</script>
```
