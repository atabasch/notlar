# KURULUM
> npm i bcryptjs --save

# İMPORT
> const bcryptjs = require('bcryptjs');

# ŞİFRELEME
```js
let password = bcryptjs.hashSync(girilenParola, 10);
```
# ŞİFRE ÇÖZME
```js
let check = bcryptjs.compareSync(girilenParola, DBdenParola);
```
