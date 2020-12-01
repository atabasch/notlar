# Javascript Ajax İşlemleri
## Çalışma İşlemleri
- Bir Olay Meydana Gelir.
- XMLHttpRequest Nesnesi Oluşturulur.    
- İstek Gönderilir
- Sunucu İsteği İşler
- Sunucu Web Sayfasına Bir Yanıt Gönderir
- Yanıt JS Tarafından Okunur
- Uygun Eylem JS Tarafından Gerçekleştirilir

## XMLHttpRequest Nesnesi Oluşturmak
Not: Bu istek sadece kendi domain alanı içinde çalışır ve çoğunlukla www domain içinde olmalı.

#### ONREADYSTATECHANGE (readyState özelliği değiştiğinde çalışan metod)
**readyState:**
0 => İstek Başlatılmadı
1 => Sunucu Bağlantısı Kuruldu
2 => İstek Alındı
3 => İşlem Devam Ediyor
4 => İstek Tamamlandı & Yanıt Hazır

**responseText:** Karşı taraftan gelecek veriyi sağlar
**responseXML:** Karşı taraftan gelecek xml veriyi sağlar.
**status:** Bir isteğin durum sayısını gösterir. 200, 403, 404
**statusText:** Bir isteğin durum değerini verir. OK, NOT FOUND

NOT: Tarayıcı IE 8 ve altındaysa veya standartlara uyumlu nesne kullanmazsa ekstra bir activex kullanmak gerekir.
```javascript
if( !window.XMLHttpRequest ){

}
```

```javascript
var xhr = new XMLHttpRequest();
if( !window.XMLHttpRequest ){
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
```

## Sunucuya İstek Göndermek
```javascript
var xhr = new XMLHttpRequest();
/*
    3. parametredeki true eşzamansız istek anlamına gelir.
    Eşzamanlı istekte sunucudan anında cevap gelmezse sistem donuyor.
*/
xhr.open("GET", "filename.ext", true);
xhr.open("GET", "filename.ext?key=val&key=val", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(this.readyState == 1){}
    if(this.readyState == 2){}
    if(this.readyState == 3){}
    if(this.readyState == 4){}
    if(this.readyState == 4 && this.status == 200){}
    /*
        this.responseText
        this.responseXML
        this.responseURL
        this.status
        this.statusText
    */

}

```



## Veri göndermek post işlemi
```javascript
var xhr = new XMLHttpRequest();

xhr.open("POST", "filename.ext", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("key=val&key=val");

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){}
}
```











#
