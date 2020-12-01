
## OS MODÜLÜ
> import os

| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| os.name  			| İşletim sistemini verir nt => Windows, posix => Mac ve Linux |
| os.sep  		| İşletim sisteminin kullancığı ayracı gösterir "\\" ve "/" |
| os.getcwd()  		| İçinde bulunulan dizinin yolunu verir. |
| os.chdir(path)  		| Başka dizine geçme işlemi yapar. |
| os.listdir(path)  		| Dizin içindeki dosya ve klasörleri verir. |
| os.walk(path)  		| Dizin içindeki dosya ve klasörleri listeler ve klasörler içindekileride listeler |
| os.curdir()  		| ./ |
| os.pardir()  		| ../ |
| os.startfile(file)  		| Dosyayı gerekli program ile açar (Sadece Windowsta çalışır.) |
| os.mkdir(name)  		| Yeni bir klasör oluşturur. |
| os.makedirs(path/name)  		| Klasör oluşturur ama eğer oluşturulan klasör dışındaki klasörler yoksa onlarıda oluşturur. |
| os.rename(eski, yeni)  		| Klasör adını değiştirir. Windows klasör yoksa hata verir. GNU tekrar yazar |
| os.replace(eski, yeni)  		| Klasör adını değiştirir. Windowsta tekrar yazmayı dener. |
| os.remove(dosya)  		| Dosya siler |
| os.rmdir(path)  		| İçi boş bir dizini silecektir. |
| os.removedirs(p/a/t/h/s)  		| İç içe yazılan dizinleri en sondan başa doğru içi boşsa sırayla siler |
| os.stat(file)  		| Dosya hakkında bilgi verir. boyut, oluşturulma, düzenlenme, ... |
| os.system(code)  		| Sistem komutlarını çalıştırır. |
| os.urandom(int)  		| int baytlık r	astgele byte dizileri oluşturur |
| os.environ  		| İşletim sisteminin çevre değişkenlerini bir sözlük halinde verir. |
| os.__file__  		| os modulünün dosya yolunu verir. |
| os.access("path", os.CODE)  		| Sadece Linux için izinleri kontrol eder. True false döner |


### OS.PATH METODUNUN FONKSİYONLARI.
| **Method**        | **Açıklama**	|
| ----------------- | ------------- |
| os.path.abspath(file)  		| Dosyanın tam yolunu verir. |
| os.path.dirname(file)  		| Dosyanın sadece dizin yolunu verir. |
| os.path.exists(fileDIR)  		| Dosya yada dizinini varlığını kontrol eder. |
| os.path.expanduser("~")  		| Kullanıcıya ait dizinini yolunu verir. |
| os.path.expanduser("~username")  		| Linuxta username adında bir kullanıcı klasörü oluşturur. |
| os.path.isdir(dir)  		| Parametredeki değer bir DİZİN mi? |
| os.path.isfile(file)  		| Parametredeki değer bir DOSYA mı? |
| os.path.join("p", "a", "t", "h")  		| İşletim sisteminin ayracı ile dizin yolunu oluşturur. |
| os.path.split(path)  		| Yolun son kısmını ayırır ve bir diziye 2. eleman olarak ekler. |
| os.path.basename(path)  		| Yolun son kısmını verir |
| os.path.splitext(file)  		| Dosya ile uzantısını birbirinden ayırır. |


## BAZI METOTLARIN ÖRNEKLERİ

**sep**
dizin = ["desktop", "isler", "python"]
os.sep.join( dizin ) # desktop/isler/python

**f = os.stat(file) :**
f.st_atime // Son erişilme tarihi
f.st_ctime // Oluşturulma tarihi (Windowsta)
f.st_mtime // Düzenlenme tarihi
f.st_size // Boyutu

**os.walk(path) örnek**
```python
for kökdizin, altdizinler, dosyalar in os.walk('anadizin'):
	print(dosyalar)
```

**os.environ**
```python
for k, v in os.environ.items():
    print(k.ljust(10), v)
```

**os.access("path", os.CODE)**
os.access("/home/xxx/yyy", os.F_OK) // Varoluş izni?
os.access("/home/xxx/yyy", os.R_OK) // Okuma izni var mı?
os.access("/home/xxx/yyy", os.W_OK) // Yazma izni var mı?
os.access("/home/xxx/yyy", os.X_OK) // Çalıştırma izni var mı?


