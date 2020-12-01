pip3 install django-recaptcha → Recaptcha eklentisi ayar yapmak gerekir.
pip3 install django-ckeditor → ckeditor eklentisi
pip3 install Pillow → Resim işlemleri için
pip3 install --upgrade django-crispy-forms → bootstrap formlarını kullanmak için

# Cleanup Kütüphanesi

https://github.com/un1t/django-cleanup
Bu eklenti upload edilen dosyaların bağlı olduğu içerikler silinidiğinde içeriğe bağlı olan dosyalarında silinmesini sağlar. 

### Kurulum
```bash
pip install django-cleanup
```

### Entegre
```python
INSTALLED_APPS = (
    ...
    'django_cleanup',
)
```


# Pillow Kütüphanesi

```bash
pip install Pillow
```


# Std Image Kütüphanesi

https://github.com/codingjoe/django-stdimage
Daha kolay resim upload işlemleri yapabilmek için gerekli eklentidir.

### Kurulum
```bash
pip install django-stdimage
```

### Entegre
```python
INSTALLED_APPS = (
    ...
    'stdimage',
)
```

### Kullanımı

```python
from stdimage.models import StdImageField

class AswModel(models.Model):
    image = StdImageField(upload_to='path/to/img')

    image = StdImageField(upload_to='path/to/img',
                          variations={'thumbnail': {'width': 100, 'height': 75}})

    image = StdImageField(upload_to='path/to/img', variations={'thumbnail': (100, 75)})

    image = StdImageField(upload_to='path/to/img', variations={
        'thumbnail': {"width": 100, "height": 100, "crop": True}
    })

    image = StdImageField(upload_to=upload_to, blank=True, variations={
        'large': (600, 400),
        'thumbnail': (100, 100, True),
        'medium': (300, 200),
    })
```

