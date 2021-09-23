Nuxt JS - Vue JS uygulamalarını kolayca sunucu taraflı çalıştırılmasını sağlayan bir ara katmandır.
Nuxt sayesinde web siteleri arama motorları tarafından indexlenebilmektedir.

###### Universal app
İlk view sunucu üzerinde dinamik olarak render edilir.
Sonra da Uygulama Single Page Application a dönüştürülür. (SEO avantajlı)


###### Single Page App
Uygulama ilk yüklemeden hemen sonra başlar ve client üzerinde renger edilir. Uygulama SPA olarak kalır.  (SEO dezavantaj)


###### Static App
Pre-render viewler yüklenir. ilk yüklemeden sonra uygulama SPA ya dönüştürülür. (SEO avantajlı)


# Kurulum

### 1) Nuxt App Generatör kütüphanesini global olarak indir.
> npm install -g create-nuxt-app

### 2) Nuxt Projesini Oluştur.
> create-nuxt-app path

> create-nuxt-app .

**Kurulumu yaparken express'i seçersen senin için express.js kurar ve böylece içerden rest apini kullanabilirsin.**

- Proje Adı
- Description
- Özel bir sunucu serverı seç (None)
- Özel UI framework ü seç (None)
- Rendering Mode (Universal)
- Axios modülünü istiyor musun?
- eslint kullanacak msıın?
- pretter kullanacak mısın?
- Yazar
- Package Manager (npm)


> npm run dev

# Klasör Yapıları

- **assets:** Harici dosyaların bulunduğu klasör.
- **components:** Komponentlerin klasörü
- **layouts:** Master Page mantıklı layoutların bulunduğu klasör
- **middleware:**
- **node_moduler:**  Node modülleri
- **pages:** Sayfaların Komponenrleri olack.
- **plugins:** 3. parti js eklentilerinin duracağı klasör.
- **static:**
- **store:** vuex için gerekli.


#





























#
