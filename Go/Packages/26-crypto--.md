# crypto/*

Go'nun crypto/* paket ailesi, güvenlik ve kriptografi işlemleri için kullanılır.
Birçok alt paket içerir. Her biri belirli bir kripto işlevini sağlar (örn. hash, HMAC, şifreleme, RSA, vs.).


## import

```go
import (
    "crypto/md5"
    "crypto/sha256"
    "crypto/hmac"
    "crypto/rand"
    "crypto/aes"
    "crypto/cipher"
    "crypto/rsa"
    "crypto/sha1"
    // ... ve diğerleri
)

```

# 2. En Sık Kullanılan crypto/* Paketleri ve Temel Fonksiyonları

### a) crypto/md5, crypto/sha1, crypto/sha256 (Hash Fonksiyonları)

Verinin “parmak izi” (hash) alınır. Genellikle şifre saklama, dosya bütünlüğü, imza kontrolü için kullanılır.

| Fonksiyon               | Açıklama                        | Kod Örneği                              |
| ----------------------- | ------------------------------- | --------------------------------------- |
| `md5.New()`             | Hash nesnesi döner              | `h := md5.New()`                        |
| `sha256.New()`          | SHA-256 hash nesnesi döner      | `h := sha256.New()`                     |
| `h.Write([]byte)`       | Veriyi hasha ekler              | `h.Write([]byte("sifre"))`              |
| `h.Sum(nil)`            | Sonuç hash’i döner (byte slice) | `hash := h.Sum(nil)`                    |
| `sha256.Sum256([]byte)` | Tek satırda hash döner          | `hash := sha256.Sum256([]byte("data"))` |


**Örnek:**

```go
import (
    "crypto/sha256"
    "fmt"
)

func main() {
    data := []byte("emeyz")
    hash := sha256.Sum256(data)
    fmt.Printf("%x\n", hash) // Hex formatta hash çıktısı
}
```

### b) crypto/hmac (HMAC – Anahtarlı Hash)


Amaç:
Bir mesajın hem bütünlüğünü hem de kimliğini doğrulamak (genelde API anahtarları, oturumlar, vs.)

| Fonksiyon                 | Açıklama                         | Kod Örneği                       |
| ------------------------- | -------------------------------- | -------------------------------- |
| `hmac.New(hashFunc, key)` | HMAC nesnesi döner               | `h := hmac.New(sha256.New, key)` |
| `h.Write([]byte)`         | Veri ekler                       | `h.Write([]byte("mesaj"))`       |
| `h.Sum(nil)`              | HMAC sonucu (byte slice)         | `mac := h.Sum(nil)`              |
| `hmac.Equal(a, b)`        | Zaman sabitinde iki HMAC eşit mi |                                  |


```go
import (
    "crypto/hmac"
    "crypto/sha256"
    "fmt"
)

func main() {
    key := []byte("gizli")
    msg := []byte("veri")
    h := hmac.New(sha256.New, key)
    h.Write(msg)
    mac := h.Sum(nil)
    fmt.Printf("%x\n", mac)
}

```


### c) crypto/rand (Güvenli Rastgelelik)

Amaç:
Kriptografik olarak güvenli rastgele veri üretmek için. (Şifre, anahtar, token üretiminde kullanılır.)

| Fonksiyon                    | Açıklama                                 | Kod Örneği       |
| ---------------------------- | ---------------------------------------- | ---------------- |
| `rand.Reader`                | Rastgele veri üreten global reader       |                  |
| `rand.Read([]byte)`          | Belirli sayıda rastgele byte üretir      | `rand.Read(buf)` |
| `rand.Int(rand.Reader, max)` | Rastgele int döner (math/big paketi ile) |                  |


```go
import (
    "crypto/rand"
    "fmt"
)

func main() {
    b := make([]byte, 16)
    rand.Read(b)
    fmt.Printf("%x\n", b)
}

```

### d) crypto/aes ve crypto/cipher (Simetrik Şifreleme)

AES ile veri şifrelemek ve çözmek. Özellikle dosya/mesaj şifrelemede kullanılır.

