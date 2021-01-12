Wordpress tema kodlarken WP_Query dışında direkt sql kodları ile veri getirilebilir..
Bunun için **$wpdb** global değişkenini çağırığ **get_results(sql, output_type)** methodu kullanılmalı.;

- **OBJECT** – $result->key
- **OBJECT_K** - result will be output as an associative array of row objects, using first column’s values as keys (duplicates will be discarded).
- **ARRAY_A** – $result["key"]
- **ARRAY_N** – $result[index]

```php
// 1. Yöntem
global $wpdb;
$reults = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}options WHERE option_id = 1", OBJECT);


// 2. Yöntem
$results = $GLOBALS['wpdb']->get_results( "SELECT * FROM {$wpdb->prefix}options WHERE option_id = 1", OBJECT );
```

## Tek 1 satır döndürmek
```php
$mylink = $wpdb->get_row( "SELECT * FROM $wpdb->links WHERE link_id = 10", ARRAY_A );
```


## Tek 1 değer döndürmek
```php
$user_count = $wpdb->get_var( "SELECT COUNT(*) FROM $wpdb->users" );
```


## Prepare ile güvenli insert işlemi
```php
$metakey   = 'Funny Phrases';
$metavalue = "WordPress' database interface is like Sunday Morning: Easy.";

$wpdb->query(
   $wpdb->prepare(
      "INSERT INTO $wpdb->postmeta ( post_id, meta_key, meta_value ) VALUES ( %d, %s, %s )",
      10,
      $metakey,
      $metavalue
   )
);



// 2. yöntem
$wpdb->query(
   $wpdb->prepare(
      "INSERT INTO $wpdb->postmeta ( post_id, meta_key, meta_value ) VALUES ( %d, %s, %s )",
      array(10, $metakey, $metavalue)
   )
);
```
