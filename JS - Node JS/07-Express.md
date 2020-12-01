# EXPRESS
En çok kullanılması gereken modüllerden biridir.
Request ve route işlemleri için kullan.

#### Kurulum
> npm install express --save

#### Kullanım
```javascript
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(result);
});

app.listen(port);
```

---
## • TEMA MOTORU AYARLAMAK

pug yerine hangi template engine kullanılıyorsa
> app.set('view engine', 'pug');
---

---
## • STATIC KLASÖR BELİRLEME
- Css ve Javascript gibi temaya dahil edilecek statik dosyaların hangi klasör altında olacağını belirler.
- Daha sonra tema içinde direct static dosya adı yazılır.
- Birder fazla static dosya klasörü belirtilebilir.

> app.use(express.static('assets'))

> app.use(express.static('public'))
---

---
# • ROTALAR ROUTİNG
**Metodlar:** get, post, put, delete, all
- **?** zorunlu değil
  - **furk?an** k olsa da olur olmasada
  - **f(urk)?an** urk olsa da olur olmasa da olur
- **\*** yerine herhangi bir şey gelebilir **fur\*as** * yerine her şey yazılabilir.
- **+** soldaki ifadenin aynısı gelebilir.

> app.get('xyz', ()=>{});

> app.post('xyz', ()=>{});

> app.put('xyz', ()=>{});

> app.delete('xyz', ()=>{});

> app.all('xyz', ()=>{});

#### PARAMETRE GÖNDERMEK
```javascript
// id zorunlu parametre
// slug opsiyonel
app.get('user/:id/:slug?', (req,res)=>{
    req.params.id;
    res.send(req.params);
});
```
---

#### POST İLE PARAMETRE ALMAK
```js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('yol', (req, res) => {
    request.params.key // GET den paramtreleri almak
    request.body.key // POST dan paramtreleri almak
});
```


# • Router Nesnesi
Routerları ayrı klasörde tutarak temiz iş yapmak.
- [routes]
  - user.js
  - post.js
- app.js

**user.js**
```javascript
const express = require('express');
const router = express.Router();
router.get('/create', (req, res)=>{

});
router.post('/create', (req, res)=>{

});
module.exports = router;
```

**routes/post.js**
```javascript
const express = require('express');
const router = express.Router();
router.get('/create', (req, res)=>{

});
router.post('/edit/:id', (req, res)=>{

});
module.exports = router;
```
**routes/app.js**
```js
const express = require('express');
const app = express();

const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');

app.use('/', userRouter);
app.use('/post', postRouter);
```


---
# • MiddleWare Ara Katman Oluşturmak

Request -> Middleware -> Response

Middleware sayfa getirilmeden önce çalışan kodlardır.
Kullanıcı giriş yapmış mı, Sayfa görüntülenebilir mi, Ayarların alınması gibi işlemler yapılır.

#### ► (MiddleWare) YÖNTEM 1
Ana main js dosyasında route işlemlerinden önce
Her routeden önce çalışır.
```javascript
const express = require('express');
const app = express();

// Her route'dan önce çalışacak kodlar.
app.use((req, res,next)=>{
    if(dogruİşlemler)
        next();
    else
        // Hatalar
});

// Sadece panel route'undan önce çalışacak kodlar.
app.use('/panel', (req, res,next)=>{
    if(dogruİşlemler)
        next();
    else
        // Hatalar
});

const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');

app.use('/', userRouter);
app.use('/', postRouter);
app.use('/panel', userRouter);
app.use('/panel', postRouter);

// Kodların Devamı
```

#### ► (MiddleWare) YÖNTEM 2
Middleware i bir modül olarak hazırlayıp gerekli yerlerde kullanmak.

**middlewares/loginControl.js**
```javascript
const loginControl = (request, response, next) => {
    if(koşullar){
        next();
    }else{
        // Hata işlemleri
    }
}
module.exports = loginControl;
```

```javascript
const loginControl = require('./middlewares/loginControl.js');

const userRouter = require('./routes/user.js');
const postRouter = require('./routes/post.js');

app.use(loginControl);
app.use('/', userRouter);
app.use('/', postRouter);
app.use('/panel', userRouter);
app.use('/panel', postRouter);
```

#### ► (MiddleWare) YÖNTEM 3
Sadece belli route larda kullanmak için.
Routes js dosyalarının içerisine dahil ederek. get metoduna 2. parametre olarak verilebilir.
Önrke olarak **./routes/user.js** dosyasının içeriği
```javascript
const express = require('express');
const router = express.Router();
const loginControl = require('../middlewares/loginControl.js');
router.get('/profile', loginControl, (req, res)=>{

});
router.post('/profile', loginControl, (req, res)=>{

});
module.exports = router;
```


---




# HATA YÖNETİMİ
Örneğin olmayan sayfalar, bulunamayan kullanıcılar gibi.
404 sayfası oluşturmak için bir **MiddleWare** bir **404** html sayfasına ihtiyaç var.

**main.js**
```javascript
const express = require('express');
const app = express();

app.use('view engine', 'pug');

app.use((err, req, res, next)=>{
    res.status(err.status);
    res.render('error.pug',{
        status: err.status,
        message: err.message
    });
});

const userRouter = require('./routes/user.js');
app.use('/', userRouter);
```
**views/404.pug**
```
h1 =status
p =message
```

**routes/user.js**
```js
const express = require('express');
const router = express.Router();

router.get('/user/:id',(request, response, next)=>{
    if(userYoksa){
        return next({status:404, message:"Kullanıcı Bulunamadı"});
    }
});

module.exports = router;
```

# • UYGULAMA OLUŞTURUCU
Hazır olarak views, public gibi klasörlerin oluştuğu en gerekli dosyaların olduğu bir proje oluşturur.

##### [1]► KUR
> npm install express-generator -g

##### [2]► BOŞ PROJE KLASÖRÜ OLUŞTUR İÇİNE GİR
> express .

##### [3]► HER DEĞİŞİKLİĞİ ANINDA GÖRMEK İÇİN
**package.json** içinde start komutunu **node** dan **nodemon** a değiş.

##### [4]► ÇALIŞTIR
> npm start




























#