| Fonksiyon / Tip                     | Açıklama                          | Kod Örneği                       |
| ----------------------------------- | --------------------------------- | -------------------------------- |
| `aes.NewCipher(key)`                | AES şifreleyici nesnesi oluşturur | `block, _ := aes.NewCipher(key)` |
| `cipher.NewCBCEncrypter(block, iv)` | CBC mode ile şifreleme            |                                  |
| `cipher.NewCBCDecrypter(block, iv)` | CBC ile çözme                     |                                  |


**Örnek (AES-256 CBC ile şifreleme):**

```go
import (
    "crypto/aes"
    "crypto/cipher"
)

func main() {
    key := []byte("çokgizliçokgizliçokgizliçokgi!") // 32 byte = AES-256
    iv := []byte("başlangıcstringi!") // 16 byte
    plain := []byte("secret mesaj")
    block, _ := aes.NewCipher(key)
    encrypter := cipher.NewCBCEncrypter(block, iv)
    encrypted := make([]byte, len(plain))
    encrypter.CryptBlocks(encrypted, plain)
    // ... çözmek için benzer şekilde Decrypter kullanılır
}

```

### e) crypto/rsa, crypto/ecdsa, crypto/ed25519 (Asimetrik Şifreleme/İmza)

Anahtar çiftleriyle (public/private) şifreleme, imza ve doğrulama için.

| Fonksiyon / Tip            | Açıklama                 | Kod Örneği |
| -------------------------- | ------------------------ | ---------- |
| `rsa.GenerateKey(rand, n)` | RSA anahtar çifti üretir |            |
| `rsa.EncryptPKCS1v15(...)` | Public key ile şifreler  |            |
| `rsa.DecryptPKCS1v15(...)` | Private key ile çözer    |            |
| `rsa.SignPKCS1v15(...)`    | İmza oluşturur           |            |
| `rsa.VerifyPKCS1v15(...)`  | İmza doğrular            |            |


**Örnek - Anahtar Üretme**

```go
import (
    "crypto/rsa"
    "crypto/rand"
)

func main() {
    privateKey, _ := rsa.GenerateKey(rand.Reader, 2048)
    publicKey := &privateKey.PublicKey
    // Şifreleme, imza vb. işlemler için kullanılır
}
```


# 3. Diğer Dikkat Çekici Alt Paketler

| Paket                            | Açıklama                            | Notlar                                |
| -------------------------------- | ----------------------------------- | ------------------------------------- |
| `crypto/x509`                    | Sertifika okuma/yazma, TLS işleri   | SSL/TLS ve sertifika işlemleri        |
| `crypto/tls`                     | HTTPS/TLS bağlantılarını yönetir    | Sunucu/istemci SSL                    |
| `crypto/des`                     | DES şifreleme (artık çok önerilmez) |                                       |
| `crypto/dsa`, `ecdsa`, `ed25519` | Dijital imza algoritmaları          | Daha modern, hızlı imza algoritmaları |


# 4. En Çok Yapılanlar – Hazır Kopyala Kullan

**SHA256 ile bir string’in hash’i:**

```go
import "crypto/sha256"

hash := sha256.Sum256([]byte("merhaba"))
fmt.Printf("%x\n", hash)
```

**Güvenli rastgele token üretimi:**

```go
import (
    "crypto/rand"
    "encoding/hex"
)

b := make([]byte, 16)
rand.Read(b)
token := hex.EncodeToString(b)
```

**HMAC doğrulaması:**

```go
import (
    "crypto/hmac"
    "crypto/sha1"
)

key := []byte("gizli")
msg := []byte("test")
mac := hmac.New(sha1.New, key)
mac.Write(msg)
sum := mac.Sum(nil)
```

# 5. Güvenlik Notları

Şifreleme için asla kendi algoritmanı yazma!

Paketlerin dokümantasyonunda örnek kodları mutlaka incele.

API token, şifre saklama, dosya bütünlüğü, imza gibi işlerde genelde bu paketler kullanılır.

Hash’leri hex veya base64 ile insan okunur şekilde saklarsın (örn. %x ile formatla).