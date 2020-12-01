# Kurulum
İnternetten ruby dosyasını indir ve kur. Daha sonr a.rb uzantılı dosyalar oluşturarak çalıştırabilirsin.

**DİKKAT**: Dosyaların başına `#encoding: UTF-8` eklersen Türkçe karakter sıkıntın çözülebilir.






# Yorum satırı
```ruby
# Tek satır

=begin
Çok
satırlı
yorumlar
=end
```






# Değişkenler
```ruby
# Tek satırda atamalar yapılabilir.
name, surname, old = "furkan", "atabaş", 29

#
isim = "Furkan"
yas = 29
erkek = true
boy = 1.85
bos = nil

yetenekler = ["php", "html", "css", "ruby"]

bilgiler = {
    'name' => '',
    'surname' => ''
}

# Değişken tipini almak
degisken.class # String, Fixnum, Float, TrueClass, FalseClass
```






# Dizi Methodları
```ruby
dizi = Array.new                # []
dizi = Array.new(3)             # [nil, nil, nil]
dizi = Arra.new(3, 'Furkan')    # ['Furkan', 'Furkan', 'Furkan']

dizi.fetch(index, newValue)     #
dizi.first                      # İlk elemanı getirir.
dizi.last                       # Son elemanı getirir.
dizi.take(limit)                # Sıralı olarak istenilen limitte eleman çeker
dizi.drop(index)                # Elemanı siler
dizi.length                     # Dizi eleman sayısını alır
dizi.count                      # Dizi eleman sayısını alır
dizi.empty?                     # Dizi boş mu
dizi.include?(value)            # Dizide eleman var mı?
dizi.push(newValue)             # Diziye eleman ekler
dizi << newValue                # Diziye eleman ekler.
dizi.unshift(newValue)          # En başa eleman ekler
dizi.shift()                    # İlk elemanı siler
dizi.pop();                     # Son elemanı siler
```







# Girdi Almak, Tip dönüştürmek ve Tip sorgulamak
```ruby
print "Bilgi girişi yap: "
isim = gets

isim = gets.chomp() # .chomp Girilen değerin sonundaki \n karakterini siler aslında en son 1 karakteri siler

puts isim.class # isim değişkeninin tipini gösterir. puts ekrana yazar ve bir satır atlar.

isim.is_a? String # isim değişkeni string mi?
isim.is_a? Number # isim değişkeni numara mı?

yas = gets.to_i     # toInteger

boy = gets.to_f     # toFloat

# Ekrana basılan metin string olmalı
print yas.to_s      # toString
```







# Operatörler
```ruby
# MATEMATİKSEL
x + y
x - y
x / y #Bölme işleminde eğer integer bölümü yapılırsa değer int gelir 4.0 gibi float vermek 2.5 gibi sonuç aldırabilir.
x * y
x % y  # bölümden kalanı almak
x ** y # üst alma

# KOŞULLAR
==
!=
>=
<=
<
>
```







# String Fonksiyonları
```ruby
mtn.length()
mtn.index("Harf")
mtn.chomp()     # En sona eklenen özezl karakterleri siler. /n /r vs
mtn.chop()      # En sondaki herhangi bir karakteri siler.  
mtn[x]  # x i al
mtn[x,y] # x den y ye kadar al

print "#{degisken} falan filan"    
```







# Fonksiyonlar

### Parametresiz fonksiyon
```ruby
def funcname
    # işlemler
    return ...
end


# Kullanım
funcname

funcname()
```

### Parametreli fonksiyon
```ruby
def funcname(x, y, z="varsayılan")
    # işlemler
    return ...
end


# Kullanım
funcname(x, y)
```









# Koşullar, Sorgular
### İf, elsif, else
```ruby
if koşul
    # işlemler
elsif koşul
    # işlemler
else
    # işlemler
end
```

### switch, case, when, else
```ruby
case sorguDegeri
    when değer
        #işlemler
    when değer2
        #işlemler
    else
        #işlemler
end
```









# Döngüler

#### Times (X kadar çalış)
```ruby
10.times do |number|
    #10 kez dönen döngü
end
```

#### While (Koşul boyunca çalış)
```ruby
while koşul
    # işlemler
end
```

