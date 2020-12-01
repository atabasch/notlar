# ÖZEL OLUŞTURULAN FONKSIYONLAR METODLAR

### FONKSİYON OLUŞTURMAK
```python3
def method_name(par1, par2=default_val, *args):
	"""
	Help methodu ile gelebilecek fonksiyon açıklaması
	"""
	global varname # Fonksiyon dışında tanımlanmış bir değişkeni alır.

	# Çalıştırılacak kodlar

	return sonuc_degeri
```


### FONKSİYONU KULLANMAK

> degisken = method_name('par1', par2, ....)

**not:** *args* parametresi kişisinin girebileceği herhangi bir şey demektir. Yani parametre ismi ile alınmasa da kişi bir şey yazarsa onu alır ve parametre içinde args tuple tipinde gelir.

# LAMBDA FONKSİYONLARI

Tek işlemlik fonksiyonlardır.

**Örnekler**
`method_name = lambda par: par * par`
`method_name = lambda par: len(par)*2`
`method_name = lambda par: par % 2`
