- Liste elemanları bir diziden gelir.
- input içine yazıldıkça fonksiyon çalışır.
- listede arama yapar ve bulunan aramaları filtreler.
- Listede aranmış olan metni mark etiketi içine yazdırır.

```html
<input type="seach" placeholder="Aranacak kelime" oninput="fillItems(this)">

<ul></ul>

<script>
    var items = [A, B, C, D, E, F, ...]

    const liste = document.querySelector('ul');

    function fillItems(e){
        liste.innerHTML = '';
        items.filter((item) => {
            let regex = new RegExp(`${e.value}`, 'gi');
            if(item.search(regex)>=0){
                let substring = item.substr( item.toLowerCase().indexOf(e.value.toLowerCase()), e.value.length );
                let li = document.createElement('li');
                li.innerHTML = item.replace(regex, `<mark>${substring}</mark>`);
                liste.appendChild(li);
            }
        });
    }

    fillItems(document.querySelector('input'));

</script>
```
