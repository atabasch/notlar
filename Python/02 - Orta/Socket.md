# SOKETLER
Soketler server ve client işlemleri gerçekleştirmeye yarar. 
Ve bir soket sunucu ip adresi ve port numarasının birleşmiş haline denk gelmektedir.
FTP ve SSH birer socket programlamadırlar.
Socket programlama ile yapılabilecekler anlık mesajlaşma, elektronik cihazlarla bilgisayardan veri aktarımı vs.

## SOCKET İMPORT ETMEK
> import socket

## BASİT SOKET İŞLEMLERİ
- Socketi yaratmak (create)
- Sockete bağlanmak (connecting)
- Socketi bir adrese bağlamak (binding to an address)
- Bağlantıları dinlemek ve kabul etmek (listening and accepting connections)
- Veri göndermek/veri almak (transffering and recieveing  data)

## BİR DOMAİN ADRESİNİN IP ADRESİNİ ALMAK
> socket.gethostbyname("domain.ext")

## SOCKET YARATMA İŞLEMLERİ
> socket.socket( FAMILY, TYPE )

FAMILY: (Socket hangi alan için oluşturuluyor)
	AF_UNIX: Unix Alanı İçin
	AF_INET: İnternet Alanı İçin IPv4
	AF_INET6: İnternet Alanı İçin IPv6

TYPE: (Kullanılıcak protokol tipi)
	SOCK_STREAM: TCP için kullanılır
	SOCK_DGRAM:  UDP için kullanılır
	SOCK_RAW:
	SOCK_SEQPACKET:
	SOCK_RDM:

> s = socket.socket( socket.AF_INET, socket.SOCK_STREAM)

## SOCKETE BAĞLANMAK
Client tarafında bilgi alışverişi için connect ile sunucuya bağlanması gereklidir.
> s.connect( (IP, PORT) ) // Portlar 1025 den başlamalı

Sunucu tarafında işlemler için üstteki gibi bir bağlantı gereklidir ama bu sefer bind ile
> s.bind( (IP, POST) )

## SOCKETİN BAĞLANTI DİNLEMESİ - 
X en az 1 olmalı kaç bağlantı dinleyeceğini belirliyoruz.
> s.listen(X)

## BAĞLANTIYI KABUL ETMEK
Bağlantıları kabul etme işlemidir ve geriye 2 adet değer döndürür.
1. istemciyi temsil eden bir socket nesnesi
2. istemsinin adresi

> baglaniti, adres =  s.accept()

**baglanti:**
<socket.socket fd=564, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 6161), raddr=('127.0.0.1', 28322)>

**adres**
(IP, PORT)

## VERİ GÖNDERMEK VE VERİ ALMAK
Her 2 taraftada kullanılan bilen 2 adet komut vardır ve bunları veri alışverişi için kullanılır

**Veri göndermek**
> s.send( "Mesaj".encode() )

> s.send( "Mesaj".encode("utf-8") )

UDP İÇİN

> s.sendto(data.encode('utf-8'), addr)

**Veri almak**
> s.recv(buffer)

> s.recv(buffer).decode()

> s.recv(buffer).decode('utf-8')

UDP İÇİN

> data, addr = s.recvfrom(buffer)

buffeer parametresi alınacak verinin byte değeridir. örneğin: 1024, 2048, 10204, ...

**NOT:** Sunucu tarafındaki işlemlerde `s.accept()` ile dönen 1. değer olan bağlantı nesnesi ile gönderme ve alma yapacağız.

## BAĞLANTIYI DURDURMAK
> baglaniti.close()
> s.close()



## BAZI KULLANILAN PORTLAR
| **PORT** | **AÇIKLAMA** |
| --- | --- |
| 21   | FTP File Transfe Protokol |
| 22   | SSH Secure Shell |
| 23   | Telnet |
| 25   | SMTP Simple Mail Transfer Protocol |
| 53   | DNS Domain Name System |
| 80   | HTTP HyperText Transfer Protocol |
| 110  | Post Office Protocol |
| 119  | NNTP Usenet news |
| 143  | IMAP Internet Message Access Protocol |
| 443  | HTTPS HTTP Secure |