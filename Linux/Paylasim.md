## Windows 10 da paylaşılan klasörü linux'da görmek.

- Windows paylaşım ayarlarını aç
- Linux ile Windows aynı ağda bulunmalı
- Windowsda bir klasörü paylaşıma aç
- Linuxta `apt-get install cifs-utils` ile gerekli indirmeyi yap.
- Aşağıdaki komut bağlantıyı oluşturur.

```
	sudo mkdir /home/username/yeni-klasor

	sudo mount -t cifs -o username=WINDOWSUSERNAME,password=WINDOWSPASSWORD,uid=$(id -u),gid=$(id -g),forceuid,forcegid, //windows.ip.adresi/paylasilan-klasor /home/username/yeni-klasor
```

## Kalıcı olarak linux her açıldığında mountun yapılması.
- Yukarıda belirtilen mount işlemleri için geçerli  olan her şey geçerlidir. (Sadece mount komutunu çalıştırma)
- **/etc/fstab** dosyasına yeni bir satır olarak aşağıdaki kodu ekle.
- **/etc/logininfo_for_mount** boş bir dosya oluştur ve içine windows kullanıcı adı ve şifresini gir.
- `mount -a` komutu ile bilgisayarı kapatıp açmadan bir test yap yoksa sistem bozulabilir.




**/etc/logininfo_for_mount**
```
username=windows kullanıcı adı
password=wwindows şifresi
```


**/etc/fstab**
```
//windows.ip/klasör_adı /linux/yolu/klasör_adı cifs vers=3.0,credentials=/etc/logininfo_for_mount,iocharset=utf8,file_mode=0777,dir_mode=0777,uid=www-data,gid=www-data,nofail 0 0
```
