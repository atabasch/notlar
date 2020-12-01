Bower ile front end için paket yönetimi yapabilir.  
Tıpkı npm işlemleri gibi (jquery, bootstrap, fontawesome) tarzı işlemleri cmd ile indirip dahil eder.

# KURULUM
**npm** gerekli.
> npm install bower -g

# BOWER.json dosyası OLUŞTUR
> bower init

# PAKET İNDİRMEK
```shell
#bower.json dosyası varsa dosyasında kayıtlı olanları indirir.
bower install

# jquery indirir
bower install jquery
bower install jquery --save # bower.json a ekler.

# bootstrap indirir
bower install bootstrap
bower install bootstrap --save # bower.json a ekler.

# fontawesome indirir
bower install fontawesome
bower install fontawesome --save # bower.json a ekler.

# GitHub kısayolundan indirmek
bower install desandro/masonry

# Gitden indirmek
bower install git://github.com/user/package.git

# URL
bower install http://example.com/script.js
```

# PAKET ARAMAK
> bower search paketadı
