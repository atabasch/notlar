# MIGRATIONS ve DATABASE

- Laravel DATABASE bağlantısı gibi ayarlar `root/.env` dosyasında yapılır.
- Database ayarları yapıldıktan sonra `php artisan migrate` fonksiyonunu çalıştır.


# 1) KENDİ MİGRATİONS DOSYAMIZI OLUŞTURMAK

## 1.1) TABLO OLUŞTURMAK
- `php artisan make:migration create_tablename_table` komutu ile migration dosyası oluştur.
- migration dosyasının `up` fonksiyonuna oluşturulacak tablonun sütunlarını belirleyen metholdkar yazılır.

```php
Schema::create('tablename', function($table){

	
	$table->timestamp();
	$table->boolean();

	$table->char('key');		// 0 ile 255 karakter char()
	$table->char('key', 25); 	//  char(25)
	$table->string('key'); 		//  0 ile 255 karakter varchar(x)
	$table->string('key', 100); // varchar(100)

	$table->text('key');			// en fazla 65535 karakter
	$table->mediumText('key');		// en fazla 16777215 karakter
	$table->longText('key');		// en fazla 4294967295 karakter


	$table->tinyInteger('key');		// int(4) -128 ile 127 arası
	$table->smallInteger('key');	// int(6) -32768 ile 32767
	$table->mediumInteger('key');	// int(9) -8388608 ile 8388607
	$table->integer('key');			// int(11) -2147483648 ile 2147483647
	$table->bigInteger('key');		// int(20) -9223372036854775808 ile 9223372036854775807

	$table->unsignedTinyInteger('key');		// int(3) 0 ile 255
	$table->unsignedSmallInteger('key');	// int(5) 0 ile 65535
	$table->unsignedMediumInteger('key');	// int(8) 0 ile 16777215
	$table->unsignedInteger('key');			// int(10) 0 ile 4294967295

	$table->decimal('key', 9, 2);	// string olarak virgüllü sayı  xxxxxxx,xx
	$table->double('key', 9, 2);	// virgüllü büyük sayı  xxxxxxx,xx
	$table->float('key', 9, 2);		// virgüllü sayı xxxxxxx,xx


	$table->bigIncrements('key');		// birincil anahtar int(20)
	$table->increments('key');			// birincil anahtar int(11)
	$table->mediumIncrements('key');	// birincil anahtar int(9)
	$table->smallIncrements('key');		// birincil anahtar int(6)
	$table->tinyIncrements('key');		// birincil anahtar int(4)
	$table->enum('key', ['opt1', 'opt2']);
	$table->set('key', ['opt1', 'opt2']);

	$table->date('created_at');
	$table->dateTime('created_at');
	$table->year();
	$table->nullableTimestamps();
	$table->timestamps(); //created_at ve updated_at oluşturur

	->autoIncrement()
	->default($value)
	->nullable($value = true)
	->useCurrent()
	->unsigned() // sadece pozitif
	

});
```

## 1.2) TABLO SİLMEK

- Migration geri alındığında tabloyu silmek istersek "down" fonksiyonuna silme kodu yaz.

```php
// Tabloyu sil
Schema::drop('tablename');			

// Tablo varsa tabloyu sil
Schema::dropIfExists('tablename');		

// Tablodaki sütunu sil.
Schema::table('tablename', function(Blueprint $table){
	$table->dropColumn('col_name);
});
```

## 1.3) VAR OLAN BİR TABLOYA HÜCRE EKLEMEK

Eğer sonradan var olan bir tabloya başka bir hücre eklemek istenirse. Yeni migration oluşturulur.
yada varsayılan migrate düzenlemesi ypaılınca `php artisan migrate:refresh` komutu çalıştırılırsa. Migrateler baştan çalışır.

**NOT:** İLK MİGRATE SIRASINDA

> 'Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes (SQL: alter table `users` add unique `users_email_unique`(`email`))'
'SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes'

HATASI ALIRSAM
`app/provides/AppServiceProvider.php` dosyasına gir ve
EKLE
```php 
use Illuminate\Support\Facades\Schema;
public function boot()
{
	Schema::defaultStringLength(191);
}
```
# 2) ORM MODEL YAPISI

Model oluşturmak.

> php artisan make:model Urun

> php artisan make:model Urun -m

```php
// !!! CONTROLLERDE YAZILIR !!!
use App\Models\Urun; // Modelin kullanılacağı sayfalarda modeli import etme kodu

// ◘◘◘ ID YERINE UUID KULLANMAK İÇİN örn: "8f8e8478-9035-4d23-b9a7-62f4d2612ce5"
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Urun extends Model{

	// ◘◘◘ ID YERINE UUID KULLANMAK İÇİN örn: "8f8e8478-9035-4d23-b9a7-62f4d2612ce5"
	use HasUuids;


	protected 	$table = "dbtablename"; 	// tablo ismi "Uruns" değilse yaz.

	protected 	$primaryKey = "id";  		// primary key adı id olmayan modellere yaz
	public 		$incrementing = true; 		// Birincil anahtar otomatik artan mı?
	protected 	$keyType = 'string';		// Birincil anahtarın tipini değiştirir.

	public 		$timestamps = false; 		// timestamps kullanılmayan tabloların modellerinde yaz.
	const CREATED_AT = 'creation_date';
	const UPDATED_AT = 'updated_date';

	protected $fillable = ['', '']; 		//  insert, update işleminde yazılmasına izin verilen sütunlar
	protected $guarded 	= ['']; 			//  insert, update işlemlerinde dokunulmaması gereken sütunlar. guarded kullanınca fillablea gerek yok
	protected $visible 	= ['']; 			//  select * tarafına yazılacaklar
	protected $hidden 	= ['']; 			//  select * içinde bulunmaması gerekenler

	protected $cast 	=> [				// Veritabannındaki hücreyi çekince türünü değiştirir.
		'email_verified_at' => 'datetime'
	];

		
	
}
```
# 3) ORM CRUD İŞLEMLERİ

