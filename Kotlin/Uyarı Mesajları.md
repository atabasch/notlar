# Toast Mesajı
> Toast.makeText(applicationContext, "Mesaj", Toast.UZUNLUK).show()

#
> var alert = AlertDialog.Builder(this)
alert.setTitle("")
alert.setMessage("")
alert.setPositiveButton("Tamam"){ dialog, which ->
    // Çalışacak Kodlar
}
alert.setNegativeButton("Vazgeç"){ dialog, which ->
    // Çalışacak Kodlar
}
alert.show()
