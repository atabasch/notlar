# Kullanıcı İşlemleri.

Aktif kullanılan kullanıcının. User ID - Group ID ve BAğlı gruplarını görmek
> id



## Kullanıcıya Root Yetkisi Vermek
Süper User yetkisi al
> sudo -

Visuda editörü ile sudoers dosyasını düzenle
> visudo -f /etc/sudoers

Ekle
> username  ALL=(ALL:ALL) ALL

**CTRL + X** ile çıkış yap değişiklikleri kaydet.

Süper userdan çıkış yap
> logout

## Yeni Kullanıcı Oluşturmak
Yeni bir kullanıcı oluştur.
> adduser newUserName

Yeni bir kullanıcı oluşturulur ancak kullanıcının yetkileri kısıtlıdır.
Eğer kullanıcıya **sudo** komutu ile bilgisayardaki işlemlere erişim vermek istenirse kullanıcıyı **sudoers** dosyasına eklemke gerekir.
nano ile sudoers dosyası açılır ve root kullanıcısının hemen altına aşağıdaki gibi eklenir.
> nano /etc/sudoers
> newUserName  ALL=(ALL:ALL) ALL



## Bir kullanıcıyı bir gruba dahil etmek
> usermod -a -G groupname username

## Kullanıcı hesabını silmek
> deluser username

## Kullanıcı şifresini değiştirmek
> sudo passwd username

## KUllanıcıyı kilitlemek (root olmayan kullanıcılar o hesaba geçiş yapamaz.)
> usermod -L username

#### Terminal üzerinden başka bir kullanıcı hesabına geçiş yaparak o hesapla işlem yapmak
> su -l username

Aktif kullanıcının hangi gruplara dahil olduğunu öğrenmek.
> groups

Aktif kullanıcıdan çıkış yapmak
> logout

#### Kullanıcı listelerini görmek ve dosya konumlarını öğrenmek.
> cat /etc/passwd

username:x:group_id:user_id:username,bilgi,bilgi,bilgi:user_home_path:user_shell_path


#### Kullanıcıların şifrelerinin saklandığı dosya (Şifreler hash li olarak şifrelenmmiş.)
> cat /etc/shadow

username:$x$**hash_olarak_şifrelenmişş_parola**
$ işareti içindeki sayı neyle şifrelendiğini söyler.
1 => MD5
5 => SHA256
6 => SHA512




# GRUPLAR
Gruplar üyeli web sitelerindeki rütbeler şeklindedir. Bir gruba verilen izinler o gruba dahil olan tüm kullanıcılara etki eder.

#### Grupların bulunduğu dosya
> cat /etc/group

#### Gruba Kullanıcı EKlemek
> usermod -a -G groupname username

#### kullanıcının hangi gruplara dahil olduğunu öğrenmek.
> groups

#
