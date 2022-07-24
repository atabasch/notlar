# Dockerfile
Docker ile kurulacak olan container'ın uzantısız bir şekilde **Dockerfile** isminde bir dosya içine yazılmış kodlarla oluşturulması.

##### Dockerfile içinde kullanılacak değişkenleri bbelirler değişkenler ${DEĞİŞKEN_ADI} olarak kullanılır
> ARG VERSIONNAME=latest

##### Container hangi image'dan oluşacak
> FROM image_name:version

Birden fazla image kullanılabilir.

```
FROM mysql:8.0
RUN apt-get update && apt-get upgrade

FROM php:8.0-apache
RUN docker-php-ext-install mysqli pdo pdo_mysql
```

##### Container için label'lar belirler
> LABEL Furkan Atabaş <asw13tr@gmail.com>

##### Local bilgisayardaki dosyaları containerdaki hedef konuma kopyalar
> COPY /local/path /container/path

##### Uzak ağdan container içindeki path'e indirme yapar.
> ADD http://..... /container/path

##### Container içindeki çalışma dizinibi belirler eğer dizin yoksa oluşturur.
> WORKDIR /container/path

##### Image oluşturulurken server tarafında çalıştırılacak komutlar yazılır.
**NOT:** `docker build -t imagename .` komutu çalıştığında container içerisinde çalışacak olan terminal komutlarıdır.

> RUN terminal komutları

> RUN apt-get update && apt-get upgrade -y

##### Container çalıştırıldığında çalışan komutlar.
**NOT:** RUN ile aynı işlemi görür ancak her `docker run ...` komutu çalıştığında çalışır.

> CMD terminal komutları

```bash
CMD npm run start

# veya

CMD ["npm", "run", "start"]
```

##### ...

> ENTRYPOINT terminal komutları

##### Container içine ortam değişkenleri yollar. alt alta birden fazla kez yazılabilir.
> ENV ORTAM_DEĞİŞKENİ=değeri

##### Sistem hangi kullanıcı ile çalışacak
> USER username

> USER username:groupname

##### Local PC ile Container içindeki yolu mount eder.
> VOLUME /local/path /container/path

##### Container çalıştığında hangi port dinlenecek
> EXPOSE 80

## Docker file ile image oluşturmak

Dockerfile dosyasının bulunduğu dizinde yazılacak komut.

> docker build -t image_name:tag .
