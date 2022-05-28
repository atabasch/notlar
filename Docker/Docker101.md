# 1. Docker nedir?
Docker işletim sistemi kaynaklarını kullanan bir sanal makineler oluşturur. Bu makineler Container adındadır ve çalışmadığı zaman bilgisayar kaynaklarını kullanmazlar ve silindiğinde bilgisayardan tamamen yok olurlar. Böylece her bir proje için ayrı gereksinimleri karşılayan konteynırlar oluşturulabilir.

## Image
Image docker'da bir programın kurulmamış hali (setup) olarak tanımlanabilir. Image'lar henüz çalıştırılmamış olan containerlar gibidir. **run** komutu ile gerekli parametreler girilerek image'lar containerlara dönüştürülür.

#### Image Listesi
| Image Adı| Açıklama |
|---|---|
| ubuntu | ubuntu işletim sistemi (grafik arayüzü yok) |
| alpine | Sadece 5mb boyutunda bir linux sistemi. |
| debian | debian işletim sistemi (grafik arayüzü yok) |
| centos | centos işletim sistemi (grafik arayüzü yok) |
| redis |  |
| nginx | Nginx web sunucusu |
| httpd | Apache web sunucusu |
| node | node js |
| mysql | Mysql veritabanı |
| mariadb | mariadb veritabanı |
| postgres | postgres veritabanı |
| mongo | mongo db veritabanı |
| python | Python |
| ruby | Ruby |
| php | Php  |
| php:8.0-apache | Apache ile kurulu php 8  |
| phpmyadmin | phpmyadmin |
| wordpress | Wordpress |

Diğer bir çok image adı hub.docker.com da bulunuyor.

#### Image indirme
> docker pull image_adı

Image'lar etikerler ile indirilebilir. Eğer etiket adı ile girilince kurulacak olan yazılımların farklı versiyonları ve farklı içerikler ile beraber kurulabilir.
Aşağıdaki kodda tag yerine yazılacak olan etikerler hub.docker.com web sitesinde image'ın tags sayfasında vardır.

> docker pull image_adı:tag

## Container
Containerlar docker'da çalışan sistemlere verilen isimdir. Mesela **ubuntu** image olarak indirilir ve henüz çalışmaz. **run** komutu ile çalıştırıldığında artık bir container oluşmul olur. 1 image'dan birden fazla container oluşturulabilir.

#### Örnek:
- ubuntu image'ı indir  `docker pull ubuntu `
- Bir container oluştur `docker run --name pc1 ubuntu`
- Bir container daha oluştur `docker run --name pc2 ubuntu`

**ubuntu** adındaki image çalışmaz ama pc1 ve pc2 adında iki container bu image'ı kullanarak oluşturulur. Ve bu iki container sanki iki ayrı ubuntu sistemi gibi çalışır.


# 2. Docker Komutları

## 2.1 Docker Genel İşlevler
##### Versiyon bilgisi almak
> docker --version

##### hub.docker.com için giriş işlemi
> docker login

##### hub.docker.com için çıkış işlemi
> docker logout


## 2.2  Image İşlemleri
##### hub.docker.com da image aramak
> docker search image_name

##### Image indirmek
> docker pull image_adı

Versiyon veya ek yazılımla birlikte etiket kullanarak image indirmek
> docker pull image_adı:tag

##### Image listesi
> docker images

> docker image ls

Gizlenenler dahil tümünü görmek
> docker images -a

##### Image Silmek
> docker image rm <image_name|image_id>


## 2.3 Container İşlemleri
*Container isim ve id numaraları virgül ile birden fazla yazılabilir.*

##### Container Listesi
Çalışan containerları listeler
> docker ps

Çalışmayanlar dahil tüm containerlar listelenir
> docker ps -a


##### Container hakkında tüm detayları ekrana basar (Name, Platform, Mounts, ...)
> docker inspect <container_name|container_id>

##### Var olan container'ı başlatır.
> docker start <container_name|container_id>

##### Çalışan bir container'ı durdurur.
> docker stop <container_name|container_id>

##### Çalışan bir container'ı durdurur ve yeniden başlatır.
> docker restart <container_name|container_id>

##### Çalışan bir container'ı durdurmaya zorlar
> docker kill <container_name|container_id>

##### Container'ın kullandığı kaynakları terminalde anlık gösterir
> docker stats <container_name|container_id>

##### Container'ın log dökümünü çıkarır
> docker logs <container_name|container_id>

##### Localden Container içine dosya kopyalamak
> docker cp /local/path <container_id|container_name>:/container/path

##### Container içinden Local bilgisayar'a dosya kopyalamak
> docker cp <container_id|container_name>:/container/path /local/path

