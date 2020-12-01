# SUBPROCESS

## Terminal komutlarını çalıştırmak için kullanılan bir modül.
> import subprocess


## Terminalde bir kodu çalıştırmak
Call fonksiyonu içerisine bir dizi elemanı ile sırasıyla terminal komutunu tek tek yazmak gerekir.

> subprocess.call([ "ifconfig", "eth0", "down" ]); // ifconfig eth0 down


## Terminalde çalışan komutun sonucunu bir değişkene atamak.
> consoleResult = subprocess.check_output(["ifconfig", "adaptor"]) // sonucu değişkene atar
