
## MOUSE OLAYLAR EVENTS

|  |  |
| --- | --- |
| onclick="funcname()" | Nesneye tıklanında fonksiyon çalıştırmak |
| onclick="funcname(this)" | Nesneye tıklanınca fonksiyon çalıştırıp parametre olarak nesnenin kendisini göndermek |
| ondblclick="funcname()" | Nesneye 2 kez tıklanınca işlem yaptırmak. |
| oncontextmenu="funcname()" | Sağ tuş ile tıklama |
| onmouseenter="" | Nesnenin üzerine gelince çalışır |
| onmouseleave="" | Mouse nesnenin üzerinden çıktığında |
| onmouseover="" | Mouse nesnenin üzerine geldi |
| onmouseout="" | Mouse nesnenin üzerinden çıktı |
| onmousedown="" | Mouse ile nesnenin üzerinde butona basıldığında |
| onmouseup="" | Mouse ile üzerine basılan bir nesnede mouse butonu bırakıldığında |
| onmousemove="" | Mouse nesne üzerinde sürüklenirken çalışır. |
| onload="funcname()" | Sayfa tamamen yüklendiğinde funcname çalışır. |

### HTML ETİKETİNE YAZMADAN OLAY BELİRLEME
```javascript
document.getElementById("nesne").addEventListener("click", function(event){

    event.preventDefault(); // a tagında hrefi durdurur.
});
```

### CTRL, SHIFT yada ALT TUŞUNA BASILARAK İŞLEM YAPMAK
```html
<span onmousedown="funcname(event)">Text</span>
<script>
    function funcname(event){
        if(event.ctrlKey){
            // Ctrl tuşu basılıydı
        }

        if(event.altKey){
            // Alt tuşu basılıydı
        }

        if(event.shiftKey){
            // Shift tuşu basılıydı
        }
    }
</script>
```

### Mouse da hangi butona tıklandı
```html
<span onmousedown="tiklandi()">text</span>
<script>
function tiklandi(){
    var tiklanan = event.which;
    /*
        1 => Sol tuş
        2 => Tekerler
        3 => Sağ tuş
    */

    var tiklanan = event.button;
    /*
        0 => Sol tuş
        1 => Tekerler
        2 => Sağ tuş

        IE 8 öncesi

        1 => Sol tuş
        4 => Tekerler
        2 => Sağ tuş
    */

    var tiklanan = event.buttons;
    /*
        1 => Sol tuş
        4 => Tekerler
        2 => Sağ tuş
        8 => Mouse back
        16 => Mouse next
    */
}
</script>
```

### NESNE ÜZERİNDE MOUSE A KAÇ KEZ TIKLANDI (BAŞKA NESNEDE SIFIRLANIR)
```html
<button onclick="tiklandi()"></button>
<script type="text/javascript">
    function tiklandi(){
        event.detail;
    }
</script>
```

### MOUSE X ve Y KOORDİNATLARINI ALMAK
```html
<img onclick="tiklandi(event)" src="" alt="">
<script>
function tiklandi(event){
    var x = event.clientX;
    var y = event.clientY;
}
</script>
```
