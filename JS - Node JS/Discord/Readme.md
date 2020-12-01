- https://discord.com/developers/applications uygulama oluştur.
- Sonra solda BOT yerine gir yeni bot oluşturi .
- https://discordapi.com/permissions.html adresine gidip gerekli yetkiyi seç. (Administratörü seç rahatla)
- Client ID yerine **General Information** Sayfasındaki Cliend ID Yİ EKLE.

> npm init --yes
> npm install
> npm i discord.js --save

### Giriş kodları
```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// Tokeni Discord Developer Bot sayfasından al.
client.login('token');
```
