Flask Python ile hızlı ve basit web siteleri yapmak için kullanılır.
## Basit Başlangıç

Bilgisayardaki kütüphanelerin birbiri ile çakışmamaları için sanal bir çalışma ortamı oluşturup bu sanal ortamı çalıştırıyoruz.  
Böylece açtığımız tüm projeler sadece bu virtualenv içinde çalışacak ve bilgisayardakiler ile karışmayacak.

```bash
pip install virtualenv

virtualenv custom_venv
source custom_venv/bin/active
```

## Kurulum
```bash
pip install flask
```
## 1) Flask Başlangıç Kodları
```Python
from flask import Flask
app = Flask(__name__)

@app.route("/path", methods=["GET"])
def frontpage():
    return "Anasayfa"
```






## 2) Bir html dosyasını çağırmak

Başka bir kod ile aksi belirtilmediği zaman flask varsayılan olarak ana py dosyasının çalıştığı dizinde bulunan **templates** isimli bir klasörde html dosyalarını çağırır.  
Bu işlem içinflask kütüphanesinde bulunan **render_template** fonksiyonu import edilmeli
```python
from flask import Flask, render_template

...

@app.route("/path")
def methodName():
    return render_template("filename.html")
```

Html dosyasına değişkenler render_template fonksiyonuna girilen parametreler ile yollanırlar. Çoklu değişken göndermek için bir sözlük gönderilebilir.
```python

# tek tek veri göndermek
render_template("file.html", username="furkan", email="deneme@atabasch.com")

# çoklu olarak göndermek
datas = {
    username:   "furkan",
    email:      "deneme@atabasch.com",
}
render_template("file.html", **datas)

```





## 3) Gönderilen request isteklerini almak
@app.route decoratöründe methodlar belirtilmediği zaman varsayılan olarak o dekaratör altındaki fonksiyon GET isteklerine cevap verir.   
Eğer POST edilince çalışması gereken bir fonksiyon varsa bunu route a **methods** isminde bir parametreye liste şeklinmde verebiliriz.  
Ancak bu POST dan gelene verileri alabilmek için flask kütüphanesi içinden request fonksiyonu import edilmeli

##### 3.1} route içinde belirtilen parametreleri değişken olarak almak
Get ile bilinen bir parametreyi almak
```python
# Parametreler belirleniren : ile ayırıp ismin soluna veri tipi eklenebilir.
@app.route("/user/<username>/<int:id>")
def methodName(username, id):
     # user.html içerisinde username ve id ismi ile get'ten gelen verileri gönderdim.
    return render_template("user.html", username=username, id=id)
```



##### 3.2} bizim adını belirlemediğimiz ve GET veya POST dan gelen verileri almak
```python
from flask import Flask, request

// /news?lang=tr&page=2
@app.route("/news")
def news():
    lang = request.args["lang"]
    page = request.args.get("page", 1)

# Post edilince çalışıcak kod
@app.route("/user/login", methods=["POST"])
def userLogin():
    if request.method=="POST":
        # request.form liste tipinde bir değer döndüğü için get ile çağırılıp 2. parametreye varsayılan değer girilebilir.

        username = request.form.get("username", false)
        password = request.form.get("password", false)
        email    = request.form["email"]


```






## 4) redirect işlemleri

Sayfa yönlendirme işlemleri için **redirect** ve **url_for** (zorunlu değil) isminde iki method import edilmeli.
```python
from flask import Flask, redirect, url_for
#...

# Direkt adresi yazıp yönlendirme yapılabilir.
redirect("/yol");

# url_for kütüphanesi kullanarak method ismi girilip o methoda yönlendirme yapılabilir.
redirect(url_for("methodName"));

```





## 5) COOKIE - Çerezler ile çalışmak
1 Cookide maksimum 4kb lık veri kayıt edilebilir.  
flask kütüphanesinden **make_response**  nesnesi dahil edilmeli ve işlemler bu nesne üzerinden gerçekleşmeli.  
Cookieler kaydedildiğinde request nesnesine kayıt eidlir bu yüzden request.cookies sözlüğünden çağırabiliriz.

```python
from flask import Flask, make_response, request
app = Falsk(__name__)


@app.route("/cookie/create")
def create_cookie():
    response = make_response("html kodları")
    response.set_cookie("key", "value")
    return response


@app.route("/cookie/get")
def create_cookie():
    cookie_Var = request.cookies.get("key")
```

Veri imzalayarak cookie güvenliği sağlamak ve değerleri secret key bilmeden eğiştirememek işlemi


```python
from itsdangerous import Signer, BadSignatur

def xyz():
    signer = Signer("custom secret key")
    signed_val = signer.sign("string value")

    unsigned_val = signer.unsign(signed_val).decode()

    try:
        unsigned_val = signer.unsign(signed_val).decode()
    except BadSignatur: # itsdangerous kütüphanesinden import edilmeli.
        #kod buraya düştüyse cookie başkaları tarafından değiştirilmiştir.
```








