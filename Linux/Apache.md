


### sub.domain.ext olarak gelen istekleri sub klasörlerden açmak

#### Modülü kur
> sudo a2enmod vhost_alias

#### Kodları /etc/apache2/sites-avaliable/domain.conf klasörüne ekle
```

LoadModule vhost_alias_module modules/mod_vhost_alias.so

<VirtualHost *:80>
	ServerName domain.ext
	ServerAlias www.domain.ext
	DocumentRoot /home/user/www

	<Directory /home/user/www/>
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>

</VirtualHost>


<VirtualHost *:80>
	ServerAlias *.domain.ext
	VirtualDocumentRoot /home/user/www/%1
</VirtualHost>



```
