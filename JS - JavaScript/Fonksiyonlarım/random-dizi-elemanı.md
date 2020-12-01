# Diziden sadece 1 tane rastgele eleman getirir.



# Diziden belirtilen sayı kadar  random eleman getirir
```js
async function getRandomItems(pArray, limit=null, exclude=null, include=null){
  let indexArray = [];
  let newArray = [];
  let arrayTotal = pArray.length;
  if(limit==null){ limit = arrayTotal }
  let includeNumber = include==null? -1 : 1+Math.floor(Math.random()*limit);


  for(let i=0; i<arrayTotal; i++){ await indexArray.push(i); }

  if(include!=null){ await indexArray.splice(include, 1); }else{
    if(exclude!=null){ await indexArray.splice(exclude, 1); }
  }


  for(let i=1; i<=limit; i++){
    if(includeNumber==i){ await newArray.push(pArray[include]);continue; }
    let key = indexArray[Math.floor(Math.random()*indexArray.length)];
    await indexArray.splice(indexArray.indexOf(key), 1);
    await newArray.push(pArray[key]);
    if(indexArray.length<=0){ break;}
  }

  return newArray;
}
```


**Kullanımı**
```js
// Bütün diziyi karıştırır.
getRandomItems([x,y,z,...]).then(result => { let xyz = result });

// Diziden rastgele 5 tane eleman alır.
getRandomItems([x,y,z,...], 5).then(result => { let xyz = result });

// Diziden rastgele 5 eleman alır ve 2 indexli dizi elemanını hiç almaz
getRandomItems([x,y,z,...], 5, 2).then(result => { let xyz = result });

// Diziden rastgele 5 eleman alır ve 2 indexli dizi elemanı oluşturulan dizide kesinlikle olur.
getRandomItems([x,y,z,...], 5, null, 2).then(result => { let xyz = result });
```
