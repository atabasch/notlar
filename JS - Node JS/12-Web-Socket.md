Client ile Server arasında sürekli açık olan bir TCP bağlantısı ile birlikte anlık iletişim sağlanan işler.

**Gerkeli Modülü Kur**
> npm install socket.io --save   

## EN SADE BAĞLANTI
**app.js**
```js
const http = require('http');
const socket = require('socket.io');

const server = http.createServer((req, res)=>{
    res.end();
});
server.listen(port)


const io = socket.listen(server);
io.sockets.on('connection', (socket)=>{
    // Bağlantı yapıldı

    socket.id // her f5 de her clientın her bağlantısında otomatik oluşturulan benzersiz id

    socket.on('disconnect', () => {
        // Kullanıcı ayrıldı
    });

});
```


**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>
    <script>
        // Sürekli bağlanmayı dener.
        const socket = io.connect('http://localhost:3000');

        // yada
        const socket = io.connect('http://localhost:3000', {
            reconnectionAttempts: X, // Bağlanma deneme sayısı
            reconnectionDelay: Y, // Kaç saniyede bir bağlanmayı denesin
            reconnection: false // false verilirse ilk denemede bağlantı olmazsa hiç denemez
        });

        socket.on('connect', () => {
            // Sokete bağlandığında yapılacak işler;
        });

        socket.on('connect_error', () => {
            // Sokete bağlantı hata olduğunda yapılacak işler;
        });

        // Bağlantı işlemlerine karşılık işler yapmak
        socket.on('reconnect_attempt' , () => {
                // Yeniden bağlanmaya çalışıldığında yapılacak işler.
        });

        socket.on('reconnect_error' , () => {
                //Yeniden Bağlanma başarısız olduğunda yapılacak işler.
        });

        socket.on('reconnect-' , () => {
                // Yeniden Bağlanma başarılı olduğunda yapılacak işler.
        });


    </script>
</head>
<body>

