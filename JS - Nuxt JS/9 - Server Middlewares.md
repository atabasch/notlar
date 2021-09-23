# serverMiddleware

**NOT: Normal middleware' ler vue.js tarafından her route çağırıldığında yada sayfa yenilendiğinde client tarafında çalışan katmanlardır.**
**Eğer server tarafında ki işlemler için middleware gerekiyorsa bunu serverMiddleware ile yapıcaksın.**


Nuxt JS Projemiz server tarafında render edilmeden önce çalışacak olan kodlar buraya yazılır.
- Api istekleri
- Veri getirilmesi


**nuxt.config.js**
```js
serverMiddleware: []
```


# • NUXT İÇERİSİNDE EXPRESS İLE REST APİ OLUŞTUR

**api/index.js** oluştur
```js
const express = require('express');
const app = express();


app.get("/liste", (req, res) => {
    res.status(200).json({...});
})


module.exports = {
    path: '/api',
    handler: app
}
```

**nuxt.config.js**
```js
//...
const bodyParser = require('body-parser');

serverMiddleware: [
    bodyParser.json(), // Her bir aksiyonda çalışması için express de değil nuxt da kullandık.s
    "~/api" // artık api yi http://nuxtsitesi/api/.. şeklinde çalıştırabilirsin.
]

```

```js```

```js```

```js```
