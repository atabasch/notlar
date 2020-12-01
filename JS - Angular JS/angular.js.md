TypeScript tabamlı web uygulama geliştirme frameworkü.
https://angular.io

Sitelerde kullanmak için js dosyasını src et.
> https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js

```html
<body ng-app="appIsmi" ng-init="isim='Furkan'">
    {{2+2}}
    {{isim}}
    <!-- P içine furkan yazar -->
    <p ng-bind="isim"></p>
    <!-- inputun değerine Furkan yazar -->
    <input type="text" ng-value="isim">
</body>
```

### Controller ile çalışmak
```html
<script>
    var myapp = angular.module('aswapp', []);
    myapp.controller("indexController", function($scope){

        $scope.init = () => {
            // İlk çalışacak kodlar.
            const username = "asw13tr";
            setEmail();

        }

        function setEmail(pemail){
            const email = username+"@atabas.online";
        }

         $scope.deger = "Deneme Değeri";
         $scope.inputValue = "İnput için Deneme Değeri";

         $scope.eylem = function(){
             alert('butona tıklandı');
             alert($scope.inputValue);
         }

         $scope.eylem2 = function(v){
             alert(v);
         }

         $scope.arkadaslar = [
             { isim: 'Mehmet', memleket: 'Trabzon' },
             { isim: 'Tümen', memleket: 'Rize' },
             { isim: 'Sinan', memleket: 'Ordu' }
         ];
    });
</script>
<body ng-app="aswapp" ng-controller="indexController" ng-init="init()">
    <div>{{ deger }}</div>
    <input type="text" ng-model="inputValue">
    <!-- Bir fonksiyon çalıştırır. -->
    <button ng-click="eylem"></button>
    <!-- İnputtaki değeri gönderir. -->
    <button ng-click="eylem2(inputValue)"></button>

    <ul ng-repeat="arkadas in arkadaslar">
        <li>{{ arkadas.isim }}</li>
    </ul>

</body>

```

### ng-repeat ve filtreleme
döngü işlemlerinde kullanılır
```html
<script>
    var myapp = angular.module('aswapp', []);
    myapp.controller("indexController", function($scope){
        $scope.items = ['bir', 'iki', 'üç', 'dört', 'beş'];
    });
</script>
<body ng-app="aswapp" ng-controller="indexController" ng-init="init()">
    <div>{{ deger }}</div>
    <input type="text" ng-model="aramakutusu">
    <ul ng-repeat="item in items | filter:aramakutusu">
        <li>{{ item.key }}</li>
    </ul>

</body>
```