</body>
</html>
```

index.html açıldığı anda app.js içindeki `io.sockets.on('connection',...` kodu çalışır.




#### EXPRESS KULLANARAK BAĞLANABİLMEK
```js
const express = require('express');
const app = express();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

// app.listen ile dinlersen çalışmaz.
httpServer.listen(3000, () => {
    console.log("3000 portu dinlenmeye başlandı.");
});

app.use(express.static('public'));
app.use('/', require('./routes/index'));

io.on('connection', socket => {
    console.log("Bağlantı Sağlandı.");

    io.on('disconnect', socket => {
        console.log("Bağlantı Kapandı.");
    });
});


```




## Client - Sunucu arası mesajlaşma
---
**app.js**
```js
const http = require('http');
const socket = require('socket.io');

const server = http.createServer((req, res)=>{
    res.end();
});
server.listen(port)


const io = socket.liste(server);
io.sockets.on('connection', (socket)=>{
    // Bağlantı yapıldı

    socket.on('customCommandKey', () => {
        // Siteden gönderlien "customCommandKey" emitine karşılık yapılacak işlem
    });

    socket.emit('customCommandKeyForFrontpage');
    socket.on('disconnect', () => {
        // Kullanıcı ayrıldı
    });

});
```


**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="http://localhost:3000/socket.io/socket.io.js"></script>
    <script>
        const socket = io.connect('http://localhost:3000');
        socket.emit('customCommandKey');

        socket.on('customCommandKeyForFrontpage', () => {
            // Sunucudan gelen emmite göre yapılacak işlem
        });
    </script>
</head>
<body>

</body>
</html>
```

## Emit işleminde parametre göndermek
---
```js
// Mesaj göndermek Sadece veri gelen kullanıcıya
socket.emit('customActionName', { key:val, key2:val2  });

// Veri gelen kullanıcı hariç diğer tüm kullanıcılara
socket.broadcast.emit('customActionName', { key:val, key2:val2  });

// Mesaj almak
socket.on('customActionName', (data) => {
    // data.key
});
```


## Çok fazla clienta göndermek
---
1.sayfada bir yazı yazıldığında diğer sayfalara göndermek.
**index.html**
```html
<script>
    const socket = io.connect('http://localhost:3000');
    socket.emit('new-user', { username:'xyz' });

    socket.on('connect-user', (data) => {
        console.log(data.username+" kullanıcısı bağlandı");
    });
</script>
```

**app.js**
```js
// Mesaj almak
socket.on('new-user', (data) => {
    // new-user gelen client hariç diğerlerine data yollar.
    socket.broadcast.emit('connect-user', {username:data.username});
});
```

## Namespace & Room
Namespace ler ayrı bağlantılardır.
Bir namespace e bağlanan kullanıcılar diğerlerinden gelen verileri almazlar.
Namespace: Tıpkı okey oyunundaki Acemiler/Prolar/Gurbetçiler vs gibi ayrılan alanlardır.
Roomlar: Örneğin Acemiler içine girince oluşturulan her bir masa gibi düşünülebilir.

default root namespace: '/'
Namespaceler "/namespaceadı" olarak belirlenir ve "site/namespaceadı" olarak bağlanılır.



**Server da özel Namespace oluşturmak**
```js

const io = require('socket.io').listen(httpServer); //httpServer expres yada http.createServer il oluşturulmuş ve listen ile dinlenen değişken.
const nsp = io.of('/new-namespace');
nsp.on('connection' socket => {
    // Özel namespace e bağlandı

    // Namespace'e bağlı olan tüm clientlara mesaj gönder.
    nsp.emit('msj', {key:val});

    // Sadece bağlanan clienta mesaj gönder.
    socket.emit('msj', {key:val});

});

nsp.emit('key', {key:val});
```

**Client'da Namespace e bağlanmak**
```html
<script>
const socket = io.connect('http://localhost.com/new-namespace');
socket.on('key', data => {

});
</script>
```

### Room İşlemleri
Room oluşturmak yada oluşturulan rooma bağlanmak
```js
io.on('connection', socket => {
    // room varsa bağlanır yoksa oluşturulur.
    socket.join('room name', () => {

        // Rooma mesaj göndermek
        socket.emit('command', {data:data}); // Sadece iletişimdeki client'a komut gönder.

        socket.to('room name').emit('command', {data:data}); // İletişimdeki client hariç tüm odyaa komut gönder.

        io.to('room name').emit('command', {data:data}); // Odadaki tüm clientlara komut gönder.

        nsp.to('room name').emit('command', {data:data}); // Eğer bir namespace varsa namespace deki odadaki tüm herkese gönder.

        // Bağlanılmış tüm odaları almak
        Object.key(socket.rooms);
        //1. değer bağlı clientın socket id si
        // diğer keyler bağlı onunan roomlar

        socket.leave('room name', () => {
            // Çıkış yapıldı
        }); // odadan ayrıl.

    });

    io.sockets.adapter.rooms['room name'].length; // bağlı client sayısı
    /* Son kullanıcı da odadan çıktığında artık room silinmiş olduğu için
    yukarıdaki length fonksiyonu hata verir. */
});
```
javascript de bir objenin keylerini veren 'Object.key(data)' komutu ile erişilir.

---
# EXPRESS GENERATOR İLE OLUŞTURULMUŞ PROJELERDE KULLANIM

### Oluştur **socketApi.js**
```js
const socketio = require('socket.io');
const io = socketio();
const socketApi = { io:io }

io.on('connection', socket => {
    console.log("SOCKET BAĞLANTISI YAPILDI.");
})

module.exports = socketApi;
```

### Ekle **bin/www.js**
```js
const socketApi = require('../socketApi.js');
const io = socketApi.io;
io.attach(server);
```

### Views dosyasına
> <script src="/socket.io/socket.io.js"></script>

### Views dosyasındaki script ile bağlanmak
> const socket = io('url:port');














---