## 6) SESSION - Oturum işlemleri

Sessionları kullanabilmek için **Flask** ile oluşturulmuş nesnenin **secret_key** değişkenine bir değer atamak gerek.

```python
app = Flask(__name__)
app.secret_key = "karmaşıkbirşeyler"

```

Sessionları **flask** kütüphanesinden **session**sözlüğünü çağırarak kullanabilir

```python
from flask import Flask, session

app = Flask(__name__)
app.secret_key = "karmaşıkbirşeyler"

#...
session["key"] = "value"
```

Sessionlar kullanıcının tarayıcısında varsayılan olarak session ismindeki bir cookie'de şifreli olarak tutulurlar. Buraya en fazla 4kb büyüklüğünde bir veri kayıt edebiliriz. İstersek sessionları kendi sunucumuzda yada veritabanında da saklayabiliriz.

#### 6.1) Kendi Session Arayüzünü yazmak

- ana klasörde **session_interface.py** adında bir dosya oluştur aşağıdaki gibi doldur.
- flask sitenin ana python dosyasında app_interface kodunu ekle.

**session_interface.py**
```python
import uuid
import json
from itsdangerous import Signer, BadSignature, want_bytes
from flask.sessions import SessionMixin, SessionIterface

class MySession(dict, SessionMixin):

    def __init__(self, initial=None, sessionId=None):
        self.initial = initial
        self.sessionId = sessionId
        super(MySession, self).__init__(initial or ())

    def __setitem__(self, key, value):
        super(MySession, self).__setitem__(key, value)

    def __getitem__(self, item):
        super(MySession, self).__getitem__(item)

    def __delitem__(self, key):
        super(MySession, self).__delitem__(key)


class MySessionInterface(SessionIterface):
    session_class = MySession

    datas = dict()

    def open_session(self, app, request):
        signedSessionId = request.cookie.get(app.session_cookie_name)
        if not sessionId:
            sessionId = str(uuid.uuid4())
            return self.session_class(sessionId=sessionId)

        signer = Signer(app.secret_key, salt='custom_string_key', key_derivation='hmac')
        try:
            sessionId = signer.unsign(signedSessionId).decode()
        except BadSignature:
            sessionId = str(uuid.uuid4())
            return self.session_class(sessionId=sessionId)


        # Sessionları getiriyor.
        # sESSİONLAR nereye akyıt ediliyorsa oradan getir.
        initialSessionValueAsJson = self.datas.get("sessionId")
        try:
            initialSessionValue = json.loads(initialSessionValueAsJson)
        except:
            sessionId = str(uuid.uuid4())
            return self.session_class(sessionId=sessionId)

        return self.session_class(initialSessionValue, sessionId=sessionId)



    def save_session(self, app, session, response):
        sessionAsJson = json.dump(dict(session))

        # Sessionları kayıt ediyor
        # Bu kodda sessionlar sunucudaki bu dosya içinde kaydediliyor.
        # Eğer başka bir yere kayıt etmek istiyorsan orayı dene.
        self.datas[session.sessionId] = sessionAsJson

        signer = Signer(app.secret_key, salt='custom_string_key', key_derivation='hmac')
        signedSessionId = signer.sign(want_bytes(session.sessionId))
        response.set_cookie(app.session_cookie_name, signedSessionId)

```
**main.py | index.py | app.py**
```python
from .session_interface import MySessionInterface

#...
app.session_interface = MySessionInterface()
```









### Örnek bir Flask dosyası
**index.py**
```python
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, )

# site.com/
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# site.com/about_us
@app.route("/about_us")
def about_us():
    # /templates/about_us.html
    return render_template("about_us.html")


@app.route("/contact", methods=["GET", "POST"])
def contact():
    if(request.method == "POST"):
        name    = request.form["name"]
        message = request.form["message"]
        return redirect(url_for("/", par1=val1, par2=val2))
    else:
        return render_template("contact.html")

@app.route("/get_pars", methods=["GET"])
def get_pars():
    ad = request.args.get("ad")
    soyad = request.args.get("soyad")
    return render_template("page.html", ad=ad, soyad=soyad)

```

#### Localde flask uygulamnasını çalıştırmak.

Eğer main dosyasının adı **app.py** ise direkt olarak 5000 portu ile çalıştırır.
> flask run

Hiç bir ayar yapmadan çalıştırıldığına her güncellemeden sonra sunucuyu kapatıp açmak gerekiyor. Eğer FLASK_ENV için **development** değeri atanırsa kod değiştikçe flask yeniden başlatılır.
> SET FLASK_ENV=development

Ana dosya ismi **app.py** değil ise aşağıdaki şekilde çalıştırılmalı
> FLASK_APP=main_dosyasi.py flask run









#
