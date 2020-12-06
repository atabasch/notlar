```js

{

    data(){
        return {

        }
    },


    /*
        NuxtJS e aittir. data ile aynı görevi görür ama server tarafında çalışır
        İşlemler sonucunda dataya gönderdiği veriler Server side olarak işlenir.
        Yani sayfa refresh ile ilk açılınca serveerda çalışır sonraki her route işleminde clientte çalışır.
        Yani google da indexlenebilir.

        - Sunucu taraflı render edildiği için "this" anahtar kelimesi kullanılamaz.
        - işlem bitip callback edildikten sonra vue nesnesinin içindeki data ile veriler birleştirilir.


    */
    asyncData(context, callback){

        // context: uygulama bilgilerini, params, query, app, gibi bir sürü bilgiyi verir.

        // verileri al
        axios().then( (response) => {

            //  callback ile data ya gönder.
            callback(error=null, {
                title: 'Posts List',
                posts: response.body    
            });

        })

    }

    // Vue JS e aittir burada yapılan işlemler vue de çalışır ancak Client'de oluşur Server'da değil.
    created(){},



}

```
