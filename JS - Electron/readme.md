# PROJE OLUŞTURMA
> npm init

Bilgileri kendine göre gir ancak  **entry point: main.js** olarak ayarla.

Ana pencere back-end i için **main.js** dosyasını oluştur  
Ana pencere front-end i için **main.html** dosyasını oluştur

> npm install --save electron

**package.json** dosyasında **scripts** e ekle: `"start": "electron ."`

> npm run start

## İLK PENCEREYİ OLUŞTURMAK

```js
const electron = require('electron');   // Electron u dahil et.
const url = require('url');             // Url i dahil et
const path = require('path');           // Path i dahil et

// Elektron içinden gerekli nesneleri al
const {app, BrowserWindow} = electron;

// Ana penecere için kullanılacak değişkeni oluştur.
let mainWindow;             

// Uygulama hazır olduğunda çalışacak fonksiyon
app.on('ready', () => {

    // Pencereyi oluştur
    mainWindow = new BrowserWindow({
        // Açılacak pencere özellikleri
    });


    // file:c:/../../../main.html urlsini oluştur.
    let windowUrl = url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, 'main.html'),
        slashes: true
    });

    // Pencerenin içine html dosyasını ekle
    mainWindow.loadURL(windowUrl);

});

```

## MENÜ OLUŞTURMAK
Kodları yine app.on() içerisine yazıyoruz.
```js
const {..., Menu} = electron;

const mainMenuTemplate = [
    {
        label: 'Dosya',
        submenu: [
            { label: 'Yeni Dosya',
                accelerator: process.platform=='darwin'? "Command+N" : "Ctrl+N",
                click(item, focusedWindow){
                    // Tıklanınca yapılacak işlemler
                }
            },
            { label: 'Yeni Klasör' },
            { label: 'Dosya Aç' },
            { label: 'Geliştirici Penceresi',
                accelerator: process.platform=='darwin'? "Command+Shift+I" : "Ctrl+Shift+I",
                click(item, focusedWindow){
                    // Tıklanınca yapılacak işlemler
                    focusedWindow.toggleDevTools();
                }
            },
            { label: 'Çıkış', role: 'quit' },   // role butona tıklandığında role içindeki kodun varsayılan işlemini yap.
        ]
    },
    {
        label: 'Düzenle',
        submenu: [{...}, {...},]
    },

]

app.on('ready', () => {

    let mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});



```

## HANGİ PLATFORMDA ÇALIŞTIĞINI GÖRMEK
> process.platform


```js
```



```js
```












#