#### For Range (girilen 2 sayı arasında döngü)
```ruby
for sayi in 1..10
    # 10 dahil 10 kez döner.
end
```

#### For Array (Dizi elemanı kadar döngü)
```ruby
items = [x,y,z]
for item in items do
    # işlemler
end
```

#### For Array 2 (Dizi elemanı kadar döngü)
```ruby
items = { 'key'=>'val', 'key'=> 'val' }
for key, item in items do
    # işlemler
end
```

#### Each (Dizi elemanı kadar döngü)
```ruby
items = [x,y,z]
items.each do |item|
    #işlemler
end
```


#### Each (Hash elemanı kadar döngü)
```ruby
items = { 'key'=>'val', 'key'=> 'val' }
items.each do |key, value|
    #işlemler
end
```

#### Each (Sayı kadar döngü)
```ruby
# 9 kez
(1...10).each do |key, value|
    #işlemler
end

# 10 kez
(1..10).each do |key, value|
    #işlemler
end
```


#### Each_with_index (index almalı)
```ruby
items.each_with_index do |value, key|
    #işlemler
end
```


#### Loop (Break komutu gelene kadar dön)
```ruby
loop
    # işlemler
    break
end
```



#### Upto (Başlangıç ve bitişi olan döngi)
```ruby
10.upto(20) do |index|
    # 10 dan 20 ye kadar 10 kez döner index olarak sayıyı veerir.
end
```


#### Artarak giden döngü
```ruby
baslangic.step bitis, artis do |index|
  # işlemler
end
```














# Dosya işlemleri
#### Manuel açma kapatma işlemi
```ruby
dosya = File.open('filename', 'mode')

dosya.read() # Tüm içeriği oku
dosya.read(charLimit)

dosya.readchar() # 1 harf oku
dosya.readchar() # 2. harfi oku

dosya.readline() # 1 satırı oku
dosya.readline() # 2. satırı oku

dosya.readlines() # Satır satır şeklinde array getirir.

dosya.write('metin \n') #Dosyaya yazar

dosya.close() #Dosyayı kapat
```
#### Otomatik dosya kapatmalı
```ruby
File.open('filename', 'mode') do |file|

end # end satırı geldiğinde dosya otomatik kapanmış olur
```

#### Açma modları
```ruby
=begin
a => append => ekleme yapmak için
e => read => okumak için
=end
```












# Hata Yakalama
### Sadece hatayı yakalama
```ruby
begin
    # Hata çıkarabilecek kodlar
rescue
    # Hata çıkınca çalışacka kodlar
end
```

### Hatayı tipine göre yakalama
```ruby
begin
    # Hata çıkarabilecek kodlar
rescue TypeError
    # TypeError Hatası çıkınca çalışacka kodlar
rescue ZeroDivisioner
    # TypeError Hatası çıkınca çalışacka kodlar
end
```









# SINIF KULLANIMI
#### Sınıf oluşturmak
```ruby
# Sınıf adı her zaman büyük harfle başlar
class User

    # @degisken gibi olan değişkenler sınıfın kendi değişkenidir. her yerde kullan

    # Setter ve Getter oluşturmak
    attr_accessor :username, :password, :email

    # Sadece setter oluşturmak içine değer girilir ancak alınmaz
    attr_writer :username, :password, :email

    # Sadece getter oluşturmak sinif.username = "" olarak kullanılmaz.
    attr_reader :username, :password, :email

    # Class çağırılınca çalışacak ilk fonksiyon
    def initialize(uname, pass, mail)
        @username = uname
        @password = pass
        @email = mail
    end

    # Normal method oluşturur gibi iç fonksiyon oluşturulur
    def methodName()
    end

end
```

#### Sınıfları Kullanmak
```ruby
furkan = User.new("atabas61", "321", "atabas61@gmail.com")

furkan.username = "asw"
furkan.password = "12345"
furkan.email = "atabas71@gmail.com"
```











# Modüller
Modüller programın kütüphaneleridir. import et kullan

**modulefile.rb**
```ruby
module Moduladi

    def icMethod()
        # Yapılacak işler
    end

end

module Modul2adi

    def icMethod()
        # Yapılacak işler
    end

end
```

**main.rb**
```ruby
require_relative "modulefile.rb"
include Moduladi
include Modul2adi

Moduladi.icMethod()

```

























#
