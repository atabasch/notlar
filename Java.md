- Java dosyaları *.java uzantılıdır.
- ÇALIŞTIRILACAK olan java dosyalarında her zaman olması gereken fonksiyon vardır.
- Java dosyalarının içindeki classların ismi dosya ismi ile aynı olmalıdır.

# EN BASİT EN GEREKLİ ÖRNEK JAVA KODU

** basitKodlar.java

```java
package paket_ismi;

public class basitKodlar{

	public static void main(String[] args){
	
		# Çalışacak kodlar.
		System.out.println( "String değer" ); // Konsola çıktı verir.
	
	}

}
```

Yukarıdaki dosya direkt olarak çalıştırıldığında main fonksiyonu içindeki kodlar çalışır.

# DEĞİŞKEN VE SABİT BELİRLEME YÖNTEMLERİ

### STRİNG DEĞİŞKENLER
String varname	= "value";
String varneme  = new String("value");  
char varname  	= 'V';

### SAYISAL DEĞİŞKENLER
byte varname 	= 8;		// -128 ... +127 
short varname 	= 333; 		// -32768 ... +32767
int varname  	= 3333;		// -2.147.483.648 ... 2.147.483.647
long varname	= 5546546;  // -9,223,372,036,854,775,808 ... 9,223,372,036,854,775,807

float varname 	= 35.4f; // Sonuna f eklenince float olduğu anlaşılır double ile aynıdır sadece daha küçük yer tutar.
double pi 	= 3.14; 

### BOOLEAN DEĞİŞKEN
boolean varname = true;

### SABİTLER (BİR DEĞİŞKENİN DEĞERİ SONRADAN DEĞİŞMESİN DİYE)
final type varname = value;
final String varname = value;
final int varname = val;

### Tür Değişimleri
int x = Integer.parseInt( s );
double x = Double.parseDouble( s );
boolean i = Boolean.parseBoolean( s )
String txt = String.valueOf( s )

# DİZİLER VE FONKSİYONLARI

### DİZİLER
**Not:**
Her string bir karakter dizisidir.

**Kullanımı:**
String[] varname = { "val", "val2", "val3", ... };
char[]   varname = { 'V', 'v', '1', ... }

String[] varname = new String[Limit];
varname[0] = "value";
varname[x] = "value";

int[] varname = new int[x];

### LİSTELER (ArrayList)
**Not:**
ArrayListler Dizilere benzer. Farkı, ne kadar eleman ekleyeceğimzii bilmiyorsak kullanırız.

**Kullanımı:**
ArrayList<Type> varname = new ArrayList<Type>();
ArrayList<Type> varname = new ArrayList<>();
varname.add("value");
varname.add("value");
varname.add(key, "value");

varname.get(key);

### SETLER
**Not:**
Setler dizilere benzer ancak diğer dizilerden farkı her veriden sadece 1 tane olabilir.
Aynı değere sahip 2 eleman olmaz.

**Kullanımı:**
HashSet<Type> varname = new HashSet<>();

varname.add("value");


### MAP - ANAHTAR ALAN DİZİLER
**Not:**
Hashmap nesneleri dizilere benzer ancak dizilerde 0, 1, 2 diye çağırdığımız değerlere burada kendimiz anahtar atarız.

**Kullanımı:**
HashMap<Type, Type> varname = new HashMap<>();

varname.put(key, value);
varname.put(key, value);
varname.put(key, value);

varname.get(key);


# KOŞULLAR 

## İF - ELSE İF - ELSE

```java
if(koşul){
	// Çalışacak Kodlar
	
}else if(koşul){
	// Çalışacak Kodlar
	
}else{
	// Çalışacak Kodlar
	
}
```

**Koşullar**
|        |        |
| ------ | ------ |
| x == y | x != y |
| x < y  | x > y  |
| x <= y | x >= y |



## SWITCH - CASE
```java
switch(varname){
	
	case val:
		# komutlar;
		break;
		
	case val2:
		#komutlar
		break;
	
	default:
		#komutlar
		break;
}
```


## TRY CATCH
Bir kod bloğu içinde hata çıktığı zaman programın çökmemesini sağlar. İstediğimiz hatayı yazdırırız.
```python
try{
	// Hata çıkabilecek kodlar
}catch(Exception e){
	// Hata çıkınca çalışacak kodlar.
}
```

# DÖNGÜLER - LOOPLAR

## FOR DÖNGÜSÜ
```java

for( var i = 1; i <= 10; i++ ){

	# Çalışacak kodlar

}

```

Bir dizinin elemanlarını for döngüsü ile döndürebiliriz.

```java
int[] sayilar = {1,2,3,4,5,6,7,8,9}
for( int sayi : sayilar ){
	
	# Çalışacak kodlar 
	# sayi her defasında bir eleman verir.
	
}
```

## WHILE DÖNGÜSÜ

While döngüsü bir koşul alır ve koşul true döndüğü sürece çalışır.

**Kullanımı:**

```java
while(koşul){
	#çalışacak kodlar.
}

int i = 1;
while(i < 10){
	#çalışacak kodlar
	i++;
}
```


# METHODS METOTLAR

```java
durum sonucTipi methodName(ParametreTipi Parametreadı){
	
}
```

durum = public, protected, private
sonucTipi = String, int, short, double, void = void return işlemi yoksa

**Sınıf içi değişkenler**
public = Erişilebilir
private = Sadece sınıf içinde erişilebilir
protected = Kendi sınıfı ve extends edilen sınıflarda erişilebilir.
static = Bir metodun veya değişkenin kullanılabilir olduğu anlamına gelir.
final = Değişkeni sabit yapar.

```java
String varname;

public String varname;

private String varname;

protected String varname;

static String varname;

public static String varname;

public final static String varname;
```


**Notlar:**
- Java da aynı isimde birden fazla fonksiyon yazılabilir. Döndürdüğü değerler, aldığı parametrelere göre tekrar oluşturulabilirler
- Metotun içinde bulunduğu class başka bir classdan extends ediliyorsa. methodun hemen üstüne @Overrite yazıp methodun üstüne yazabiiriz.
- Bir metot içindeki değişken diğer metotta erişilmez. Her metodun tanıması gereken değişkenler class içinde metotların dışında oluşturulmalı.
- Sınıf ismi ile aynı adı taşıyan bir metot constructor metodudur. Class çağırılınca oluşur.


```java
public class sinifAdi{

	public String varname = Val;

	public sinifAdi(type par){ // constructor
		this.varname = val
	}
	
	public static void main(){
		// Kodlar
	}

	public static void yaz(){
		// Çalışacak kodlar.
	}

	public static int toplama(int sayi1, int sayi2){
		// Çalışacak kodlar.
	}

	public static double toplama(double sayi1, double sayi2){
		// Çalışacak kodlar.
	}

}

public class sinif2Adi extends sinifAdi{
	...
}
```

















































