# DÖNGÜLER - LOOPS

## DÖNGÜLERE MÜDAHALE ETMEK
	continue => Kullanıldığı yerden sonraki kodlar işlenmez döngü bir sonraki dönüşe geçer
	break    => Kullanıldı yerde döngü sonlandırılır.



## WHİLE DÖNGÜSÜ

```python
while koşul:
	#kodlar
```

### SONSUZ WHİLE DÖNGÜSÜ OLUŞTURMAK

```python
while True:
	#kodlar
```

Döngüyü bitirmek için `return False` yada `break` komutu kullanılmalı




## FOR DÖNGÜSÜ

For döngüleri genelde bir listenin elemanı kadar dönmek için kullanılır.
Stringleri de bir liste elemanı sayar ve harfleri döndürür.

### X den Y ye kadar döngü
```python
for i in range(x, y):
	# Çalışacak kodlar
```

### Bir stringin karakterlerini almak
```python
for karakter in "Metin içeriği":
	# Çalışacak kodlar
```

### Bir listenin elemanlarını almak
```python
items = [x, y, z, w, q]
for item in items:
	# Çalışacak kodlar
```

### İç içe olan demetleri almak
```python
items = ( (1, "Kırmızı"), (2, "Mavi"), (3, "Yeşil") )
for key, val in items:
	# Çalışacak kodlar
```

### Bir sözlüğün elemanlarını almak

```python
sozluk = {
    'isim': "Furkan",
    "soyad": "Atabaş",
    "yas": 27 }

for key, val in sozluk.items():
	# Çalışacak kodlar
```

### Döngü tamamen bittikten sonra işlem yaptırmak
```python
for var in items:
	# Çalışacak kodlar
else:
	# döngü sonunda çalışacak kodlar
```
