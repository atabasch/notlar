# KULLANICILAR VE ARKADAŞLIK BAĞLARI
```javascript
const users = {
    1:{
        id: 1,
        name: "Furkan",
        surname: "Atabaş",
        city: "Vakfıkebir"
    },
    2:{
        id: 2,
        name: "Mehmet Akif",
        surname: "Atabaş",
        city: "Vakfıkebir"
    },
    3:{
        id: 3,
        name: "Nurullah",
        surname: "Demirci",
        city: "Akçaabat"
    },
    4:{
        id: 4,
        name: "Samet",
        surname: "Keskin",
        city: "Maçka"
    },
    5:{
        id: 5,
        name: "Mesut",
        surname: "Çalık",
        city: "Beşikdüzü"
    },
    6:{
        id: 6,
        name: "Yunus Emre",
        surname: "Tokdemir",
        city: "Tonya"
    },
    7:{
        id: 7,
        name: "Ünal",
        surname: "Gül",
        city: "Vakfıkebir"
    },
    8:{
        id: 8,
        name: "Tümen",
        surname: "Kaboğlu",
        city: "Rize"
    }
}

const friends = {
    1:[2,3,4,5,6,7,8],
    2:[1,3,6,7],
    3:[1,2,4],
    4:[1,3],
    5:[],
    6:[1,2,7],
    7:[1,2,3,4,5,7,8],
    8:[1,2,3,5]
}
```

## (1) CALLBACK PARAMETRELİ KULLANIM

```javascript
const getUser = function(userID, callback=null){
    try{
        let user = users[userID];
        if(callback!=null){ callback(user); }
    }catch(error){
        console.log(error);
    }
}

function getFriends(userID, callback=null){
    try{
        let friendsObject = {};
       friends[userID].forEach(function(val, key){
            getUser(val, function(user){
                friendsObject[key] = user;
            });
        });
        if(callback!=null){ callback(friendsObject); }
    }catch(error){
        console.log(error);
    }
}
```

#### ÇALIŞTIRMAK
```javascript
getUser(1, function(user){

    console.log("• BULUNAN KULLANICI");
    console.log(user);

    getFriends(user.id, function(friends){

        console.log("• KULLANICININ ARKADAŞLARI");
        console.log(friends);

    });

});
```

## (2) PROMİS KULLANIMI

```javascript
const getUser = function(userID){
    return new Promise(function(resolve, reject){
        try{
            let user = users[userID];
            resolve(user);
        }catch(error){
            reject(error);
        }
    });
}

function getFriends(userID){
    return new Promise(function(devam, hata){
        try{
            let friendsObject = {};
            friends[userID].forEach(function(val, key){
                getUser(val).then(function(cUser){
                    friendsObject[key] = cUser;
                });
            });
            devam(friendsObject);
        }catch(error){
            hata(error);
        }
    });
}
```

#### ÇALIŞTIRMAK
```javascript
getUser(2).then(function(user){

    console.log("BULUNAN KULLANICI");
    console.log(user);

    getFriends(user.id).then(function(friends){

        console.log("KULLANICI ARKADAŞLARI");
        console.log(friends);

    });

});
```
