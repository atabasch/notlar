# A dan Z ye 
```js
  dizi.sort()
```

# Z dan A ye 
```js
  dizi.reverse()
```

# Obje elemanlı dizide oble elemanıyla sıralamak
```js
  dizi.sort( (a, b) => {
    return parseFloat(a.fiyat) - parseFloat(b.fiyat)
  } )
```
# Obje elemanlı dizide oble elemanıyla sıralamak Z den A ya
```js
  dizi.sort( (a, b) => {
    return parseFloat(a.fiyat) - parseFloat(b.fiyat)
  } ).reverse()
```