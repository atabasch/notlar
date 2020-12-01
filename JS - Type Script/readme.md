### Type Script kur
> npm i -g typescript

- filename.ts dosyası oluştur
- kodlarını içine yaz ve e
- > tsp filename.ts
- ve .ts kdosyası .js olarak oluşturulacak.


#### .ts dosyasını yazdıkça otomatik .js çevirme işlemi için.
- **filename.ts** dosyasını oluştur.
- HTML dosyasını oluştur ve içine **filename.js** dosyasını çağır.
- Aşağıdaki kodu çalıştırarak .ts her kaydettiğinde .js dosyasını oto güncellemeyi aç

> tsc filename.ts -w


### Değişken Belirlemek
```typescript
// String değişken oluşturmak
let isim: string;
isim = "Furkan";

let soyad: string  = "Atabaş";

// Number değişken oluşturmak
let yas: number;
yas = 29;

let yil: number = 1991;

// Boolean değişken oluşturmak
let status: boolean;
status = true;

// Mixed değişken oluşturmak
let other: any;
other = "metin";
other = false;
other = 13;

```


### Arrays
```typescript
let renkler: string[]; /*veya*/ let renkler Array<string>;
renkler = ['red', 'green', 'blue'];

let tekler: number[]; /*veya*/ let tekler Array<number>;
tekler = [1,3,5,7,9];

let durumlar: boolean[]; /*veya*/ let durumlar Array<boolean>;
durumlar = [true, false, false, true, true];

let languages: Array<string> = ["tr", "en", "de", "ru"];

let tupple: [number, string] = [29, "Furkan"];

```

### Enum
```ts
enum Ebatlar { small, medium, large, full };
enum Sizes {
    sm = "Small",
    md = "Medium",
    lg = "Large",
    xl = "X Large"
}
Sizes.sm
```


### Functions
```typescript
// Bir değer döndüren fonksiyon
function topla(sayi1:number, sayi2:number) : number{
    return sayi1 + sayi2;
}


// Değer döndürmeyen fonksiyon
function topla(sayi1:number, sayi2:number) : void{
    console.log("faafa");
}

// Zorunlu olmayan parametreler
// Değer döndürmeyen fonksiyon
function topla(sayi1:number, sayi2?:number, sayi3?:number=10) : void{
    //
}
```


### Classes
```typescript
class Person{

    name    :string;
    age     :number;
    email   :string;
    description:any;
    status  :boolean;
    languages: string[];

    private ozeldegisken: string;


    constructor(name:string, age:number, status:boolean){
        this.name = name;
        this.age = age;
        this.status = status;
    }

    newMethodName(){

    }

}

// Normal JS de olmayan bir özellik.
class Employee extends Person {
    constructor(name:string, age:number, status:boolean){
        super(name, age, status);
    }

    // Üstteki methodu ezmek
    newMethodName(){
        super.newMethodName();
        // DEVAMI
    }
}

// Kullanımı
let furkan = new Person("Furkan", 29, true);
```



### INTERFACE
interface kullanarak bir database sınıfı oluşturduğunda yarın şirket sana başka database ile çalışan bir sınıf yaz derse.  
Sen sadece yeni sınıfı yazarsın kodlamada bir şey değiştirmezsin. Zaten hep aynı interface kullanıldığı için sistem çalışır.

```ts
// 1 ADET INTERFACE OLUŞTUR
interface IDataBase{
    get();
    add();
    update();
    delete();
}

// Mysql kullanan sınıf
class MySql implements IDataBase {
    get(){ /* Mysql ile database den veri çekme işlemleri. */ }
    add(){ /*...*/ }
    update(){ /*...*/ }
    delete(){ /*...*/ }
}

// MongoDB kullanan sınıf
class MongoDB implements IDataBase {
    get(){ /**/ }
    add(){ /*...*/ }
    update(){ /*...*/ }
    delete(){ /*...*/ }
}


// Aşağıdaki fonksiyondaki parametrenin anlamı
// Ben sana IDataBase i kullanan bir sınıf göndereceğim.
// Hangi sınıfı yollarsan yolla o sınıf interfaceden oluştuğu için hep aynı isimde methodları vardı.
function addDatabase(database:IDataBase){
    database.add();
}

addDatabase(new MySql());

```


### AABSTRACT SINIFLAR
Kalıtımla interface in birleşmiş halidir.
```ts
abstract class Database {
    // Bunları ben hazırladım.
    get(){ /**/      }
    delete(){}

    // Bunları extends eden sınıf oluşturacak.
    add();
    update();
}

class MySql extends Database{
    add(){ /* ... */ }
    update(){ /* ... */ }
}
```













#
