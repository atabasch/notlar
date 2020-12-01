|  |  |
| --- | --- |
| sudo - | Root hesabına geçiş yaparak komutları root yetkisiyle yazmayı sağlar. |
|  |  |
| clear | Komut ekranındaki kodları temizler. |
| history | EN son yazılan komutları listeler. |
| history 10 | EN son yazılan 10 komutu listeler. |
| !xxx | Historyde ki komutun tekrar çalışmasını sağlar. !10 historyde kayıtlı 10. komutu çalıştırır. |
|  |  |
| ifconfig | ağ aygıtlarını görüntülemek. |
| iwconfig | Sadece kablosuz aygıtları görüntülemek |
| ifconfig ADP down  | Adaptörü devre dışı bırakmak  |
| ifconfig ADP up  | Herhangi bir adaptörü etkinleştirmek  |
| iwconfig ADP mode managed  | Wifi adaptörünü managed moda geçirmek  |
| iwconfig ADP mode monitor  | Wifi adaptörünü monitör moda geçirmek  |
| iwconfig ADP channel X  | wifi adaptörün dinleyeceği kanalı seçmek  |
| iwlsit ADP channel  | Kanal listesini gösterir.  |
|   |   |
| alias p=python3 | değişken belirler terminale **p** yazınca **python3** yazmış olursun. |
| alias degisken="atanacka kod" |  |
|  |  |
| cd klasör/2.klasör | 2. klasöre geçer |
| cd .. | üst klasöre çıkar |
| cd - | önceki klasöre döner |
| cd ~ | kök dizin |
| cd /usr/asw13tr/Desktop | kök dizinden başlayarak gidilir |
|  |  |
| ls | Bulunulan dizindeki dosya ve klasörleri listeler |
| ls klasör | verilen klasör içindeki dosya ve dizinleri listeler |
| ls -a | -a parametresi gizli dosyaları da gösterir. |
| ls -l | Dosya ve dizinleri alt alta ayrıntılı[İzinler, Goup, Tarih, Boyut] gösterir. |
| ls -la | -l ve -a parametrelerinin birleşmiş halleri. |
| ls -la | less | Dizinleri sayfalayarak gösterir. ENTER İle tek tek SPACE ile sayfa sayfa geçiş yapılır. Q çıkış |
| ls -la | more | Dizinleri sayfalayarak gösterir. ENTER İle tek tek SPACE ile sayfa sayfa geçiş yapılır. Q çıkış |
| ls -la > filename | Çıktıyı bir dosyanın içerisine yazar. |
| ls olmayan_dizin 2> filename | Dizin yoksa hata verir dosyaya yazma. 2> işareti ile hatayı dosyaya yazar.  |
|  |  |
| cat metin_dosyasi | Metin dosyası okur. |
|  |  |
| echo Metin > dosya_ismi | dosya ismi girilen dosyanın içine metin içeriğini yazar.|
| echo Metin >> dosya_ismi | Dosyanın içi doluysa bir alt satıra yazar |
| nano metin_dosyasi | Komut ekranında bir metin düzenleyici açar. |
| touch yeni_dosya | Yeni dosya oluşturur. |
|  |  |
| file dosya_name | Dosyanın türünü metin belgesi yapar ve charset UTF-8 atar |
| stat file_name | Dosya ile ilgili ayrıntılı bilgi verir [İSim, İzinler, Satır, Karakter sayısı, Tarihler] |
|  |  |
| uname | İŞletim sistemi (Linux) |
| uname -a | İşletim sistemi hakkında ayrıntılı bilgi |
| whoami | Aktif kullanıcının kullanıcı adı. |
|  |  |
| mkdir yeni_klasör | Yeni dizin oluşturur. |
| rmdir klasör | İçi boş olan klasörü siler. |
| rm -r klasör | Bir klasörü içindeki herşey ile siler|
| rm -rv klasör | Bir klasörü içindeki herşey sildiklerini terminale yazar.|
| rm dosya_adi | Bir dosyayı siler. |
|  |  |
| cp eski/dizin/dosya.ext yeni/dizin | Dosyayı kopyalar. ismi aynı kalır |
| cp eski/dizin/dosya*.ext yeni/dizin | dosya ile başlayıp .ext ile biten her şeyi kopyalar |
| cp eski/dizin/dosya.ext yeni/dizin/yeni_isim | Dosyayı kopyalar. ismini değişir |
|  |  |
| mv eski/dizi/dosya yeni/dizin | Dosyayı tamamen yeni dizine taşır. |
| mv eski/dizi/dosya yeni/dizin/yeni_isim | Dosyayı tamamen yeni dizine taşır ve adını değiştirir. |
| mv eski/dizi/do yeni/dizin | do ile başlayan her şeyi taşır. |
| mv eski_isim yeni_isim | Dosyanın ismini değiştirir. |
|  |  |
|  |  |
| shutdown | Bilgisayarı kapatır. |
| shutdown -h now+60 | Bilgisayarı 60sn sonra kapatır. |
| halt | Bilgisayarı kapatır |
| init 0 | Bilgisayrı kapatır |
| reboot | Yeniden başlatır. |
| halt 6  | Yeniden başlatır. |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |


## Dosya içinde değişiklik yapmak
Burada **sed** anlatılıyor.
**DAHA İYİ İŞLEMLER İÇİN AWK ARAŞTIR**

Not: > file_name girilmez ise değişiklikler işlenmez. Sadece anlık olarak terminalde görüntülenir.

DOsya içindeki eski yazan yerleri yeni olarak değişir ve dosyanın üzerine yazar.
> sed "s/eski/yeni/" file_name > file_name

Yapılan değişikliği terminalde gösterir (> file_name) yazmadığımız için sadece terminalde gösterrir dosya içindeki veri değişmez.
> sed "s/eski/yeni/p" file_name

Satır silme işlemi (file_name içindeki 3. satırı sildi)
> sed -e "3d" file_name > file_name

2., 4. ve 6. satırları sildi.
> sed -e "2,4,6d" file_name > file_name

Dosya içindeki tüm küçük harfleri sil
> sed "s/[a-z]//g" dosya > dosya

Karakter değiştirme ÖRNEĞİN türkçe karakterleri değiştirmek
> sed "y/şs/ıi/üu/çc/öo/" dosya > dosya

## TÜRETME
A ile başlayan herşey.
> A*

A ile biten herşey
> \*a

A ile başlayıp Z ile biten herşey
> A*Z

A ile başlayıp  z ile biten ve arasında 2 tane karakter olan herşey
> A??Z
