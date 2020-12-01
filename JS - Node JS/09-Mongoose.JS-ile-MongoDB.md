# MODÜL KUR
> npm install mongoose --save

## BAĞLANTI
#### MODÜLÜ KULLANMAK
> const mongoose = require('mongoose');

```js
const mongoose = require('mongoose');

// BAĞLANTI
mongoose.connect('mongodb://host/dbname')
        .then(()=>{
            //Bağlantı başarılı
        })
        .catch(()=>{
            //bağlantı başarısız.
        });

// ÜSTTEKİ YERİNE AŞAĞIDAKİ BAĞLANTI VE KONTROLÜ ÖNERİLİR.
mongoose.connect('bağlantı stringi');
mongoose.connection.on('open',()=>{
    // Bağlandı
});
mongoose.connection.on('error',(err)=>{
    // HATA OLUŞTU
});

```


### KULLANIM ÖRNEKLERİ
DB işlemleri yaparken ana klasörde **models** adında bir klasör oluştur ve her bir tablo yani **collection** için bir dosya oluştur.
Collection dosyaları için isim olarak collectionun isminin tekli olarak baş harfi büyük yaz.
Örnekler: **User.js**, **Book.js**, **Post.js**

##### ÖRNEK MODEL DOSYASI
**Book.js**
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type:String, required:true},
    slug: {type:String, required:true, unique:true},
    author: String,
    content: String,
    year: Number,
    status: Boolean,
    published: { type:Boolean, default:true },
    c_time: { type: Date, default: Date.now },
    comments: [{
                author:String,
                comment:{type:String, required:true},
                date:Date
            }],
    meta: {
            votes: Number,
            favs: Number
          }

});

module.exports = mongoose.model('book', BookSchema);
```

**Tipler:**
|  |  |
|---|---|
| String |  |
| Number |  |
| Date |  |
| Buffer |  |
| Boolean |  |
| Mixed |  |
| ObjectId |  |
| Array |  |
| Decimal128 |  |
| Map |  |

**Validateler**
```js
const BookSchema = new Schema({
    title: {
        // bu alana yazılır
        type:String,
        required:true,
        unique: true
        minlength: 10, // //{PATH}=>hücre adı, {VALLUE}=>içerik, {MINLENGTH}=>limitsayısı
        maxlength: [100, '{PATH} en fazla {MAXLENGTH} karakter olabilir'] //{PATH}=>hücre adı, {VALLUE}=>içerik, {MAXLENGTH}=>limitsayısı
    },
    year: {
        type: Number,
        min:1970,
        max:2020
    }
});
```
|  |  |
|---|---|
| required | Zorunlu mu? |
| unique | Benzersiz mi? |
| minlength | en az alacağı karakter sayısı |
| maxlength | Maksimum alacağı karakter sayısı |
| min | Number alanı için minimum değer |
| max |  |




##### ÖRNEK (CREATE) KAYIT İŞLEMİ
**index.js**
```js
const Book = require(./'models/Book.js');
const newBook = new Book({
    title: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    year: 1972,
    language: 'TR'
});

newBook.save((err, data)=>{
    if(err)
        throw err;

    response.json(data);
});
```

**HATA KONTROLÜNÜ THEN CHATCH Lİ YAPABİLMEK İÇİN**
```js
// PROMİS AYARI
const mongoose = require('mongoose');
// bağlatnı işlemlerinden sonra
mongoose.Promise = global.Promise;

const Book = require(./'models/Book.js');
const newBook = new Book({/* Datas */});

let islem = newBook.save();
islem.then((data)=>{
    response.json(data)
}).catch(err => {
    throw err;
});
```







##### ÖRNEK (QUERY) SORGU İŞLEMİ
```js
const Book = require(./'models/Book.js');
// Query işlemleri
Book.find({ key:val }, (err, data)=>{  });

// Tüm datayı çekmek
Book.find({}, (err, data)=>{});

// Tek bir data çekmek
Book.findOne({/* sorgu */}, (err, data)=>{});

// Tek bir data çekmek id ye göre
Book.findById('id', (err, data)=>{});

// Sadece title author ve yorumlar gelsin
Book.find({ status:true }, 'title author comments', (err, data)=>{});

// Sıralama
// 1 Küçükten Büyüğe
// -1 Büyükten Küçüğe
Book.find({}, (err, data)=>{}).sorty({ 'meta.votes': 1 });

// Limit belirleme
Book.find({}, (err, data)=>{}).sort({ 'meta.votes': 1 }).limit(10);
// Başlangıç belirleme
Book.find({}, (err, data)=>{}).skip(5);
// X den başla Y kadar göster
Book.find({}, (err, data)=>{}).skip(X).limit(y);

// BETWEEN KULLANIMI $gte=büyük veya eşik, $lte = küçük veya eşit
Book.find({ key: {"$gte":parseInt(min), "$lte":parseInt(max)}  }, (err, data)=>{}).skip(X).limit(y);

