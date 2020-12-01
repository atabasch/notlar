# LINUX DOSYA VE DİZİNLERİ

**/** En alt dizini ifade eder.
**/root** Root kullanıcısının ev dizinini ifade eder.

### /BIN
Sistemin binary dosyasıdır. Sistemde bulunması geerekli olan komutlar burada bulunur. Sistem boot edildiğinde buradaki komutlar çalışır.

### /ETC
Sisteme ait bütün yapılandırma dosyaları /etc dizininde bulunur. İşletim sistemi ayarları vs.

| Dosya | Görev |
|-------|-------|
| /etc/hosts | hosts dosyası |
| /etc/sudoers | root yetkisine sahip üyelerin bulunduğu dosya. |
| /etc/passwd | Oluşturulmuş tüm kullanıcılar ve şifre dışı detayları |
| /etc/group | Sistemdeki gruplar ve ona bağlı kullanıcılar listesi. |
| /etc/shadow | Kullanıcıların hashlenmiş şifreleri. |
| /etc/lbs-release | İşletim sistemi adı ve versiyonu |
|  |  |



### /HOME
KUllanıcıların kendi dizinlerinin ve dosyalarının bulunduğu ev klasörüdür. Ancak **root** kullanıcısının ev dizini direkt olarak köktedir.

### /DEV
Device - Linuxtaki bütün aygıtlar bu klasörün içerisinde tutulur.
USB girişleri, CD sürücüleri, Paralel portlar vs

- /dev/psaux => PS/2 girişleri
- /dev/lp0 => Paralel port (LPT1), yazıcı ,tarayıcı vs..
- /dev/dsp => Birincil ses aygıtı
- /dev/usb =>  Usb aygıtları

### /VAR
Log, Cache vs gibi değişken dosyalar buradadır.

### /BOOT
Başlangıç için gerekli dosyalar.

### /LIB
Kütüphane dosyaları kernel modülleri

### /media
Çıkarılabilir aygıtların[USB, CD-ROM] sisteme eklendiği dizindir

### /mnt
Bİr dosya sistemini geçici olarak eklemek için kullanılır

### /opt
Ekstra programların kurulması için.

### /srv
Sistemin sunduğu hizmetlerle alakalı

### /tmp
Temp. Geçici dosyalar bulunur. Pc kapanınca silinir.

### /sbin
Sistem yöneticisinin çalıştırılabilir dosyaları bulunur.



# DİSK BÖLÜMLEME
Dİsk bölümleme **parted** ile yapılır. Arayüzlü olanıda var.
> sudo parted

Aygıtları ve bölümleri göstermek.
> print

## MOUNT / UNMOUNT
Dİsk üzerindeki bir bölümü bir klasöre bağlayarak, dizini kullanmaya yarıyor.
Mesela **Windows**'ta **HardDisk** içerisindeki **10GB** lık bir alanın Bilgisayarımdaki **D:** ye bağlanmış olduğunu düşün. **D** ye tıklayınca **HDD** yada **SSD** deki **10gb** lik bölümü kullanmış olursun.  

Yeni bir dosya sistemi oluşturur.
ext4 Lİnuxdaki bir dosya sistemi tipidir.
> mount ext4 /dev/sda3

/dev/sda3 ü /SDA3 klasörüne mount ederek /SDA3 e girince aslında /dev/sda3 ü kullanmış olduğunu görürsün.
> mount -t ext4 /dev/sda3 /SDA3

İptal etmek
> unmound /SDA3



ÜSTTEKİLERİ ARAŞTIRMADAN YAPMA
**/etc/fstab** dosyası dosya sistemi hakkındaki bilgileri verir. mount işleminin kalıcı olması içi bu dosyada değişiklik yapmalı.

Diskleri listeler
> df

Dİskleri listeler ve daha fazla ayrıntı verir.
> df -h

İçinde bulunulan dizinin ve o dizin içindeki dizinlerin ne kadar yer kapladığını gösterir.
> du -h



.
