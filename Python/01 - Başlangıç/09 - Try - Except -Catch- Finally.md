
# TRY EXCEPT ELSE FİNALLY HATA YAKALAMA
```python
try:
  # Çalışmadığında hata verecek kodlar

except NameError:
  # NameError hatası verince çalışacak kodlar

except:
  # NameError dışında verilen hatalarda çalışacak kodlar

else:
	# NameError hatası vermezse ve yalnız "except" yoksa çalışacak bir kod daha

	try:
		##
	except:
		##

finally
	# Her koşulda çalışacak kodlar
```

## KENDİMİZ BİR KOŞULDA HATA OLUŞTURMAK
```python
if value==x:
	raise Exception('Hata mesajı')
```

```python
if value==x:
	raise TypeError('Hata mesajı TypeError hatası verir.')
```
