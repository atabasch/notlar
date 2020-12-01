# String İşlemleri
## use Illuminate\Support\Str;

#### *__('orjinal yazı')*
Çeviri işlemleri için kullanılan fonksiyon

#### $class = class_basename('Foo\Bar\Baz');
"Baz" sınıf adını verir

#### echo e('<html>foo</html>');
// &lt;html&gt;foo&lt;/html&gt;

#### preg_replace_array
Regex ile belirlenmiş metin içine içerik ekler.
```
$string = 'The event will take place between :start and :end';
$replaced = preg_replace_array('/:[a-z_]+/', ['8:30', '9:00'], $string);
// The event will take place between 8:30 and 9:00
```

#### Str::after('This is my name', 'This is');
// ' my name'
Yazının başındaki kısmı siler.

#### Str::before('This is my name', 'my name');
// 'This is '
Yazının sonundaki kısmı siler.

#### Str::camel('foo_bar');
// fooBar

#### Str::kebab('fooBar');
// foo_bar

#### Str::contains('This is my name', 'my');
Metin içinde arama yapar boolean değer döndürür.

#### Str::contains('This is my name', ['my', 'foo']);
Metin içinde çoklu arama yapar. 1 tane bile bulursa true döndürür.

#### Str::containsAll('This is my name', ['my', 'name']);
Metin içinde çoklu arama var hepsi varsa true döner.

#### Str::startsWith('This is my name', 'This');
Metin 2. parametre ile mi başlıyor boolean döner

#### Str::endsWith('This is my name', 'name');
Metin 2. parametre ile mi bitiyor boolean döner.

#### Str::start('this/string', '/');
Stringin sonuna ekleme yapar varsa eklemez.

#### Str::finish('this/string', '/');
// this/string/
String sonuna ekleme yapar varsa eklemez

#### Str::limit('The quick brown fox jumps over the lazy dog', 20, ' (...)');
// The quick brown fox (...)

#### Str::replaceArray('?', ['8:30', '9:00'], $string);
String içinde değiştirmeler yapar.

#### Str::replaceFirst('eski', 'yeni', $str);
String içinde ilk bulunanı değiştirir.

#### Str::replaceLast('eski', 'yeni', $str);
String içindeki son bulunannı değiştirir

#### Str::slug('Laravel 5 Framework', '-');
metini sluga çevirir.

#### Str::snake('fooBar');
// foo_bar

#### Str::title('a nice title uses the correct case');
Tüm kelimelerin ilk harflerini büyütür.

#### Str::words('Perfectly balanced, as all things should be.', 3, ' >>>');
Metine kelime limiti koyar.

#### trans('messages.welcome');
