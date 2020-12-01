# UYGULAMA OLUŞTURMAK	
``manage.py startapp newappname``

## UYGULAMAYI PROJEYE BAĞLAMAK
settings.py dosyasını aç
```python3
INSTALLED_APPS = [ 
	..., 
	'newappname', 
]
```

## UYGULAMANIN MODELİNİ OLUŞTURMAK
Uygulama modeli uygulamanın veritabanını oluşturur ve gerekli tüm database işlem ve kontrollerini bu alanya yapabiliriz.
Örneğin: Veritabaını hücrelerini oluşturmak, 1 veya 0 dönen verisine göre string bir değer ayarlamak, Kayıt ve güncelleme esnasında ekstra veriler kaydetmek ...

* appname/models.py dosyasını açın ve içeriğini oluşturun.
```python3
from kütüphane.yolu import method #Kullanılıcak metodu çağırma yolu

class ModulName(models.Model): #Modül oluşturmak
	hucre_name = models.FieldMethod(options) #Modül içine alan oluşturmak. (Veritabanı hücreleri)

	def save(self, *args, **kargs):
		#Her save ve update işleminde çalışılması istenen kodlar
		super(ModulName, self).save(args, kargs)

	def __str__(self):
		return #objenin döndürmesini istediğiniz veri

	def get_detail_url(self):
		return reverse('url_name', kwargs={'par': self.par})

		#Her uygulamaya aynı url ismini vermek istersen urls.py içinde app_name = 'appismi' gibi
		#Bir tanımlama yap. Böylece appismi:url_name şeklinde çağırabilirsin.


	class Meta:
		ordering = ["hucre", "-hucre"]
		verbose_name_plural = 'Uygulama Çoğul Adı Ör: Sayfalar'
		verbose_name = 'Uygulama tekil adı Ör: Sayfa'
``` 


## Module Dosyasına İmport Edilebilen Kütüphaneler
* ``from django.utils import timezone`` Zaman verisi almak.
* ``from django.utils import html`` html.format_html(icerik) şeklinde html döndürmek
* ``from django.contrib.auth.models import User`` Foreign şeklinde User yollanarak üye seçilir.
* ``from django.urls import reverse`` Linkleme işlemi için kullanılır.
* ``from django.utils.html import strip_tags`` Html etiketlerini siler.
* ``from django.contrib.staticfiles.templatetags.staticfiles import static`` static('dosya.ext') statik dosyayı döndürür.
* ``from django.contrib.auth.models import AbstractUser`` Yeni üyelik modeli oluşturmak için çağrılır. Bu sayede kendi üyelik modelimizi oluşturup ekstra alanlar ekleyebiliriz.
* ``from django.contrib.auth import get_user_model`` Kendi üye sınıfımızı kullanmak için fonksiyon
* ``User = get_user_model()`` User artık kendi üye sınıfımızdır.

## Module İçin Alanlar
Aşağıdaki kodlar ile bir mmodule formu oluşturabiliriz. 
Oluşturduğumuz modüller ayrıca veritabanında güncelleneceklerdir.

### MODULE EKLEME FONKSIYONLARI 

#### Input=Text
``models.CharField(verbose_name='', max_length=512)``

#### Select, options
``OPTIONS = ( ('k', 'val'), ('k2', 'val2'), ('k3', 'val3') )``
``models.CharField(verbose_name='', max_length=255, choices=OPTIONS, default='')``

#### Textarea
``models.TextField(verbose_name='', blank=True, default='')``

#### Input=Email
``models.EmailField(verbose_name='', blank=True, default='')``

#### Input=Url
``models.URLField(max_length=200)``

#### Input=Checkbox : Belirtilmedi seçeneği var
``models.NullBooleanField( verbose_name='', default=True )``

#### Unput=Checked : Belirtilmedi Seçeneği Yok
``models.BooleanField(verbose_name='', default=True, blank=True)``

#### Select, Options : Çolu Seçim
``models.ManyToManyField(ModelName, verbose_name='', related_name='')``

#### Input=File
``models.FileField(upload_to='path/', blank=True, default='')``
``models.FileField(upload_to='uploads/%Y/%m/%d/')``

#### Input=File (Image)
``models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)``

#### Input=Date
``models.DateTimeField(auto_now=False, auto_now_add=False, default=timezone.datetime.now() )``

#### Input=Time
``models.TimeField(auto_now=False, auto_now_add=False)``

#### Select, Options : Model içinden veri alır ve tek seçim yapılır.
``models.ForeignKey(User, verbose_name='', on_delete=models.CASCADE, related_name='games_of_user')``

#### Input=Number
``models.BigIntegerField(verbose_name='', default=0, blank=True)``

#### Input=Number
``models.IntegerField(verbose_name='', default=0, blank=True)``

#### Input=Number
``models.PositiveIntegerField(verbose_name='', default=0)``

#### Input=Text : Boşluk, Büyük harf ve özel karakter girilmemeli
``models.SlugField(max_length=255, unique=True, editable=False, blank=True, verbose_name='')``
	

## Migrasyon çalıştırmak ve verileri veritabanına işlemek

* ``manage.py makemigrations``	 migrasyon dosyalarını hazırla.
* ``manage.py migrate``  migrasyonu başlat ve veritabanını güncelle.

Migrasyon işlemleri tamamlandıktan sonra veritabanında güncellemeler yapılacak ve uygulama sisteme entegre olacaktır. 
Ancak bizim bu uygulamayı admin panelinde görüntüleyebilmemiz için panel için bir ekleme yapmamız gerekmektetir.

**Dosyayı Aç**
> appdir/admins.py
```python3
from .models import ModelName
admin.site.register(ModelName)
```

Aynı zamanda admin panelinde neyin nasıl gösterileceğine listede neye göre filtrelemeler olacağına müdahale edebiliyoruz.



