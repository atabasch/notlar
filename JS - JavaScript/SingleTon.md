**Singleton.js**

```js
var Singleton = (function () {
    var instance;
    var key = val;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
```


Kullanımı
```js
Singleton.getInstance().key;
```
