# Curl
## Curl ile terminalde url işlemleri yapılır.



## File.io kullanarak dosya upload ve download etmek.
#### Dosya Upload;

```sh
sudo curl -F "file=@filename.ext" https://file.io
# Json bir değer döndürür ve içerisinde download etme linki olur.
# 2 Hafta sonra veya dosya download edilince silinir.


# Upload sırasında dosyaya download edilmek için 2 haftadan farklı zaman belirlenebilir.
sudo curl -F "file=@filename.ext" https://file.io/?expires=3d   # 3 gün
sudo curl -F "file=@filename.ext" https://file.io/?expires=1w   # 1 hafta
sudo curl -F "file=@filename.ext" https://file.io/?expires=1y   # 1 yıl
```

#### Dosya Download
```sh
sudo curl https://file.io/xyz --output new_filename.ext;
# Dosyayı bulunulan dizine indirir ve file.io üzerinden dosya silinir.
```


## Transfer.sh ile dosya işlemi yapılabilir.



# WGET

## Wget ile sahip olunan direk download linkinden dosya indirilebilir.

#### Kurulum
> sudo apt-get install wget


#### Direkt indirme işlemi
> sudo wget -c https:///......./filename.zip

Dosya bulunulan dizine iner. Ayrıca -c yarım kalan bir indirme işlemini devam ettirmek için de kullanılır.

**İndirilen dosyanın adını değiştirmek**
> sudo wget -c https:///......./filename.zip --output-document=filename.ext

**İndirme hız limiti koymak**
> sudo wget -c https:///......./filename.zip --limit-rate=100k


## WGET ile bir web sitesi indirilebilir.

#### 1) website linki adında bir klasöre sitedeki linklere bağlı tüm linkleri ile indirme.
> wget -r https://data.worldbank.org/country/turkey

#### 2) Bulunulan klasör içinde doğrudan dosyaları indirmek.
> wget -r -nd https://data.worldbank.org/country/turkey

#### 3) Sitedeki belirli dosyaları indirmek.
> wget -r -A jpg,png https://data.worldbank.org/country/turkey

İstemediiğimiz dosyalar.
> wget -r -R tar.gz,jpg -c https://data.worldbank.org/country/turkey




#
