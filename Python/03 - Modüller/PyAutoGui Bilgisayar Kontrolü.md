# PYTHON PYAUTOGUI İLE BİLGİSAYAR KONTROL

## Windows İçin Kurulum İşlemleri
> pip3 install pyautogui

> import pyautogui as pc

## Linux İçin Kurulum İşlemleri
```console
pip3 install python3-xlib
sudo apt-get install scrot
sudo apt-get install python3-tk
sudo apt-get install python3-dev
pip3 install pyautogui
```





## PyAutoGui Mouse İşlemleri

| **Method**        | **Açıklama**  |
| ----------------- | ------------- |
| pc.size()                         | Ekran çözünürlüğünü verir. |
| pc.onScreen(x, y)                 | x ve y koordinatları ekran çözünürlüğü içinde mi? |
| pc.position()                     | Mouse un bulunduğu x ve y koordinatlarını verir |
| pc.moveTo(x, y, sn)               | imleci x, y koordinatına sn sürede götürür. |
| pc.dragTo(x, y, sn, button='left')    | imleci x, y koordinatına sn sürede butona basarak sürükler |
| pc.moveRel(x, y, sn)              | imleci BULUNDUĞU POZİSYONDAN x, y kadar sn sürede götürür. |
| pc.dragRel(x, y, sn, button='left')   | imleci BULUNDUĞU POZİSYONDAN x, y kadar sn sürede butona basarak sürükler. |
| pc.click()                        | 1 Sol tık |
| pc.click(button='right')          | 1 Sağ tık |
| pc.click(clicks=X)                | X kez tıkla |
| pc.click(clicks=X, interval=0.25) | X kez tıkla. Tıklamalar arasında 0.25sn bekle |
| pc.click(x=int, y=int)            | x , y koordinatına git ve oraya tıkla |
| pc.doubleClick()                  | Çift sol tık |
| pc.rightClick()                   | 1 Sağ tık |
| pc.middleClick()                  | 1 Orta tık |
| pc.mouseDown()                    |  |
| pc.mouseDown(button='right')      |  |
| pc.mouseDown(clicks=X)            |  |
| pc.mouseDown(x=int, y=int)        |  |
| pc.mouseUp()                      |  |
| pc.mouseUp(button='right')        |  |
| pc.mouseUp(clicks=X)              |  |
| pc.mouseUp(x=int, y=int)          |  |
| pc.scroll(int)                    |  |
| pc.scroll(10, x=100, y=100)       |  |
| pc.hscroll(int)                   |  |
| pc.vcroll(int)                    |  |

**Konsola Sürekli Mouse Pozisyonunu Basan Kod**
```python
import pyautogui as pc
print('Çıkmak için CTR+T tuşlarına basın.')
try:
    while True:
        x, y = pc.position()
        positionStr = 'X: ' + str(x).rjust(4) + ' Y: ' + str(y).rjust(4)
        print(positionStr, end='', flush=True)
        print('\b' * len(positionStr), end='', flush=True)
except KeyboardInterrupt:
    print('\n')
```

**Mouse hareketlerini yavaş ve hızlı yapmak**
```python
    pyautogui.moveTo(100, 100, 2, pyautogui.easeInQuad)     # start slow, end fast
    pyautogui.moveTo(100, 100, 2, pyautogui.easeOutQuad)    # start fast, end slow
    pyautogui.moveTo(100, 100, 2, pyautogui.easeInOutQuad)  # start and end fast, slow in middle
    pyautogui.moveTo(100, 100, 2, pyautogui.easeInBounce)   # bounce at the end
    pyautogui.moveTo(100, 100, 2, pyautogui.easeInElastic)  # rubber band at the end
```





## PyAutoGui Klavye İşlemleri

