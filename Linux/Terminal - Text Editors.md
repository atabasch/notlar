# TERMİNAL TEXT EDİTÖRLERİ

### NANO (BASİT)
Metin editörü tarzında basit.

> nano filename


### VİM (GELİŞMİŞ)
Daha gelişmiş.

Vim editörünü başlatmak.
> vim

Bir metin dosyasını vim editörü ile başlatmak
> vim filename

Önce file1 i açar vim içinde :n komutu çalışında file2 ve file3 e geçer.
> vim file1 file2 file3

Vim açıldığında **i** harfine basarsak sol altta da görünen **İNSERT** moduna geçer. Bu mod editörün kullanılabileceği anlamına gelen moddur.

**İNSERT** modu açıkken **esc** ye basarak komut moduna geçilebilir böylece terminalin en altında komular yazılmaya başlanır.
KOmutlar:
|   |   |   |
|---|---|---|
| :q   | quit  | çalışma kaydedilmez, kaydedilmeyeceğine dair uyarı verir. |
| :q!  | quit  | Çalışmayı kaydetmeden direk çıkar. |
| :w   | write | (içeriği dosyaya yazar. |
| :wq  | write quit |(içeriği dosyaya yazar ve çıkış yapar. |
| :wq filename | write quit |(içeriği dosyaya yazar, dosyanın ismini filename yapar ve çıkar. |
| :n | next  | Çoklu dosyalar açılırsa birsonraki dosyaya geçer |



### Vİ TEXT EDİTÖRÜ
> vi new_file.txt

**i** ye basınca **INSERT** moduna geçer.
**esc** ile **COMMAND** moda geçer ve komutları yazılabilir.

|   |   |
|---|---|
| :q  | Çıkış yapar  |
| :q! | Kaydetmeden çıkış yapar  |
| :w  | Dosyayı kaydeder.  |
| :wq | Dosyayı kaydeder ve çıkış yapar.  |
| x   | İmleç altındaki karakteri siler.   |
| X   | İmlecin üstündeki karakterden bir öncekini siler.  |
| dd  | bütün satırı siler.  |
| d^  | Baştan imlece kadar olan yeri sileri.  |
| d$  | İmleçten satır sonuna kadar olan yeri siler.  |
| yy  | Satırı kopyalar  |
| p   | kopyalanmış metni imleçten sonraya yapıştırır.  |
| P   | Kopyalanmış metni imlecin öncesine yapıştırır.  |
| yw  | İmleç öncesinden yapıştırma yapar.|
