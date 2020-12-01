# SYS MODÜLÜ

## Modulü dahil etmek.
> import sys

## Python sürümünü almak
> sys.version

veya

> sys.version_info 

## Python yolunu verir.
> sys.executable

## Pythonun kurulu olduğu dizini almak.
> sys.prefix

## Programı kapatma işlemleri
> sys.exit()

## Program için hata mesajları kullanmak

### Kırmızı hata mesajı yazmak için
> sys.stderr.write("Hata mesajı")

> sys.stderr.flush()

### Normal bir mesaj yazmak için
> sys.stdout.write("Hata mesajı")

## "dosya.py par1 par2 ..."" şeklinde parametreli dosyalardaki parametreleri liste olarak almak.
> sys.argv

## Windows işletim sistemi hakkında bilgi almak.
> sys.getwindowsversion()

## Python klasörlerinin listesini almak.
> sys.path

## İşletim sistemini öğrenmek
> sys.platform

## ">>>" karakterini tutar.
> sys.ps1

## "..." karakterini tutar.
> sys.ps2

## Kullanıcıdan girdi almak
> input()

veya

> sys.stdin.read()
> sys.stdin.readline()
> sys.stdin.readlines()