| **Method**        | **Açıklama**  |
| ----------------- | ------------- |
| pc.size()                         | Ekran çözünürlüğünü verir. |
| pc.onScreen(x, y)                 | x ve y koordinatları ekran çözünürlüğü içinde mi? |
| pc.typewrite("string")                | Klavye tuşlarına basar |
| pc.typewrite("string", interval=0.25)                 | Klavye tuşlarına aradaki saniye kadar basar (Özel tuşlara basmaz) |
| pc.KEYBOARD_KEYS                  | Özel Tuşlar Listesi |
| pc.press(tuş)                 | Özel tuşa basıp bırakır. |
| pc.press([tuş, tuş, tuş])     | Özel tuşlara basıp bırakır. |
| pc.keyDown(tuş)               | Tuşa basar |
| pc.keyUp(tuş)                 | Tuşu bırakır. |
| pc.hotkey("ctrl", "shift", "delete")                  | xxxxxxxxxxxx |
| pc.xxx()                  | xxxxxxxxxxxx |
| pc.xxx()                  | xxxxxxxxxxxx |
| pc.xxx()                  | xxxxxxxxxxxx |





## PyAutoGui Mesaj Kutusu Alert İşlemleri


| **Method**        | **Açıklama**  |
| ----------------- | ------------- |
| pc.alert(title="", text="", button="OK")                  | Mesaj kutusu gösterir |
| pc.confirm(title="", text="", buttons=["OK","CANCEL"])                | 2 butonlu mesaj kutusu buton  |
| pc.prompt(title="", text="")                  | Girdi alınabilen bir mesaj kutusu OK tıklanınca girdi gelir. |
| pc.password(title="", text="", mask="\*")     | Girdi alınabilen bir mesaj kutusu OK tıklanınca girdi gelir. Yazılan * ile gözükür. |

### PyAutoGui Ekran Görüntüsü

Ekran görüntüsünü alır ve resmi python kodunun çalıştığı dizine kaydeder.

> resim = pc.screenshot('ekran_goruntum.png')

Ekran görüntüsünü alır ve resmi belirtilen yola kaydeder.

> resim = pc.screenshot('path/image_name.ext')

Ekran görüntüsünü belli ölçekte alır.

> resim = pyautogui.screenshot('ekran_goruntum.png', region=(start_x, start_y, width, height) )

Elimizdeki bir resmi ekranda arar ve bulursa (x, y, width, height) değerlerini döndürür. Bulamazsa None döndürür.

> resim = pyautogui.locateOnScreen("./imgname.png")

Bir önceki komutta bilgilerini aldığımız komutun orta yani merkez noktasının değerlerini alır.

> resim_x, resim_y = pyautogui.center(resim)

Yukarıdaki iki işlemin işini yapar. Önce resmi arayıp koordinatları bulur sonrada merkez koordinatlarını verir.

> x, y = pyautogui.locateCenterOnScreen('imgname.png')

Yukarıdaki işlemlerde resmi ararken ilk bulduğu resmin bilgilerini verir aşağıdaki kod ise tüm resimler tüp halinde verir.

> locateAllOnScreen(image)

**grayscale=True** yukarıdaki resim bulma fonksiyonları için bir parametredir eğer True girilirse ekranı siyah beyaz olarak arar.
Resmi bulma hızı artar ama tespit etme oranı azalabilir. Farklı renklerdeki iki aynı şekil bulabilir.

 



## PyAutoGui Pencere İşlemleri

Pencereleri yönetmek için kullanılır.

| **Method**        | **Açıklama**  |
| ----------------- | ------------- |
| wins = pc.getWindows()                | Açık olan pencereleri sözlük halinde verir. |
| win  =  pc.getWindow(str yada int)    | Parametrede belirtilen içerik objesini verir. |
| win.move(x, y)                        | Açık olan pencereleri sözlük halinde verir. |
| win.resize(width, height)             | Açık olan pencereleri sözlük halinde verir. |
| win.maximize()                        | Pencereyi tam ekran yapar |
| win.restore()                         | Tam ekran pencereyi önceki boyutlarına getirir. |
| win.minimize()                        | Açık olan pencereyi görev çubuğuna kapatır. |
| win.close()                           | Açık olan pencereyi kapatır |
| win.get_position()                    | Pencerenin sol üst ve sağ alt öşelerinin ekran pozisyonunu verir. |
| win.set_position(lx, ty, rx, by )     | Ekran pozisyonunu ayarlar |