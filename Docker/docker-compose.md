# Docker Compose
Uygulamaların tanımlanmasını ve çalıştırılmasını sağlayan bir docker aracıdır. Docker compose ile bir docker projesinin tüm ayalarını bir dosyaya yazarak çalıştırdığımızda dosya içindeki tüm özellikler ile  başlatabiliriz.
**docker-compose.yml** dosyasının içerisinde birden fazla container tanımlayarak tek bir kod ile tümünü ayağa kaldırabiliriz. Docker dosya adı **docker-compose.yml** olmalı ve YAML formatında yazılmalıdır.

# Docker Compose için kodlar
```YAML
# Docker compose versiyonu şuan 3.9 geçerli 2022
version: "3.9"


# tüm containerlar services altında tanımlanır
services:       

  # Bu servis için isteğe bağlı bir isim
  service_name:    

    # Docker komutlarını çalıştırmak için bu container'a bir isim ver.
    container_name: "özelisim"        


    # Bu container için indirilecek image adı.
    image: imagename                  


    # ???? Gerekli değil
    # Tam açıklama bulamadım ama eğer image belirtilen bir service içindeyse yazılan klasör yoksa oluşturuyor.
    build: .                          


    # Çalışma dizinini belirler
    working_dir: /var/www



    # Bir çıkış kodu geldiğinde container yeniden başlasın mı?
    restart: always                     # no(d) | always | on-failure | unless-stopped


    # Bu servisin bağımlı olduğu servisleri tanımlar.
    # Önce depends_on içerisindeki servisler oluşturulur ve daha sonra bu servis.
    depends_on:
      - diğer_servis_adı
      - ikinci_servis_adı


    # Local Port ile Container portalarını bağlamak.
    ports:                            
      - 80:80
      - 8080:80
      - 443:443


    # Local Bilgisayardaki dizin ile Container içindeki dizini mount eder.
    volumes:                          
      - ./project/folder:/container/path
      - ./project/folder:/container/path:izinler      # rw, ro (read online)
      - "$PWD":/container/path        # $PWD linux'da kodun çalıştırıldığı konumu verir.


    # Container içine ortam değişkeni yollar. Alt alta yazılabilir
    # Gerekli ortam değişkenleri image hub sayfalarında yazar.
    environment:
      - DEGISKEN_ADI=değeri
      #veya          
      DEGISKEN: isim       


    # Başka bir servis ile bu container arasında ağ kur.
    links:                            
      - diğer_servis_adı:takma_ad     # Bu container içinden takma_ad kullanılarak diğer service bağlanılır
      - database:db_localhost         # Database Host'u için = db_localhost kullanılır.


    # Container'ı bir network'e bağlar
    # bridge(standar), host(local pc ağı), none(network yok), ve özel networkler oluşturulabilir
    # Proje içinde bi ağ adı oluşturup servisleri o ağa bağlayabilirsin.
    networks:
      - bridge
      - aswnetwork


    # Local bilgisayardan container bilgisayarına aygıt eklemek.
    devices:
      - /local/path:/container/path
      - /local/path:/container/path:rwm


    # DNS Bilgileri girer.
    dns: 8.8.8.8
    #veya
    dns:
      - 8.8.8.8
      - 8.8.4.4


    # ENTRYPOINT
    entrypoint: /code/entrypoint.sh
    # vyea
    entrypoint:
      - php
      - -d
      - zend_extension=/usr/local/lib/php/extensions/no-debug-non-zts-20100525/xdebug.so
      - -d
      - memory_limit=-1
      - vendor/bin/phpunit



    # Ortam değişkenlerini .env uzantılı dosya halinde göndermek.
    env_file: .env
    #veya
    env_file:
      - a.env
      - b.env


    # Container içindeki hosts dosyasına ekleme yapar.
    extra_hosts:
      - "hostadi:i.p.n.o"
      - "asw.dev:i.p.n.o"



    # Container için bir bilgisayar adı girer.
    hostname: "asw.server"



    # secrets içerisinde belirtilen sertifikalara buradan ulaşılır.
    # /run/secrest/server-certificate
    secrets:
      - server-certificate



    # docker-compose kodunun sonuna komutlar ekler.
    # sh yerine bash yazabilirsin.
    command: >
      sh -c "apt-get update
      && apt-get upgrade -y"

    command:
      - /bin/bash
      - -c
      - |
        apt-get update
        apt-get upgrade -y

  command: #bu seviyeye yazıalbilir mi bak


# İstenilen miktarda özel isimde ağ oluşturulur.
# Aşağıdaki ağ isimlerini kullanarak servisleri birbirine bağlayabilirsin.
networks:
  - aswnetwork
  - backendnetwork


# Container içine sertifikalar gönderir.
# secrets olarak service verilir ve container içinde /run/secrest/dosya_adı olarak alınır.
secrets:
  server-certificate:
    file: ./server.cert


```

# Docker Compose Komutları
Bu komutları docker-compose.yml dosyasının bulunduğu dizinde yaz.

Docker projesini ayağa kaldır
> docker-compose up

Docker projesini arkaplanda başlat
> docker-compose up -d

Docker projesini kapat
> docker-compose down

Docker projesini yeniden başlat.
> docker-compose restart
