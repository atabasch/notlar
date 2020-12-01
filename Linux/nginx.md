# NGINX 301 DOMAİN YÖNLENDİRMESİ
> sudo nano /etc/nginx/conf.d/redirect.conf

## WWW DOMAİNDEN WWW OLMAYAN DOMAİNE
**TEK SİTE**
```
server {
        server_name www.example.com;
        return 301 $scheme://example.com$request_uri;

```


**SUNUCUDAKİ TÜM SİTELER**
```
server {
         server_name "~^www\.(.*)$" ;
         return 301 $scheme://$1$request_uri ;
}
```

> sudo service nginx restart

## WWW OLMAYAN DOMAİNDEN WWW OLAN DOMAİNE
**TEK SİTE**
```
server {
        server_name example.com;
        return 301 $scheme://www.example.com$request_uri;
}
```


**SUNUCUDAKİ TÜM SİTELER**
```
server {
        server_name "~^(?!www\.).*" ;
        return 301 $scheme://www.$host$request_uri;
}
```

> sudo service nginx restart
