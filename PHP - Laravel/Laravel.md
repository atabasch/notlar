# LARAVEL NOTLARIM

# ►LARAVELİN KURULUMU
- [https://getcomposer.org](https://getcomposer.org) sitesinden composer indir ve kur.
- CMD ekranını aç ve kurmak istediğin konuma gittikten sonra üstteki çalıştır. Laravel indirilip kurulacak.
`composer create-porject laravel/laravel dirname`
- app/Providers/AppServiceProvider.php dosyasını aç
```php
use Illuminate\Support\Facades\Schema;

public function boot(){
	//...
    Schema::defaultStringLength(191);
    //...
}
```
- komutunu kullanarak artisana ait sunucuyu başlatabilirsin.
`php artisan serve`

# ►LARAVEL YAPISI
| SİSTEM  | YOL  |
| :------------ | :------------ |
| **Configs**       |  config/  |
| **Routes**        | routes/web.php  |
| **Controllers** | app/Http/Controllers/NameController.php  |
| **Models**       | app/Name.php  |
| **Views**          | resources/views/name.blade.php  |
| **Migrations** | database/migrations/...  |
| **Css, Js, Img**    | public/  |

------------

#### Laravelde php dosyalarının içinde kullanılması gereken bir takım kodlar bulunmakta. Bunlar aşağıdaki gibidir.
> namespace İÇİNDE\BULUNDUĞUN/DOSYANIN/KLASÖRÜ;

İçinde bulunulan php dosyasına yazılır.

> use IMPORT\EDİLECEK\DOSYA;

Dosya import etme işlemi.

# ►ARTİSAN VE ARTİSAN KOMUTLARI
Artisan laravel işlemlerini daha kısa yapmamızı sağlayan mini bir uygulamadır. Console ekranında komut yazarak çalıştırılır. Model, Controller, Migrate dosyaları oluşturulur.
### GENEL ARTİSAN KOMUTLARI
- `php artisan serve`

- `php artisan route:list` Tüm routeları konsola basar.

- `php artisan tinker` Console da laravel kodları yazmak için shell açar

- `php artisan cache:clear`

- `php artisan make:auth`

### YENİ MİGRASYONLAR OLUŞTURMAK
- `php artisan make:migration create_name_table`  Veritabanı tablosu oluşturmak için migration oluşturur.

- `php artisan make:migration create_name_table --create=name` İç şablonu otomatik oluşturur.

- `php artisan make:migration add_column_colname`  Yeni hücre eklemek için migration oluşturur

- `php artisan make:migration add_column_colname --table=tablename`

### MİGRASYONLARI ÇALIŞTIRMAK
- `php artisan migrate`  Migration dosyalarını çalıştırır.

- `php artisan migrate:reset` Migrasyonları silip baştan çalıştırır.

- `php artisan migrate:status`   Migraitonların durumunu gösterir.

- `php artisan migrate:refresh`  Tüm migrationları rollback yapıp baştan oluşturur.

- `php artisan migrate:rollback`  Son migrationu geri alır.

- `composer dump-autoload`  rollback çalışmaz ise

### CONTROLLER İLE ÇALIŞMAK
`php artisan make:controller Name` Name kısmına girilen isimde controller dosyası oluşturur ve temel kodları kendi yazar.

`php artisan make:controller Name --resource` Name kısmına girilen isimde bir controller dosyası oluşturur, temel kodları yazar ve show, edit, update, create, delete ve destroy isminde fonksiyonlar oluşturur.

### MODEL DOSYALARI İLE ÇALIŞMAK
`php artisan make:model Name`  Name kısmına girilen isimde bir model dosyası oluşturur ve içine temel kodları yazar.

`php artisan male:model Name -m`  Name kısmına girilen isimde bir model dosyası oluşturur ve id ile timestamps alanlarını kendi ekler.

# ►ROUTERLER, ROUTES DOSYASI VE İÇERİĞİ
#### "routes/web.php"
Routerlar internet tarayıcının adres çubuğuna ana domainden sonra yazılan adres devamına göre hangi controllerin hangi fonksiyonunun çalışacağını belirler. Örneğin: **http://domain.com/deneme**  adresine gititğimizde hangi kodun çallışacağını belirleriz.

## GENEL ROUTE OLUŞTURMA YÖNTEMLERİ
Routlar Önce Route sınıfının çağırılması ve sonra içindeki methodun parametreler girilerek çağrılmasıyla oluşur. Route sınıfı içinde GET, POST, PUT, PATCH, DELETE, OPTIONS methodları da bulunur.

```php
Route::get('path', "ControllerName@method_name");

/*
	Url ile değer göndermek için kullanılır ? işareti zorunlu olmadığı anlamına gelir.
	Controller fonksiyonu oluştururken aynı isimde parametre ismi verilerek alınır.
	Ör: public function methodname($id=None){  }
*/
Route::get('path/{id}', "ControllerName@method_name");
Route::get('path/{id?}', "ControllerName@method_name");

// Yapılacak işleme göre tip belirleyebiliriz. get metodunda POST işlemi yapılmaz.
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);

// Birden fazla method belirleyebiliriz.
Route::any('path/', 'Controllername@method');  // Tüm isteklere cevap verir.
Route::match(['get', 'post'], 'path/', 'Controllername@method');
```

### ROUTELARA İSİM VERMEK VE KOD İÇİNDE ÇAĞIRMAK
```php
Route::get('path', "ControllerName@method_name")->name('urlname');
Route::get('path', ["as" => 'urlname', "uses" => "ControllerName@method_name"]);
```
##### HTML BLADE DOSYALARINDA EKRANA YAZDIRMAK
    {{ route('urlname') }}
    {{ route('urlname', [ "key" = "val"]) }}
##### PHP DOSYASINDA ÇAĞIRMAK
```php
$url = route('urlname');
$url = route('urlname', [ "key" => "val" ]);

// controller methodunda yazılır ve yönlendirme yapmak için kullanılır.
return redirect()->route('urlname');
return redirect()->route('urlname', [ "key" => "val" ]);
```
## ROUTE PARAMETRELERİNE FİLTRE UYGULAYARAK GÜVENLİĞİ SAĞLAMAK
Sadece sayı ya da sadece string değerler göndermek istediğimizde bunu where yardımı ile yapabiliriz.

```php
Route::get('user/{name}',  		"ControllerName@method")->where('name', '[A-Za-z]+');
Route::get('user/{id}',  		"ControllerName@method")->where('id', '[0-9]+');
Route::get('user/{id}/{name}', 	"ControllerName@method")->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```
Her seferinde kural belirlemek yerinde tek bir seferde parametre isimlerine filtre uygulayabilir böylece aynı isimleri kullandığımız parametrelerde hep aynı kontrolün yapılmasını sağlayabiliriz.

```php
# Dosya: app/Providers/RouteServiceProvider.php

public function boot(){
	...
	Route::pattern('key', 'filtre');
	Route::pattern('id', '[0-9]+');
	Route::pattern('name', '[A-Za-z]+');
	...
}
```

## AYNI İSİMDE 2 KONTROLLER OLDUĞUNDA GROUP KULLANIMI
Bazen aynı isimde 2 veya daha fazla controller olabiliyor. Örneğin hem ana site controller dosyası hemde admin panel controller dosyasında aynı isimde olabilirler. Böyle durumlarda muhtemelen admin panel için olan dosyalar admin gibi bir klasör içinde saklanabilir. Çözüm olarak route group kullanarak namespace anahtarına controllerin klasör yolu verilir.

```php
Route::group(["namespace" => "Folder"], function(){
	Route::get('path', "NameController@method");
});
```

## ALT SUB DOMAİNLERDE ROUTE KULLANIMI
```php
Route::domain('{sub}.website.com')->group(function () {
	Route::get('user/{id}', function ($sub, $id) {
		#...
	});
});
```
## HEP AYNI YOL ALTINRA KULLANILACAK ROUTELAR İÇİN KULLANIM
Örneğin bir admin paneli yaptınız ve yol **siteismi.com/admin/...** şeklinde olacak ve her seferinde admin yazılı olacaksa aşağıdaki gibi kullanılmalı.
```php
Route::prefix('string_deger')->group(function () {
	# Routelar
});
```
## DİREKT YÖNLENDİRME İŞLEMLERİ
	 Route::redirect('/here', '/there', 301);

# ►CONTROLLER İLE ÇALIŞMAK
## CONTROLLER OLUŞTURMAK
- `php artisan make:controller ControllerName` komutu ile yeni bir controller oluştur.
- **app/Http/Controllers/ControllerName.php** dosyasını aç
- **class KelimeController extends Controller{ ... }** sınıfı içinde methodlar oluşturup kodları yazmaya başla.

------------


##### BASİT BİR CONTROLLER METHODU ÖRNEĞİ
```php
public function method_name($par=null){
	$datas = [ 'key'=>'val', 'key'=>'val' ];
	return view('viewfilename', $datas);
}
```

## CONTROLLER İLE VİEWS DOSYALARINA DATA GÖNDERMEK
#### 1. YÖNTEM
```php
$datas = [ 'key'=>'val', 'key'=>'val' ];
return view('viewfilename', $datas);
```
#### 2. YÖNTEM
```php
return view("viewfilename")->with('key', 'val');
```
#### 3. YÖNTEM
```php
$var1 = 'val';
$var2 = 'val2';
return view('viewfilename', compact('val1', 'var2'));
```


# =============================
║																																	║
### TEMPLATE YAPISI.
	@include ('header') => header.blade.php dosyasını include eder.
	@include ('footer') => footer.blade.php dosyasını include eder.
	{{ $degisken }} 	=> Ekrana yazar.
	{!! $degisken !!} 	=> html tagları çalıştırarak ekrana yazar.

	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# EXTENDS, YIELD İŞLEMLERİ
		• "master.blade.php oluştur"
		• Şablon oluştur ve değişken içerik alanına @yield ('content') kodunu ekle.
		• iç sayfalarsa @extedns ('master') şeklinde başlasın.
		• @section ('content')
			Kodlar
		  @endsection veya @stop
	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# YİELD VE SECTİONUN META GİBİ ALANLARDA KULLANIMI
		@yield ('name', 'default değer')
		@Section ('name', 'atanan değer')
     ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
     # SECTION KONTORLU
          @hasSection("name")
               @yield("name")
          @endif
	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# FOREACH
		@foreach ($datas as $data)
			{{ $data }}
		@endforeac
	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# İF SORGUSU
		@if (koşul)
		@else
		@endif


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
### MİGRATİONS ve DATABASE
	Laravel DATABASE bağlantısı gibi ayarlar `root/.env` dosyasında yapılır.
	Database ayarları yapıldıktan sonra `php artisan migrate` fonksiyonunu çalıştır.
	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# KENDİ MİGRATİONS DOSYAMIZI OLUŞTURMAK
		• `php artisan make:migration create_name_table` komutu ile migration dosyası oluştur.
		• migration dosyasının "up" fonksiyonuna oluşturlacak tablonun komutları yazılılr.
			``Schema::create('tablename', function($table){

	            
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
	            

	        });``


		• Migration geri alındığında tabloyu silmek istersek "down" fonksiyonuna silme kodu yaz.
			``Schema::drop('tablename');``
			``Schema::dropIfExists('tablename');``
			Schema::table('tablename', function(Blueprint $table){
				$table->dropColumn('col_name);
			});


		•! Eğer sonradan var olan bir tabloya başka bir hücre eklemek istenirse. Yeni migration oluşturulur.
		yada varsayılan migrate düzenlemesi ypaılınca `php artisan migrate:refresh` komutu çalıştırılırsa. Migrateler baştan çalışır.

		**NOT: İLK MİGRATE SIRASINDA
			 'Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes (SQL: alter table `users` add unique `users_email_unique`(`email`))'
			 'SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes'
			 HATASI ALIRSAM
			 app/provides/AppServiceProvider.php dosyasına gir ve
			 EKLE
			 use Illuminate\Support\Facades\Schema;
			 public function boot()
				{
				    Schema::defaultStringLength(191);
				}


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
### ORM YAPISI
	php artisan make:model Urun
	php artisan make:model Urun -m

	use App\Urun; // Modelin kullanılacağı sayfalarda modeli import etme kodu

	class Urun extends Model{
		protected $table = "dbtablename"; 	// tablo ismi "Uruns" değilse yaz.
		protected $primaryKey = "id";  		// primary key adı id olmayan modellere yaz
		public $timestamps = false; 		// timestamps kullanılmayan tabloların modellerinde yaz.
		// ORM İŞLEMLERİ
	}



	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# OLUŞTURMAK
		=YÖNTEM 1
		$data = new Modelname();
		$data->key = val;
		$data->save();

		=YÖNTEM 2
		$data = Modelname::create([
					'col' => 'val',
					'col' => 'val',
					'col' => 'val'
				]);

		=YÖNTEM 3
		DB:insert("insert into TABLO(col, col) VALUES(?,?), [val, val]);

		=YÖNTEM 4
		DB:table("tablename")->insert(Array(...));

		!NOT !NOT !NOT:
			YÖNTEM 2 kullanıldığında laravel hata verebilir. Bu durumda iyi bir filtre olak fillable kullanılmalı.
			Bu yöntemde posttan gelen bütün değerleri parametreye göndersek bile model sadece bizim belirlediğimiz alanları alır.
			Modelismi.php dosyasında model classı içinde
			protected $fillable = [ 'name', 'slug', 'user' ];
			create komudu ile ne gönderilirse gönderilsin laravel sadece "'name', 'slug', 'user'" alanlarını kullanır.


	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# GÜNCELLEMEK
		=YÖNTEM 1
		$data = Modelname::find(id);
		$data->key = 'New Value';
		$data->save();

		=YÖNTEM 2
		$data = Modelname::find(id);
		$data->update([ 'col'=>'val', 'col'=>'val' ]);

		=YÖNTEM 3
		DB::update("update TABLO set COL=? where COL=?", [NEWVAL, WHEREVAL]);

		=YÖNTEM 4
		DB::table('tablo')->where('id', 2)->update([...]);

	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# SİLMEK
		=YÖNTEM 1
		$data = Modelname::find(id);
		$data->delete();

		=YÖNTEM 2

		=YÖNTEM 3
		DB::delete("delete from TABLO where COL=?", [İD])

		=YÖNTEM 4
		DB::table('tablo')->where('id', 2)->delete();

	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	# GETİRMEK
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


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
### DATABASE İLİŞKİLENDİRMELERİ
	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	## ONE TO ONE
		Bir kullanıcının başka bir veritabanı tablosunda sadece 1 tane eşit satırı olduğu durumlarda kullanılır.

		# VERİTABANLARI
		=Users -> App\Users.php
			id | username

		=Phones -> App\Phones.php
			id | phone | user_id

		# EŞİTLEME
		• Users modeline gir ve class içinde bir fonksiyon oluştur ve içine dönmesini istediğin veriyi belirt
		→App/Users.php
			public function phone(){
				return $this->hasOne('App\Phones', 'user_id');
			}
		→App/Phones.php
			public function user(){
				return $this->belongsTo('App\Users', 'user_id');
			}

		# KULLANIMI
		Users::find(id)->phone->number;
		Phones::find(id)->user->username;

	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	## ONE TO MANY
		Örneğin bir kullanıcının başka bir tabloda çok fazla satırı olduğunda kullanılır

		# VERİTABANLARI
		=Users -> App\Users.php
			id | username

		=Comments -> App\Comments.php
			id | comment | user_id

		# EŞİTLEME
		→App/Users.php
			public function comments(){
				return $this->hasMany('App\Comments', 'user_id');
			}
		→App/Comments.php
			public function user(){
				return $this->belongsTo('App\Users', 'user_id');
			}

		# KULLANIMI
		$yorumlar = User::find(id)->comments;
		$yazan = Comments::find(id)->user->username;


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
### LARAVEL COLLECTIONLAR
	Laravelin kendi dizi sistemidir. $var = collect(dizi_objesi); şeklinde oluşturulur
	$vals = colect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	$vals = $vals->chunk(3); 			// { [1, 2, 3], [4, 5, 6], [7, 8, 9] }
	$vals = $vals->collapse()->all(); 	//[1, 2, 3, 4, 5, 6, 7, 8, 9])
	$vals->avg(); // Tüm sayıların ortalaması
	$vals->sum(); // Tüm sayıların toplamı
	$vals->count(); // Tüm sayıların ortalaması

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
### FORM İŞLEMLERİ
	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	### "filename.blade.php" DOSYALARINDA KULLANILABİLEN KODLAR
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	{{csrf_field()}} → Csrf kontrolü yapar.
	{{method_field('PUT')}} 	// <input type="hidden" name="_method" value="PUT">
	{{method_field('DELETE')}} 	// <input type="hidden" name="_method" value="DELETE">
	{{method_field('PATCH')}} 	// <input type="hidden" name="_method" value="PATCH">
	{{ $errors->all() }} 		// Validate den dönen hataları alır.

	@if( $errors->has('input_name') )
		{{ $errors->first('input_name') }}
	@endif

    ### ERRORLARI GÖSTERMEK
    @if($errors->any())
        @foreach($erros->all() as $error)
        @endforeach
    @endif

    ### KISA ERROR GÖSTERİMİ
    @error('name') {{ $message }} yada işlemler @enderror

	┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
	### VIEW FONKSİYONLARINDA KULLANILABİLEN KODLAR
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	public function controller_view_name(Request $request){ //Request $request requestten gelen değerleri barındırır.

		### FORMDAN GELEN VERİLERE KONTROLLER UYGULMALAK
		$this->validate($request, [
			'input_name' => 'required',
			'input_name' => 'required|max:5',

		]);

		### FORMDAN GELEN VERİLERE KONTROLLER UYGULAMAK VE TÜRKÇE FORM MESAJLARI YAZMAK
		$this->validate($request, [
			'input_name' => 'required',
			'input_name' => 'required|max:5',
		], [
			'input_name.required' => 'Hata için Türkçe mesaj'
			'input_name.max' => 'Hata için Türkçe mesaj'
		]);

		### ÖRNEK KOLAY KULLANIM
        public function pagePost(Request $request){
            $this->validatePage($request);
            // İŞLEMLER
        }
        protected function validatePage(Request $request){
            $request->validate(
                    [  ..., kontroller ],
                    [  ..., mesajları ]
                );
        }


	}






######### İLİŞKİLER
OTOMATİK INNER JOİN İŞLEMLERİ YAPABİLDİĞİMİZ ALANLAR
PYTHON DJANGO DA OLDUĞU GİBİ
ONE TO ONE
ONE TO MANY
MANY TO MANY


## ONE TO ONE
TABLODAKİ 1 SATIRIN DİĞER TABLODAKİ SADECE 1 SATIRLA EŞİT OLDUĞU ZAMANLAR KULLANILIR
ÖR: ÜYELER, CVLER ve PROFİL BİLGİLERİ diye 3 farklı tablo olduğunu düşünelim.
Her üyenin sadece 1 satır CV si ve sadece 1 kayıtlık Profil bilgisi olur.

### ÖRNEKLİ ANLATIM MODELLERİ
•User.php | MODEL: User	| TABLE: users 	| COLUMNS: id, username, password, email
•Cv.php   | MODEL: Cv   | TABLE: cvs	| COLUMNS: id, user_id, school, languages

→	User.php
	public function cv(){
		return $this->hasOne('App\Cv', 'user_id', 'id');
	}

→	Cv.php
	public function user(){
		return $this->belongsTo('App\User', 'user_id', 'id');
	}


## ONE TO MANY
ONE TO ONE DAN FARKI HER BİR KULLANICININ BİRDEN FAZLA BAĞLI SATIRI OLDUĞUNU DÜŞÜNEBİLİRİZ.
ÖR: 1 ÜYENİN BİRDEN FAZLA MAKALESİ veya YORUMU OLABİLİR.

### ÖRNEKLİ ANLATIM MODELLERİ
•User.php | MODEL: User	| TABLE: users 	| COLUMNS: id, username, password, email
•Post.php | MODEL: Post | TABLE: posts	| COLUMNS: id, user_id, title, content

→	User.php
	public function posts(){
		return $this->hasMany('App\Post', 'user_id', 'id');
	}

→	•Post.php
	public function user(){
		return $this->belongsTo('App\User', 'user_id', 'id');
	}


## MANY TO MANY
ARATABLOLARIN KULLANILDIĞI ZAMANLARDA KULLANILMASI GEREKEN BİR SİSTEMDİR.
ÖRNEĞİN BİR E-TİCARET SİTESİNDE 1 KULLANICI 1 DEN FAZLA ÜRÜN ALABİLECEĞİ GİBİ
1 ÜRÜNÜ BİRDEN FAZLA KULLANICI SATIN ALABİLİR
BU DURUMDA ÜRÜNLER İLE KULLANICILAR TABLOSU ARASINA BAŞKA BİR TABLO EKLENİR.
VEYA ÇOKLU KATEGORİ İŞLEMLERİNDE

### ÖRNEKLİ ANLATIM MODELLERİ
•User.php 	 | MODEL: User		| TABLE: users 		| COLUMNS: id, username, password, email
•Upconn.php  | MODEL: Upconn  	| TABLE: upconn		| COLUMNS: id, user_id, product_id, kargo, created_at, updated_at
•Product.php | MODEL: Product   | TABLE: products	| COLUMNS: id,  title, image

→	User.php
	public function products(){
		return $this->belongsToMany('App\Product', 'upconn', 'user_id', 'product_id');
	}

→	•Product.php
	public function user(){
		return $this->belongsToMany('App\User', 'upconn', 'product_id', 'user_id');
	}

## MANY TO MANY DE WHERE SORGUSU
BİR KATEGORİYE AİT OLAN YAZILARI ÇEKMEK İÇİN KULLANDIĞIM İŞLEM
$items = $items->whereHas( 'app_icinde_belongs_to_olarak_çalıştırdım_fonksiyonun_adı', function($q) use($catID){
    $q->where('bağlantı_tablosundaki_kategori_id_hücresi', $catID);
} );

## MANY TO MANY PİVOT
MANY TO MANY DE İÇERİKLERİ ÇEKTİĞİNİZDE ARA TABLODA SADECE BAĞLANTI HÜCRELERİ GERİ DÖNECEKTİR.
ÖRNEĞİN SİZ ARA TABLODA ÜRÜNÜN HANGİ KARGO İLE ALINDIĞINI VEYA ZAMAN TARİH GİBİ VERİLERİ ALDINIZSA BUNLAR GELMEZ
BU İŞLEMLERİ MODEL İÇİNDE belongsToMany FONKSİYONUNA ZİNCİRLEYEREK YAPARIZ.

->withTimestamps();
->withPivot('col_name');
return $this->belongsToMany('App\Product', 'upconn', 'user_id', 'product_id')->withTimestamps()->withPivot('kargo');


## HAS MANY THROUGH İŞLEMLERİ
KULLANICILAR, ŞEHİRLER ve MAKALELER olarak 3 tablo düşünelim.
1 ŞEHİRDE OTURAN KULLANICILARIN MAKALELERİNİ GETİRMEK İÇİN KULLANILIR.

### ÖRNEKLİ ANLATIM MODELLERİ
•User.php | MODEL: User	| TABLE: users 	| COLUMNS: id, username, password, email, city_id
•Post.php | MODEL: Post | TABLE: posts	| COLUMNS: id, user_id, title, content
•City.php | MODEL: City | TABLE: cities	| COLUMNS: id, name, description

→	•City.php
	public function posts(){
		return $this->hasManyThrough(	'App\Post', 'App\User',
										'user_id', 	'city_id', 	'id');
	}

## POLYMORPHIC ONE TO MANY
BİR ÇOK TABLONUN ORTAK ÖZELLİKLERİNİ TEK TABLODA TUTARKEN KULLANILIR.
ÖR: MAKALELER, UYELER, KATEGORİLER ve SAYFALAR ADINDA 4 TABLO OLSUN.

VE HEPSİNİN PROFİL VE KAPAK FOTOĞRAFLARI ORTAK BİR TABLODA TOPLANSIN: IMAGES

•User.php  | MODEL: User	| TABLE: users 	| COLUMNS: id, username, password, email, city_id
•Post.php  | MODEL: Post 	| TABLE: posts	| COLUMNS: id, user_id, title, content
•Page.php  | MODEL: Page 	| TABLE: pages	| COLUMNS: id, title, content
•Media.php | MODEL: Media   | TABLE: medias	| COLUMNS: id, url, alt, connect_id, connect_type (App\User, App\Post)

→ 	User.php
	public function medias(){
		return $this->morphMany('App\Media', 'connect');
	}

→ 	Post.php
	public function medias(){
		return $this->morphMany('App\Post', 'connect');
	}

→ 	Media.php
	public function medias(){
		return $this->morphMany('App\Media', 'connect');
	}

→ 	Media.php
	public function imageable(){
		return $this->morphTo();
	}


## POLYMORPHIC ONE TO MANY
POLYMORPHIC ONE TO MANY ÖRNEĞİNDE HER ÜYE HER İÇERİK HER SAYFA SADECE TEK BİR RESİME BAĞLANABİLİYORDU.
BU YÖNTEMDE AYNI 1 RESMİ HEM ÜYE HEM İÇERİK HEMDE SAYFA KULLANABİLİR.



## ACCESSOR
DATABASEDEKİ VERİLERİ MODELDE FİLTRELEMEYE VE ÜZZERİNDE OYNAMAYA YARAR.

	// ColumnName değerini büyük yazar
	public function getColumnNameAttribute($value){
		return strtoupper($value);
	}
	Model::find(id)->ColumnName;

## MUTATORS
DATABASEDEKİ VERİLERİ MODELDE KAYDEDERKEN FİLTRELEMEYE YARAR.
YANİ VERİ KAYDOLURKEN VE GÜNCELLENİRKEN MÜDAHALE EDER

	// ColumnName değerini küçük yazar
	public function setColumnNameAttribute($value){
		$this->attributes['ColumnName'] = strtolower($value);
	}

## APPEND CUSTOM
VERİTABANINDA OLMAYAN AMA MODELDE BELİRLEDİĞİMİZ HÜCRELER

	public function getMethodNameAttribute(){
		return $this->colname . ' ' . $this->colname2;
	}
	protected $appends = ['method_name']; // MethodName = method_name

## GETİRİLEN VERİLERDE GİZMELEK İSTEDİĞİMİZ ALANLARI AYARLAMAK
	Modelname.php dosaysında
	protected $hidden = ['password', 'token'];




╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
# FORM LOGİN KULLANICI İŞLEMLERİ
php artisan make:auth // Kullanıcı giriş, kayıt, çıkış, hatırla sayfalarını oluşturup çalıştırır.


Auth::attempt([ 'name' => 'username', 'password' => 'xxxx' ]);  		//Login işlemi true|false
Auth::attempt([ 'name' => 'username', 'password' => 'xxxx' ], true); 	//Beni hatırla yapar

$user = User::find(id);
Auth::login( $user ); // Login yapma 2

Auth::logout(); // Çıkış yapar

Auth::user(); // Giriş yapmış kullanıcının bilgilerini verir.

Auth::check() 			// Kullanıcı giriş yapmış mı diye sorgular.
Auth::viaRemember(); 	// Kullanıcı beni hatırla demiş mi?
Auth::guest() 			// Kullanıcı giriş yapmamış ise true döner.


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
# SESSION İŞLEMLERİ
## SESSION AYARLARI
• config/session.php
	driver = Session dosyaları nerede tutulacak.
	lifetime = Session dataları ne kadar süre tutulacak
	expire_on_close = tarayıcı kapandığında silinsin mi
	encrypt = Dosyalar şifrelensin mi


## SESSION KULLANIMI
Session::all(); 				// Tüm session elemanlarını getirir.
Session::put('key', 'value'); 	// Sessiona bilgi ekleme
Session::forget('key'); 		// Sessiondan bilgi siler.
Session::get('key');			// Session değerini getirir.

// key anahtarlı bir dizi oluşturur.
Session::push( 'key', 'val1' );
Session::push( 'key', 'val2' );
Session::push( 'key', 'val3' );

Session::flush(); 	// Tüm sessionları siler.

## FLASH DAHA OLUŞTURMAK
Session::reflash('key'); // Flashı bir kez daha gösterir.
Session::flash('key', 'val'); // Bir sonraki sayfada session silinir.


## SESSION KAYITLARINI DATABASEDE TUTMAK
→	config/session.php
	driver = database
	conenction = mysql
→	.env
	SESSION_DRIVER = database
> php artisan session:table


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
# MIDDLEWARELER
MIDDLEWARE İŞLEMLER BAŞLAMADAN ÖNCE ARAYA SOKULABİLEN KODLARDIR.
ÖRNEĞİN BİR SAYFAYA ÜYE OLLMAYANIN GİRMESİNİ İSTEMİYORSAK SAYFA İŞLEMİNDEN ÖNCE
GEREKLİ SORGUYU YAPACAK MIDDLEWARE DOSYASINI ÇALIŞTIRIP İŞLEM YAPTIRABİLİRİZ.

- `php artisan make:middleware MiddleWareName`

- **app/Http/Controllers/Middleware/MiddleWareName.php** Oluşmuştur. İçinde yapılacak değişiklikler
```php
public function handle($request, Closure $next){
	// İŞLEMLER BU BÖLÜMDE YAPILACAK.
	return $next($request); // Bu komut sayfa devam edecekse çalışmalı. Yönlendirme yapılacaksa çalışmamalı
	// Ör: admin sayfasında üye admin ise next komutu çalışacak değilse örneğin redirect çalıştır.
}
```

- app/Http/Kernel.php dosaysını aç ve şuraya middlewarei bir isim girerek ekle
```php
protected $routeMiddleware = [
	...,
	'middlware_name' => \App\Http\Middleware\MiddleWareName::class
];
```

- Daha sonra controllers dosyasına gir ve istediğin funksiyonun içine başına `$this->middleware('middlware_name');` şeklinde ekleme yap.

Başka bir yöntem olarak route dosyasında rootdan sonra ->middleware(['middlewarenname']); şeklinde direkt routa atayabiliriz.
VEYA
Route::group([ 'middleware' => 'name' ], function(){
	Route::get();
});

Not: Kernel dosyasında middlewaresGroup içindeki web anahtarındaki middlewareler tüm sayfalarda çalışır.

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
# LARAVEL SAYFALAMA İŞLEMLERİ
$items = Modelname::simplePaginate(x);	// Sayfalama: 	<< >>
$items = Modelname::paginate(x);		// Sayfama:		<< 1 2 3 ... >>
$items->links();	//Sayfalama linklerini direk yazdırır.

$items->total()
$items->lastPage()
$items->perPage()
$items->currentPage()
$items->query()
$items->onEachSide()
$items->options()

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
# LARAVEL TARİH ZAMAN İŞLEMLERİ
use Carbon\Carbon;
Carbon::setLocale('tr');
setLocale(LC_TIME, 'tr_TR');

Carbon::createFromDate(1991); // 1991-GÜNÜN TARİHİ
Carbon::createFromDate(1991, 12); // 1991-12-GÜNÜN TARİHİ

Carbon::now(); 				// Şuanın tarihi
Carbon::now()->addDay(); 	// 1 gün sonraki tarih
Carbon::now()->addDay(x); 	// x gün sonraki tarih
Carbon::now()->addHour(x);	// x saat sonraki tarih
Carbon::now()->addYear(x);	// 1 yıl sonraki tarih
Carbon::now()->subYear(x);	// x yıl önceki tarih
Carbon::now()->subDay(x); 	// x gün önceki tarih

Carbon::today(); 		// Bugünün tarihi
Carbon::tomorrow(); 	// Yarın
Carbon::yesterday(); 	// Dün

Carbon::now()->difForHumans(); 	// xx x önce
Carbon::createFromDate(yıl, ay, gün)->difInDays(); 		// Şuan ile aradaki gün farkı
Carbon::createFromDate(yıl, ay, gün)->difInHours(); 	// Şuan ile aradaki saat farkı

Carbon::createFromDate(2018, 11, 13)->formatLocalized('%A %d %B %Y')// Pazartesi 13 Kasım 2018

{{ $item->created_at->difForHumans() }}

Model dosyalarında protected $dates = ['col_name']; // şeklinde tanıtmamız gerrekir. createt_at hariç

╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║																																	║
# LARAVEL DİL İŞLEMLERİ

→ 	config/app.php
	'locale' => 'tr'
	'fallabck_locale'	=>	'en' // Dil mevcut değilse hangi dil çalışsın.

→ 	`resources/lang/tr/*.php`
	return [
		"key" => "Anlamı 1",
		"key2" => "Anlamı 2",
	]

→	route/web.php
	Route::get('/{locale}', function($locale){
		App::setLocale($locale);
		App::getLocale();
		App::isLocale("tr");
	});

→ 	view/viewname.blade.php
	@lang('langfilename.key')
	veya
	{{ trans('langfilename.key') }}




## URL DEĞİŞKENLERİ
> url("");               // http://127.0.0.1:8000

> url("deneme/1/2");     // http://127.0.0.1:8000/deneme/1/2

> url()->current()       // O anki url

> url()->previous();     // Önceki sayfa

> url()->full()          // Tam url (?x=z gelmez)

>Request::fullUrl()      //http://127.0.0.1:8000/blog/categories

>Request::url()          // http://127.0.0.1:8000/blog/categories

>Request::getRequestUri() // /blog/categories?=all



## RESİM BOYUTLANDIRMA KIRPMA GİBİ İŞLEMLER İÇİN
// http://image.intervention.io
> composer require intervention/image

→    config/app.php
     ($providers içine)
          Intervention\Image\ImageServiceProvider::class
     ($aliases  içine)
          'Image' => Intervention\Image\Facades\Image::class

     NOT: SUNUCUDA GD KÜTÜPHANESİ KURMAK (gerekirse ve yapılabilirse)
     PHP5: sudo apt-get install php5-gd
     PHP7: sudo apt-get install php7.0-gd

→    app/Http/Controllers/name.php
     ### CONTROLLER İÇİNDE KÜTÜPHANE ÇAĞIRMAK
     use Intervention\Image\ImageManagerStatic as Image;

     $image_resize = Image::make($resimYolu);              
     $image_resize->resize(w, h);
     $image_resize->save("dosyayolu/dosyaadi.uzanti");
     // public_path('uploads/' .$filename)




// KENDİ PHP HELPER DOSYALARINI OLUŞTURMAK
    • "app" klasörü içinde "Helpers" adında bir klasör oluştur.
    Helpers klasörü içine "Functions.php" oluştur.

    • "composer.json" dosyası içine git ve

    ```
    "autoload": {
        ...,

        "files":[
             "app/Helpers/Functions.php",
        ]
    }
    ```
    Command ekranında
    `composer dump-autoload` komutunu çalıştır.



# HOSTİNGDE YAYINLAMA İŞLEMİ

  - tüm dosyaları public_html dizinine at
  - server.php adını index.php olarak değiştir
  - public/.htaccess dosyasını ana dizine kopyala
  - tema içindeki css,js gibi dosyaları public/.. olarak göster
