## Harici Dosyaların Konumları
- **CSS** dosyalarını assets klasörü içerisinde barındır.
- **IMG** dosyalarını static klasörü içerisinde barındır.

Static dosyasına webpack tarafından hiç bir şekilde müdahale edilmez.  
Assets dosyası içerisindeki dosyalar minifize edilebilir, tek satır haline getirilebilir vs


## Admin Layoutu Oluşturmak

- **layouts/admin.vue** dosyasını oluştur.
- **pages/admin/index.vue** dosyasını oluştur.

**pages/admin/index.vue**
```html
<script>
    export default {
        layout: "admin"
    }
</script>
```
