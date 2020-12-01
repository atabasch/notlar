# zip
Zip methodu iki tuple nesnesini içerisindeki elemanların sırasıyla ikişer olarak birleştirir.   
Sırasına bir eleman denk gelmeyen nesneler alınmaz.

```python

harfler = (A, B, C, D)
sayilar = (1, 2, 3)

karma = zip(harfler, sayilar)

sonuc = tuple(karma)

# Çıktı
# ((A1), (B2), (C3))
```
