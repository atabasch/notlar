# Klavye Olayları
## Klavyede bir tuşa basıldığında
#### onkeydown
```html
<input onkeydown="islem()" type="text" name="" value="">

<script>
    function islem(){

    }
</script>
```

#### onkeypress
```html
<input onkeypress="islem()" type="text" name="" value="">

<script>
    function islem(){

    }
</script>
```

## Klavyeden bir tuşa basılıp bırakıldığında
#### onkeyup
```html
<input onkeyup="islem()" type="text" name="" value="">

<script>
    function islem(){

    }
</script>
```


## Bir tuşa basıldığında CTRL, SHIFT veya ALT tuşu basılımı
```html
<input onkeydown="islem()" type="text" name="" value="">

<script>
    function islem(){

        event.ctrlKey;

        event.altKey;

        event.shiftKey;

    }
</script>
```


## Klavyede hangi tuşa basıldığını öğrenmek

#### Unicode verir
> event.charCode; // Firefoxda çalışmaz

> event.which;

> event.keyKode;

#### Basılan tuşu verir
> event.key;
