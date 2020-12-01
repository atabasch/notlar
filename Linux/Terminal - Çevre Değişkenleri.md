Terminalde başında $ işareti olan değişkenlerdir. Tıpkı phpdeki değişkenler gibi.

### Tüm çevre değişkenlerini gör
> printenv

### Bir çevre değişkeninin değerini görmek
> echo $DĞEİŞKEN_ADI

### Değişken Oluşturmak [O anki terminalde]
(Aşağıdaki gibi değişken oluşturulduğunda sadece set edilen o terminal penceresinde kullanılacaktır. Başka bir terminal ekranında kullanılamaz.)
> set $DEĞİŞKEN=Atanacak değer

### Değişken Oluşturmak [O anki Oturumda (Session)]
(Oluşturulan oturumda çalışır. Aynı oturum içindeyken her terminalde çalışır )
> export değişken_adi=değişkenin_değeri

### Değişken Oluşturmak [Kullanıcıya ait oluşturulur. O kullanıcıda çalışır.]
Kullanıcının ev klasöründeki **.bashrc** gizli dosyası kullanıcıya ait bilgileri içerir.
Budosya içerisine değişken belirlenirse o değişken o kullanıcı için çalışır.
**.bashrc**
```shell
export degisken_adi="aldığı değer"

alias terminal_icin_özel_komut="yapacağı işlem"
```

### Değişken Oluşturmak [Tüm kullanıcı, oturum ve terminallerde.]
Bilgisayar her açıldığında çalışacak bir dosyanın içine belirtilen değişkenler bilgisayarı her açıldığında her kullanıcı tarafından kullanılabilir.
**/etc/environment** bu dosyada sistemin PATH değişkeni bulunur. Bu dosyanın devamına herkesin kullanacağı değeler atanabilir.
> sudo nano /etc/environment
```
PATH="..."
SIL="rm -a"
BENKIMIM="echo sen furkansın"
```


Windowstaki **PATH** mantığında.
Her bir şeyin konumu : ile ayrılarak bir bütün halinde yazılmıştır.
> echo $PATH

##### Nasıl çalışır.
- Mesela komut ekranına **ls** yazdığımızda linux $PATH değişkeninin içeriğine bakar.
- Sırayla tüm yolları gezerek **ls** adında bir dosyayı arar.
- Bulduğunda **ls** komutu dosyasında yapılması lazım kodları çalıştırır.



# .bashrc
- Linux açılırken kullanıcı adı ve şifre istenir.
- Bilgiler girildikten sonra linux **etc/passwd** içinde kullanıcı adını bulur.
- Daha sonra **/etc/shadow** içinde kullanıcının girdiği şifreyi hashleyerek şifre ile kullanıcı eşit mi diye bakar.
- Kullanıcı adı ve şifre doğru olunca. O kullanıcının ev dizinine gidere **.bashrc** dosyasının içeriğini okur ve kullanıcı için sistemi hazırlar.
- Böylece bir kullanıcı kendi **.bashrc** dosyasına bir değişken veya bir komut alias ederse bilgisayar her açıldığında onlar kullanılır.

.
