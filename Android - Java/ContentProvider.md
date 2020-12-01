# İÇERİK SAĞLAYICILAR
Telefondan içerik sağlayan servislerdir.
Mesela telefon rehberinden kayıtlara bakmak gibi.

Client: Müşteri, Alıcı
Content Provider: İçerik Sağlayıcı
Data Resolver: Veri Çözücü
Content Resolver: İçerik Çözümleyici

Bu işlemler için izin almak gerekebilir.
Ör: Telefon rehberinden kayıt almak için tehber okuma izni almak olabilir.
```java
ContentResolver contentResolver = getContentResolver();
String[] alinacakDeğerler = {ContactsContract.Contacts.COLUM_NAME, ContactsContract.Contacts.COLUM_NAME};
Uri path = ContactsContract.Contacts.CONTENT_URI; // Telefon rehberinin yolu
Cursor cursor = contentResolver.query(path, alinacakDeğerler, null, null, Orderby=ContactsContract.Contacts.COLUM_NAME);

if(cursor != null){
    ArrayList<String> datas = new ArrayList<String>();
    String colIndex = ContactsContract.Contacts.DISPLAY_NAME; // ÖRNEK
    while(cursor.moveNext()){
        String displayName = cursor.getString(colIndex);
        datas.add(displayName);
    }
    cursor.close();

    // Alınan verileri bir list viewde göstermek için
    ArrayAdapter<String> adapter = new ArrayAdapter<String>(MainActivity.this, android.R.layout.simple_list_item_1, datas);
    listWiew.setAdapter(adapter);
}
```
