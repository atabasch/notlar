# Middleware

**NOT: Normal middleware' ler vue.js tarafından her route çağırıldığında yada sayfa yenilendiğinde client tarafında çalışan katmanlardır.**
**Eğer server tarafında ki işlemler için middleware gerekiyorsa bunu serverMiddleware ile yapıcaksın.**

Middleware route geçişleri sırasında ilk önce çalışacak olan bir ara katmandır.
**Örnek:** admin panelindeki her sayfa açılmadan önce kullanıcının giriş yapıp yapmadığını sorgulayarak giriş yapılmamışsa admin panele sokmamak gibi.






## 1. Middleware Oluşturmak

- Ana dizinde **middleware** isimli klasörün içinde bir **.js** dosyası oluştur.
- Oluştuurlan middleware dosyasından export default ile dışarıya bir fonksiyon aktar.
- Fonksiyon parametre olarak context isminde bir değişken alıyor.

```js
export default function(context){
    // Yapılacak işlemler
}
```

## 2. Middleware'i Page ler içinde kullanmak

- **pages** klasörü altındaki kullanılacak vue dosyasını aç
- .vue uzantılı page dosyası içindeki script kodları içerisinde export edilmiş objeye middleware keyi ile çalıştırılacak middleware dosya ismini ver.

```js
middleware: "middlewarefilenamme", // .js yazmazsın | import etmezsin

middleware: ["middleware1", "middleware2"] // çoklu olarak çağırabilirsin ancak sırası önemli.
```

Tek tek her page de tanımlamak istemiyorsan, layouts bölümünden her sayfada var olan bir layoutsa ekleyebilirsin.

```js```


```js```


```js```

```js```

```js```





















#
