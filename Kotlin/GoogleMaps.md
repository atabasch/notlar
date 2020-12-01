# GOOGLE HARİTALARI KULLANMAK

- Proje başlangıcında "Google Maps Activity" seçmek gerekir.
- Google maps api keyi al
    - google_maps_api.xml de gösterilen linke git
    - Proje oluştur
    - Api key oluştur
    - Api keyi al ve "google_maps_api.xml" içinde YOUR_KEY_HERE yazan yere yapıştır.

# GEREKLİ İZİNLER
ACCESS_FINE_LOCATION

# MARKER EKLEME
```kotlin
val mMap = GoogleMap
val konum = LatLng(enlem, boylam) // Enlem ve boylama göre yeni konum objesi oluşturur.

mMap.addMarket(MarkerOptions().positions(konum).title("İşaret için başlık")) // İşaret ekler ve bir başlık yazar

mMap.moveCamera(CameraUpdateFactory.newLatLng(konum)) // Ekranı konuma odaklar

mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(konum, FloatOlarakZoomDerecesi)) // Ekranı konuma odaklar va zoom yapar
```

# MARKERLARI SİLMEK
> mMap.clear()

# KULLANICININ YERİNİ (LOCATION) BULMAK
Bu işlem için ACCESS_FINE_LOCATION izni almış olmak gerekli.

```kotlin
var locationManager : locationManager? = null
var locationListener : LocationListener? = null // Kullanıcı nerede bulmak gibi, gps çekiyor mu bulmak gibi

locationManager = getSystemService(Contect.LOCATION_SERVICE) as LocationManager
locationListener = object : LocationListener{
            override fun onLocationChanged(location: Location?) {
                // Kullanıcının yeri değişince işler.
            }

            override fun onStatusChanged(provider: String?, status: Int, extras: Bundle?) {
                //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }

            override fun onProviderEnabled(provider: String?) {
                //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }

            override fun onProviderDisabled(provider: String?) {
                //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }

        }

        if(izin kontrollerini yaptıktan sonra){
            locationManager!!.requestLocationUpdates(LocationManager.GPS_PROVIDER, KAÇ_SN_GÜNÇELLENECEK, KAÇ_METREDE_BİR_GÜNCELLENECEK, locationListener)
            // 0, 0 ÇOK FAZLA PİL YER
        }

```
# EN SON BİLİNEN LOKASYONU ALMAK
```kotlin
var lastLocation = locationManager.getLastKnowLocation(LocationManager.GPS_PROVIDER)
```

# ADRES BİLGİSİ ALMAK
```kotlin
val geoCoder = Geocoder(applicationContext, Locale.getDefault())
try{
    val addressList = geoCoder.getFromLocation(enlem, boylam)
    if(addressList != null && addressList.size > 0){
        print("adres inffo" + addressList[0].toString())
    }
}catch(e:Exception){
    e.printStackTrace()
}
```
# HARİTAYA UZUN TIKLAMAYI ANLAMAK

```kotlin
    val mapListener = object : GoogleMap.OnMapLongClickListener{
        override fun onMapLongClicke(p0: LatLng?){
            // HARİTAYA UZUN TIKLANDIĞINDA YAPILACAK İŞLEMLER
        }
    }
```

```kotlin

```
