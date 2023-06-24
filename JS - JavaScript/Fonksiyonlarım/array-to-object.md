```js
/*
const items = [
  { id: 1, val: 'bir' }, 
  { id: 2, val: 'iki' }
];
*/



let result = await items.reduce( (acc, item) => {
    acc[item.id] = item.val
    return acc
}, {})




/*
{
    1: 'bir',
    2: 'iki',
}
*/
```