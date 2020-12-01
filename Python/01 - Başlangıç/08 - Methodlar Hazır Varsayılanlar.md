# PYTHON 3 VARSAYILAN METODLARI

### TİP DÖNÜŞTÜRME METHODLARI
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| **int(x)**		| Integera dönüştürür |
| **long(x)**		| Long tipine dönüştürür. |
| **float(x)**		| Floata dönüştürür. |
| **str(x)**		| Stringe dönüştürür. |
| **tuple(s)**		| Tüp objesine dönüştürür. |
| **list(s)**		| Listeye dönüştürür. |
| **set(s)**		| Set nesnesine dönüştürür. |
| **dict(d)**		| Dictionary yani diziye dönüştürür. |
| **iter(d)**		| dtype_iterable tipinine dönüştürü ve next gibi methodları kullanılabilir. |



### KONTROL METODLARI
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| **str.isalnum()**  	| Str SADECE harf ve rakam içeriyorsa True döner. |
| **str.isalpha()**  	| Str sadece harf içeriyorsa True döner. |
| **str.isdecimal()**  	| Tamamı rakamsa True |
| **str.isdigit()**  	| Tamamı rakamsa True |
| **str.isidentifier()**| Hiç özel karakter yoksa True döner. |
| **str.islower()**  	| Harflerin hepsi küçükse True döner |
| **str.isnumeric()**  	| Sadece sayı ise True döner |
| **str.isspace()**  	| Sadece boşluk varsa True döner |
| **str.istitle()**  	| Kelimelerin baş harfi büyükse True döner |
| **str.isupper()**  	| Harflerin hepsi büyükse True döner |
| **bool(v)** 			| Parametredeki değer True mu False mı boolean değerini verir. |
| **any(dict)**			| Parametredeki dolu dizi elemanlarınında 1 tane True değer varsa True döner.  |
| **all(dict)**			| Parametredeki dolu dizi elemanlarının hepsi True mu? Boş tabloda True döner  |



### STRING METHODLARI (obj.methodname())
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| **chr.join(par)** 		| Parametredeki diziyi char ile birleştirip string yapar |
| **str.strip(chr)** 		| string değeri parametredeki karakterden bölerek dizi sonucu verir |
| **str.lower()** 			| Tüm harfleri küçük yapar. |
| **str.upper()** 			| Tüm harfleri büyük yapar. |
| **str.title()** 			| Kelimelerin ilk harfleri büyük yapar. |
| **str.capitalize()** 		| Sadece ilk harfi büyük yapar. |
| **str.count(find)** 		| Parametredeki değeri str içinde arar kaç adet varsa sayısını verir. |
| **str.ljust(10, "=")** 	| Metnin sağına 7 tane = ekler. |
| **str.rjust(10, "=")** 	| Metnin soluna 7 tane = ekler. |
| **str.center(9, "=")** 	| Metnin soluna ve sağına 3 er tane = ekler. |
| **str.casefold()** 		| Tüm karakterleri küçük yazar |
| **str.swapcase()** 		| Karakter büyüklüklüklerini değiştirir. Küçükleri büyük büyükleri küçük yazar |
| **str.startswith(val, ?start, ?end)** | String val ile mi başlıyor. |
| **str.endswith(val, ?start, ?end)** 	| String val ile mi bitiyor. |
| **str.expandtabs(x)** 				| Str içindeki "\t" karakteri olan yerlerde x kadar boşluk olsun. |
| **str.find("mtn", ?start, ?end)** 	| String içinde mtn arar ve bulursa ilk harfin indexini döndürür. |
| **str.rfind("mtn", ?start, ?end)** 	| String içinde mtn i sağdan arar ve bulursa ilk harfin indexini döndürür. |
| **str.maketrans("xyz", "123")** 		| String içindeki par1 de bulunan harfleri par2 de aynı sıra ile dğeişir. |
| **str.partition(val)** 	| stringi val den böler ve 3 itemli bir dizi oluşturur ['val öncesi', 'val', 'val sonrası'] |
| **str.rpartition(val)** 	| stringi sağdan başlayarak val den böler ve 3 itemli bir dizi oluşturur ['val öncesi', 'val', 'val sonrası'] |
| **str.replace(x, y, ?limit)** 		| İçerkteki x leri y ile değiştir limit varsa limit kadarını yap. |
| **str.splitlines(bool)** 	| Stringi \n ile parçalar parametre True vverilirse böldüğü elemanlarda \n bulunur. |
| **cnt.zfill(limit)** 		| içeriğin soluna içerik uzunluğu - limit kadar 0 ekler |

