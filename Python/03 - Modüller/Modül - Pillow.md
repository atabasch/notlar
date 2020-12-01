# FOTOĞRAF VE RESİM İŞLEMLERİ

> pip3 install Pillow

### Import etme işlemleri
> from PIL import Image, ImageFilter

### Resim açmak
> image = Image.open("resim")

### Resmi göstermek
> image.show()

### Resim kaydetmek
> image.save("resim2")

### Resim Bilgilerini Almak
> image.width
> image.height
> image.size
> image.filename

### Resmi döndürmek
> image.rotate(180).save("resim_ismi")

### Resme filtre model uygulamak örneğin siyah beyaz göstermek
> image.convert(mod = "L") // Modalar internetten bak

### Resmi küçültme
> image.thumbnail(  (w, h) )

### Resmi kırpmak
> image.crop( (left, top, right, bottom) )

### Resme filtre eklemek
> image.filter( ImageFilter.GaussianBlur(int) )
