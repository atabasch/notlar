angularjs.com dan indir ve script src ile dahil et.

Web sitesinde angular kodlarının çalışmasını istediğin nesnenin tagına bu div, body yada tüm site için html tagı olabilir. `ng=app=""` eklersen artık o nesne altında angular işlemleri yapılabileceği anlamına gelir.

`<body ng-app=""> {{ 2+2 }} </body>`



- **ng-app="appName"** yazıldığı divin içinde angular işlerinin olacağını söyler (Bütün sitede iş yapmak için body içine de yazılabilir.)
- **ng-controller="controllerName"** Değer verilen divin içerisinde çalışacak kodları o controller sınıfı içine yazarsın.
- **{{ degisken }}** Ekrana yazdırma işlemi
- **{{ x+y }}**
- **ng-model="key"** giriş, seçim, metin okuma işlemleri için bir bağlantı kurmak için kullanılır. inputun değrinin atandığı değişken adını belirlemek  olarak düşünülebilir.
- **ng-value="key"** <input> nesnesine değer vermek için kullanılır.
- **ng-bind="key"** içine girilen keyin değerini nesneye yazar. input dışında <p>, <hx> vs
Aşağıdaki kod inputa yazılan değeri p içine yazdırır.
- **ng-init="isim='Furkan'"** ilk işlemleri yapan bir constructor.
-


## BASİT TAGLARIN KULLANIMI
```html
<div ng-app="" ng-init="isim='Furkan'">
    <input type="text" ng-model="text">
    <p ng-bind="text"></p>
    <input type="text ng-value="isim"">
</div>
```

## BİR UYGULAMA OLUŞTURUP ÇALIŞTIRMAK
```html
<div ng-app="aswApp" ng-controller="mainController">
    <h1 ng-bind="title"></h1>
    <p ng-bind="message"></p>

    <input type="text" ng-model="firstname">
    <p>Hoş geldin: {{firstname}}</p> <!-- İnputa yazılanlar anlık olarak buraya yazılır. -->
</div>
```

```js
const myApp = angular.module('aswApp', []);

myApp.controller("mainController", function($scope){
    $scope.title = "Bu yazı h1 tagı içine yazılacak."
    $scope.message = 'Bu yazı da input içine yazılacka.'
});
```


## MODULES
- Bir angular uygulamayı tanımlar
- **ng-app** ile giriş yaptığımız nesnenin içinde angular kodları yazabileceğimiz belirtir.
- Sadece **ng-app** yazarak angular kodları çalıştırılacağı gösterilebileceği gibi bir modül ismi ile oluşturulabilir.
- Böylece controller vs bağlanabilir.

```html
<div ng-app>
    <input type="text" ng-model="key">
    <p>{{ key }}</p>
</div>

<!-- YADA -->

<div ng-app="appName"></div>
<script>
    const app = angular.module('appName', []);
</script>
```

## CONTROLLER
- Module değişkeni aracılığı ile oluşturulur.
- **ng-controller="controllerName"** şeklinde başlatılır.
- Script içinde **moduleDegiskeni.controller('controllerName', function($scope){  });** şeklinde oluşturulur.
- **$scope** this anlamına gelebilir. her türlü eşitleme veri alma işlemleri bununla yapılır.

```html
<div ng-app="appName" ng-controller="mainController">
    <input type="text" ng-model="username">
    <h2>{{ title }}</h2>
    <p ng-bind="message"></p>
</div>
<script>
    const app = angular.module('appName', []);
    app.controller('mainController', function($scope){
        $scope.title = "";
        $scope.username = "";
        $scope.message = "";
    });
</script>
```
