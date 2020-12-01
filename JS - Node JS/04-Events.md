# INCLUDE İŞLEMİ
```javascript
const events = require('events');
const eventEmitter = new events.EventEmitter();
```

# EVENT TANIMLAMA
```javascript
eventEmitter.on('selamla', function(){
    console.log("Selamun Aleyküm");
    });

eventEmitter.on('selamla', function(isim){
        console.log("Selamun Aleyküm " + isim);
        });
```

# EVENTİ ÇALIŞTIRMA
```javascript
eventEmitter.emit('selamla', "Furkan");
```

# SADECE 1 KEZ ÇALIŞTIRILACAK 
```javascript
eventEmitter.once('merhaba', function(isim){
        console.log("Selamun Aleyküm " + isim);
        });

eventEmitter.emit('merhaba', "Furkan");
```