#### Var olan CONTANIER'a terminal bağlantısı açmak
> docker exec -it <container_name|container_id> bash

## 2.4 Container Oluşturmak (docker komutları ile)
Containerlar docker-compose.yml dosyası kullanılarak daha hazır bir sistem ile oluşturulabilir.

##### Bir image kullanılarak container oluşturmak
> docker run -[OPSİYONLAR] image_name:tag(varsayılan tag = latest)

### OPSIYON LİSTESİ

| Opsiyon ön kodu | Alabileceği  Değer | Açıklama |
|----|---|---|
| -d | true <br> false (default) | sadece -d yazılırsa true olur. oluştuktan sonra terminalde işlemler durur container arkaplanda çalışır. |
| -i,<br>--interactive |  | container çalışınca terminal sıfırlanmaz loglar terminale basılır. CTRL+C yapıldığında container durur. -d nin tersi  |
| -it |  | Container çalıştıktan sonra oluştan platformun terminali açılır ve burada komutlar ile işlem yapılır. CTRL+C container çalışmasını sonlandrır. |
| --name | isteğe bağlı isim | Oluştan container için bir isim verilir. Böylece co:ntainer işlemleri bu isim kullanılarak yapılır.  |
| -p | local_port:container_port | Local PC ile Container Portlarını eşitler. Ör: 80:80 local 80 portu ile container 80 portu dinlenir.  |
| --restart | always<br>no | Container bir hata sonucu kapanırsa otomatik yeniden başlatılsın mı? |
| -v | /local/path:/container/path | Local PC'deki bir dizin ile Container daki bir dizini mountlar. Böylece local PC deki klasördeki değişiklikler aynı anda containerda işler. |
| -e,<br>--env | KEY_NAME=value | Birden fazla kez yazılabilir. `-e KEY=val -e KEY2=val2` container içine ortam değişkeni gönderir. Mysql gibi imageların listesinde gerekli olan değişkenler verilir. Bunlar gönderilmelidir. |
| -u | username<br>root (default) | Container platformu container içindeki hangi kullanıcı ile çalışsın.  |
| --add-host | host_name:ip_number | /etc/hosts dosyasına ekleme yapar |
| -c | 512<br>1024 (default)<br>2048 | Container'a verilen cpu miktarı |
| -h, --hostname |  | Container bilgisayarına verilen isim. |
| --expose |  | Contar'ın dışarı açılacak olan port numarası |
| --ip |  | Container'a bir ip4 adresi atar |
| --link | diğer_container_id:takma_ad | Container'ı diğer bir container'a bağlar. diğer container'da takma_ad yazılarak bu container'â bağlanılabilir. |
| --net | none<br>bridge<br>container:name<br>host<br>network_name | Oluşturulan veya varolan bir docker ağı girilerek containeralr birbiri ile aynı ağa eklenir. |
| --rm |  |  |
| -w<br>--workdir | /container/path | Container içindeki bir dizin yolu girilir. Projeni çalışacağı dizin. |
| --bind |  |  |
|  |  |  |


## 2.4 Network İşlemleri

### Network Listesi
> docker network ls

### Network Oluştur
> docker network create new_network_name

### Network Sil
> docker network rm network_name

### Bir container'ı bir ağ'a bağlar
> docker network connect network_name <container_name|container_id>

### Bir container'ı ağdan çıkarır.
> docker network disconnect network_name <container_name|container_id>

# Örnek Bir DAMP (Docker Apache Mysql Php) başlatma komutları

#### Network Oluştur
> docker network create damp_network

##### Mysql Container'ı başlatılıyor.
> docker run -d -p 3306:3306 --name damp_mysql --net damp_network -e MYSQL_ROOT_PASSWORD=aswserver mysql:8.0

##### Mysql Container'ına bağlı bir phpmyadmin container'ı başlıyor.
> docker run -d -p 3307:80 --name damp_phpmyadmin --net damp_network --link damp_mysql:damp_localhost -e PMA_HOST=damp_localhost -e MYSQL_ROOT_PASSWORD=aswserver phpmyadmin:5.2-apache

##### Mysql'e bağlı bir php ve apache container'ı başlatılıyor.
> docker run -d -p 80:80 --name damp_php --net damp_network --link damp_mysql:damp_localhost -v .\web:/var/www/html -w /var/www/html php:8.0-apache

##### Php ve Apache container'ı içine gir.
> docker exec -it damp_php bash

##### Php Eklentilerini kur ve apache rewrite etkinleştir
> docker-php-ext-install mysqli pdo pdo_mysql
a2enmod rewrite
