## Paket nedir
Node.JS  de her bir işlemi yerine getirmek için oluşturulmuş işlemlere paket denir.
- Mail göndermek
- Şifreleme işlemleri
- Dil işlemleri
- DB Kontrolleri

## npmjs.com
Node.js paketlerinin indirilebileceği bir site.

#### İYİ PAKETLER
- mongoose (MONGO DB)
- nodemailer (Mail)
- slugify


## PAKET YÜKLEME
> npm install paketname

Package.js dosyasına ekleyerek dosya indirmek
> npm install packagename --save

Daha sonra başka bir projeye aynı modülleri kurmak için package.json dosyasını proje içine al ve sadece aşağıdaki kodu yaz.
> npm install

Versiyonlu kurulum
> npm install packagename@2.1.0

Kullanılan paketlerde yeni versiyonu çıkan paket var mı?
> npm outdated

Güncelleme
> npm update packagename

Tüm paketleri güncellemek
> npm update

Kurulu paketleri görmek
> npm list

Global kurulum yaparak her dosyada kullanabilmek içine
Ancak localde çalışırken kullanılıp sunucuda kullanılmaması önerilir.
> npm install -g paketname
> npm install --global paketname

Global paketler nereye kurulur
> npm root -g

Kurulu Global Paketler
> npm list -g --depth=0
ana klasör içinde node_modules klasörü içine indirilir.


##### SADECE LOCALDE KULLANIP YAYINLANINCA KULLANILMAYAN PAKETLERİ KULLANMAK
> npm install packagename --save-dev

### PAKET KALDIRMAK
> npm uninstall packagename

Paket kalksın ama package.json dependeces de kalsın.
> npm uninstall packagename --no-save

Global paketi kaldırmak
> npm uninstall -g packagename

### PAKETİ KULLANMAK
> const degisken = require('paketname');

> degisken(xyz);

## Package.json
Paket bağımlılık yönetimini sağlamak için gerekli olan bir dosya.
Lazım olan paketleri içinde bulundurup kullanabiliriz.
**package.js** adında bir dosya oluştur yada consola `npm init` yaz.
> npm init

- kendin paket adı gir sana özel
- versiyon yaz 1.0
- açıklama gir
- varsayılan js dosyası okey
- 1 2 adım geçebilirsin
- enter ile onayla ve dosyayı oluştur.

##### Daha hızlı oluşturmak
Aşağıdaki kod ile hızlı bir json dosyası oluşturursun. Daha sonra düeltirsin.
> npm init -y

### Package Json içine ekleyerek modül indirmek
> npm install packagename --save
