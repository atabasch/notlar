
# ÇOKLU DEĞER SAKLAYAN ELLEMANLAR

## TUPLE - DEMETLER
- Tüpler sadece 1 kez oluşturulur.
- Daha sonradan ekleme yapılamaz
- Herhangi bir değeri değiştirilemez

> tup = (1, 2, 3, "a", 'c', "Deneme")

#### DEMET METODLARI
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| **tup.index(val)**  		| val değerini tup içinde arar ilk bulduğunun anahtarını döndürür. |
| **tup.index(val, start)** | val değerini start a yazılan keyden sonra tup içinde arar bulduğunun anahtarını döndürür. |
| **tup.count(val)**  		| val tup içinde kaç tane var. |







## SET - SETLER
- Tüplere benzer
- Aynı değeri 2 kez tutmaz

> vset = {1, 2, 3, "a", 'c', "Deneme"}

### SET METODLARI
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| **vset.add(newval)**  		| val değerini dizi içinde arar ilk bulduğunun anahtarını döndürür. |
| **vset.remove(val)** 			| val değerini diziden siler. val kümede yoksa hata verir. |
| **vset.discard(val)** 		| val değerini diziden siler. val kümede yoksa |
| **vset.pop()**  				| Sondan 1 eleman siler |
| **vset.update(vset2)**  		| vset2 deki değerleri vset1 e ekler |
| **vset.copy()**  				| Setin copyasını verir. Eğer set başka bir değişkene direkt atanırsa set değiştiğinde diğer sette değişir |
| **vset.clear()**  			| Diziyi boşaltır. |
| **vset1 - vset2**  			| vest2 de olan elemanlar vest1 den çıkartılır. |
| **vset1.difference(vset2)** 	| vest2 elemanlarını vset1 den çıkarır ve vest1 deki farklı olan elemanları verir. = vset1 - vset2  |
| **vset1.difference_update(vset2)** | difference ile aynı işlemi yapar vset1 i günceller. |
| **vset1.intersection(vset2)** | 2 kümenin kesişim kümesini verir. kümede güncelleme yapmaz. |
| **vset1.intersection_update(vset2)**  	| 2 kümenin kesişim kümesini verir. kümede güncelleme yapar |
| **vset1.isdisjoint(vset2)**  	| 2 kümenin kesişim kümesi YOK ise True döner. 2 küme tamamen farklı mı |
| **vset1.issubset(vset2)**  	| vset1 sadece vset2 içindeki elemanlardan mı oluşuyor. `[1,2,3,4]` `[2,4]` |
| **vset1.issuperset(vset2)**  	| vset2 sadece vset1 içindeki elemanlardan mı oluşuyor. `[1,2,3,4]` `[2,4]` |
| **vset1.union(vset2)**  		| 2 kümenin birleşimini verir. |
| `vset1 | vset_2`  			| 2 kümenin birleşimini verir. |
| **vset1.symmetric_difference(vset2)**  	| 2 kümenin farklı elemanlarından bir küme oluşturur. |






## LIST - LİSTELER ANAHTAR ALMAYAN DİZİLER
özel anahtarlar almayan indexleri 0 dan başlayan ve köşeli parantez ile [] oluşturulabilen liste elemanlarıdır. 
Her türlü veriyi tutarlar ve aynı içerik tekrar eder.
**Kullanımı**
```python3
liste = [1, 2, "üç", "Dört", True, None, 7]

liste[3] # Sonuç: Dört
```

#### LİSTE METODLARI
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| liste.append(x) 	| Listenin sonuna x elemanını ekler. |
| liste.clear() 	| Liste içini boşaltır |
| liste.copy() 		| Listenin bir kopyasını verir. |
| liste.count(x) 	| Listede kaç tane x var sayar |
| liste.extend(liste2) 	| Liste 2 yi liste nin sonuna ekler |
| liste.index(x, ?start, ?end) 	| x i ilk bulduğu yerin anahtarını verir. |
| liste.insert(key, val) 	| Listenin key indexine val değerini yazar ve listenin geri kalanı sağa kayar. |
| liste.pop() 		| Listenin son elemanını siler |
| liste.remove(x) 	| Listede bulduğu ilk x elemanını siler. |
| liste.reverse() 	| Liste elemanlarını tersten sıralar |
| liste.sort() 		| Tüm değerleri aynı tipte olan listelerde A dan Z ye sıralama yapar |
| liste.sort(reverse=True) 	| Tüm değerleri aynı tipte olan listelerde Z den A ya sıralama yapar |





## DICT - DICTIONARY - SÖZLÜKLER - ÖZEL ANAHTARLI DİZİLER
Elemanları özel anahtarları ile girebileceğimiz dizi türleridir ve süslü parantez ile oluşturulur {}
**Kullanımı**
```python3
sozluk = {
	"isim": "Furkan",
	"yas" : 27,
	"cinsiyet": "Erkek" 
}

sozluk["isim"] # Sonuç: Furkan
```

#### SÖZLÜK METODLARI
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| **sozluk.clear()** 	| Sözlüğün içini boşaltır |
| **sozluk.copy()** 	| Sözlüğün bir kopyasını verir. |
| **sozluk.pop(x)** 	| Sözlükten x keyli değeri siler ve sildiği değeri return eder. |
| **sozluk.popitem()** 	| Son elemanı siler |
| **dict.fromkeys((tuple)keys, val=None)** | dict değişmez. keylerin bulunduğu bir sözlük oluşturur ve tüm keylere val değerini atar. |
| **sozluk.get(key, ?default)** 		| Sözlükteki key anahtarına sahip değeri döndürür |
| **sozluk.items()** 	| [ (key, val), ... ] şeklinde bir dizi döndürür ve **for key, val in sozlu.items():** şeklinde kullanılabilir. |
| **sozluk.keys()** 	| Sadece keylerden bir liste döndürür. |
| **sozluk.setdefault(key, ?default)** | get metodu ile benzer. Tek farkı key değeri yoksa defaulttaki değer ile sözlüğe ekler. |
| **sozluk.update(sozluk2)** 	| Sözlük 2 ye göre sözlüğü günceller. Aynı key varsa değer değişir. Yoksa sözlüğe ekler. |
| **sozluk.values()** 	| Sadece value değerlerinden oluşan bir liste elemanı döndürür. |
