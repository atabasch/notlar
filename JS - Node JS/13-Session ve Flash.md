# GEREKLİ KÜTÜPHANELER
> npm install express cookie-parser express-session express-flash --save

# PROJEYE ENTEGRE
```js
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

var app = express();

app.use(cookieParser());
app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(flash());
```

# KULLANIM İŞLEMLERİ
```js
router.get('path', (request, response, next) => {
    // Session oluşturmak
    request.session.key = value;

    // Session Okumak
    let varible = request.session.key

    // Tüm sessionları siler
    request.session.destroy();
    request.session.destroy(function(err) {
      // cannot access session here
    })

    // Flash session oluşturmak
    request.flash('key', 'value');


});
```

### FLASHI ALMAK
```js
if(messages.key)
    messages.key
```
