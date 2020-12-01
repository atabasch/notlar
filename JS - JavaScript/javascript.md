## DOM (DOCUMENT OBJECT MODEL)

document.title;
document.domain;
document.URL;


### SEÇİCİLER
|  |  |
| --- | --- |
| document.getElementById("idname") | ID seçici |
| document.getElementsByTagName("p") | Html taglarını seçip listesnini verir. |
| document.getElementsByClassName("classname")  | Classname e sahip nesneleri seçip liste verir. |
| document.querySelector("seçici")  | Jquery gibi seçilebilir. |

```javascript
var obje = document.getElementById("idname");
    obje.id = "newid";
    obje.placeholder = "Place holder yazısı";
    obje.checked = true;

var datas = document.getElementsByTagName("div");
    datas.length;


var datas = document.getElementsByClassName("classname");
    datas.length;
```

### SEÇİLMİŞ OBJELERLE İŞLEMLER YAPMAK
#### Nesne içindeki tüm içeriği almak yada değiştirmek
> data.innerHTML;
> data.innerHTML = "Yeni İçerik";

#### CSS Style özelliklerini değiştirmek
```javascript
nesne.style.color = "white";
nesne.style.backgroundColor = "red";
```

#### Nesneye etiket eklemek ve etiketleri almak
```javascript
//Nesneye özellik ekler
nesne.setAttribute("href", "http://");

// Nesnenin özelliklerini alır.
nesne.attributes;

// Nesne özelliğe sahip mi
nesne.hasAttribute("target");
```
#### Sayfaya yeni elemanlar eklemek
> document.createElement("p");

#### ELEMAN SİLMEK
```javascript
// Ul içindeki ilk li tagını siler
var list = document.getElementById("ul");
list.removeChild( list.childNodes[0] );
```

#### ELEMAN EKLEMEK
```javascript
var link = document.createElement("a");
link.innerText = "Furkan";
link.setAttribute("href", "http://www.atabasyazilim.com");
document.getElementById("kutu").appendChild(link);
```

#### Eleman Değiştirme




## ONAY KUTUSU İLE İŞLEM YAPTIRMAK
```javascript
var e = confirm("Onaylıyor musunuz?");
if(e == true){

}else{

}
```

# Window nesnesi ile işlemler
#### Önceki Sayfaya Gitmek
> window.history.back();

#### Sonraki sayfaya gitmek
> window.history.forward();

#### Verilen değer kadar ileri geri gitmek
> window.history.go(-2);

#### Yeni pencere açmak
> var pencere = window.open("", "pencereismi", "width=xxx,height=yyy");

#### Açık pencereyi kapatmak
> pencere.close();

##### Pencerenin ismini almak
> pencere.name;

#### Internet sayfasının boyularını almak (Scroll dahil değil)
> window.innerWidth;
> window.innerHeight;

#### Internet sayfasının boyularını almak (Scroll dahil)
> window.outerWidth;
> window.outerHeight;

#### Scroll kaydırmak
> window.scrollBy(x_int, y_int);

#### Sayfanın iframe ile çekilmesini engellemek
```javascript
if( window.top != window.self ){
    // Uyarı
}
```

## SESSIONLAR
Tarayıcı kapanana kadar bilgi tutar.
> sessionStorage.setItem("key", "val");

> sessionStorage.getItem("key");

> sessionStorage.removeItem("key");

> sessionStorage.clear(); // Tüm sessionları siler


## NAVİGATÖR İLE TARAYICI ÖZELLİKLERİNE ERİŞMEK
#### Tarayıcı Adı
> navigator.appName; // Desteklenmiyor
#### Versiyon
> navigator.appVersion; // Desteklenmiyor
#### Cookieler Etkin mi?
> navigator.cookieEnabled;
#### Tarayıcı Dili
> navigator.language;
#### Tarayıcı online mı (internete bağlı mı)
> navigator.online;
#### İşletim Sistemi
> navigator.platform;
####
> navigator.userAgent;

## SCREEN NESNESİ
> screen.width;
> screen.height;
#### Araç çubukları hariç
> screen.availWidth;
> screen.availHeight;
#### Bit Derinlik
> screen.colorDepth;
#### Renk çözünürlüğü
> screen.pixel.Depth;


## HİSTORY



##
