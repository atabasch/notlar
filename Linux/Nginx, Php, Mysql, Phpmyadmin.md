# 1. Nginx Kurulumu

#### 1. 1} KURULUM İŞLEMLERİ
```sh
apt-get install nginx    # 1) Nginx'i kur.
```

#### 1. 2} GÜVENLİK İŞLEMLERİ
```sh
ufw app list             # FW girilebilecek parametre listesi
ufw allow 'Nginx HTTP'   # Nginx HTTP için firewall izni verir.
ufw status               # Firewall izin verilen uygulamalar.
```

- Nginx HTTP: Bu profil için 80 portu açılıyor. Dolayısıyla normal ve şifrelenmemiş http protokolüne izin vermiş oluyoruz.
- Nginx HTTPS: Bu profil için 443 portu açılıyor ve SSL/TSL protokollerine izin vermiş oluyoruz.
- Nginx Full: Bu profile izin verirsek ise hem http hem de https protokolleriyle sunucumuz çalışabilmektedir.


Kurulum başarılı olduysa nginx in otomatik olarak başlatılmış olması gerekir.
Kontrol etmek için.

```sh
systemctl status nginx.service     # 1. Yöntem

service nginx status               # 2. Yöntem

#### ÖNEMLİ NOT ####
# Nginx otomatik başlamadıysa sen başlatabilirsin
# Aşağıdaki kodların ayrıntılarına dikkat et.

systemctl start nginx     # Servisi başlatır ancak pc restratdan sonra kapanır.

systemctl enable nginx   # Servici enable eder pc restartdan sonra açılır.

```

Nginxin çalışıp çalışmadığını kontrol etmek için web browserdan ip adresini ziyaret et.


#### 1. 3} SERVER BLOCK
Apache'de "Virtual Host" anlamına gelir.
Aynı sunucuda farklı domainler çalıştırmayı sağlayan sistemdir.
Website yayın klasörü içerisinde her domain için bir klasör açıp nginx içerisinde her site için config dosyası oluşturulacak.

###### 1} Website dosyası için klasör oluştur.
```sh
mkdir /var/www/dirname            # 1) Web sitesi için bi klasör oluştur.
chmod -R 755 /var/www/dirname     # 2) Gerekli izinleri klasöre ver
```
###### 2} Nginx ayar dizininden default config dosyasının bir kopyasını al.
```sh
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/domain.ext
```
###### 3} Config dosyasını düzenle
```sh
server {
    listen 80;
    listen [::]:80;

    server_name siteadi.uzanti;
    root /site/dosyalari/yolu;

    index index.html index.php index.htm;

    server_name siteadi.uzanti;

    location / {
            try_files $uri $uri/ =404;
    }
}
```

###### 4} Yeni ayar dosyasını linkle
```sh
ln -s /etc/nginx/sites-available/domain.ext /etc/nginx/sites-enabled/
```

###### 5} Nginx servisini resetle
```sh
sudo systemctl restart nginx
```








# 2. PHP Kurulumu ve Nginx Ayarları

###### 1} İstediğin bir php sürümünü kur.
```sh
apt-get install php-fpm php-mysql         # Sanırım en son süürümler için
apt-get install php5-fpm php5-mysql       # 5 sürümü için
apt-get install php7.3-fpm php7.3-mysql   # 7.3 sürümü için
apt-get install php7.4-fpm php7.4-mysql   # 7.4 sürümü için
```

###### 2} Nginx default config dosyasında düzenlemeler yap.
**Config dosyasını aç**
```sh
nano /etc/nginx/sites-available/default
```

**Gerekli Düzenlemeleri yap ve kaydet**
```sh
#...

# index keyinin karşısına "index.php" ekle ki php dosyalarını tanısın.
index index.html index.htm index.nginx-debian.html index.php;

#...

# Aşağıdaki kodu da uygun yere ekle.
# Ancak php...-fpm.sock dosyasının konumunu doğru gir.
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/var/run/php(sürümü_yazacak)-fpm.sock;
}

#...
```
###### 3} Php.ini ayarlarını yap
php.ini dosyasını bul ve aç

Arat `;cgi.fix_pathinfo=1` değiştir `cgi.fix_pathinfo=0`

Dİğer ayarlamalar.
- max_upload_files



###### 4} Php-fpm ayarları
Bu ayarı nginx kullanacaksan yap.

Bul ve aç => **/etc/php-fpm.d/www.com**
```sock
# key = değer [verilecek yeni değer ]

user = apache [nginx]
group = apache [nginx]

listen = 127.0.0.1:9000 [/kökten/yol/php-fpm.sock]

listen.owner = nobody [nginx]
listen.group = nobody [nginx]
listen.mode = 0660
```

