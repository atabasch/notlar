# Default Loop: Tema dosyalarına gelen içerikleri almak
```php
if(have_posts()){

    while(have_posts()){

        the_post();
        // İçerik bilgi fonksiyonları

    }

}else{

}
```

# İçerik Bilgi Fonksiyonları
| Fonksiyon | Açıklama |
|---|---|
| get_the_ID()  |   |
| get_the_title() |  |
| the_title() |  |
| get_the_excerpt() |  |
| the_excerpt() |  |
| get_the_content() |  |
| the_content() |  |
| single_cat_title() |  |
| get_the_permalink() |  |
| the_permalink() |  |
| has_post_thumbnail() |  |
| get_the_post_thumbnail_url($size) |  |
| the_post_thumbnail_url($size) |  |
|  |  |
|  |  |
|  |  |
|  |  |
