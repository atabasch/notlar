# ITERATORLER
Iteratörler içindeki elemanlar arasında gezinilebilen nesnelerdir. 
Liste, Sözlük ve Demetler birer ateratör nesnedirler.
Iteratör nesnelerin içinde __iter__ ve __next__ metodları bulunur.

## LİSTEYİ İTERATÖR YAPMAK
```python
liste = [x, y, z]
iterator = iter(liste)
```
## ITETATÖR NESNE İÇİNDEKİ ELEMANLARI GEZMEK
```python
next(iterator)
next(iterator)
next(iterator)
next(iterator)
```

## WHILE KULLANARAK İTERATÖRDE GEZMEK
```python
while True:
	try:
		next(iterator)
	except StopIteration:
		break
```

## ÖRNEK KENDİ İTERATÖRÜMÜZÜ YAZMAK
```python
class Kumanda():
    def __init__(self, kanallar):
        self.kanallar = kanallar
        self.index = -1

    def __iter__(self):
        return self

    def __str__(self):
        txt = "Kanal Listesi : "
        kanallar = ", ".join( self.kanallar )
        return txt+kanallar

    def __next__(self):
        self.index += 1
        if( self.index < len(self.kanallar) ):
            return self.get_kanal()
        else:
        	self.index = -1
            raise StopIteration

    def onceki(self):
        self.index -= 1
        if( self.index > -1 ):
            return self.get_kanal()
        else:
        	self.index = -1
            raise StopIteration

    def git(self, numara):
        numara -= 1
        if( numara > -1 and numara < len(self.kanallar) ):
            self.index = numara
            return self.get_kanal()

        

    def get_kanal(self):
        data = {
            'sira': self.index + 1,
            'isim': self.kanallar[ self.index ]
        }
        return data


liste = ("Hedef TV", "Star TV", "ATV", "SHOW TV","EURO D", "KANAL D", "KANAL 7", "TV 8", "FLASH TV", "FOX", "TRT 1", "TRT MÜZİK", "TRT SPOR" )

kumanda = Kumanda(liste)
while True:
    try:
        kanal = next(kumanda)
        print( "[{}] {}".format( kanal["sira"], kanal["isim"] ) )
    except StopIteration:
        break

print( kumanda.onceki() )
print( kumanda.onceki() )
print( kumanda.onceki() )
print( kumanda.onceki() )
print( kumanda.git(3) )
print( kumanda.git(9) )
```



## GENERATORLER
Bunu tam anlamamıştım !...
Bellekte boşuna yer tutmazlar. Sadece gerek duyulduğu zaman eleman getirirler. 
Fonksiyon oluşuturulur ve yield ile sonuç döndürülür.
```python
def sayilar():
	for i in range(1, 11):
		yield i ** 2

liste = sayilar() # Hala birşey oluşup belleğe geçmedi
liste = iter(liste)  # Hala birşey oluşup belleğe geçmedi

next(liste) # İlk eleman oluştu ve bellekte yer tuttu.
next(liste) # 2 eleman oluştu ve bellekte yer tuttu ama önceki elemanı sildi.

#Tüm elemanlar alındıktan sonra liste değişkenide silinir
```

#### HIZLI GENERATOR OLUŞTURMAK
```python
generator = (i ** 2 for i in range(1, 11)) ## Kısa fonksiyonlarda [] genetatorde ()
```

Not: range fonksiyonu da bir generatordür



