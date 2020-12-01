## SADECE BAŞLIKTAN OLUŞAN BASİT ARRAY ADAPTÖR
```kotlin

var liste = ArrayList<String>()

var adaptor = ArrayAdaptor(applicationContext, android.R.layout.simple_list_item_1, liste)
listView.adaptor = adaptor
adaptor.notifyDataSetChanged()

list.add(val1)
list.add(val2)
list.add(val3)
```

## BASİT SADECE TEK TEXTVİEWLİ ÖZEL LAYOUT BELİRLEME
- res > layout (sağ tık) > new > Layout resource file => "filename" oluştur.
- Oluşturulan layout içine list viewin her bir satırı için gösterilecek tasarımı yap.
- TextView için bir id ver.
> var adaptor = ArrayAdaptor(applicationContext, R.layout.filename, R.id.textViewID, liste)

## ROWA TIKLANINCA İŞLEM YAPTIRMAK
#### 1. YÖNTEM
```kotlin
listView.setItemClickListener = AdapterView.OnItemClickListener{parent, view, position, id ->
    //ÇALIŞACAK KODLAR
    // position = tıklanılan satırın indexi
}
```

#### 2. YÖNTEM
```kotlin
listView.setOnItemClickListener(AdapterView.OnItemClickListener { parent, view, position, id ->
    //ÇALIŞACAK KODLAR
    // position = tıklanılan satırın indexi
})
```

#### 3. YÖNTEM
```kotlin
listView.setOnItemClickListener({ parent, view, position, id ->
    //ÇALIŞACAK KODLAR
    // position = tıklanılan satırın indexi
})
```

## ROWA UZUN TIKLANINC AİŞLEM YAPTIRMAK
```kotlin
listView.setOnItemLongClickListener(object:AdapterView.OnItemLongClickListener{
      override fun onItemLongClick(parent: AdapterView<*>?, view: View?, position: Int, id: Long): Boolean {
          Toast.makeText(applicationContext, "1 KEZ UZUN TIKLANDI", Toast.LENGTH_LONG).show()
          return true
      }
  })
```
