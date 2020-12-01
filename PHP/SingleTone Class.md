```php
class SingletonObject
{
    // Nesnemizin daha önceden oluşturulmadığını anlayabilmemiz için statik instance özelliği tanımlıyoruz.
    private static $instance = null;

    //Sınıfımızın construct (kurucu) metotu private yada protected tanımlıyoruz.
    private function __construct()
    {
        // oluşturulma sırasında kullanacağımız kodlar
    }

    // Dışarıdan sınıfımızı çağıracağımız metodumuz.
    public static function getInstance()
    {
        // eğer daha önce örnek oluşturulmamış ise sınıfın tek örneğini oluştur
        if (static::$instance == null) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    // dışarıdan kopyalanmasını engelledik
    private function __clone()
    {
    }

    // unserialize() metodu ile tekrardan oluşturulmasını engelledik
    private function __wakeup()
    {
    }
}
```
