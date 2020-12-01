#SNACK BAR
Toast benzeri mesaj gösterme işlemidir.
Sayfanın en altında gelir.
Çok uzun süre kalabilir.
Aksiyonlar atanabilir.

view => Layout içindeki en üstteeki eleman idsi (constractlayout linearlayout vs)

SnackBar.make(view, "Görülecek Mesak", Uzunluk)
        .setAction("ACTION BAŞLIĞI", new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    // Snack bar üzerinden "ACTION BAŞLIĞI" na tıklanınca çalışacak kodlar.
                }
            })
        .show();
