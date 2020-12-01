```js
new Vue({

    // ## KULLANICI EKRAN DA BİRŞEY GÖRMEDİ

    // Veriler işlenmeye başlamadan önce çalışır
    beforeCreate: function(){},

    // İnitialize işlemleri yapılarak değişken ve method tanımlamaları gerçekleşir.

    // initialize işlemi bittitekn sonra çalışır
    created: function(){},

    // el: ile gelen nesne içeriği derlenir.

    // Kullanıcı olayları görmeden önce çalışan kod
    beforeMount: function(){},

    // el: ile gelen nesne içeriği güncellenir.

    mounted: function(){},

    // ## KULLANICI EKRANI GÖRÜR.

    // Datalarda bir değişiklik olduğunda yeni değişiklikler ekrana basılmadan önce yapılan işler   
    beforeUpdate: function(){},

    // Datalar değiştikten sonra çalışan fonksiyon
    updated: function(){},


    beforeDestroy: function(){},
    destroyed: function(){},

    // Aşağıdaki iki method sadece dinamik komponent işlemlerinde kullanılır.
    // <keep-alive></keep-alive> kodlarının içinde olunca gelir.
    activited: function(){},
    deactivited: function(){}

});

```
