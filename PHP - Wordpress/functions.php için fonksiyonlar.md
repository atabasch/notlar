# Admin Header Bar Kaldırmak
```php
function remove_admin_bar(){
    show_admin_bar(false);
}
add_action('after_setup_theme', 'remove_admin_bar');
```

# Temaya Stil & JavaScript Dosyalarını Eklemek
Script ekleme kodlarının çalışması için `wp_header()` ve `wp_foot()` fonksiyonlarının eklenmiş olması gerekir.
```php
function add_stylesheets(){
        wp_enqueue_style('custom_id', get_template_directory_uri().'/filename.css', array(), '1.1', 'all');
        wp_enqueue_style('custom_id', get_stylesheet_uri()); // style.css
        wp_enqueue_style('custom_id', 'https://.......', array(), '1.1', 'all');
}
add_action('wp_enqueue_scripts', 'add_stylesheets');
```

```php
function add_scripts(){
            wp_enqueue_script('jquery'); // WP içinde vr olduğu için jquery otomatik eklenir.
        wp_enqueue_script('custom_id', get_template_directory_uri().'/script.js', ); // script.css
        wp_enqueue_script('custom_id', 'https://.......', array('jquery'), '1.1', true); // 5. parametre true olursa script footer a eklenir.
}
add_action('wp_enqueue_scripts', 'add_scripts');
```


# Klasik Wordpress Düzenleyicisini Kullanmak
```php
add_filter( 'use_block_editor_for_post_type', '__return_false', 100 );
```


# Menüleri Aktifleştirmek
```php
add_theme_support( 'menus' );
```



# Öne çıkan kapak fotoğrafını aktif etmek
```php
add_theme_support( 'post-thumbnails' );

//Görsel boyutlarını  özelleştirmek
add_image_size( $name, $width, $height, $crop = false );
add_image_size( 'small', 400, 300, true );
add_image_size( 'medium', 850, 500 );
```

Ortam ayarlarından Görsel boyurlarını 0 olarak belirlersen varsayılan boyutlarda görseller oluşturmayacaktır.

**NOT:** Bu kodları yazdıktan sonra yüklenen görseller kırpılmazlar. Eğer daha önce yüklenmiş fotoğrafları kırpmak istersen **Regenerate Thumbnails** eklentisini indir. By Alex Mills



```php

```



```php

```
