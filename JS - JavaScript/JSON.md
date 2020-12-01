# JSON
```javascript
var obj = {
        "ad":"Furkan",
        "soyad":"Atabaş",
        "yas": 27,
        "memleket": "Trabzon"
    }

obj.ad;
obj["soyad"];

for(key in obj){
    obj[key];
}
```

## OBJE ELEMANLARINI STRİNGE ÇEVİRMEK
> var data = JSON.stringify(datas);

## JSON OKUMA İŞLEMLERİ
```json
{
    "ad": "Furkan",
    "soyad": "Atabaş",
    "yas": 25,
    "programlama": [
        {
            "dil": "Php",
            "seviye": 8
        },
        {
            "dil": "Python",
            "seviye": 5
        },
        {
            "dil": "Ruby",
            "seviye": 3
        }
    ]
}
```

```javascript
var veriler = JSON.parse(jsonveri);
```







#
