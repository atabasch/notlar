# Consola Yazdırmak girdi almak
```c#
Console.Write(txt);

Console.WriteLine(txt);


Console.Write("isim gir: ");
string isim = Console.ReadLine();

```

# Değişkenler
```c#
object degiskenAdi = değer; // dinamik tipli bir değişken oluşturur.

byte sayi = 255;

short sayi = 32000;

int sayi = 2147483647;

long sayi = 9223372036854775807;

float sayi = 12.5f;
double sayi = 15.555;

char karakter = 'C';

string isim = "Furkan";

bool isAdmin = true;
```


# Diziler
```c#

// elemanları eklenmiş bir dizi
string[] renkler = {"Red", "Green", "Blue"};

// x elemanlı bir int dizisi
int[] numbers = new int[x];



```


# Operatörler
|   |   |
|---|---|
| + |  |
| - |  |
| * |  |
| / |  |
| % |  |
| ++ |  |
| -- |  |
| = |  |
|  |  |
| == |  |
| != |  |
| < |  |
| <= |  |
| > |  |
| >= |  |
|  |  |
| && |  |
| || |  |
| ! |  |



# Tür Dönüşümleri
```c#
// Tür Almak
degisken.GetType();

// a değer kaybına uğrar. byte'a çevirinec max 254 değeri alınır 
byte b = (byte)a; // int a = 500


// Stringden İntegere
int c = int.Parse(str); // str = "1"


int d = Convert.ToInt32(str);


intDegisken.ToString();

```



# Koşullar
```c#

if(){

}else if(){

}else{

}




switch(){

case x:
    // kodlar;
    break;

default:
    break;

}

```


 # Döngüler
 ```c#
// FOR
for(int i=1; i<=10; i++ ){

}


// WHILE
while(koşul){

}


// DO WHILE
do{

}while(koşul) 


// FOREACH
foreach(var item in items){

}

foreach(string item in items){

}
```



# METHOD
```c#
static void methodName(){
    // Kodlar
}

static string methodName(int varName, bool var2Name = true){

    return result
}


```

# CLASS
```c#
namespace NameSpaceName
{

    public class ClassName : ParentClass{

        public int sayi;
        private string varName;

        // önerilen kodlarda su anahtarı ile gösterilir
        // property adı ile anılır
        // bu kodun değişkenden farkı yoktur.
        public string isim { get; set; }


        // propety get ve setter oluşturmalı
        private string classVarIsim;
        public string Isim {
            // valu anahtar kelimesi ile değere ulaşılır
            set{
                classVarIsim = value;
            }

            get{
                return classVarIsim;
            }
        }
        /**
            classObject.Isim = "Furkan";    // set çalışır
            string isim = classObject.Isim; // get çalışır.
         */


        public ClassName(int _varName){
            varName = _varName;
        }

        public void methodName(){

        }

    }

}




ClassName varName = new ClassName(data);

varName.blablabla();
```


# ArrayList
```c#
using System.Collections;

ArrayList liste = new ArrayList();

liste.Add(value);
liste.Insert(index, value);

liste.Count;
liste.Reverse();
liste.Sort();

liste.Remove(value);

liste.RemoveAt();

liste.Clear();

liste.Contains(value); // ArrayList içinde value var mı?

liste.IndexOf(value); // index numarasını verrir.


```


# Math Sınıfı
```c#
Math.Min(x, y);

Math.Max(x, y);

Math.Sqrt(64);

Math.Abs(-4.7);

Math.Round(9.99);

```