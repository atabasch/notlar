

## PAKET YÜKLEYİCİSİ
Paket yöneticileri Linux işletim sistemlerine paketler, uygulamalar, programlar kurmak , kaldırmak veya değiştirmek için kullanılırlar.

| Sistem | Paket | Man. Pk. Yön | Oto. Pk: Yön |
|---|---|---|---|
| redhat/centOs | .rpm | rpm | yum |
| Debian/Ubuntu | .deb |  dpkg | apt  |

/etc/apt/sources.list ==> Download işlemleri için kaynak dosya

sources.lsit dosyasını işletim sistemi için günceller. Böylece eski sürüm bir işletim sistemi güncell eklenmiş programlara sahip olur.

### Debian/Ubuntu Otomatik Paket Yüklemek

> sudo apt-get update
> sudo apt-get upgrade
> sudo apt-get dist-upgrade

Kullanılmayan programları vs siler. Mesela bir program yüklenirken ona ait bir sürü dependences yüklenir.
Ama programı silince o dependencesler kalır. CCLEANER gibi
> sudo apt-get autoremove

Program var mı diye aratır.
> sudo apt-cache search program_ismi

Program kurar
> sudo apt-get instaall program_ismi

Programı kaldırır (Ancak onunla kurulan paketler bilgisayarda hala kalır. Silmek sitersen autoremove.)
> sudo apt-get remove program_ismi

Silinen bir programın, onunla birlikte yüklenen bağımlılıklarını kaldırmak için.
> sudo apt-get purge program_ismi

### Debian/Ubuntu Manuel Paket Yüklemek
İnternetten kurulacak paketin **.deb** uzantılı dosyasını indir.

Paketi kuracak.
> dpkg -i program_ismi.deb

### Kaynak Kodu indirilmiş paketi kurmak
Root yetkisi ile klasöre gir
> sudo -
> cd /home/user/...

Configure ayarları uygun mu diye test et.
> ./configute

Kurulum yap
> make install
