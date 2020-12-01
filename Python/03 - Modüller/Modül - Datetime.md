# Datetime ve Time modulleri 

# Türkçe sonuçlar almak için
```python
import locale
locale.setlocale(locale.LC_ALL, 'turkish')
```

# Datetime modulü ile tarih işlemleri

> from datetime import datetime

### Şuanki zamanı almak

> datetime.now()

> datetime.now().year

> datetime.now().month

> datetime.now().weekday()

> datetime.now().day

> datetime.now().hour

> datetime.now().minute

> datetime.now().microseconds

> datetime.now().date()

> datetime.now().time()

### Güzel tarih gösterilmerl

_Sun Nov 18 18:41:06 2018_
> datetime.ctime( tarih_objesi )

> datetime.strftime(tarih, "Tarih İfadeleri")

**Strftime ifadeleri**

- **%a:**	hafta gününün kısaltılmış adı
- **%A:**	hafta gününün tam adı
- **%b:**	ayın kısaltılmış adı
- **%B:**	ayın tam adı
- **%c:**	tam tarih, saat ve zaman bilgisi
- **%d:**	sayı değerli bir karakter dizisi olarak gün
- **%j:**	belli bir tarihin, yılın kaçıncı gününe denk geldiğini gösteren 1-366 arası bir sayı
- **%m:**	sayı değerli bir karakter dizisi olarak ay
- **%U:**	belli bir tarihin yılın kaçıncı haftasına geldiğini gösteren 0-53 arası bir sayı
- **%y:**	yılın son iki rakamı
- **%Y:**	yılın dört haneli tam hali
- **%x:**	tam tarih bilgisi
- **%X:**	tam saat bilgisi

```pythom
t = '27 Mayıs 2014 saat 12:34:44'
zaman = datetime.datetime.strptime(t, '%d %B %Y saat %H:%M:%S')
# datetime.datetime(2014, 5, 27, 0, 34, 44)
```

### ZAMAN GÖSTERİM DEĞİŞİMLERİ

Zamanı saniye cinsinden verir
> datetime.timestamp( tarih_obj	 )

Saniye cinsindeki tarihi normal objeye çevir
> datetime.fromtimestamp( saniye )


### 2 TARİH ARASINDAKİ FARKI BULMAK

```python
tarih = datetime(yıl, ay, gün)
tarih2 = datetime.now()
fark = tarih - tarih2
```

### İLERİ BİR TARİHİ ALMAK
> datetime.timedelta(days=x)

> datetime.timedelta(seconds=x)

> datetime.timedelta(microseconds=x)

### GEÇMİŞ BİR TARİHİ ALMAK
```python
fark = datetime.timedelta(days=x)
bugun = datetime.today()
gecmis = bugun - fark
```

---
---
---

# Time Modülü

> import time

## Zamanı almak
1970 den itibaren geçen saniyeyi verir.
> time.time()

1970 yılınının ilk saniyesi
> time.time(0)

gmtime nesnesi gibi şuanı almak
> time.localtime()

## Saniyeyi objeye çevirmek ve zamanı almak
Çevirme işlemi
> zaman = time.gmtime( time_nesne_Saniye )

Zaman bilgilerini almak
> zaman.tm_year

> zaman.tm_mon

> zaman.tm_mday

> zaman.tm_hour

> zaman.tm_min

> zaman.tm_sec

> zaman.tm_wday

> zaman.tm_yday

> zaman.isdst

## Güzel bir string şeklinde tarihi almak
_Sun Nov 18 19:08:45 2018_
> time.asctime()

> time.asctime( time.localtime() )

> time.asctime( (2014, 5, 27, 13, 45, 23, 0, 0, 0) )

> time.strftime('%x')

## String bir tarihi nesneye dönüştürmek

```python
	t = '27 Mayıs 1980'
	tarih = time.strptime(t, '%d %B %Y')
	tarih
	# time.struct_time(tm_year=1980, tm_mon=5, tm_mday=27,tm_hour=0, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=148, tm_isdst=-1)
```


## PYTHON İŞLEMLERİNİ BİR SÜRE DURAKLATMAK
> time.sleep(saniye)