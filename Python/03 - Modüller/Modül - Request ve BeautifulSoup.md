# Websitelerin bağlanıp veri çekmek

# KURULUM
> pip3 install requests
> pip3 install beautifulsoup4


# İMPORT ETMEK
> import requests
> from bs4 import BeautifulSoup as bts

## SAYFAYI ÇEKMEK
response = requests.get( url )
html_content = response.content

## HTML içeriği parçalamak
> soup = BeautifulSoup( html_content, "html.parser" )

> BeautifulSoup(markup, "html5lib")

> BeautifulSoup(markup, "lxml-xml") BeautifulSoup(markup, "xml")

> BeautifulSoup(markup, "lxml")

**soup.prettify()** __//Tüm html kodları__


## ETİKETLERİ ALMAK SEÇMEK
```python
items = soup.find_all("tag") ## Çoklu seçim yapmak
for i in items:
	i.get("attr")
	i.get("href")
	i.text
```
> items = soup.find_all("div", {"class":"a ab abc"})

> items = soup.find_all("div", {"class":"a ab abc"}, limit=x)

> items = soup.find_all("p", string="xxx")

> items = soup.find_all( string=[ "xxx", "yyy" ]  )

> items = soup.select( "css seçicileri" )


**TEKLİ SEÇİM**
> item = soup.find("tag", id=xxx )

> item = soup.find("tag", { "tag": "value" } )

> item = soup.find(id=xxx )

> item = soup.find("tag", id=xxx )

> item = soup.find("tag", id=xxx, attrs={ "tag": "value" } )


## NESNELERİN İÇERİĞİNİ ALMAK

> item.text

> item.get("href")

> item.get("alt")

> item.title

> item.title.name

> item.title.string

> item.p

> item.p['class']

> item.a






## REQUEST MODULU İLE URL DOSYALARINA İSTEK ATMAK
> r = requests.get('http://domainname.ext/more-url')

> r = requests.post('http://domainname.ext/more-url')

> r = requests.put('http://domainname.ext/more-url')

> r = requests.delete('http://domainname.ext/more-url')

### REQUEST İLE URL YE PARAMETRE GÖNDERMEK
> r = request.get("http://domainname.ext", params={ "par":"val", "par2":"val2" })

### İSTEK ATTIĞIMIZ SAYFA YÖNLENDİRME YAPIYORSA BUNU TAKİP ETMEK YADA ETMEMEK

> requests.get("http://httpbin.org/redirect/1",allow_redirects=False)
> r.status_code # 302

> requests.get("http://httpbin.org/redirect/1",allow_redirects=True)
> r.status_code # 200


### REQUEST İLE GELEN VERİLERİ JSON ALMAK
> r.json()

### TIMEOUT SÜRESİ BELİRLEMEK
> r = requests.get("http://httpbin.org/get", timeout=1)


### HEADERS KULLANMAK
> r = requests.post("http://httpbin.org/post",headers={"User-Agent":"xxx"})

### İSTEKLER SONRASI KULLANILAN METOTLAR
| **Metot** | **Açıklama** |
| --- | --- |
| r.text | Html içeriği alır |
| r.headers | Header bilgilerini sözlük tipinde verir. |
| r.url | İstek yaptığımız linki geri döner |
| r.status_code | İsteğin HTTP durum kodu |
| r.history | İstekte yönlendirmeler olduysa bunların listesini tutar. HTTP Code olarak  |
| r.encoding |  |
| r.request | Yaptığımız istek tipini döner |
| r.elapsed | Geçen zamanı döner |