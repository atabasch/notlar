# 1) Local Storage

**Tanım:**  
Browser üzerinde saklama yapılan bir alandır. key=value şeklinde depolama yapar.  
localeStorage Vue yada NuxtJs e ait bir şey değildir. Javascriptin kendi özelliğidir.


```js
localStorage.setItem("key", "val");


localStorage.getItem("key");

localStorage.removeItem("key");
```

# 2) COOKIES

## 2.1) Kurulum ve Import
```bash
npm intall js-cookie --save
```


```js
import Cookie from "js-cookie"
```


## 2.2) Kullanım
```js
// Cookie Oluşturmak
Cookie.set("key", val);

// 365 gün kalıcı Cookie oluşturmak
Cookie.set("key", val, {expires: 350});

// Cookie Çağırmak
Cookie.get("key");

// Cookie Silmek
Cookie.remove("key");
```


## 2.3) Kurulum
```js
```


## 2.4) Kurulum
```js
```

## 2.5) Kurulum
```js
```


#
