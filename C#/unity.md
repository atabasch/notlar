- C# Script oluşturunca hemen dosya adını gir yoksa classname aynı kalıyor.
- c# script kodunun çalışması için sahnedeki bir elemana bağlanması gerekiyor.
- Scripti hierarchy bölümünden obje üzerine bırakabilir veya obje özelliklerinde Kodlama bölümüne bırakabilirsin.


## Lifecycle
```c#
class ScriptName: MonoBehavior{

    // Sahne çalışınca bir kez çalışır
    void Start(){
        Debug.Log("Konsola yazı yazar");
    }


    // Her frame'de çalışır
    void Update(){

    }


    void CustomMethod(){

    }



} // ScriptName
```

# Klavyeden Basılan Tuşu Almak
```c#
/**
    KeyCode.Return = Enter
    KeyCode.A = A
    KeyCode.B = B
    KeyCode.C = C
    KeyCode.Z = Z

    KeyCode.UpArrow = ↑
    KeyCode.DownArrow = ↓
    KeyCode.LeftArrow = ←
    KeyCode.RightArrow = →

 */

if(Input.GetKeyDown(KeyCode.Return)){
    
}
```

## İpuçları
- unity de Hierarchy bölümünde **EventSystem** içinde First Element seçeneği ile ekran ilk açıldığında seçili olacak olan nesneyi seçebilirsiniz.
- Script kodunda public olarak oluşturulan değişkenlere ve fonksiyonlara unity  arayüzünden erişiliyor.
    - Oyunda bir obje oluşturursan bunu `public UnityEngine.Category.ObjectName varName;` şeklinde script içinde belirt.
    - Unitye dön ve Script objesine geldiğinde propertiesde değişkenin görünür.
    - Hangi değişkeni istiyorsan sürükle bırak ile değişken üzerine bırakabilirsin.


## Oyuna Script Kodu Eklemek
- Her şey için geçerli bir script için **hierarchy** de yeni **Boş Obje** oluştur adını istersen **_Script** olarak ve ver kod dosyanı bu objeye sürükle bırak.
- Objelere script eklenebiliyor. Mesela sadece **player** için olan kod dosyasını player objesi üzerine sürükle bırak. Kod dosyası içinde oyuncu özelliklerine direkt laşılabiliyor. Örneğin: `transform.Translate(...)` gibi playerın transform özelliğine erişebilirsin.


# Animatör



