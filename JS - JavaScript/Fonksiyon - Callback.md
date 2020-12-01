Bir fonksiyonun işlemi bittikten sonra çalışması gereken kodlar için kullanılır.

```javascript
function firstFunction(par1, callback){
    //işlemler
    callback();
}

function sonrakiFunction(){

}

```

> firstFunction(deger, sonrakiFunction;

```javascript
firstFunction(değer, function(){

});
```

### ECMA 6 JAVASCRİPT KURALLARI İLE GELEN YENİ FONKSİYON BELİRLEME İŞLEMLERİ
```javascript
const funcName = () => {

}
```


##### KISA İŞLEMLİ DEĞER DÖNDÜREN FONKSİYON
> var topla = (s1,s2) => s1 + s2;

> var ikiKati = sayi => sayi * 2;

### PROMİS
İç içe sürekli çalışan fonksiyonları daha güzel yazdırır.
Örneğin: iç içe fonksiyon kullanımı;
```javascript
const funcName(deger, callback){
    //işlemler
    callback(sonuc);
}

funcName(1, function(par){
    funcName(2, function(par){
        funcName(3, function(par){

        });
    });
});
```
#### PROMİS TARZI
```javascript
const asenkronFonksiyon = () => {
    return new Promise((resolve, reject)=>{
            // işler yolunda gittiyse resolve
            // sıkıntı varsa reject kullan
            if(sorunyok){
                resolve('sorun yok');
            }else{
                reject('problem');
            }
        });
}


asenkronFonksiyon().
    .then((data)=>{
        console.log(data); //  sorun yok'
        return 1;
    })
    .then((data)=>{
        data // 1
        return "bir sonraki thene gönderilecek sonuç";
    })
    .then((data)=>{
        data // bir önceki thenden alınan sonuç
    })
    .catch((error)=>{
        error //problem
    });
```



## ASYNC - AWAİT
```javascript
const getUser = (id) => {
    return new Promise((resolve, reject)=>{

        if(dogru_koşullar){
            resolve(userObjesi);
        }else{
            reject('Kullanıcı Bulunamadı');
        }

    });
}

const getFriends = (userID) => {
    return new Promise((resolve, reject)=>{

        if(dogru_koşullar){
            resolve(users);
        }else{
            reject('Kullanıcılar Bulunamadı');
        }

    });
}

getUer().then(function(userObjesi){
                let userID = userObjesi.id;
                getFriends(userID).then(function(results){
                    // sonuçlar gelirse çalışacak kod.
                }).error(function(hata){
                    // hata olunca çalışacak kod
                });
        })
        .error(function(hata){
            console.log(hata);
        });
```
####DAHA SADE YAZMAK
THEN ile veri döndürüp bir sonraki işlemleri sonraki then ile yapabiliriz.

```javascript

getUser(1).then((gelenUser) => {
            return getFriends(gelenUser.id);
        })
        .then((users) => {
            users.forEach(function(k){

            });
        });

```




```javascript

```
