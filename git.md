# • PROJE OLUSTURMAK veya INDIRMEK


## Bulunulan klasörde yeni bir git projesi olusturmak
> git init

## Uzak sunucudan bir proje indirmek
> git clone proje_url

# • PROJEYI GONDERMEK

## proje dosyalarinin durumunu görüntülemek
> git status

## commit etmek üzere belirli dosyalari siraya almak
> git add filename.ext, file2.ext, ....

##  Bulunulan dizindeki tüm dosyalari siraya almak
> git add .

## commit etmek (projenin o anki durumunu kayit etmek)
> git commit -m "Bir mesaj"

## projeyi uzak sunucuya upload etmek
> git push -u origin branchname

ana branch isimleri genelde master oluyor.
> git push origin master

# • FAYDALI ISLEMLER

## kayit edilmis tüm commitleri görüntülemek
> git log

## commitler arasindaki farki görmek 
> git diff eski-bir-commit-id

## Son commit islemindeki projeye dönmek
> git checkout -- filename

## daha eski bir commite geri dönmek
> git checkout eski_bir_cimmit_ic

## reset
> git reset --hard LOGLARDAKİCOMMİTKODU

# • DALLAR İLE ÇALIŞMAK
Dallar projeniz için bir kaç farklı bölüm oluşturup üzerinde çalışmanızı sağlar.
Örneğin projenin ilk halini bir dalda bırakıp diğer çalışmaları yeni bir dalda devam edebilirsin

### Olusturulmus tüm dal isimlerini görmek
> git branch

### YENİ BİR DAL OLUŞTURMAK
> git branch dalismi

### AKTİF ÇALIŞILAN DALI DEĞİŞTİRMEK
> git checkout branchname

## Dala commit edilmis projeyi göndermek
> git push origin branchname

### DİĞER DALI MASTER DALI İLE BİRLEŞTİRMEK
Öncelikle master dalına geçiş yap.
> git merge dalismi

### DAL SİLMEK
> git branch -D dalismi

# • UZAK SUNUCUYA YÜKLEME İŞLEMLERİ
## GİT PROJESİNE UZAK SUNUCU LİNKİ EKLEME
> git remote add origin https://....git

## DOSYALARI UZAKTAKİ SUNUCUYA YOLLAMAK
> git push origin master

## UZAK SUNUCUYA GÖNDERİLMESİ İSTENMEYEN DOSYALAR
`.gitignore ` adında bir dosya oluştur ve içine upload etmek istemediğiniz dosya ve klasörlerin isimlerini yazın
```
file.ext
/folder
```