## 3.1) OLUŞTURMAK
```php
// YÖNTEM 1
$data = new Modelname();
$data->key = val;
$data->save();

// YÖNTEM 2
$data = Modelname::create([
			'col' => 'val',
			'col' => 'val',
			'col' => 'val'
		]);

// YÖNTEM 3
DB:insert("insert into TABLO(col, col) VALUES(?,?), [val, val]");

// YÖNTEM 4
DB:table("tablename")->insert(Array(...));
```

!NOT !NOT !NOT:
			YÖNTEM 2 kullanıldığında laravel hata verebilir. Bu durumda iyi bir filtre olak fillable kullanılmalı.
			Bu yöntemde posttan gelen bütün değerleri parametreye göndersek bile model sadece bizim belirlediğimiz alanları alır.
			Modelismi.php dosyasında model classı içinde
			protected $fillable = [ 'name', 'slug', 'user' ];
			create komudu ile ne gönderilirse gönderilsin laravel sadece "'name', 'slug', 'user'" alanlarını kullanır.

## 3.2) GÜNCELLEME

```php
// YÖNTEM 1
$data = Modelname::find(id);
$data->key = 'New Value';
$data->save();

// YÖNTEM 2
$data = Modelname::find(id);
$data->update([ 'col'=>'val', 'col'=>'val' ]);

// YÖNTEM 3
DB::update("update TABLO set COL=? where COL=?", [NEWVAL, WHEREVAL]);

// YÖNTEM 4
DB::table('tablo')->where('id', 2)->update([...]);
```

## 3.3) SİLMEK
```php
// YÖNTEM 1
$data = Modelname::find(id);
$data->delete();

// YÖNTEM 2
// -

// YÖNTEM 3
DB::delete("delete from TABLO where COL=?", [İD])

// YÖNTEM 4
DB::table('tablo')->where('id', 2)->delete();
```

## 3.4) GETİRMEK

```php
DB::select("select * from TABLO");
		DB::select("select * from TABLO where COL=?", [?]);
		Model::all();
		Model::find(id);
		Model::get();
		DB::table('table_name')->get();
		DB::table('table_name')->firts();
		DB::table('table_name')->last();
		DB::table('table_name')->select('col1', 'col2 as col_name')->get();
		DB::table('table_name')->pluck('col'); // sadece "col" u dizi olarak getirdi
		->orderBy('id','desc');
		->inRandomOrder('id');
		->groupBy('col');
		->count();
		->avg(col);
		->sum(col);
		->min(col);
		->max(col);
		->where('col', x); // col == x
		->where('col','<', x); // col < x
		->where('col','>', x); // col > x
		->whereIn('col',[x,y,z]);
		->whereNotIn('col',[x,y,z]);
		->whereBetween('col',[x,y]);
		->whereNotBetween('col',[x,y]);
		->whereNull('col');  //col==null
		->whereNotNull('col');  //col!=null
		->where([
					['col', 'val'],
					['col', 'val']
				]);
```

# 4) DATABASE İLİŞKİLENDİRMELERİ (relationships)

## 4.1) ONE to ONE

Bir kullanıcının başka bir veritabanı tablosunda sadece 1 tane eşit satırı olduğu durumlarda kullanılır.

#### -> VERİTABANLARI
| App\Users.php | App\Phones.php |
|---|---|
| id | id |
| username | phone |
|  | user_id |


#### -> EŞİTLEME
• Users modeline gir ve class içinde bir fonksiyon oluştur ve içine dönmesini istediğin veriyi belirt

**App/Users.php**

```php
public function phone(){
	return $this->hasOne('App\Phones', 'user_id_of_phones', 'user_id_of_users');
}
```

**App/Phones.php**
```php
public function user(){
	return $this->belongsTo('App\Users', 'user_id_of_phones', 'user_id_of_users');
}
```

#### -> KULLANIMI
```php
Users::find(id)->phone->number;

Phones::find(id)->user->username;
```

## 4.2) ONE TO MANY

Örneğin bir kullanıcının başka bir tabloda çok fazla satırı olduğunda kullanılır

### 4.2.1) VERİTABANLARI
| **App\Users.php** | **App\Comments.php** |
|---|---|
| id | id |
| username | comment |
|  | user_id |


### 4.2.2) EŞİTLEME
**App/Users.php**
    
```php
public function comments(){
    return $this->hasMany('App\Comments', 'user_id');
}
```

**App/Comments.php**
```php
public function user(){
    return $this->belongsTo('App\Users', 'user_id');
}
```

### 4.2.3) KULLANIMI
> $yorumlar = User::find(id)->comments;

> $yazan = Comments::find(id)->user->username;



# 5) LARAVEL COLLECTIONLAR
Laravelin kendi dizi sistemidir. $var = collect(dizi_objesi); şeklinde oluşturulur

```php
$vals = colect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

$vals = $vals->chunk(3); 			// { [1, 2, 3], [4, 5, 6], [7, 8, 9] }

$vals = $vals->collapse()->all(); 	//[1, 2, 3, 4, 5, 6, 7, 8, 9])

$vals->avg(); // Tüm sayıların ortalaması

$vals->sum(); // Tüm sayıların toplamı

$vals->count(); // Tüm sayıların ortalaması
```
