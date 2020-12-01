#GİT KULLANIMI

## GİT PROJESİ OLUŞTURMAK
> git init

## REPO DURUMUNU ÖĞRENMEK
> git status

## REPOYA GÖNDERİLMEK ÜZERE SIRAYA ALMAK
### BULUNULAN DİZİNDEKİ TÜM DOSYA VE KLASÖRLERİ
> git add .

### SADECE TEK BİR DOSYAYI
> git add filename.ext

## COMMİT İŞLEMLERİNİ TAKİP ETMEK
> git log

## COMMİT İŞLEMİ İLE SIRAYA ALINAN DOSYALARI REPOYA GÖNDERMEK
> git commit -m "Bir mesaj"

## ESKİ BİR COMMİTE DÖNMEK
> git reset --hard LOGLARDAKİCOMMİTKODU

## DALLAR İLE ÇALIŞMAK
Dallar projeniz için bir kaç farklı bölüm oluşturup üzerinde çalışmanızı sağlar.
Örneğin projenin ilk halini bir dalda bırakıp diğer çalışmaları yeni bir dalda devam edebilirsin

### DALLAR LİSTESNİNE GÖRMEK
> git branch

### YENİ BİR DAL OLUŞTURMAK
> git branch dalismi

### AKTİF ÇALIŞILAN DALI DEĞİŞTİRMEK
> git checkout dalismi

### DİĞER DALI MASTER DALI İLE BİRLEŞTİRMEK
Öncelikle master dalına geçiş yap.
> git merge dalismi

### DAL SİLMEK
> git branch -D dalismi

## UZAK SUNUCUYA YÜKLEME İŞLEMLERİ
### GİT PROJESİNE UZAK SUNUCU LİNKİ EKLEME
> git remote add origin https://....git

### DOSYALARI UZAKTAKİ SUNUCUYA YOLLAMAK
> git push origin master

### UZAK SUNUCUYA GÖNDERİLMESİ İSTENMEYEN DOSYALAR
`.gitignore ` adında bir dosya oluştur ve içine upload etmek istemediğiniz dosya ve klasörlerin isimlerini yazın
```
file.ext
/folder
```

### BAŞKA BRANCH İLE ÇALIŞMAK
> git checkout branchname

> git push origin branchname
