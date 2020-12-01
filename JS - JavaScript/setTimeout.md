
## Bir süre sonra 1 kez iş yapar
setTimeout(function(){
    // yapılacak işlemler
    }, 1000);



## Belli aralıklarla aynı işlemi tekrarlar
```javascript
var interval = setInterval(function(){
        if(koşul){
            clearInterval(interval);
        }
    }, time);
```