###### 5} Nginx ve php-fpm  servislerini yeniden başlat.
```sh
systemctl restart php-fpm

systemctl restart nginx
```



# 3. MySql Kurulumu

##### 3. 1} Mysql server ve client paketlerini kur.
```sh
apt-get install mysql-server mysql-client

# Sanırım maria db den sonra
apt-get install default-mysql-server default-mysql-cliend
```

##### 3. 2} Mysql için kurulumu başlat.
```sh
mysql_secure_installation
```
###### Kurulum sırasındaki seçimlerde yapılacak giriş önerileri
- y
- 1
- parola
- parola
- y
- n
- y
- y


##### 3. 2} MYSQL ROOT PAROLASI DEĞİŞTİRMEK

###### MySql root ile giriş yap
```sh
mysql -u root -p
```

###### SQL ile ayarlamaları yap
```sql
/* Mysql kullanıcılarını listele */
SELECT user,authentication_string,plugin,host FROM mysql.user;

/* root kullanıcısının şifresini değiştir. */
ALTER USER 'userName'@'localhost' IDENTIFIED BY 'New-Password-Here';

/* Çıkış Yap */
exit;
```





# 4) Phpmyadmin Kurulumu
```sh
# phpmyadmin paketini kur.
apt-get install phpmyadmin

# phpmyadmin dosyalarını nginxin yayın yaptığı website yoluna taşı.
ln -s /usr/share/phpmyadmin /var/www/html

# nginx servisini yeniden başlat.
systemctl restart nginx
```

# 5. FTP (vsftp) Kurulumu
##### 5. 1} vsftpd paketini kur.
```sh
apt-get install vsftpd
```

##### 5. 2} Konfigürasyon ayarlarını yap.

###### vsftpd.conf dosyasını düzenlemek için aç
```sh
nano /etc/vsftp.conf
```

###### Gerekli değişiklikleri yap.
```sh
anonymous_enable=NO

local_enable=YES    # Sv kullanıcıları ftp giriş iyapabilir.
write_enable=YES    # 

# Login hesap kendi ev dizininden üst dizine çıkamasın.
chroot_local_user=YES

# İstediğimiz kullanıcıların üst dizine çıkmasınıa izin vermek için.
chroot_list_enable=YES
chroot_list_file=..... # dizini sen oluştur.
```

##### 5. 3} Ftp Kullanıcıların Ekleneceği Dosya
```sh
nano /etc/ftpusers

```

##### 5. 4} Vsftp servisini yeniden başlat.
```sh
systemctl restart vsftpd

```





### - Vsftp için kullanıcı oluşturmak

###### 1} Shell dosyasını aç ve içerisine bir adet false ekle.
```sh
# shells dosyasını düzenlemek için aç
nano /etc/shells

# En alt satıra ekle.
/bin/false
```

###### 2} Sadece kendi home dizininie ulaşmasını istediğin kullanıcı için.
```sh
adduser {username} --shell /bin/false/
```

###### 2} Kendi belirlediğin internet yayın klasörüne ulaşması gereken bir kullanıcı oluşturmak için.
```sh
adduser {username} --ingroup www-data --shell /bin/false --home /ftp/sonrasi/ulasacagi/dizin --no-create-home
```



# SON. ÖZEL SUNUCU İÇİN DOMAIN IP YAPILANDIRMASI
- A => @ => IP ADRESİ
- CNAME => www => domain.ext
- MX => mail => domain.ext



# NGINX CONF KODU ANLAMLARI
```
server{

    listen 80;                                # 80 portunu dinle
    server_name xx.xxx.xx.xx domain;          # hangi ip ve domain için

    root /home/username/www/sitedir;          # siteye girilince açılacak dosya
    index index.html index.htm index.php;     # default index dosya isimleri

    # Hata sayfasını ayarlar
    location /{
        try_files $uri $uri/ = 404;
    }

    error_page 404 /404.html;                 # 404 hatası için 404.html sayfası
    error_page 500 502 503 504 /50x.html;     # 50x lihatalarda 50x.html dosyalarını aç

    # 50x.html dosyaları için aranacak dizin
    location /50x.html{
        root /usr/share/nginx/html;
    }

    # Php uzantılı dosyalar açılırken kullanılacak ayarlar.
    location ~\.php$ {
        try_files $uri = 404;
        fastcgi_pass unix:/tam/yol/php-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

}


```




""
