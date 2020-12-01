## MODUL OLUŞTURMAK
```javascript
function logla(msj){
    console.log(mesaj)
}
module.exports = logla;

```

## MODÜLÜ ÇAĞIRMAK
```javascript
const logla = require('js/dosyası/yolu');
logla(2,5);
```


### 1 DEN FAZLA MODUL TOPLULUĞU

```javascript
//matematik.js
function topla(a,b){
    return a+b;
}
function cikart(a,b){
    return a-b;
}
function bol(a,b){
    return a/b;
}
function carp(a,b){
    return a*b;
}
module.exports.topla = topla;
module.exports.cikart = cikart;
module.exports.bol = bol;
module.exports.carp = carp;
```

##### ÇAĞIRMA
```javascript
// 1. SEÇENEK
const.topla = require('matematik.js').topla;
const.cikart = require('matematik.js').cikart;

//2. SEÇENEK
const matematik = require('matematik.js');
const.topla = matematik.topla;
const.cikart = matematik.cikart;

//3. SEÇENEK
const {topla, cikart} = require('matematik.js');
```
