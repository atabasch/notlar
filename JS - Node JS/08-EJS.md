# EJS
Pug gibi bir tema motoru ama içine html taglarını yazabilirsin.

#### KURULUM
> npm install ejs --save

#### Ana JS içinde tanımlama
Eğer views ile başka klasör konumu verilmez ise.
Ana klasör içinde **views** klasörünü kullanabilir.
```javascript
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views/klasörleri/konumu'));
```

#### KULLANIM
Değişiklik yapılmışsa belirlenen tema klasöründe, değer hiç değişiklik yapılmamışsa root dizin içindeki **views** klasörü altında **dosya.ejs** şeklinde **.ejs** uzantılı dosyalar oluşuturulup kullanılır.

```javascript
    app.get('/', function(req, res){
        res.render('dosyaadi');
        // veya parametreli
        res.render('dosyaadi', {
            degisken: 'değer',
            degisken: 'değer'
        });
    });
```



#### ŞABLON KULLANMAK (LAYOUT)
https://www.npmjs.com/package/express-ejs-layouts

Express ile EJS kullanım klavuzu = https://github.com/mde/ejs/wiki/Using-EJS-with-Express

> npm install express-ejs-layouts --save

```js
const ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
```
#### Şablon Oluşturma Adımları

- Oluştur => **views/layout.ejs**
- Tüm temayı **layout.ejs** içinde oluştur.
- Her sayfada değişecek alana **<%- body %>** etiketini ekle
- Diğer tüm *.ejs* dosyalarına direkt olarak yazdığın kodlar **layout.ejs** *extends* edilerek **<%- body %>** yerine yazılacak.
- Ekstra block eklenecek yerlere **layout.ejs** dosyasında **<%-defineContent('block_name')%>** kodunu ekle.
- **layout.ejs** dosyasına hangi blocka kod göndereceksen o kodları views dosyalarında **<%- contentFor('block_name') %>** kodu altına yaz.
- **layout.ejs** adını değiştirmek için app main js dosyasın **app.set('layout', 'master');** şeklinde belirlenebilir.
- Sadece sayfaya özel şablon extendi için **render** işleminde view dosyasına parametre olarak *layout:'kullanilacak-layout-dosyasi'* şeklinde göndermek gerek

**layout.ejs**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <%-defineContent('head')%>
</head>
<body>
    <%-defineContent('header')%>
    <%-body%>
</body>
    <%-defineContent('scripts')%>
</html>
```

**index.ejs**
```
<h1>Body için gidecek tüm kodlar buraya</h1>

<%- contentFor('header') %>
haeadera gidecek kodlar

<%-contentFor('scripts')%>
scripts alanı için kodlar
```


##### ÖZEL LAYOUT
```js
app.get('/about', (request, response)=>{
    response.render('index', {layout:'master'});
});

```



##### KOD KULLANIMLARI
|  |  |
|---|---|
| Yazdırma | <%= degisken %> |
| Döngü | <% for(let i=1; i<=10; i++){ %> <%= i %> <% } %>  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |


**DÖNGÜLER**
```
<% for(let i=1; i<=10; i++){ %>
    <%= i %>
<% } %>



<% users.forEach(function(user){ %>
    yAPILACAK iŞLEM
<% }); %>
```

**KOŞULLAR**
```js
<% if(koşul){} %>
    <%=degisken %>

<% }else if(koşul){ %>
    <%=degisken %>

<% }else{ %>
    <%=degisken %>

<% } %>

// KISA İF
<%- (user.level==0)? 'selected' : null ; %>
```

**INCLUDE**
```js
<%- include('users'); %>
<%- include('user/show', {user: user}); %>
```

**YORUM SATIRI**
```js
<%#  %>
```

```js
```

```js
```