// Bir alanı olmayan kayıtları getirme
// MongoDB Json olduğu için örneğin bir kitapa author girilmezse author keyi hiç oluşmamış olur.
// Bu durumda örneğin author hüresi hiç yazılmamış olanlar gelmesin istiyorsak.
Book.find({ author: { $exists:true } }, (err, data)=>{});
// Eğer sadece author alanı olmayanlar gerekiyorsa $exists: false girilmesi
Book.find({ author: { $exists:false } }, (err, data)=>{});
```

**PROMİS İLE THEN CHATCH KULLANIMI**
```js
// PROMİS AYARI
// main js içinde yaz.
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let books = Book.find({ key:val });
books.then((data)=>{
    response.json(data)
}).catch(err => {
    throw err;
});
```

#### ÖRNEK (aggregate) ile QUERY İŞLEMLERİ
```js

// Kümeleme
// status=true olan ve hucre_adi girilen hücreye göre toplar
// Örnek: statusu=true olan pstları hangi kategoriden kaç tane yazı var..     
Book.aggregate([ {/*seçenek 1*/}, {/*seçenek 2*/}, {/*seçenek 3*/} ], (err,data)=>{});
// Seçenklerin hepsi yazılmasada olur gerekli olan yazılır sadece
// group gruplama işlemi için
// match where sorguları
// project çekilmesi istenen hücreler
// sort sıralama işlemleri  
// skip kaçıncı kayıttan başlanacak
// limit kaç tane kayıt gösterilecek
Book.aggregate([
    {
        $match: {
            status:true
        }
    },
    {
        $group: {
            _id: "$hucre_adi",
            adet: { $sum: 1 }
        }
    },
    {
        $project: {
            title: true,
            content: ture
        }
    },
    {
        $sort: {
            title: -1 // 1 ASC, -1 DESC
        }
    },
    {
        $limit: 5
    },
    {
        $skip: 10
    }
], (err,result)=>{});

// JOIN İŞLEMLERİ
// Book tablosundaki user_id ile users=id eşleşiyor ve veriler user adında bir hücreye geliyor.
Book.aggregate([
    {
        $lookup: {
            from: 'users',
            localFields: 'user_id',
            foreignFields: '_id',
            as: 'user'
        }
    }
], (err,result)=>{});


// JOIN İŞLEMİNDE SADECE BELLİ HÜCRELERİ ALMAK
Book.aggregate([
    {
        $lookup: {
            from: 'users',
            localFields: 'user_id',
            foreignFields: '_id',
            as: 'user'
        }
    },
    {
        $unwind: '$user'
    },
    {
        $project: {
            title: true,
            content: true,
            user: '$user'
            // yada belli hücreler için
            username: '$user.username'
        }
    }
], (err,result)=>{});

// aggregate komutunda _id ye göre eri almak
Book.aggregate([{
    $match: {
        _id: mongoose.Types.ObjectId('id')
    }
},
/*...*/], (err,result)=>{});
```







#### ÖRNEK (UPDATE) GÜNCELLEME İŞLEMİ
```js
const Book = require(./'models/Book.js');

// Sadece 1. parametreye göre ilk bulduğu kayıtı gümceller
Book.update({/* where sorguları */}, {/* Yeni datalar */}, (err, data)=>{
    if(err){ throw err; }
    response.json(data);
});

// GÜNCELLEME İŞLEMİNDEN SONRA GERİYE DÖNEN DATA GÜNCELLENMEDEN ÖNCEKİ DATADIR.
// GÜNCELLEMEDEN SONRA GÜNCELLENMİŞ DATAYI ÇEKMEK İSTERSEN 3. PARAMETREDE new: true gönder
Book.update({ /* Filtreler */ }, { /* Yeni datalar */ }, {new:true}, (err, data)=>{});
Book.findByIdAndUpdate('ID', { /* Yeni datalar */ }, {new:true}, (err, data)=>{});

// 1 den fazla kayıtı güncellemek için 3. parametre olarak multi:true ver
Book.update({ /* Filtreler */ }, { /* Yeni datalar */ }, {multi:true}, (err, data)=>{});

// 1. parametredeki filtreye uygun bir kayıt yoksa güncelleme alanındaki kriterlere göre yeni bir kayıt oluşturur.
Book.update({ /* Filtreler */ }, { /* Yeni datalar */ }, {upsert:true}, (err, data)=>{});

// ID ye göre güncelleme
Book.findByIdAndUpdate('ID', { /* Güncellenecek Datalar */ }, (err, data)=>{});
```






#### ÖRNEK (DELETE) SİLME İŞLEMİ
```js
const Book = require(./'models/Book.js');

// (1). Yöntem     
Book.findById('ID', (err, data)=>{
    if(err){throw err;}
    data.remove((err,data)=>{
        // silinen daha döner
    });
});


// (2). Yöntem İlk bulduğu kayıtı siler    
Book.findByAndRemove({/* SORGU */}, (err, data)=>{
    if(err){throw err;}
    data.remove((err,data)=>{
        // silinen daha döner
    });
});

// (3). Yöntem Koşula uyan her kaydı siler
Book.remove({/* SORGU */}, (err, data)=>{
    if(err){throw err;}
    data.remove((err,data)=>{
        // silinen daha döner
    });
});

```

```js
```

```js
```

```js
```

```js
```
