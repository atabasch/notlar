
# İKİNCİ AKTİVİTE YAPMAK 2 EKRAN OLUŞTURMAK
- **app\java\projectfoldet** üzerinde **sağ tuş > New > Activity > Lazım Olan Activity**
```java
	Intent intent  = new Intent( getApplicationContext(), Main2ActivityClassName.class )
	startActivity( intent )
```

## İKİNCİ AKTİVİTEYE BİLGİ GÖNDERMEK
**1.aktivite**
```java
	//Birinci aktivitedeki değişkenleri oluştur
	Intent intent  = new Intent( getApplicationContext(), Main2ActivityClassName.class );
	intent.putExtra('key', gidecekdeğer);
	startActivity( intent );
```

**2. aktivite**
```java
	Intent intent = getIntent()
	String degisken = intent.getStringExtra('1. aktivitedeki key')
```
