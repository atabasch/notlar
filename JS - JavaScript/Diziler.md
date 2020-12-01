## DİZİLER
### DİZİ OLUŞTURMAK
### DİREK DİZİ ÖLUŞTURMAK
```javascript
    var datas = new Array("X", "Y", "Z", 4, 5, 6);
    datas[int];
```
### BOYUTU BELLİ DİZİLER OLUŞTURMAK
```javascript
    var veriler = new Array(int);
    veriler[int0] = data1;
    veriler[int1] = data2;
```

### DİZİ ELEMANLARINI DÖNGÜ İLE KULLANMAK
```javascript
    for(key in datas){

    }
```

### HAZIR DİZİ FONKSİYONLARI
| Fonksiyon Kodu | Fonksiyon İşlemi |
| -------------- | ---------------- |
| arr.concat(arr2, arr3) | birden fazla diziyi birleştirir. |
| entries() |  |
| every() |  |
| fill() |  |
| filter() | Bir döngü oluşturur ve dizi elemanlarını tek tek içinden geçirir. |
| find() |  |
| findIndex() |  |
| forEach() |  |
| arr.indexOf("val") | Elemanın index numarasını verir. |
| isArray() |  |
| arr.join("ayraç") | Dizi elemanlarını ayraç ile str yapar. |
| keys() |  |
| lastIndexOf() |  |
| arr.length | Dizinin eleman sayısını verir |
| map() |  |
| arr.pop() | Dizinin son öğesini kaldırıp değeri döndürür. |
| arr.unshift("Val", "val2", val3) | Dizinin başına eleman ekler dizi sayısını döndürür. |
| arr.push("Val") | Dizinin sonuna eleman ekler dizi sayısını döndürür. |
| reduce |  |
| arr.reverse() | Dizinin eleman sırasını terse çevirir. |
| arr.shift() | Dizinin ilk öğesini kaldırır. |
| arr.slice(index) | Girilen index numarasından sonraki elemanları alır. |
| arr.slice(index, indexlast) | Girilen index numarasından 2. parametredeki elemana kadar olan elemanları alır. |
| arr.some(funcname) | Dizi elemanlarının tek tek fonksiyona yollar 1 tane bile true dönse true döner. |
| arr.sort() | Dizinin elemanlarını alfabetik sıralar (ASCII ye göre sıralar) |
| arr.splice(index, x) | index konumundaki x kadar elemanı siler |
| arr.splice(index, 1) | index konumundaki elemanı siler. |
| arr.splice(index, 0, "yeni değer") | index konumuna "yeni değer" elemanının ekler sonraki elemanlar ileri kayar. |
| arr.splice(index, 1, "yeni değer") | index konumundaki elemanı nın değerini "yeni değer" ile dğeişir |
| arr.toString() | Elemanların arasına , ekleyip string yapar. |
| arr.unshift("Val") |  Dizinin başına yeni eleman ekler. |
| valueOf() |  |
| delete arr[key] | Diziden elemanı siler ama o key undifined olur. |

#### some
```javascript
var yas = new Array(3, 18, 21, 19, 15, 14, 33, 16, 23);
function yasSorgula(val){
    return val >= 18;
}

yas.some(yasKontrol);
```


#### DİZİ ELEMANLARINI YAZDIRMAK
> console.log(...dizi);

#### 2 DİZİYİ BİRLEŞTİRMEK
var dizi2 = [...dizi1, val2, val3, val4];

#### BİR DİZİ İÇİNDEN SIRALI DEĞER ALMAK
```javascript
var arr1 = ['furkan', 'atabas', '1991', 'Erkek', 'Trabzon'];
var [ad, soyad, ...digerBilgiler];
console.log(ad); // furkan
console.log(soyad); // atabas
console.log(digerBilgiler); // ['1991', 'Erkek', 'Trabzon']
```

### 0'dan 255'e kadar tüm sayıların içinde olacağı rastgele bir dizi.
- Okey taşı karıştırırken
- 52 kartı karışltırırken.
- Veya belli aralıklardaki tüm sayılara karışık olarak 1 kez ihtiyacın varsa.
```js
let pts = [];
while(pts.length < 255){
    while(pts.includes(val = Math.floor(Math.random() * 255)));
    pts.push(val);
}
```
