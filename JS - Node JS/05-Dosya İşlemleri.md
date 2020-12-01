## GEREKLİ MODÜL
```javascript
const fs = require('fs');
```

## OKUMA İŞLEMİ
```javascript
fs.readFile('file.ext', (error, data)=>{
    if(error)
        throw err;

    data.toString();
});
```

## SENKRONİZE OLARAK OKUMA İŞLEMİ
#### İŞİ BİTTİKTEN SONRA BİR SONRAKİ SATIR ÇALIŞIR
```javascript
const dosya = fs.readFileSync('file.ext');
```



## DOSYA OLUŞTURMA YAZMA
- Dosya yoksa oluştur
- Varsa dosya içindeki içeriğin sonuna yaz.
```javascript
fs.appendFile('file.ext', 'iiçine yazılacak metin', (err) => {
    if(err)
        throw err;

    "dosya yazıldı";
});
```

- Dosya yoksa oluştur
- Varsa sil tekrar yaz
```javascript
fs.writeFile('file.ext', 'iiçine yazılacak metin', (err) => {
    if(err)
        throw err;

    "dosya yazıldı";
});
```


## DOSYA SİLME
```javascript
fs.unlink('dosya.ext', (err) => {
    if(err)
        throw err;

    "dosya silindi";
});
```