### BASIT METODLAR
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| print(mtn)  		| Değişken değerini konsola yazar |
| dir(x) 			| Parametredeki değerin kullanılabilir komutlarını gösterir. |
| sum(iter, ?x) 	| 1. parametredeki elemanları toplar. x varsa toplamaya x den başlar. |
| abs(x) 			| Mutlak değeri verir. |
| pow(x, y, ?z) 	| X in Y kadar üssünü alır Z girilirse Z ye bölüp kalanı verir. |
| divmod(x, y) 		| x in y ye bölümünden kalanı verir. |
| range(x) 			| 0 dan X e kadar (X dahil değil) değerler içeren bir range objesi oluşturur. |
| range(x, ?y) 		| X den Y ye kadar (Y dahil değil) değerler içeren bir range objesi oluşturur. |
| range(x, ?y, ?z)	| X den Y ye kadar (Y dahil değil) Z kadar atlayarak değerler içeren bir range objesi oluşturur. |
| max(x, y, ...)	| Parametreye girilen limitsiz sayıların yada dizi içindeki sayıların en büyük olanını verir. **notlu** |
| min(x, y, ...)	| Parametreye girilen limitsiz sayıların yada dizi içindeki sayıların en küçük olanını verir. **notlu** |
| round(x) 			| YUVARLAMA - X'in ondalığı 5 den küçükse aşağı 5 ve büyükse yukarı yuvarlar.  |
| round(x, y) 		| YUVARLAMA - X. dan sonra y kadar ondalık gösterir  |
| len(mtn)   		| Değişkendeki karakter sayısını verir. |
| repr(x) 			| x bir değişken ise değerini, fonksiyon ise return edileni, class ise __repr__ methodunun sonucunu verir. |
| bin(x) 			| Binary değeri döndürür. |
| complex(x, ?y) 	| xxx |
| eval(str) 		| Parametrede verilen string değer içindeki python kodunu çalıştırır. Ör: 2+2 yazarsak sonuç 4 verir. |
| exec(str) 		| Parametrede verilen python kodunu çalıştırır. evalden farkı eval tek satır çalıştır. exec kod bloğu |
| zip(iterx, itery) | 1. parametredeki dizi ile 2. parametredeki diziyi aynı anahtarlardan ayrı ayrı tuple olarak birşetirir. |
| frozenset(iter)	| Parametredeki küme elemanını donmuş sete döndürür. Frozensetler set e benzer ancak güncelleme işlemi yapılamaz. |
| chr(int) 			| x yerine yazılan unicode değerinin karşılık karakterini verir. |
| ord(chr) 			| Parametredeki karakterin unicode karşılığını verir. |
| hex(int) 			| Parametredeki int değerinin hexadecimal karşılığını verir. |
| oct(int) 			| Parametredei integer değerin octal karşılığını verir. |
| vars(obj)  		| obj içindeki değerleri ve değişkenleri verir.|
| vars(obj)  		| obj içindeki değerleri ve değişkenleri verir.|
| callable(xyz)     | Parametre içindeki değer class ve method gibi çağrılabilir bir şey ise True döner. |
| input(msj) 		| Konsoldan değer alır. msj Mesaj olarak kullanıcıya görünür.|
| filter(method, iter) | 2. parametre içindeki elemanları tek rek methoda gönderir method da True dönen sıradaki değeri kaydeder. |
| map(method, iter) | 2. parametrede verilen dizi, tüp elemanı içindeki değerleri tek tek methoda gönderir. |
| reduce(functionname, iter) |  2.parametre içindeki ilk 2 elemanı metoda gönderir sonra dönen sonuç ile 3. elemanı alıp tekrar gönderir. |
| sorted(x) 		| Parametredeki nesneyi a dan z ye 0 dan 9 a küçükten büyüğe sıralar |
| sorted(x, reverse=True) 		| Parametredeki değeri ters sıralar. |
| reversed(x) 		| Parametredeki string yada diziyi ters çevirir. Obje döndürür bir dizi elemanına çevirmek gerekir |
| getattr(Klas, var, default) | Klassın var isimli değişkeninin değerini verir yok ise default döndürür. |
| hasattr(Klas, var) | Klassın var isimli değişkeni var mı? |
| setattr(Klas, var, val) | Klassın var isimli değişkenine val değerini atar. |
| f = open('file', mod) | Bir dosyayı mod için açar ve f e atar. |
| next(iter, default) | iterable nesnenin bir sonraki elemanını getirir değer yoksa default atar. |

**NOT: (MİN, MAX):**
	Bu iki fonksiyonun **key** adında bir parametresi vardır.
	key=xxx şeklinde bir parametrede xxx yerine bir fonksiyon ismi yazıp bulunan değere uygulanabilir.
	Örneğin: min([2,5], [8,10,11], [9,1,22,16], key=len) şeklinde bir kullanım ile 	en küçük dizinin eleman sayısı alınabilir.

**enumerate(dict, start*0 )**
1. parametrede verilen dizi içindeki verileri sırayla (Key, Val), ... şeklinde bir dizi yapar ve starta girilen rakamdan başlar.

> list(enumerate(['elma', 'armut', 'ayva'], 5)) = [(5, 'elma'), (6, 'armut'), (7, 'ayva')]

**Filter Örneği**
liste = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,20]
def ciftmi(x):
    if x % 2 == 0: return True
ciftler = filter( ciftmi, liste )

- format
- open
- iter
- slice
