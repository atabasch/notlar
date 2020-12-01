# PYTHON İLE SOCKET PROGRAMLAMA
> import socket

**TCP** Yavaş ve veri kaybı olmadan veri iletimi sağlar.
**UDP** Hızlı ancak TCP nin yaptığı bir kaç güvenlik ve sorgu işlemini atlayarak veri kaybı yaşatabilir.

### SOCKET_TYPE
**socket.SOCK_STREAM** TCP için kullanılacak olan parametredir.
**socket.SOCK_DGRAM** UDP için kullanılacak olan parametredir.

### SOCKET_FAMILY
**socket.AF_INET**
**socket.PF_INET**
**socket.PF_UNIX**
**socket.PX_X25**

## SOCKET OLUŞTURMAK
> s = socket.socket( socket.SOCKET_FAMILY, socket.SOCKET_TYPE, [protocol=0]  )

> s = socket.socket()


### SUNUCU KODLARI
> s = socket.socket()

Bilgisayar adını port ile birleştirerek sokete bağlamak
Döngü dışında yazılır
> s.bind( (hostname, port) )

TCP listeneri ayarlar ve dinlemeye başlar
**x** Dinlenecek olan bağlantı sayısı en az 1 olmalı
Döngü dışında yazılır
> s.listen( x )

Gelen bağlantıyı kabul eder
Sürkeli dinleme yapılacaksa döngü içinde yazılır.
> conn, addr = s.accept()

**conn**: Gelen veriyi taşır
**conn.recv(boyut).decode()** Gelen mesajı string olarak alır.
**addr** (IP, PORT) şeklinde client adresini alır.



### İSTEMCİ KODLARI
> s = socket.socket()

Sunucuya bağlanmayı sağlar.
Döngü dışında yazılır.
> s.connect( (host, port) )

### DİĞER KODLAR
Hostname i almak için
> host = socket.gethostname()

Soketi kapatmak
> s.close()

TCP mesaj gönderme işlemini
> s.send( mesaj )


Sunucuya TCP mesaj gönderir
> s.sendall( mesaj )

TCP gelen mesaji alma işlemi
> mesaj, adres = s.recv( buffer_size(ör:1024) )

UDP mesaj gönderme işlemi
> s.sendto( mesaj )

UDP mesaj alma işlemi
> mesaj = s.recvfrom( buffer_size(ör:1024) )



## HATALAR
- **OSError: [WinError 10057] Yuva bağlı olmadığından ve (bir veri birimi yuvasında bir sento çağrısı kullanırken) adres sağlanmadığından bir veri gönderme veya alma isteğine izin verilmedi** : Sunucu tarafında **send** kullanılıyorsa bunu **server** değişkeni ile değil **recv** den gelen **conn** değişkeni ile yap.





## ÖRNEK KODLAMALAR

### Sunucu ve İstemci arası sırayla mesajlaşma
#### server.py
```
import socket
closeKeys  = ('bye', 'close', 'quit', 'q', 'kapat', 'exit')
host, port = socket.gethostname(), 61000
server = socket.socket()
server.bind( (host, port) )
server.listen(5)

conn, addr = server.accept()
while True:
    gelenMesaj = conn.recv(1024*5).decode()
    if str(gelenMesaj.lower().strip()) in closeKeys:
        server.close()
        False
        break
    else:
        print( "CLIENT: {}".format(gelenMesaj) )
        gidecekMesaj = input("-> ")
        conn.send( gidecekMesaj.encode() )

server.close()

```

#### client.py
```
import socket, threading

closeKeys  = ('bye', 'close', 'quit', 'q', 'kapat', 'exit')
host, port = socket.gethostname(), 61000
server = socket.socket()
server.connect( (host, port) )

while True:
    gidecekMesaj = input( '-> ' )
    if gidecekMesaj.lower() in closeKeys:
        break
    else:
        server.send( gidecekMesaj.encode() )
        gelenMesaj = server.recv(1024*5).decode()
        print('SUNUCU > {}'.format(gelenMesaj))

server.close()
```











#
