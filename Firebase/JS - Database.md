
# (1) Database

###### ÖRNEK DATA
```js
// tablo adı: posts
{
    "id1": {
        title: "",
        slug: "",
        content: ""
    },
    "id2": { title: "", slug: "", content: "" },
    "id3": { title: "", slug: "", content: "" },
    "id4": { title: "", slug: "", content: "" },
}
```

## (1.1) DB Select

###### Çoklu getirme
```js
import firebase from 'path/firebase';

// Websocket ile 1 kez çalışır. Gider posts içindeki tüm verileri getirir. tetikleme yapılmaz.
firebase.database().ref('posts').once('value', snapshots=>{
    snapshots.val(); // { {}, {}, {}, {} }
    snapshots.forEach( snapshot => {
      snapshot.val(); // {}
    } );
});



// Üsttekinin aynısı mantığında çalışır ancak posts iççindeki her değişiklikte yeniden çalışır.
firebase.database().ref('posts').on('value', snapshots=>{
    // ..
});


// İlk çalıştığında posts içindeki her şeyi tek tek getirir. (yani posts içinde kaç obje varsa o kadar tetiklenir.)
// Sonra posts içine her yeni bir obje push edildiğinde tekrar çalışır ve son eklenen veriyi getirir.
firebase.database().ref('posts').on('child_added', snapshot=>{
    snapshot.val() // ..
});

```

| | |
|---|---|
| child_added | Öğe listelerini alın veya bir öğe listesine eklemeleri dinleyin. Bu olay, var olan her çocuk için bir kez ve ardından belirtilen yola her yeni çocuk eklendiğinde tekrar tetiklenir. Dinleyiciye, yeni çocuğun verilerini içeren bir anlık görüntü aktarılır. |
| child_changed	| Bir listedeki öğelerde yapılan değişiklikleri dinleyin. Bu olay, bir alt düğüm her değiştirildiğinde tetiklenir. Bu, alt düğümün nesillerindeki tüm değişiklikleri içerir. Olay dinleyicisine aktarılan anlık görüntü, alt öğe için güncellenmiş verileri içerir. |
| child_removed	| Listeden kaldırılan öğeleri dinleyin. Bu olay, bir alt öğe kaldırıldığında tetiklenir. Geri arama bloğuna aktarılan anlık görüntü, kaldırılan alt öğenin verilerini içerir. |
| child_moved | Sıralı bir listedeki öğelerin sırasındaki değişiklikleri dinleyin. child_moved olayları her zaman öğenin sırasının değişmesine neden olan child_changed olayını izler (mevcut sipariş yönteminize göre). |

###### Tekli getirme
```js
import firebase from 'path/firebase';

// Realtime olarak verileri okur. Yani firebase ile senkronize kalır.
// Okunduğu anda firebase verisi değişirse ekrana bastığı değerde anlık değişir.
firebase.database().ref('/posts/id1').on('value', snapshot => {
    snapshot.val(); // id1 nesnesi gelir.
});

// Eğer verileri getirip bırakmak istersek.
// Yani Firebase'de veri değiştiğinde güncellenmesin sayfam yenilenirse güncellensin dersek. once
firebase.database().ref('/posts/id1').once('value').then(snapshot => {
    snapshot.val(); // bütün nesneler gelir.
});


//  obje içinden filtreleme (mesela sluga göre veri getirmek için.)
// where slug=slug
firebase.database().ref('posts').orderByChild('slug').equalTo(slug).once('child_added', snapshot => {
            // snapshot.val()
        });



// where slug=slug
firebase.database()
.ref('posts')
.orderByChild('slug')
.startAt(slug)
.endAt(slug)
.once('child_added', snapshot => {
    // snapshot.val()
});
```

## (1.2) DB Create
```js
import firebase from 'path/firebase';

let newPost = { /*...*/ }

// ID yi kendi belirler posts a yeni nesne ekler.
firebase.database().ref('posts').push(newPost).then( res => {
    let insertID = res.key;
} );

// ID yi kendi belirler posts a yeni nesne ekler.
firebase.database().ref('posts').push().set(newPost, err => {  });

// ID yi sen belirlersin üzerine yazar. Güncellemede yapabilir.
firebase.database().ref('posts/id1').set(newPost, err => {  });

// row eklemeden direkt bir nesne yazar
firebase.database().ref('config').set({datas}, err => {  });

// ID(index) i içeri eklemek için önce boş bir key oluştur sonra verileri set et.
let insertID = firebase().database().ref('slu').push().key;
firebase.database().ref('/slug/'+insertID).set({
    id: insertID,
    //...
});


```

## (1.3) DB Update
```js
import firebase from 'path/firebase';

let updatedPost = { /*...*/ }

// update ile gönderilen veriler güncellenir.
let result = await firebase.database().ref('posts/id1').update(updatedPost).then( res => {
    let insertID = res.key;
} );

// id ye ait hücre tamamen silinir sadece set içerisindeki veriler girilir.
// yani id1 en baştan oluşturulmuştur.
let result = await firebase.database().ref('posts/id1').set(updatedPost, err => {  });
```

## (1.4) DB Delete
```js
import firebase from 'path/firebase';

let updatedPost = { /*...*/ }

// Yöntem 1
let result = await firebase.database().ref('posts/id1').remove();

// Yöntem 2
firebase.database().ref('posts/id1').update(null);

// Yöntem 3
firebase.database().ref('posts/id1').set(null, err=>{});
```
