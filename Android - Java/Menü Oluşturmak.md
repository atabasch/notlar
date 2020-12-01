# MENÜ OLUŞTURMAK

res > NEW > Directory = "menu"

Oluşturulmuş "menu" klasörü seçiliyken.
file > New > Menu Resource File = "menu_name"

`menu_name.xml`
```xml 
<item 	android:id="@+id/idname"
		android:title="Menu Text"> </item>
```

`MainActivity`
```java
@Override
public boolean onCreateOptionsMenu(Menu menu){
	MenuInflater menuInflater = getMenuInflater();
	menuInflater.inflate( R.menu.menu_name, menu );

	return super.onCreateOptionsMenu(menu);
}

@Override
public boolean onOptionsItemSelected(MenuItem item){

	if( item.getItemId() == R.id.menu_item_name ){
		// Yapılacak işlemler
	}

	return super.onOptionsItemSelected(item);
}
```