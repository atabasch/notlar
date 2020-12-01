# NESNE TABANLI PROGRAMLAMA OOP

## SINIF OLUŞTURMAK

```python
class KlasName():
	klass_variable1 = value1
	klass_variable2 = value2
	klass_variable3 = value3
	counter = 0

	#constructor fonksiyon. class oluşturulunca ilk önce bu çalışır.
	def __init__(self, var1, var2 = "default"):
		self.var1 = var1
		self.var2 = var2
		KlasName.counter = KlasName.counter + 1

	def __str__(self):
		# Sadece KlassName yada obje adı çağırıldığunda görünmesi istenen içerik

	def methodName(self):
		# Metodun yapacağı işlemler

	def method_name(self):
		pass #Pass komutu method içine hiç bir şey yazılmayacaksa kullanılır.


class SubKlasName(KlasName):
	# ...

	# Overreding
	def __init__(self, var1, var2, var3):
		self.var1 = var1
		self.var2 = var2
		self.var3 = var3

	def __str__(self):
		# benim yapacağım işler
		super().__str__(self) # Üst sınıftaki str fonksiyonunu çalıştırır.
		# benim yapacağım işler

```

## SINIF KULLANIMI

```python
degisken = KlasName("val1", "val2")

degisken.method_name()
```


## HATIRLATMALAR


**Klasname.counter ile self.varname arasındaki fark**
self ile işlem yapıldığında sınıf her oluştuğunda değişkenler sıfırlanır.
Ama sınıf ismi ile bir değişken işlemi yapıldığında oluşturulan sınıf kadar üzerine yazar.



**__metodismi__** olarak tanımlanan methodlar varsayılan methodlar ve bizim varsayılan fonksiyonlar ile kullanabileceğimiz fonksiyonlardır.

**Örnek olarak**
nesne = Nesne() # __init__ çağırır
print( nesne ) # __str__ çağırır
len( nesne ) # __len__ çağırır
del nesne # __del__ çağırır
