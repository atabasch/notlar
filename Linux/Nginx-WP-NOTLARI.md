# Sitenin yazma izinleri.
```
sudo chown -R www-data:www-data /var/www

sudo chmod -R 755 /var/www
```

#### Kırpma ve resim düzenleme için php7.x-gd
#### DOMDocument Support için php7.x-xml

## WordPress için Nginx Config dosyası.
**siteadi.ext**
```sh
server {
        ## Your website name goes here.
        server_name domainname.ext www.domainname.ext;
        ## Your only path reference.
        root /var/www/siteklasörü;
        ## This should be in your http block and if it is, it's not needed here.
        index index.php;

        location = /favicon.ico {
                log_not_found off;
                access_log off;
        }

        location = /robots.txt {
                allow all;
                log_not_found off;
                access_log off;
        }

        location / {
                # This is cool because no php is touched for static content.
                # include the "?$args" part so non-default permalinks doesn't break when using query string
                try_files $uri $uri/ /index.php?$args;
        }

        location ~ \.php$ {
                #NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
                include fastcgi.conf;
                fastcgi_intercept_errors on;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
                expires max;
                log_not_found off;
        }
}


```


## Wordpress - W3 Total Cache çalıştırmak
1. Sitenin ana dizininde nginx.conf adında bir dosya oluştur.
2. nginx conf dosyasına ekle;
    include /var/ww/siteyolu/nginx.conf;
3. nginx.conf dosyasına www-data userini ata
    sudo chown -R www-data:www-data nginx.conf
