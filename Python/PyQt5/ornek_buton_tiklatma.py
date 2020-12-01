import sys
from PyQt5.QtWidgets import *

class Uygulama(QWidget):

    def __init__(self):
        super().__init__()
        self.userinterface()
        self.sayac_1 = 0
        self.sayac_2 = 0

    def userinterface(self):
        self.label_1 = QLabel("1. Butona Hiç Tıklanmadı")
        self.buton_1 = QPushButton("1. Buton")
        self.buton_1.clicked.connect(self.buton_1_tiklandi)
        vbox_1 = QVBoxLayout()
        vbox_1.addWidget(self.buton_1)
        vbox_1.addWidget(self.label_1)
        vbox_1.addStretch()

        self.label_2 = QLabel("2. Butona Hiç Tıklanmadı")
        self.buton_2 = QPushButton("2. Buton")
        self.buton_2.clicked.connect(self.buton_2_tiklandi)
        vbox_2 = QVBoxLayout()
        vbox_2.addWidget(self.buton_2)
        vbox_2.addWidget(self.label_2)
        vbox_2.addStretch()

        mainbox = QHBoxLayout()
        mainbox.addStretch()
        mainbox.addLayout(vbox_1)
        mainbox.addLayout(vbox_2)
        mainbox.addStretch()

        self.setLayout(mainbox)
        self.show()

    def buton_1_tiklandi(self):
        self.sayac_1 += 1
        self.label_1.setText( "1. butona %s kez tıklandı" % str(self.sayac_1) )

    def buton_2_tiklandi(self):
        self.sayac_2 += 1
        self.label_2.setText( "2. butona {} kez tıklandı".format(self.sayac_2) )

app = QApplication(sys.argv)
uygulama = Uygulama()
sys.exit(app.exec_())
