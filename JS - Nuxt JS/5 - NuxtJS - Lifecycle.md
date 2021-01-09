```js

{

    data(){
        return {

        }
    },


    /*
        NuxtJS e aittir ve document onload olunca çalışır.
        İçerisinde bir Object return edilir ve bu Object VueJS e ait "data" methodu ile birleştirişir.
        - Sunucu taraflı render edildiği için "this" anahtar kelimesi kullanılamaz.
        - 2 çeşit return işlemi yapılabilir
          - 1) callback parametresini oluşturmaz ve kod bloğu içerisinde return {...} olarak veri dönersin.
          - 2) callback parametresi gönderip callback(error=null, {...}) şeklinde


    */
    asyncData(context, callback){
        // context: uygulama bilgilerini, params, query, app, gibi bir sürü bilgiyi verir.

        axios().then( (response) => {

            // YÖNTEM 1
            callback(error=null, {
                title: 'Posts List',
                posts: response.body    
            });

            // YÖNTEM 2
            return {
                title: 'Posts List',
                posts: response.body 
            }

        })

    },


    // asyncData gibi çalışır ancak içerisinden verilere ulaşılabilir.
    // işlemleri server taraflı yapar
    // SAYFA AÇILIRKEN DB DEN DATA GETİRİP STORE GÜNCELLEMEK İÇİN EN İYİ YER
    // Ama sadece STORE güncellemek için kullan.
    fetch(context, callback){

    },



    // Vue JS e aittir burada yapılan işlemler vue de çalışır ancak Client'de oluşur Server'da değil.
    created(){},



}

```
