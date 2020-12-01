# Python 3 ile dosya üzerinde çalışmak

Not: Dosyalarla çalışmadan önce dosya açma kiplerini  bilmek gerekir

## Dosya Kipleri

| **Kod** | **Açıklama** |
| ------- | ------------ |
| r 	  | Okumak - Dosya yoksa hata verir - Varsayılan kiptir. |
| w 	  | Yazmak - Dosya yoksa da varsa da baştan oluşturur. |
| a 	  | Yazmak - Dosya yoksa oluşturur - Varsa içeriğin devamına ekler |
| x 	  | Yazmak - Dosya yoksa oluşturur - Varsa hata verir |
| r+ 	  | Okumak ve Yazmak - Dosya varsa işlem yapar. |
| w+ 	  | Okumak ve Yazmak - Dosya yoksa oluşturur. Varsa siler baştan oluşturur. |
| a+ 	  | Okumak ve Yazmak - Dosya yoksa oluşturur. Varsa içeriğin devamına ekler. |
| rb 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **r** ile açar. |
| wb 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **w** ile açar. |
| ab 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **a** ile açar. |
| xb 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **x** ile açar. |
| rb+ 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **r+** ile açar. |
| wb+ 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **w+** ile açar. |
| ab+ 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **a+** ile açar. |
| xb+ 	  | Metin dosyaları ile ikili (binary) dosyaları ayırt eden sistemlerde ikili dosyaları **x+** ile açar. |

## Dosyalar İle Çalışmak

2. parametredeki kip yukarıdaki kipleri işaret eder. Yazılan dosya ismine kendi işlemini uygular

### Dosya açmak

> dosya = open("dosya_adi.ext", "kip")

### Önerilen kod yazma şekli

```python
try:
	dosya = open("dosya_adi.ext", "kip")
	# Yapılacak işlemler
except IOError:
	# istenirse hata mesajı hiç bir şey için pass yaz
finally:
	dosya.close()
```

### Güvenli şekilde dosya açmak

Açtığımız dosyaları açık unutmak hatalara sebep olabilir. 
Bunun için with komutu kullanarak açılmış dosyanın işlemler bittikten sonra otomatik kapanmasını sağlayabiliriz

```python
with open("dosya_adi.ext", "kip") as dosya:
	# Dosya ile yapılacak işlemler
```


### Dosyaya ait bir kaç bilgi almak

Dosyanın adı
> dosya.name

Dosya kapalı mı?
> dosya.closed

Dosya hangi mod ile açılmış?
> dosya.mode

???
> dosya.softspace

### Dosyadan okumak

Tüm dosyayı okur
> dosya.read()

Limit kadar karakter okur
> dosya.read(limit)

Her yazıldığı yerde 1 satır okur
> dosya.readline()

Her satırı bir eleman olarak listeye almak
> dosya.readlines()

### Dosyaya yazmak

Dosyaya bit metin yazar
> dosya.write("Yazılacak metin")

Bir liste elemanlarını sırasıyla satır satır yazar
> dosya.writelines(liste_nesnesi)

### Dosyayı kapatmak

Dosya ile olan işlemlerimiz bittikten sonra dosyayı kapatmamız gerekir.

> dosya.close()

### Dosyayı silmek

Dosyayı silmek için os modülünü kullanmalıyız.

```python
import os
if os.path.exists("dosya.ext"):
	os.remove("dosya.ext")
```

### Dosyanın ismini değiştirmek
```python
import os
os.rename("eski.ext", "yeni.ext")
```


[========]

## Yazı imleci ile çalışmak

Yazı imlecini inserte basılmış gibi düşünmeliyiz. 
Yazı imleci metin içeriğinin neresindeyse dosya oradan okunur ve oraya yazılır.

#### İmlecin yerini değiştirmek
> dosya.seek(int)

Örneğin a kipi ile dosya açtığımızda yazdığımız yazılar dosyanın en sonuna ekleniyordu.
seek metodunu kullanıp imleç için parametreye 0 girersek imleç dosyanın en başına gider.
Böylece dosyanın en başına eklemeler yapabiliriz.

#### İmlecin bulunduğu konumu bulmak
> dosya.tell()


#### Dosyanın ortasına bir satır eklemek
Bu işlem için dosya satır satır okunur.
Satırların bulunduğu listeye liste.insert(key, val) komutu ile ekleme yapılır.
dosya.writelines(liste) ile tekrar yazılır.

Örnek:
```python
with open("dosya.txt", "r+") as f:
    veri = f.readlines()
    veri.insert(2, "metin")
    f.seek(0)
    f.writelines(veri)
```

