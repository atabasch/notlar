# URL OLUŞTURMAK
> var url : URL = URL("http....")

# BAĞLANTI İŞLEMLERİ İÇİN CONNECTION
```kotlin
val url : URL = URL("http....")
var httpUrlConnection : HttpURLConnection
httpUrlConnection = url.openConnection() as HttpURLConnection
```

# BAĞLANTIDAN GELEN VERİYİ OKUMAK
```kotlin
val inputStream = httpUrlConnection.inputStream
val inputStreamReader = InputStreamReader(inputStream)

var data = inputStreamReader.read()
while(data > 0){
    var karakter = data.toChar()
    data = inputStreamReader.read()
}
```
