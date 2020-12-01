# TEMPLATE İŞLEMLERİ İÇİN VIEWS DOSYALARININ DÜZENLENMESİ.

Template dosyalarından html dosyalarını render etmek için ana klasörde.
`projectdir/settings.py` dosyasında yazdığımız **Templates_klasör_adı** adında klasör oluşturalım ve
siteye render edeceğimiz html dosayalarını bu alanda oluşturalım.

→ appdir/views.py
```python
from .models import *

def view_fonksiyonu_adı(request, varsa, parametreler):
	# Bu alanda database ve diğer işlemler yapılabilir
    html_sayfasine_gidecek_veriler = {
        'degisken': 'değer',
        'değişken': 'değer'
    }
	return render(request, 'view_template_dosyası.html', html_sayfasine_gidecek_veriler)
```

Bu işlemler yapıldıktan sonra bir url işlemi yapılır ve hangi url de hangi sayfa görünecek ayarlanır.

→ appdir/urls.py
> urlpatterns = [ ..., path('text/<type:key>', view_fonksiyonu_adı, name='url_için_isim') ]

> urlpatterns = [ ..., path('text/<type:key>', view_fonksiyonu_adı, name='url_için_isim') ]



===========================================================================================================
# HTML DOSYALARINDA KULLANILABİLİR KODLAR
!> Değişkenler views.py de render ile 3. parametrede sözlük olarak gönderilir
	• {{ değişken }} → değişken değerini yaz
	• {% url 'view_fonksiyo_adı' varsa parametre %} → Link ver

	• {% for item in items %}
	• {% empty %} → Bu koddan sonraki bölüm items yoksa yada boşsa çalışır.
	• {% cycle x y z ... %} → Her döngüde sırayla parametreleri yazar
	• {% endfor %}

	• {% comment %} → Yorum satırı başlat
	• {% endcomment %} → Yorum satırını bitir

	• {% if x == y %}
	• {% elif %}
	• {% else %}
	• {% endif %}
		!	x == y
			x != y
			x > y
			x < y
			x|divisibleby:y
			x in y
			not x in y
	• {% ifequal a b %} ... {% endifequal %}
	• {% ifnotequal a b %} ... {% endifnotequal %}

	• {% now "d F Y H:i D M " %}

	# FİLTRLER
		!> {{ degisken|filtre:'parametre' }} şeklinde yazılır.
			x_time|timesince -> önce yazıldı
			val|linebreaks -> textarea daki enterları ekrana basar
			val|truncatewords:X -> X kadar kelimeyi gösterir.
			val|truncatewords_html:X -> X kadar kelimeyi gösterir.
			val|truncatechars:X -> X kadar karakter gösterir.
			val|truncatechars_html:X -> X kadar karakter gösterir.
			val|date:"D d M Y l"
			val|time:"H:i"
			now "jS F Y H:i"
			value|capfirst -> İlk harfi büyük yazar
			value|upper
			value|lower
			value|title
			value|make_list -> Tek tek liste yapar
			value|center:"15" -> Yazıyı ortalar
			value|ljust:"10"
			value|cut:" " -> Boşlukları siler
			value|default:"nothing"  -> Değier yoksa gösterilecek
			value|slugify
			some_list|slice:":2" -> belli kuraldakileri getirir.
			value|striptags -> Html taglarını kaldırır.
			value|urlize
			value|urlizetrunc:15
			value|wordcount -> kelime sayısı
			value|wordwrap:5
			alue|yesno:"yeah,no,maybe"




	# ŞABLON BLOCK İŞLEMLERİ
		! ANA MASTER PAGE
			• {% block blockname %}
			• {% endblock %}

		! ALT SAYFALARDA
			• {% extends 'master_page.html' %}
			• {% block blockname %}
				// Bu sayfa daki html kodları
			• {% endblock %}

		! HTML DOSYASI ÇAĞIRMAK İÇİN
			• {% include 'dosya_adi.html' %}

		!> Title içinde bu alanlar kullanılabilir. Örneğin
			→ base.html
				• <title>{% block title %}Default Değer{% endblock %}</title>
			→ sub.html
				• {% block title %} Title yazısı - {{ block.super }} {% endblock %}
