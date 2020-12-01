# Python Kurulum

* https://www.python.org/downloads/ adresine gir
* Download Python 3.x.x butonuna tıkla ve indir
* Kuruluma çift tıkla "Python yolunu ekle" seçeneğini seçmeyi unutma
* Kurulumu bitir.
* Console ekranına ``python --version`` komutunu yazarak kontrol et.

# Pip kurulumu

* https://pip.pypa.io/en/stable/installing/ web sitesine gir 
* [get-pip.py](https://bootstrap.pypa.io/get-pip.py>) dosyasını indir.  
* ``python get-pip.py`` komutunu çalıştır.
* Kurulum bittikten sonra ``pip --version`` komutunu çalıştırarak kontrol et.
* ``pip install KÜTÜPHANEADI`` ile kütüphaneler kurulabilir.

## Pip güncelleme

Eğer zaten bir pip sürümü varsa ve bunu güncellemek istersek aşağıdaki şekilde yapılır

``python -m pip install -U pip``


# Virtualenv Sanal Sunucu Kurulumu

* ``pip install virtualenv`` ile virtualenv kütüphanesini indir
* ``virtualenv --version`` komutuyla kontrol et.
* Sanal makineyi hangi klasör içine kuracaksan o klasör içinde komut ekranını aç
* ``virtualenv sunucuismi`` komutu ile sunucuyu kur
* ``sunucuismi\Script\activate`` komutu ile sunucuyu başlat.

Sunucunun başlatılıp başlatılmadığını komut satırında satır başlarında parantez içerisinde sunucu adı yazarsa anlayabilirsin.

# Django Kurulumu

* ``pip install Django==VersionNo`` Örneğin ``pip install Django==2.0.1`` komutu ile kurulum yapılır.

## Django Yeni Proje Oluşturmak

* ``manage.py startproject PROJEDİZİNİ`` şeklinde yeni proje oluşturulur. PROJEDİZİNİ yerine ister bir klasör ismi istersende . işareti koyabilirsin. Nokta . işareti projeyi komutun yazıldığı klasör içine kuracaktır. Örnek: ``manage.py startproject .``

## Django Yeni Bir Uygulama (App) Oluşturmak

* ``manage.py startapp uygulamadi`` kodlarını kullanarak yeni bir uygulama oluşturulur.

## Django İlk Ayarların Yapılması

* Şablon dosyalarını kullanmak için bir template klasörü oluşturmak ve bu yolu django'ya göstermek gerekir. Bunun için öncelikle `manage.py` dosyasının olduğu dizin içinde bir klasör oluştur ve istediğini bir isim ver. Sonra `settings.py` dosyası içindeki `TEMPLATE` sözlüğünü bul ve içindeki `DIRS` anahtarına değer olarak `[os.path.join(BASE_DIR, 'ŞablonlarİçinKlasörAdı')]` kodunu ekle.
* Site dilini ayarlamak için `settings.py` dosyası içinde `LANGUAGE_CODE` satırını bul ve değerini `tr` olarak değiştir.
* Site saat dilimini ayarlamak için `settings.py` dosyası içinde `TIME_ZONE` satırını bul ve değer olarak `Europe/Istanbul` yaz.

## Mysql Veritabanı Kullanmak

Django varsayılan olarak sqlite veritabanını kullanır. Ama diğer veritabanları içinde destek verir. Django projelerinde Mysql veritabanı kullanmak için ilk iş mysqlclient kütüphanesini kurmak.

```bash
    pip install mysqlclient
```

Kurulum Tamamlandıktan sonra settings.py dosyası içinde bulunan veritabanı satırı aşağıdaki gibi düzenlenmeli

```python
DATABASES = {
                'default': {
                    'ENGINE': 'django.db.backends.mysql',
                    'HOST': 'localhost',
                    'PORT': '',
                    'USER': '',
                    'PASSWORD': '',
                    'NAME': ''
                }
            }
```

## Django İlk kullanıcı ve veritabanı oluşturmak

* ``manage.py migrate`` ile varsayılan migrateler çalıştırılır ve veritabanı kurulmuş olur.
* ``manage.py createsuperuser`` komutu ile yönetim paneli için bir yönetici kullanıcı oluşturulur.

## Django Sitesinin Çalıştırmak

* ``manage.py runserver`` Siteyi görüntülemek için sunucuyu çalıştırır.
 
