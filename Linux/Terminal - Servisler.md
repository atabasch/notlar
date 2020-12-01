Linux ile berabere gelen yada bizim sonradan kurduğumuz belli servisler vardır.

Örnek Servisler: samba (dosya paylaşım için), mysql, apache2, nginx

Servis betiklerinin saklandığı dosyalar.
**/etc/init.d**

**Script** Programlama dilleri kullanılarak meydana getirilmiş kod parçacıkları.  
**Betik**  Her türlü yazılı şey.

---
#### Servisi başlatmak
> sudo /etc/init.d/servicename start

> sudo service servicename start

> sudo systemctl start servicename

> sudo systemctl start servicename.service

enable ile açılan servis sistem yeniden başladıktan sonra da aktif olur.
> sudo systemctl enable  servicename

#### Servisi durdurmak
> sudo /etc/init.d/servicename stop

> sudo service servicename stop

> sudo systemctl start servicename


disable edilen servis sistem yeniden başladıktan sonra da kapalı olur.
> sudo systemctl disable servicename

#### Servisi yeniden başlatmak
> sudo /etc/init.d/servicename restart

> sudo service servicename restart

> sudo systemctl restart  servicename

#### Servisin çalışma durumunu kontrol etmek
> sudo /etc/init.d/servicename status

> sudo service servicename status

> sudo systemctl status servicename



---
# 2 CRON Servisi
Cron belirli zamanlarda tekrar edilecek olan işlemleri yapan bir servistir.

### 2.1) CRON a zamanlanmış göver eklemek.
> crontab -e

Bir metin belgesi açılır ve altına görevi eklemek gerekir.  
Aşağıdaki sırayla eklenir. Zaten açılacak dosyanın en altında bir yorum satırı olarak verilmiştir.

**pattern:** m   h   dom     mon     dow     command

|   |   |
|---|---|
| m | 0-59 arasında bir sayı girilir.<br/>  İşin seçilen saat başından kaç dk sonra çalışacağını belirdir.<br/> **(\* Bu işi her dakika başı yapar.)** |
| h | 0-23 arasında.<br/> İşin hangi saatte yapılacağnı belirtir.<br/> **(\* Bu işi her saat başı yapar.)**   |
| dom | [1,3,5,23] yada * ile her gün.<br/> Ayın hangi günlerinde bu işlem yapılacak. |
| mon | [6,7,8] veya * ile her ay.<br/> Hangi aylarda iş yapacak |
| dow | [1,2,7] veya * ile her gün.<br/> Haftanın hangi günleri.<br/> (1.pazartesi 7.pazar)|
| command | Çalışmasını istediğin komut.  |

Örnek komutlar  
Her gün saat 0 da home dizininde adı boş_dosya olan bir dosya oluştursun.
> 0 0 * * * touch /home/boş_dosya

### 2.2) CRON zamanlanmış görevleri listelemek.
> crontab -l

### 2.3) CRON zamanlanmış görevleri silmek.
> crontab -r

# 3) SSH
SSH (Security Shell) 2 network cihazı arasında güvenlik kanalıyla veri transferine izin veren network protokolüdür.
Şifreleme ve doğrulama algoritmaları kullanır.  
Local bilgisayarda Remote bilgisayara dosya kopyalanabilir.  
Otomatik olarak uzaktan server kontrolü sağlanabilir.

### 3.1) SSH ile uzak bilgisayara bağlanmak
Ssh tıpkı telnet gibi ancak güvenilir bir yoldur. Terminalden ftp kullanır gibi kullanılır. ssh anahtar kelimesi ile karşı tarafa login olmak için istek yapılır ve daha sonra girilen kullanıcı adı ve şifre ile bağlanılır. Bu işlemden sonra başarılı olursak artık yönetime geçebiliriz.
> ssh -l username@remote_ip

### 3.2) DOSYA KOPYALAMAK
ssh ile dosya kopyalanırken kayıplar olabilir. Daha yavaş ancak kesin olarak kopyalama işlemi için en güvenilir göntem `rsync -av username@remote_ip:filename /target/path`
##### 3.2.1) Dosya kopyalamak [Remote ► Local]
> scp username@hostname:filename target_path

##### 3.2.2) Dosya kopyalamak [Local ► Remote ]
> scp filename username@hostname:target_path




.
