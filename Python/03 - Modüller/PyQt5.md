# PyQt5 ile Arayüz programaöma
PyQt5 i indir ve kur.

## Pencere OLuşturma ve Pencere Özellikleri
```python
import sys

from PyQt5 import QtWidgets

def program():
	app = QtWidgets.QApplication(sys.argv)
	pencere = QtWidgets.QWidget()
	pencere.setWindowTitle("Başlık")
	pencere.setGeometry(X, Y, W, H)
	pencere.show()
	sys.exit(app.exec_())

program()
```

## RESİM ve YAZI OLUŞTURMAK
label1 = QtWidgets.QLabel(pencere)
label1.setText("Yazı")
label1.move(X, Y)


from PyQt5 import QtGui
label2 = QtWidgets.QLabel(pencere)
label2.setPixmap( QtGui.QPixmap("resim.ext") )
label2.move(X, Y)

## BUTTON
buton = QtWidgets.QPushButton(pencere)
buton.setText("")
buton.move(X, Y)

buton = QtWidgets.QPushButton("Buton Yazısı") #Layoutlara yerleştirilirken


## QWİDGETS İÇERİKLERİ
| Kod |  |
| --- | --- |
| QLabel("text") 		| Label |
| QPushButton("text") 	| Button |
| QLineEdit 	| Input ( .text() ile içeriği alınır ) |
| QTextEdit | Textarea |
| QRadioButton 	| Radiobutton |
| QCheckBox("text") 	|  isChecked() ile sorgulanabilir. |
| QComboBox 	|  |
| QSpinBox 	|  |
| QSlider 	|  |
| QToolBar 	|  |
| QInputDialog 	|  |
| QFontDialog 	|  |
| QFileDialog 	|  |
| QTab 	|  |
| QStacked 	|  |
| QSplitter 	|  |
| QDock 	|  |
| QStatusBar 	|  |
| QList 	|  |
| QScrollBar 	|  |
| QCalendar 	|  |
| QMenuBar, QMenu & QAction 	|  |
| QVBoxLayout 	|  |
| QHBoxLayout 	|  |

**Parola Alanı**
```python
parola = QtWidgets.QLineEdit
parola.setEchoMode(QtWidgets.QLineEdit.Password)
```





## HORIZONTAL BOX LAYOUT VE VERTICAL BOX LAYOUT
```python
import sys
from PyQt5.QtWidgets import *

def program():
	# Program oluşturuldu
	app = QApplication(sys.argv)

	# Nesneler oluşturuldu
	label = QLabel("Kullanıcı Adı")
	buton = QPushButton("Gönder")

	# Layout Oluşturuldu ve Nesneler Layoute Eklendi
	box = QHBoxLayout()
	# box = QVBoxLayout()
	box.addWidget(label)
	box.addWidget(buton)

	# Widgetlerden önce yazılırsa sola
	# Widgetlerden sonra yazılırsa sağa boşluk bırakır
	# Widgetlerin ortasına yazılırsa ortaya boşluk ekler
	# Widgetleri diğer kenara yaslar. Sayfa boyu değişsede yerlerinde kalırlar.
	box.addStretch()

	# Pencer açıldı ve ayarları yapıldı
	pencere = QWidget()
	pencere.setLayout(box) # Layout pencereye eklendi
	pencere.setWindowTitle("Program Denemesi")
	pencere.show()
	sys.exit(app.exec_())

program()
```
### Layout içine layout ekleme
> layout.addLayout(layoutname)



