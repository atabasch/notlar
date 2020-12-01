Ücretsiz ssl sertifikası yapmak.

# Certbot'u kur
```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
```

# Ufw (var ise) Nginx full ayarlarını aç
Eğer ufw kullanmıyorsa gerek yok
```sh
sudo ufw status
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'  
sudo ufw status
```

# SSL Sertifikası oluştur
```bash
sudo certbot --nginx -d www.domain.com -d domain.com
// ilk kez kuruyorsan e mail ister
// Agree gelirse sözleşme kabul et anlamında
// Yes No gelirse sana email gönderelim mi anlamında
// No redirect / redirect gelirse "redirect" i seç. http den https e yönlendirir.
```

Bu işlemlerden sonra sertifika tamamlanmış olur.  
Eğer tamamlanmaz www.site.com için A kaydı hatası verirse DNS kayıtlarında A kaydı olarak www olarak da ekleme yap.

# Sertifika otomatik yenileme açmak
Sertifikalar 90 günlük oluyor her 90 günce otomatik yenilensin istiyorsan aşağıdaki kodu yaz.
```sh
sudo certbot renew --dry-run
```
