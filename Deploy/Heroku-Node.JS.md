# Yayımlama işlemleri
- Kayıt Ol
- Herokunun command line uygulamasını indirip bilgisayara kur
- cmd ekranına `heroku login` yaz giriş yap.
- proje klasörü içinde `heroku create` yaz.
  - Projene kendin isim vermek istiyorsan `heroku create aswxyzapp`

**NodeJS NOT:** Proje içindeki package.json dosyasında scripts içine start komutu ekleyerek "start": "node ./mainfile.js" şeklinde yazmak gerekiyor ki heroku onu çalıştırsın.
- Oluşturmadıysan `git init` ile git oluştur
- `git add .` ile dosyaları ekle
- `git commit -m "mesaj"` ile gite yolla
- `git push heroku master` diyerek projeni herokunun senin için açtığı repoya yükle.

**package.json** dosyası ayarları.
```json
{
  "name": "app adı",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node ./app.js",
    "start:dev": "nodemon ./app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "socket.io": "^2.3.0"
  }
}

```

**app.js** içindeki listenin port dinleme şekli şöyle olmalı
```js
httpServer.listen(process.env.PORT || 3000);
```