## CLASS İLE PROGRAM OLUŞTURMAK
```python
import sys
from PyQt5 import QtWidgets

class Pencere(QtWidgets.QWidget):

	def __init__(self):
		super().__init__()
		self.init_ui()

	def init_ui(self):
		self.label_1 = QtWidgets.QLabel("Label Text")
		self.buton_1 = QtWidgets.QPushButton("Tıkla")

		v_box = QtWidgets.QVBoxLayout()
		v_box.addWidget(self.label_1)
		v_box.addWidget(self.buton_1)

		self.setLayout(v_box)

		#Butona tıklandığında işlem yaptırmak
		self.buton_1.clicked.connect(self.tiklandi)
		# Parametreli
		self.buton_1.clicked.connect( lambda : self.tiklandi(par1, par2) )

		self.show()

	def tiklandi(self):
		#Butona tıklanınca yapılacak işlemler

app = QtWidgets.QApplication(sys.argv)
pencere = Pencere()
sys.exit(app.exec_())
```



## AYNI FONKSİYONLA HANGİ BUTONA TIKLANDIĞINI ANLAMAK
birdan fazla butona tıklandığında aynı fonksiyonun çalışmasını isteyebiliriz.
Böyle zamanlarda sender fonksiyonu ile buton alınabilir.
```python
self.btnvar1.clicked.connect(self.methodname)
self.btnvar2.clicked.connect(self.methodname)
self.btnvar3.clicked.connect(self.methodname)

def methodname(self):
	sender = self.sender()
	if sender.text() == "xxx":
		#...

```


## RADIO BUTTON ve CHECKBOX KULLANIMLARI

```python
self.r1 = QRadioButton("val 1")
self.r2 = QRadioButton("val 2")
self.r3 = QRadioButton("val 3")
self.r1.isChecked()


self.c1 = QCheckBox("Value")
self.c1.isChecked()

```

## DOSYA SEÇME İŞLEMLERİ FİLE BROWSER
Bir butona tıklandığında çalışacak fonksiyonda yazılır.
```python
#3 parametre gözatılacak dizin
file = QFileDialog.getOpenFileName(self,"Pencere İsmi",os.getenv("HOME"))
with open( file[0], "Açma Modu" ) as dosya:
	#İşlemler

# Kaydetme (Kaydedilecek yer için pencere açar)
file = QFileDialog.getSaveFileName(self, "Pencere İsmi", os.getenv("HOME"))
with open( file[0], "Açma Modu" ) as dosya:
	#İşlemler
```



## UYGULAMAYA MENÜ EKLEMEK
Menü işlemleri için uygulamayı **QWidget** ile değil **QMainWindow** ile başlatmalı.
```python
class Uygulama(QMainWindow):
	def __init__(self):
		super().__init__()
		menubar = self.menuBar()
		dosya = menubar.addMenu("Dosya")
		duzenle = menubar.addMenu("Düzenle")
		araclar = menuvar.addMenu("Araçlar")

		dosyaAc = QAction("Dosya Aç", self)
		dosyaAc.setShortcut("Ctrl+O")
		dosya.addAction(dosyaAc)
		dosyaAc.triggered.connect(self.tiklandi)

		dosyaKaydet = QAction("Dosyayı Kaydet", self)
		dosyaKaydet.setShortcut("Ctrl+S")
		dosya.addAction(dosyaKaydet)
		dosyaKaydet.triggered.connect(self.tiklandi)

		cikisYap = QAction("Çıkış Yap", self)
		cikisYap.setShortcut("Ctrl+Q")
		dosya.addAction(cikisYap)
		cikisYap.triggered.connect(self.cikis_yap)

	def cikis_yap(self):
		qApp.quit()

	# action methodu otomatik gelir hangi actiona tıklandı
	def tiklandi(self, action):
		action.text()
		pass
```








# QT DESİGNER KULLANMAK
- Pythonun yüklü olduğu klasöre git
- PyQt5 iin kurulu olduğu klasöre git
- designer.exe çalıştır.

> c:\Python35\Lib\site-packages\PyQt5\designer.exe

## DİZAYNI .PY DOSYASINA ÇEVİRMEK
- .ui uzantılı olarak dizaynı kaydet.
- PyQt5 klasörüne git
- pyuic5.bat dosyasını kullan

> c:\yol\pyuic5.bat -x filename.ui -o newfilename.py
































#
