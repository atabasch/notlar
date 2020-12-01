#### function.php de menü konumu oluşturmak
```php
function register_my_menu(){
    register_nav_menu('menu-slug', __('Admin Menülerde görünecek isim'));
}
add_action('init', 'register_my_menu')
```

#### Tema Dosyasına
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
