Bash script linux terminal ekranında çalıştırılan betik dilidir.

## DOSYA SİSTEMİ
Linuxda herşey bir dosyadır.

|  |  |
|---|---|
| /bin | Sisteme ait komutları içeren dosyalardır. (cat, chmod, ....) |
| /boot | İşletim sistemi başlatılırken en gerekli dosyalar |
| /etc | Sistem konfigirasyonlarının olduğu dizin |
| /lib |  |
| /home | Kullanıcıların dosyalarının olduğu konum (Windows: c:/users) |
| /root | /home dışında root kullanıcısının ev dizini. |
| /dev | Bilgisayar aygıtlarının olduğu yer. |
| /media | Harici depolama aygıtları gibi aygıtların bulunduğu yer. |
|  |  |


### Stdout - Stderr
Araştır bakalım


# BASH - SHELL KODLARI
- **filename.sh** bir shell dosyasıdır.
- `chmod +x filename.sh` ile çalıştırma izni ver.


**filename.sh**
```shell
#!/bin/bash

echo "Merhaba Dünya!.."

# ./filename.sh par1 par2 ... olarak gönderilen parametreleri alır.
echo $1 $2 ...

# $? ile bir önceki çalışan fonksiyonun return değeri alınır.
birFonksiyon
echo $?

```

##### Değişkenlerle ilgili.
./file_name.sh par1 par2 par3 olarak parametre göndermek için maksimum $9 a kadar parametre gönderilir.
> ./file.sh par1 par2 par3 ..... par9

**$0** dosyanın ismidir.  
**$$** => Process id
**$USER** Programın çalıştığı kullanıcı.  
**$RANDOM** Rastgele sayı  
**$HOSTNAME**

**Kendi değişkenini belirlemek**  
```shell
sayi1=11
sayi2=22
isim="Furkan" // Boşluk bırakılmaz

echo $sayi1
echo $sayi2
echo $isim
```

#### Kullanıcıdan veri almak.
```shell
read -p "Kullanıcı adı: " username
read -sp "Şifre: " password

echo $username
echo $password
```

## • Aritmetik ifadeler.
Matematiksel işlemler yaparken **let** kodu kullanılır. Matematiksel işlem çift tırnak içerisindede yazılabilir. Çift tırnak içinde yazılmayan ifadeler boşluksuz yazılmak zorunda.

```shell
let sayi1=2+2

let "sayi2 = 10 - 5"

let sayi1++

let --sayi2

echo  "Toplanan: " $sayi1  "Çıkarılan: " $sayi2
```



---
# ► Koşullar

### 1) [IF, ELIF, THEN, FI]
```shell
if ["a" = "b"]
then
    echo "a ve b eşittir."
elif [["a" -lt "b"]]; # çift köşeli parantez ve noktalı virgülde kullanılabilir.
then
    echo "a küçüktür b den"
elif ["a" -gt "b"]
then
    echo "a büyüktür b den"
else
    echo "Bilmiyorum"
fi

#-----

if [[ $1 -eq $2 ]] && [[ $3 -lt $4 ]];
then
    echo "1 2 ye eşit ve 3 4 den küçüktür."
fi

#---- then sola yazılabilir
if [[ $1 -eq $2 ]]; then
    #yapılacak işlem
fi
```

**Koşullar**

| Koşul  | Karşılıkları  |
|---|---|
| ! | değil |
| = | == |
| -eq | == |
| -ne | != |
| -lt | < |
| -le | <= |
| -gt | > |
| -ge | >= |
| **Ara**  |   |
| -a | ve |
| -o | veya |
| && | ve |
| \|\| | veya |
| **Diziler** |   |
| -z | Boş dizi |
| -n | Tanımlı dizi |
| = | Eşit diziler |
| != | Eşit olmayan diziler |
| **Dosya**   |   |
| -f | Dosya var |
| -s | Dosya boş değil |
| -r | Okunabilir |
| -w | Yazılabilir |
| -x | Çalıştırılabilir |
| -h | Sembolik bağlantı |
| -c | Karakter aygıt |
| -b | Blok aygıt |
|  |  |


### 2) Case
```shell

case $1 in
    baslat)
        echo "Başlatılıyor"
        ;;
    bitir)
        echo "bitiriliyor"
        ;;
    *)
        echo "diğer işlemler yapılıyor"
        ;;
esac
```

---
# ► DÖNGÜLER

**break** döngüden çıkmak için
**continue** döngü işlemini atlayıp bir sonraya geçmek için

#### while
```shell
counter=1
while [[counter -le 10]]; do
    echo $counter
    ((counter++))
done
```

#### for (c type)
```shell
for (( i=1; i <= 10; i++ )); do
    #işlemler
done
```

#### for
```shell
for l in $( ls ); do
    #işlemler
done
```

#### for with ranges
```shell
for i in {1..10}; do # 1 i de 10 u da yazar.
    #işlemler
done
```

#### until
```shell
counter=1
until [[counter -gt 10]]; do
    # counter 10 dan büyükse çalışma.
    # counter 10 dan büyük olmadığı sürece çalış.
    ((counter++))
done
```

#### select
```shell
kelimeler="boşlukarla ayrılmış olan kelimeleri gezer"
#PS3 Prompt String anlamına gelir. "" dışında $'\n' yazarak boşluk atabilirsin.
PS3="Buraya yazılan yazı seçim için kullanılacak yazı."
select kelime in $kelimeler; do
    #Seçimden sonra kullanılacak kodlar.
done
```


# ► FONKSİYONLAR

### 1) Fonksiyon Tanımlama

##### • En Sade Halde
```shell
# "function" yazmak zorunlu değil.
function funcName{
    # yapılacak işlemler

    # Bu değişken fonksiyon içinde kalır.
    local degisken1="değer 1"

    # Bu değişken fonksiyon dışına çıkar.
    degisken2="değer 2"

    # Değer döndürmek istenirse.
    return val
}
# Kullanımı
funcName

# $? ile bir önceki satırlarda çalıştırılan fonksiyonun return değeri alınır.
funcNameReturnValue=$?
echo $?
```

##### • Belirsiz Parametreli
```shell
function funcName{
    $1
    $2
    return val # Değer döndürmek istenirse.
}

# Kullanımı
funcName "par1" "par2" ...

# $? ile bir önceki satırlarda çalıştırılan fonksiyonun return değeri alınır.
echo $?
funcNameReturnValue=$?
```

##### • Bir fonskyionun üstüne yazmak
```shell
ls(){
    command ls -la
}

# ls zaten bashin var olan bir komutu.
# Ancak bu program içinde artık ls yazılınca ls -la çalışacak.
ls
```



# ► Dosyayı çalıştırmak.
Başına ./ koymadan çalıştırmaya çalıştırırsak bash bunu $PATH değişkenindeki yollarda arayacaktır. Olmadığı için çalışmaz. ./ ile o anki dizini belirtiyoruz.
> ./filename.sh

yada
> bash filename.sh

parametreleri peş peşe yazılır.
> bash filename.sh Furkan Atabaş

###
