# SMTP İLE EPOSTA GÖNDERMEK


## İLK ÖNCE IMPORT İŞLEMLERİ
```python
import smtplib
from email.mime.multipart import MIMEMultipart # Mesaj gövedesi yapı
from email.mime.text import MIMEText # Mailde ne yazacak
```

## MAİL GÖVDESİ OLUŞTURMAK 
```python
mesaj = MIMEMultipart()
mesaj["From"] = "gönderen@maildomain.ext"
mesaj["To"] = "alici@maildomain.ext"
mesaj["Subject"] = "Mail Başlığı"
```

## MAİL İÇERİĞİ OLUŞTURMAK
```python
mail_content_str = """Mailin içinde yazacak olan kodlar"""
mail_content = MIMEText( mail_icerigi, "plain" ) #plain text anlamına gelir, Diğer: "html"
mesaj.attach( mail_content )
```

## SUNUCUYA BAĞLANMAK
```python
server = smtplib.SMTP( "SUNUCU", PORT )
server.ehlo()
server.starttls()

server.login( "username", "password" )
```

## MAİLİ GÖNDERMEK
> server.sendmail( mesaj["From"], mesaj["To"], mesaj.as_string() )


## SUNUCUYU KAPATMAK
> server.close()


## EMAİLE EK EKLEMEK
```python
from email.MIMEImage import MIMEImage

mesaj.attach(MIMEImage(file("google.jpg").read()
```

## MAİL GÖNDERME ÖRNEĞİ VE HATA ALMAK
```python
import smtplib
from email.mime.multipart import MIMEMultipart # Mesaj gövedesi yapı
from email.mime.text import MIMEText # Mailde ne yazacak
import sys

mesaj = MIMEMultipart()
mesaj["From"] = "gönderen@maildomain.ext"
mesaj["To"] = "alici@maildomain.ext"
mesaj["Subject"] = "Mail Başlığı"

mail_content_str = """Mailin içinde yazacak olan kodlar"""
mail_content = MIMEText( mail_icerigi, "plain" ) #plain text anlamına gelir, Diğer: "html"
mesaj.attach( mail_content )

try:
	server = smtplib.SMTP( "SUNUCU", PORT )
	server.ehlo()
	server.starttls()
	server.login( "username", "password" )
	server.sendmail( mesaj["From"], mesaj["To"], mesaj.as_string() )
except:
	sys.stderror.write( "Hata mesajı" )
	sys.stderror.flush()

```

## EMAİL GÖNDERME BASİT KODLAR
```python
import smtplib
mail = smtplib.SMTP("SUNUCU", PORT)
mail.starttls()
mail.login("username", "password")
mail.sendmail("gönderen", "alıcı", "mail içeriği")
mail.close()
```


## HTML İÇERİKLİ MAİL GÖNDERMEK
```python
import smtplib
import email.message
server = smtplib.SMTP('smtp.gmail.com:587')

email_content = """<html>...</html>"""

msg = email.message.Message()
msg['Subject'] = 'Tutsplus Newsletter'
msg['From'] = 'youraddress'
msg['To'] = 'to_address'

msg.add_header('Content-Type', 'text/html')
msg.set_payload(email_content)
 
s = smtplib.SMTP('smtp.gmail.com: 587')
s.starttls()
 
s.login("username", "password")
 
s.sendmail(msg['From'], [msg['To']], msg.as_string())
```