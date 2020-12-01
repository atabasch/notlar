
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
anonymous_enable=NO

local_enable=YES    # Sv kullanıcıları ftp giriş iyapabilir.
write_enable=YES    #

# Login hesap kendi ev dizininden üst dizine çıkamasın.
chroot_local_user=YES

# İstediğimiz kullanıcıların üst dizine çıkmasınıa izin vermek için.
chroot_list_enable=YES
chroot_list_file=..... # dizini sen oluştur.
```

##### 5. 3} Ftp Kullanıcıların Ekleneceği Dosya
```sh
nano /etc/ftpusers

```

##### 5. 4} Vsftp servisini yeniden başlat.
```sh
systemctl restart vsftpd

```





### - Vsftp için kullanıcı oluşturmak

###### 1} Shell dosyasını aç ve içerisine bir adet false ekle.
```sh
# shells dosyasını düzenlemek için aç
nano /etc/shells

# En alt satıra ekle.
/bin/false
```

###### 2} Sadece kendi home dizininie ulaşmasını istediğin kullanıcı için.
```sh
adduser {username} --shell /bin/false/
```

###### 2} Kendi belirlediğin internet yayın klasörüne ulaşması gereken bir kullanıcı oluşturmak için.
```sh
adduser {username} --ingroup www-data --shell /bin/false --home /ftp/sonrasi/ulasacagi/dizin --no-create-home
```
