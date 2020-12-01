### ASYNC ÇALIŞMAK
Fonksiyonun başına **async** anahtar kelimesi eklenirse fonksiyon içindeki kodlar satır sırasına göre çalışacak.

```javascript

async function getDatas(){
    // İşlemler sırasıyla gerçekleşir
    const user = await getUser(1);
    const friends = await getFriends(user.id);
}

```


### HATA YAKALAMAK

```javascript

async function getDatas(){
    // İşlemler sırasıyla gerçekleşir
    try{
        const user = await getUser(1);
        const friends = await getFriends(user.id);
    }catch(error){

    }
}

```
