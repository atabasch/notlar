
- Pythonda iç içe fonksiyon tanımlanabilir.
- Pythonda fonksiyona parametre olarak fonksiyon yazılabilir.

## BASİT FONKSİYON TANIMLAMA
```python
def funcname():
	# Yapılacak işlemler
```

```python
def funcname(par, par2):
	# Yapılacak işlemler
```

```python
def funcname(par, par2=defaultval):
	# Yapılacak işlemler
```

## SAYISIZ PARAMETRE ALAN FONKSİYONLAR
```python
def funcname(par, *args):
	# Yapılacak işlemler.
	# args: sınırsız parametre anlamına gelir ve parametreleri bir demet (tuple) halinde verir.
	# funcname(val, v2, v3, v4, v5, v6)
```

```python
def funcname(**kwargs):
	# Yapılacak işlemler.
	# kwargs: sınırsız parametre isimli parametre alır sözlük türünde döner
	# funcname(isim="furkan", yas=27, ...)
```

## FONKSİYON ATAMA
**NOT:** Paythonda fonksiyonlar degiskenlere atanabilir ve değişken ismi ile aynı işlemi yaparlar.
**ÖRNEK:**
```python
def yazdir(par):
	print(par)

yazdir("merhaba")

puts = yazdir
puts("merhaba")

echo = yazdir
echo("merhaba")

yaz = yazdir
yaz("merhaba")
```


## FONKSİYONLARI SİLMEK
> del funcname

# DECORATORLER
```python
def decorator_name( func ):

	def wrapper(parametreler):
		# Yapıalcak işlemler
		sonuc = func(parametreler)
		# Yapılacak işlemler
		return sonuc

	return wrapper

@decorator_name
def funcname(parametreler):
	# Bu parametrenin işlemleri
```
