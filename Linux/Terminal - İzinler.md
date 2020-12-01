# Dosya ve Dizin İzinleri
Dosyaları listelerken -l kodu ile dosya izinleri görüntüleyebiliriz.
KOmutu yazdıktan sonra dosya listesinin en solunda izinler görüntülenir.

    ls -l

| İfade  | açılım  | Açıklama  |
|---|---|---|
| - |         | En solda yazıyorsa bu bir dosyadır.  |
| d | dir     | EN solda varsa bu bi dizindir demek.  |
| - | read    | İzin verilmemiş |
| r | read    | Okuma izni |
| w | write   | Yazma izni |
| x | execute | Çalıştırma izni |


###### ls -l komutunun en sol sütunundaki anlam
-rwxrwxrwx  
drwxrwxrwx  
-rwx--xr-x  
10 haneden oluşan bu alan 1-3-3-3 olarak ayrılır.

-|rwx|rwx|rwx   
d|rwx|rwx|rwx   
type | user permissions | group permissions | other permissions


## Dosya izinlerini değiştirmek
```sh
chmod izinler dosya
```

###### user'a bir dosyayı çalıştırma izni vermek.
```sh
chmod u+x filename
```

###### user'dan bir dosyaya yazma iznini almak
```sh
chmod u-w filename
```

###### user'a 3 izni vermek
```sh
chmod u+rwx filename
```

###### Diğer kullanıcılarn (others) için bir dosyanın iznini değiştirmek
```sh
chmod o+rx filename
```

###### Bulunulan dizin altındaki (bütün, alt dizinler dahil) dizinlere 755 izni ver.
```sh
find . -type d -exec chmod 755 {} \;
```

###### Bulunulan dizin altındaki (bütün, , alt dizinler içindeki dosyalar dahil) dosyalara 755 izni ver.
```sh
find . -type f -exec chmod 644 {} \;
```


## Sayılarla izin vermek.
|  |  |  |
|---|---|---|
| - | 0 | Hiç bir izin vermez. |
| r | 4 | Okuma |
| w | 2 | Yazma |
| x | 1 | Çalıştırma |
| wx | 3 | Yazma + Çalıştırma |
| rw | 6 | Okuma + Yazma |
| rx | 5 | Okuma + Çalıştırma |
| rwx  | 7 | Okuma + Yazma + Çalıştırma |

Sayılarla izin verirken 3 sayı girilecek ve sırasıyla ne için ne izni vereceğimiz yazılır.

USER(rwx) + GROUP(rx) + OTHER(r)
> chmod 754 filename

## Bir Dosyayı **root** dahil hiç bir kullanıcının değiştiremeyeceği şekilde kilitlemek.

change attribute
Bu işlemi sadece root kullanıcısı yapar. Bir dosyayı kilitler veya açar.
Kilitlenmiş dosyayı kilidi açılmadan root dahil hiç kimse değiştiremez.
Bİlgisayar yeniden başladığında içeriği değişen dosyaları bu şekilde koruyabiliriz.


Dosyayı kilitle
> chattr +i filename

Dosya kilidini aç
> chattr -i filename

#### Dizindeki kilitli dosyaları göster
> lsattr

Kilitlenmiş dosyaların solunda i harfi görünür.
