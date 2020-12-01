# SCROLLU ALTTA TUTMAK
```js
function scrollUpdate(){
    let it = document.getElementById('messages');
    let fark = it.scrollHeight - it.offsetHeight
    if(it.scrollTop > (fark-30)){
        it.scrollTop = fark;
    }
}
```
