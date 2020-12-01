# Ekran Görüntüleri Pencereler Layouts
**app/res/layout/activity_main.xml** Uygulama penceresi dosyasıdır.
res altında layout yoksa
- res klasörü üzerinde "Sağ Tık > New > New Resource Directory"
- Resource type > layout
- sonra layout klasörü içinde "Sağ tuş > New > Layout resource file"

**app\java\projectname\MainActivity.java:** Programın işleyiş kodlarının yazıldığı dosya.
**app\java\projectname\MainActivity.java > onCreate(...)...:** Program ilk çalıştığı anda çalışacak olan kodların yazılacağı metot.

**app\res\layout\activity_main.xml:** Varsayılan olarak programın ekran tasarımı

### EKRANDAKİ OBJELERİ KODLAMADA ALMAK VE DEĞİŞKENLERE ATAMAK
ObjeTipi degiskenAdi = (ObjeTipi) findViewById( R.id.obje_id )
- EditText input_sayi_bir 	= (EditText) findViewById( R.id.sayi_bir );
- EditText input_sayi_iki 	= (EditText) findViewById( R.id.sayi_iki );
- Button buton_topla   		= (Button) findViewById( R.id.button_topla );
- Button buton_carp   		= (Button) findViewById( R.id.button_carp );
- TextView text_sonuc 		= (TextView) findViewById( R.id.textview_sonuc );

**NOT:** onCreate metotu içerisinde tanımlanan değişkenler sadece onCreate içinde kalakacaktır.
Eğer toplama, çıkarma, bölme, çarpma gibi birden çok fonksiyon varsa ve her fonksiyonda bu objelere ulaşacaksak her metotta yeniden tanımlamalıyız.
Eğer butonlara her basıldığında ekrandaki objeleri tekrar almak istemiyorsanız değişkenleri direkt class içinde tanımlamalısınız.

`ObjeTipi degiskenAdi;` şeklinde direkt class içinde tanımlanıp.
`degiskenAdi = (ObjeTipi) findViewById( R.id.obje_id );`  şeklinde onCreatede atanırsa her fonksiyon altında erişilebilir.

### OBJELERİN ÖZELLİKLERİNİ ALMAK
| Metot İsmi | Açıklama |
| --- | --- |
| degisken.setText(yazı) | obje içine yazı yazmak |
| degisken.getText().toString() | obje içindeki yazıyı almak |


## BİR BUTONA TIKLANINCA İŞ YAPMAK
**İlk Adım:** Butonlara onClick metot isimleri verilmeli. Bunun için tasarım ekranında butonu seçip buton özellikleri penceresinde "onClick" seçeneğine bir fonksiyon ismi yazılmalı.
MainActivity dosyasında ana klass içinde onClick metotları aşağıdaki gibi yazılmalı.
Ör: Toplama butonu için "onClick" = "topla", Çarpma butonu için "onClick" = "carp",

```java
public class MainActivity extends AppCompatActivity{

	@Override
	protected void onCreate(...){
		...
	}

	public void topla(View view){
		...
	}
	public void carp(View view){
		...
	}

}
```

### KONTROL YAPMAK
**icerik Boş Mu?** if( edit_text.getText().toString().matches("") ){ ... }


### VERİ KAYDETME İŞLEMLERİ
```java
//Obje Oluşturmak
SharedPrefences varname = this.SharedPrefences('package name', Context.MODE_PRIVATE);

//ekleme
varname.edit().putInt("keyName").apply();

//Çekme
varname.getInt("keyName", Default)

//Güncellenme
varname.edit().putInt("keyName", value).apply();

//Silme
varname.edit().remove("keyName").apply();
```









### "ListView" KULLANMAK VE BİR VERİ LİSTESLİ OLUŞTURMAK
!!! ARAŞTIR


















