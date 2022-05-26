## Windows 10 da paylaşılan klasörü linux'da görmek.

```
	

	sudo mount -t cifs -o username=${USER},password=${PASSWORD},uid=$(id -u),gid=$(id -g),forceuid,forcegid, //windows.ip.adresi/paylasilan-klasor /home/username/yeni-klasor
```
 