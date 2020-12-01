###

##### 1) pakete developer için kurulumlar yap
```sh
 npm install electron electron-packager --save-dev
```

##### 2) electron-packager i global olarak da kur
```sh
npm install electron-packager -g
```

İkonlar linux=.png  windows=.ico  mac=.icns olmalı

##### 3) Exe dosyasını oluştur
```sh
electron-packager . ProgramAdi --overwrite --asar --platform=PLATFORM --arch=ARCH --icon=iconadi.ext
```

PLATFORM = "linux" | "win32" | "darwin" | "mas"  
ARCH = "ia32" | "x64" | "armv7l" | "arm64" | "mips64el"

##### 4) setup Kurulum dosyası oluşturmak için
exenin bulunduğu dizindeki tüm klasörleri **Data** adındaki bir klasöre ekle ve **inno setup** programını indirerek işlemleri gerçekleştir.

İnoo Setup programında klasör ve dosyaları eklerken klasörleri **Data** klasörü nü include ederek verebiliyorsun.
