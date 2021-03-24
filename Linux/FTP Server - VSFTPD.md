# NOTLAR

- listen=YES ise listev6 olanı yorum yap.
- Linux kullanıcıları kendi şifreleri ile ftpden kendi klasörlerine bağlanır. Klasörlere chown ile o kullanıcı eklenmeli.
- Filezilla 530 login incorrect hatası verirse **pam_service_name=ftp* olarak değiştir.
- Filzezilla 500 hatası verirse **allow_writeable_chroot=YES** vsftp.conf dosyasına ekle.


# 5. FTP (vsftp) Kurulumu
##### 5. 1} vsftpd paketini kur.
```sh
apt-get install vsftpd
```

##### 5. 2} Konfigürasyon ayarlarını yap.

###### vsftpd.conf dosyasını düzenlemek için aç
```sh
nano /etc/vsftp.conf
```

###### Gerekli değişiklikleri yap.
```sh
anonymous_enable=NO # Herkes bağlanamasın

local_enable=YES    # Sv kullanıcıları ftp girişi yapabilir.
write_enable=YES    # Bağlı kullanıcılar dosya upload edebilir.

# Login hesap kendi ev dizininden üst dizine çıkamasın.
chroot_local_user=YES

# İstediğimiz kullanıcıların üst dizine çıkmasınıa izin vermek için.
chroot_list_enable=YES
chroot_list_file=..... # dizini sen oluştur.
```

##### 5. 3} Ftp Kullanıcıların Ekleneceği Dosya
Linuxa eklenmiş olan kullanıcılar kendi şifreleri ile kendi klasörlerine bağlanabilirler.  
Mesela **atabas61** kullanıcısı **/home/atabas61** dizinine bağlancaktır.  
Kullanıcının bağlanacağı root dizinini **/etc/passwd** dosyasından değiştirebilirsin.  
Ayrıca kullanıcının dizinde değişiklik yapabilmesi için o dizine **chown** ile kullanıcı olarak atanmalı.


Girişini engellemk istediğin kullanıcının adını buraya yaz.
```sh
nano /etc/ftpusers

```

##### 5. 4} Vsftp servisini yeniden başlat.
```sh
systemctl restart vsftpd

```





### - Vsftp için kullanıcı oluşturmak

###### 5.5.1} Shell dosyasını aç ve içerisine bir adet false ekle.
```sh
# shells dosyasını düzenlemek için aç
nano /etc/shells

# En alt satıra ekle.
/bin/false
```

###### 5.5.2} Sadece kendi home dizininie ulaşmasını istediğin kullanıcı için.
```sh
adduser {username} --shell /bin/false/
```

###### 2} Kendi belirlediğin internet yayın klasörüne ulaşması gereken bir kullanıcı oluşturmak için.

**www-data grubuna dahil olan bir kullanıcı ve --home ile belirtilen dizini oluşturur.**
```sh
adduser {username} --ingroup www-data --home /ftp/sonrasi/ulasacagi/dizin
```

**www-data grubuna dahil olan bir kullanıcı oluşturur ama belirtilen dizini oluşturmaz. Orada o dizin zaten açılmış olmalı.**
```sh
adduser {username} --ingroup www-data --home /ftp/sonrasi/ulasacagi/dizin --no-create-home
```
