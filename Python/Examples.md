obfuscation

## Lambda ile byte ı sayıya çevirmek
```python
bin2int = lambda x: sum( [ int(x[i]) * pow(2, (len(x)-i-1)) for i in range(len(x)) ] )
```

### Sayıyı byte a çevirmek
```python
sayi = 235
sonuc = ""
for i in range(8):
    sonuc += str(0 if sayi%2==0 else 1)
    sayi  = int(sayi/2)
```



### Anlamsız kripto kodlarım
```python
import random

def aswCripto(password):
    toplam = sum( [ ord(i) for i in password ] )
    rastgele = random.randint(999, 99999)
    xor = toplam ^ rastgele
    return [toplam , rastgele, xor]

def aswDecripto(password, xor):
    toplam = sum( [ ord(i) for i in password ] )
    rastgele = xor ^ toplam
    return rastgele


```
