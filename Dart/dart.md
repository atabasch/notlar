
## Değişkenler

```dart 
void main() {

    // Değişkenler 
    var isim = "Furkan";
    String isim = "Furkan";
    String? isim = "Furkan"; // isim değişkeninin değeri daha sonra null olabilir? (?)nullable

    var yas = 33;
    int yas = 33;
    number yas = 33;

    var fiyat 2.500;
    double fiyat 2.500;
    number fiyat 2.500;

    var aktif = true;
    bool aktif = true;

    var renkler = ['Kırmızı', 'Yeşil', 'Mavi'];
    List renkler = ['Kırmızı', 'Yeşil', 'Mavi'];

    var sozluk = {
        'anahtar': 'deger',
        'key' : 'value'
    };
    Map sozluk = {
        'anahtar': 'deger',
        'key' : 'value'
    };

    print(isim.runtimeType); // runtimeType değişken tipini verir.


}
```

## Sabitler
```dart
void main() {

    // Eğer değeri biz veriyorsak
    const String name = "Furkan";

    // Eğer değeri dışardan alıyorska
    final

}
```


## Yazdırma String işlemleri
```dart
void main() {

    String isim = "Furkan";

    int yas = 33;


    print(isim + " " + yas.toString())

    print("$isim $yas");

    // String to Integer
    int.parse(strnumber);

}
```


## Koşullar
```dart
void main() {

    // DEFAULT lu If
    var degisken = variablename ?? "Default Value";


    // İF SORGUSU
    if(year >= 2000){

    } else if(year >= 2020) {

    } else{

    }

    // SWITCH
    switch(variable){

        case var1:
            print("");
            break;

        case var2:
            print("");
            break;

        default:
            print();

    }

}
```

## Döngüler
```dart
void main() {

    // FOR
    for(var i = 1; i <= 10; i++){
        // İşlemler
    }


    // DİZİ ELEMANLARINI GEZME
    for(var renk in renkler){ }
    for(String renk in renkler){ }
    for(num sayi in sayilar){ }

    // FOREACH
    renkler.forEach( (renk) {
        // işlemler
    } )

    // FOR EACH TEK SATIR KOD
    items.forEach( (item) => print(item) );
    

    // SÖZLÜKTEN FOREACH
    person.forEach( (key, val) {
        // işlemler
    } )
    
    // WHILE
    while(kosul){
        // işlemler
    }
    
}
```

## Fonksiyonlar
```dart
void main() {
}

void func1(){
    //işlemler
}

String func2(par1){
    return par1
}

```

## Sınıflar
```dart
void main(){
    var person1 = Person("Furkan", 33);
}

class Person{

    String name;
    int age;
    String gender;

    // INIT
    Person(this.name, this.age);
    // Person(xxx, yy)

    // 2. INIT
    Person({ required this.name, required this.age, this.gender = "male" })
    // Person(name: "Furkan", age: 33)

    void getinfo(){
        print("$name ve $age");
    }

}
```

## Koşullar
```dart
void main() {


    
}
```

## Koşullar
```dart
void main() {


    
}
```

## Koşullar
```dart
void main() {


    
}
```