
# Componentler
Componeneler bir kez oluşturup projenin çeşitli yerlerine çağırarak kullanacağımız vue dosyalarıdır.

**Herhangipage.vue**
```html
<template>
    <ComponentName></ComponentName>
</template>

<script>
    import ComponentName from "@/components/ComponentName";
    export default {
        components: {
            ComponentName
        }
    }
</script>
```

## Componentlere Props Yollamak

**ParentComponent.vue**
```html
<template>
    <ComponentName :is-admin="true" :item="{key:val}"></ComponentName>
</template>
```

**SubComponent.vue**
```html
<script>
    export default {
        props: {
            isAdmin: {
                type: Boolean,
                required: false,
                default: false,
            },

            item:
        }
    }
</script>
```
