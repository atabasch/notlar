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


#
