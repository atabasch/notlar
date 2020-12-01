# PUG - TEMA MOTORU

> npm install pug

**Dosyalar** "root/views/\*.pug"

## Express ile Pug'ı default ayarlamak
```javascript
const express = require('express');
const app = express();
app.set('view engine', 'pug');
```

## RENDER ETMEK
```javascript
const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', fcuntion(req, res){
    res.render('index.pug'); // yada sadecew index
});
```

## PARAMETRE GÖNDERMEK
```javascript
const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get('/', fcuntion(req, res){
    let datas = {
        name: "Furkan",
        surname: "Atabaş"
    }
    res.render('index.pug', datas); // yada sadecew index
});
```

## PUG DOSYASI DÜZENİ
```html
html
    head
        title Deneme 1

    body
        h1 Pug Sayfası
        p Paragraf yazısı
        p(style="color:red") deneme paragrafı 2
        p(style="color:blue; font-weight:500;")
            | Paragrafı buraya da yazabilir.

        span Değişken kullanımı #{degisken} veya =degisken
            | Ancak "|" işareti ile başlanan satıra sadece #{degisken} ifadesi gelir.
```
| **İşlem** | **Kod** |
|---|---|
| **Include** | `include filename.pug`  |
| **Açıklama Satırı** | `// Açıklama satırı`  |
| **Değişken tanımlama** | `- var degisken = 'değer'`  |
| **Fonksiyon Kullanmak** | `#{ degisken.toUpperCase() }` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |
| **** | `` |


### MIXIN ile fonksiyon oluşturmak
Aynı blokları tekrar yazmaktan kurtarır.
```
mixin formInput(label, name, val )
    div.form-group
        label=label
        input(type="text" name=name value=val).form-control.form-control-sm


+formInput('Almanca Kelime', 'almanca', (!item? '' : item.almanca) )
+formInput('Türkçe Kelime', 'turkce', (!item? '' : item.turkce) )
+formInput('Telafuz', 'telafuz', (!item? '' : item.telafuz) )
+formInput('Örnek Cümle', 'ornek', (!item? '' : item.ornek) )
```


#### MIXIN BLOCK KULLANMAK
```
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p No content provided

+article('Hello world')

+article('Hello world')
  p This is my
  p Amazing article
```

#### URL VERMEK
```
- let editUrl = "/words/edit/"+item.id
a(href=editUrl).btn
    em.fas.fa-edit
```

### LAYOUT BLOCK YAPIMI
master.pug
```
block header

block menu
    Menüler buraya

block content
block footer
```

index.pug
```
extends master

block menu
    buraya yazdığım kodlar masterdaki kısmı siler
    Silinmemesi için

block append menu
    bu şekilde yazılırsa üzerine ekler

block content
    burayı doldur
```



#### İF KONTROLÜ
```
if !sayi
    | Sayı yok
else if sayi==10
    | Sayı 10
else
    | Hiç biri
```

#### Döngüler
```
ul
    each sayi in [1,2,3,4,5]
        li #{ sayi }


each val, key in [1,2,3,4,5]

each val, key in {name:"furkan", surname:"Atabaş"}


```

### SCRIPTS KODLARI YAZABİLMEK
```javascript
script.
    console.log('deneme')
```

```javascript
```
