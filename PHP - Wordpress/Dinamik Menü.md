### functions.php den menüleri aktifleştir.
```php
add_theme_support( 'menus' );
```

#### function.php de menü konumu oluşturmak
```php
// 1. Yöntem
register_nav_menus(
    [
        'header-menu'   => __('Açıklama'),
        'main-menu'     => __('Açıklama'),
        'footer-menu'   => __('Açıklama'),
    ]
);


// Fonksiyon ile tek tek
function register_my_menu(){
    register_nav_menu('header-menu', __('Admin Menülerde görünecek isim'));
    register_nav_menu('main-menu', __('Admin Menülerde görünecek isim'));
    register_nav_menu('footer-menu', __('Admin Menülerde görünecek isim'));
}
add_action('init', 'register_my_menu')


// Array ile multi olarak
function register_my_menu(){
    $menus = [
        'header-menu'   => __('Açıklama'),
        'main-menu'     => __('Açıklama'),
        'footer-menu'   => __('Açıklama'),
    ]
    register_nav_menus($menus);
}
add_action('init', 'register_my_menus')


```


#### Tema Dosyasında menüyü yazdırmak
```php
wp_nav_menu(array(
    'menu'                 => '',
    'container'            => 'div',
    'container_class'      => '',
    'container_id'         => '',
    'container_aria_label' => '',
    'menu_class'           => 'id_classı',
    'menu_id'              => 'ul_idsi',
    'echo'                 => true,
    'fallback_cb'          => 'wp_page_menu',
    'before'               => '',
    'after'                => '',
    'link_before'          => '',
    'link_after'           => '',
    'items_wrap'           => '<ul id="%1$s" class="%2$s">%3$s</ul>',
    'item_spacing'         => 'preserve',
    'depth'                => 0,
    'walker'               => '',
    'theme_location'       => 'olusturulan_tema_adi',
));
```
