# Dizin Yapısı
- /database
- /web
  - /php dosyaları
- Dockerfile
- docker-compose.yml

# Dockerfile

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

# docker-compose.yml

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


# Projede olması gereken database ayarlar
```php
$DB_HOST = 'db';
$DB_POST = '3306';
$DB_USER = 'root';
$DB_NAME = 'DATABASE_NAME';
$DB_PASS = 'aswserver';
```
