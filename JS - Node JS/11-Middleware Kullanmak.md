# MIDDLEWARE DOSYASI OLUŞTUR
**./middlewares/login_control.js**
```js
module.exports = (error, request, next) => {
    if(trueKoşullar){
        next();
    }else{
        // hata işlemleri
    }
}
```

**./main.js**
```js
const loginControl = require('./middlewares/login_control');
// site/api ile başlayan her şeyde önce loginControl işlemi yapılacak.
app.use('/api', loginControl);
```

```js
```

```js
```
