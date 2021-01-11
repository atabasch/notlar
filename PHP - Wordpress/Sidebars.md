# functions.php de bir sidebar kaydet
```js
function custom_sidebars() {

	$args = array(
		'id'            => 'frontpage-sidebar',
		'class'         => 'fp_sidebar',
		'name'          => 'Frontpage Sidebar',
		'description'   => 'Anasayfa Sidebarı',
		'before_title'  => '<h2 class="sideTitle">',
		'after_title'   => '</h2>',
		'before_widget' => 'div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
	);
	register_sidebar( $args );

}
add_action( 'widgets_init', 'custom_sidebars' );
```

# Sidebarı temaya dahil etmek
```php
if(is_active_sidebar( 'sidebar-id' )){
    dynamic_sidebar( 'sidebar-id' )
}
```
