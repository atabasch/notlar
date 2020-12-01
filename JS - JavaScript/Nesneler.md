

## NESNELER
### NESNE NASIL TANIMLANIR
#### BASİT NESNE TANIMALAMA
```javascript
var user = {
    username: 'atabas61',
    email: 'asw@atabas.online'

    getEmail: function(){
        return this.email;
    }
}

// SONRADAN ELEMAN EKLEME
user['password'] = 'qwertyu';
user.language = 'Türkçe';

// ELEMAN SİLME
delete user['password'];

// ELEMAN ÇAĞIRMA
let kullanici_adi = user.username;
let eposta = user['email'];
```

### İKİ NESNEYİ BİRLEŞTİRME
> var newObj = Object.assign(obj1,obj2);


#### BASİT NESNE TANIMALAMA 2
```javascript
var objectname = new Object();

objectname.key1 = "val1";
objectname.key2 = "val2";
```

#### FONKSİYON İLE NESNE TANIMALAMA
```javascript
function methodname(par1, par2, par3){
    this.param1 = par1;
    this.param2 = par2;
    this.param3 = par3;
}

var objectname = new methodname("val1", 'val2', val3);
```

### NESNEDE KEY VAR MI
> obj.hasOwnProperty('key');


### STRİNG NESNESİNİN HAZIR METHODLARI
|  |  |
| --- | --- |
| str.length | Metnin karakter sayısını verir |
| str.indexOf("aranan") | arananı metin içinde bulduğu ilk karakterin index numarasını verir. |
| str.lastIndexOf("aranan") | arananı metin içinde sondan aramaya başlar en son bulduğu yer. |
| str.search("aranan") | Aranan metnin ilk karakter konumunu verir. |
| str.substr(x) | Yazının x indexli karakterşnden sonrasını yazdırır. |
| str.substr(x, y) | Yazının x indexli karakterindern başlayıp y karakter kadar yazar. |
| str.replace("old", "new") | 1. parametreyi str de arayıp ilk bulduğunu 2. parametre ile değiştirir. |
| str.replace(/old/g, "new") | 1. parametreyi str de arayıp tüm bulduklarını 2. parametre ile değiştirir. |
| str.replace(/old/gi, "new") | Küçük büyük harf duyarlılığını kaldırır |
| str.toLowerCase() | Tüm karakterleri küçük karaktere çevirir |
| str.toUpperCase() | Tüm karakterleri küçük karaktere çevirir |
| str.concat(" ", str2) | str ile parametrelerdeki metinleri birleştirir. |
| str.split(par) | stringi parametrelerden bölerek diziye dönüştürür. |
