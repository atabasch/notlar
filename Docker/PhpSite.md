# MANUEL KURULUMLAR

#### Ağ Oluştur
> docker network create damp_network

#### MySql Kuurlumu Yap
> docker run -d -p 3306:3306 --name damp_mysql --net damp_network -e MYSQL_ROOT_PASSWORD=aswserver mysql:8.0

#### PhpMyAdmin kurulumu yap
localhost:3307 ile girilir.
> docker run -d -p 3307:80 --name damp_phpmyadmin --net damp_network --link damp_mysql:damp_localhost -e PMA_HOST=damp_localhost -e MYSQL_ROOT_PASSWORD=aswserver phpmyadmin:5.2-apache

#### Apache2 ile Php 8.0 kurulumu
Veritabanına bağlanırken host girdisi olacak "damp_localhost" yazılmalı.
> docker run -d -p 80:80 --name damp_php --net damp_network --link damp_mysql:damp_localhost -v C:\Users\asw13tr\Desktop\works\asweb\web:/var/www/html -w /var/www/html php:8.0-apache

#### SERVER İÇİNDE KURULUMLAR YAPILMALI

> docker exec -it damp_php bash

```bash
docker-php-ext-install mysqli pdo pdo_mysql
a2enmod rewrite
```

gibi komutlara ihtiyaç var.

# Compose İle Kurulum

### Dizin Yapısı
- /database
- /web
  - /php dosyaları
- Dockerfile
- docker-compose.yml

### Dockerfile

```Dockerfile
FROM php:8.0-apache
COPY ./web /var/www/html
WORKDIR /var/www/html
RUN apt-get update && apt-get upgrade -y
RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN docker-php-ext-enable mysqli pdo pdo_mysql
RUN chown -R www-data:www-data . && echo "ServerName localhost" >> /etc/apache2/apache2.conf && a2enmod rewrite
EXPOSE 80
```

### docker-compose.yml

```yml
version: "3.7"
services:

  #PHP
  web:
    container_name: ASW_WEB
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./web:/var/www/html/
    links:
      - db
    ports:
      - 80:80
      - 443:443

  #MYSQL
  db:
    container_name: ASW_DB
    image: mysql:8.0
    restart: always
    volumes:
      - ./database:/var/lib/mysql
    environment:
      MYSQL_DATABASE: DATABASE_NAME
      MYSQL_PASSWORD: aswserver
      MYSQL_ROOT_PASSWORD: aswserver
    command: --default-authentication-plugin=mysql_native_password
    ports:
      - 3306:3306
    networks:
      - default

  #PHPMYADMIN
  phpmyadmin:
    container_name: ASW_PHPMYADMIN
    image: phpmyadmin/phpmyadmin
    restart: always
    links:
      - db:db
    ports:
      - 3307:80
    environment:
      MYSQL_PASSWORD: aswserver
      MYSQL_ROOT_PASSWORD: aswserver
```


### Projede olması gereken database ayarlar
```php
$DB_HOST = 'db';
$DB_POST = '3306';
$DB_USER = 'root';
$DB_NAME = 'DATABASE_NAME';
$DB_PASS = 'aswserver';
```
