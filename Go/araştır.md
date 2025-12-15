(JWT, Auth, middleware, file upload, test, deployment vs.)

| Konu/Başlık                                   | Neden Gerekli? & Ne Zaman Kullanılır?                                                                      |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Middleware Tasarımı (GIN özelinde)**        | Her istekten önce/sonra işlem yapmak, JWT kontrolü, hata yakalama, rate limiting için                      |
| **JWT & OAuth2 Authentication**               | Modern API’lerde oturum ve yetkilendirme için (kullanıcı, token, refresh token)                            |
| **Custom Error Handling & Response Struct**   | Her API isteğinde standart ve güvenli JSON hata cevapları dönmek, loglamak                                 |
| **Validation & Sanitization**                 | Gelen datayı kontrol etmek, boş değerler/format vs. otomatik hataya düşürmek (ör: go-playground/validator) |
| **Struct Tags & Custom Marshaling**           | JSON ile uyumlu model tanımı, camelCase/snake_case çeviriler, tarih formatları için                        |
| **Context’te Deadline, Timeout, Cancel**      | Yavaş endpoint’lerde işlemi durdurmak, bağlantıyı otomatik sonlandırmak için                               |
| **Task Queue & Background Jobs**              | Eposta gönderme, thumbnail, bildirim gibi zaman alan işlemleri API’yı yavaşlatmadan yapmak için            |
| **Asenkron Mail/SMS Gönderimi**               | API’den mail/sms tetiklemek, ama cevabı bekletmeden kullanıcıya dönebilmek                                 |
| **WebSocket/Real-Time Haberleşme**            | Canlı skor, chat, bildirim gibi gerçek zamanlı veri göndermek                                              |
| **Swagger/OpenAPI Dökümantasyonu**            | Otomatik ve okunabilir API dökümantasyonu, örnekler ve test için                                           |
| **Rate Limiting & Throttling**                | API’yı aşırı kullananları otomatik yavaşlatmak/engellemek (middleware ile)                                 |
| **Profiling & Benchmarking**                  | API performans darboğazlarını analiz etmek, kodun hızlı/optimum çalışmasını test etmek                     |
| **Graceful Shutdown (Sunucu Kapatma)**        | API kapanırken aktif işlemlerin güvenli bitmesini sağlamak için                                            |
| **Testing: Mocking, Integration Test**        | API’nin dış servislerle (veritabanı, email, cache) test ortamında simüle edilmesi, daha güvenli kod için   |
| **CI/CD Pipeline ve Build/Release**           | Kodun otomatik test edilip, derlenip, production’a alınması için (GitHub Actions, Drone, GitLab, vs.)      |
| **Caching (Redis, Memcache, vs.)**            | Sık gelen ve değişmeyen verilerde aşırı hız kazancı (kategoriler, ayarlar, lookup veriler, vs.)            |
| **gRPC/Microservices**                        | API’yi gRPC ile veya çok daha hızlı/küçük mikroservis yapıları ile yazmak için                             |
| **Static Files & CDN Entegrasyonu**           | Dosya upload/servis, S3/CDN ile hızlı medya sunmak için                                                    |
| **Loglama & Monitoring (Sentry, Prometheus)** | Hata ve performans takibi, production’da hataları kolayca bulmak için                                      |
