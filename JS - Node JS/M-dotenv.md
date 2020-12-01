.env dosyası oluşturarak
içine KEY=VAL şeklinde atamalar yapıp.
Bunu  projenin her yerinde kullanmaya yarayan bir eklenti.

## KURULUM
> npm i dotenv --save

## .ENV DOSYASI
root dizininde .env adında bir dosya oluştur.
**.env**
```
URL='http://localhost'

DBHOST='localhost'
DBUSER='root'
```

### PROJEYE DAHİL ETMEK
> const dotenv = require('dotenv');
> dotenv.config();

### PROJE İÇİNDE KULLANMAK
> process.env.key
