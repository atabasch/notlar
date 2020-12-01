# STREAMS
Ziyaretçiye veriyi sunarken tüm verinin yüklenmesini beklemek yerine yüklenen veriyi sunma işlemi.
Örneğin youtube videolarının tamamı inmeden inen kısmı izlemeye başlamak ve video izlenirken diğer kısımlarının arkaplanda indirilme işlemi.


## OKUNABİLİR STREAM OLUŞTURMAK
```javascript
const fs = require('fs');
const file = "video.mp4";

// Stram oluşturmak
const readStream = fs.createReadStream(file);

// Her data geldiğinde işlem yapmak
readStream.on('data',(chunk)=>{
    console.log('veri geldi');
    // chunk.length // byte olarak gelen boyut
});

// Tüm data geldiğinde işlem yapmak
readStream.on('end',()=>{
    console.log('veri tamamlandı');
});

```

#### Dosya boyutunu öğrenmek
```javascript
fs.stat(file, (err,data)=>{
    data.size // toplam boyut byte
});
```

## YAZILABİLİR STRAM
Okunan bir streami başka bir yere kopyalamak
```javascript
const fs = require('fs');
const file = "video.mp4";

// Stram oluşturmak
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream("new_video.mp4");
let toplamGelen = 0;
fs.stat(file, (err,data)=>{

    const toplamBoyut = data.size;

    readStream.on('data', (simdiGelen)=>{

        toplamGelen = simdiGelen.length;

    });

    readStream.pipe(writeStream);
    writeStream.on('finish', ()=>{
        // Yeni dosya oluşturuldu
    });

});
```



```javascript
```




















































#
