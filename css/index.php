<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="helper.css">
</head>
<body>

<h1>Renk Siniflari</h1>
<?php
$colorClasses = [
    "red",
    "pink",
    "purple",
    "purple-alt",
    "indigo",
    "blue",
    "blue-alt",
    "cyan",
    "green",
    "green-alt",
    "lime",
    "yellow",
    "orange",
    "orange-alt",
    "brown",
    "gray",
];
$colorToneClasses = ["darker", "dark", "", "light", "lighter"];
?>

<?php foreach ($colorClasses as $color): ?>
<div class="d-flex gap-3 mb-3">

    <?php foreach ($colorToneClasses as $tone): $bgClassName = "bg-" . $color . ($tone? "-".$tone : ""); ?>
    <div class="<?php echo $bgClassName; ?> ratio ratio-3x1 text-center text-white">
        <div class="d-flex align-items-center">
            <span class="w-100 text-center p-2" style="background: rgba(0,0,0,0.15)"><?php echo $bgClassName; ?></span>
        </div>
    </div>
    <?php endforeach; ?>

</div>
<?php endforeach; ?>



<h3>Metin Boyutlari</h3>
<?php
for($i = -4; $i <= 10; $i++){
    echo "<p class='fs-".$i."'>Bu yazi boyutu icin <code>fs-".$i."</code> sinifini kullanin.</p>";
}
?>

<h3>Basliklar</h3>
<?php
for($i = 1; $i <= 7; $i++){
    echo "<p class='h".$i."'>Bu baslik icin <code>h".$i."</code> sinifini kullanin.</p>";
}
?>









<h1>Butonlar</h1>
<button class="btn bg-green">Buton Yazisi</button>
<button class="btn bg-cyan">Buton Yazisi</button>
<button class="btn bg-orange">Buton Yazisi</button>
<button class="btn bg-red">Buton Yazisi</button>
<hr>
<button class="btn bg-green dark">Buton Yazisi</button>
<button class="btn bg-cyan dark">Buton Yazisi</button>
<button class="btn bg-orange dark">Buton Yazisi</button>
<button class="btn bg-red dark">Buton Yazisi</button>
<hr>
<button class="btn bg-green to-dark">Buton Yazisi</button>
<button class="btn bg-cyan to-dark">Buton Yazisi</button>
<button class="btn bg-orange to-dark">Buton Yazisi</button>
<button class="btn bg-red to-dark">Buton Yazisi</button>
<hr>
<button class="btn bg-purple dark to-dark radius-0">Buton Yazisi</button>
<button class="btn bg-purple dark to-dark radius-2">Buton Yazisi</button>
<button class="btn bg-purple dark to-dark radius-3">Buton Yazisi</button>
<button class="btn bg-purple dark to-dark radius-pill">Buton Yazisi</button>
<button class="btn bg-purple dark to-dark radius-circle">Buton Yazisi</button>
<button class="btn bg-purple dark to-dark radius-circle">X</button>
<hr>
<button class="btn bg-purple dark sm">Small</button>
<button class="btn bg-purple dark md">Medium</button>
<button class="btn bg-purple dark">Normal</button>
<button class="btn bg-purple dark lg">Large</button>
<button class="btn bg-purple dark xl">XLarge</button>

<h2>GÖLGELER</h2>
<div class="p-5 my-7 mx-7 shadow-1"></div>
<div class="p-5 my-7 mx-7 shadow-2"></div>
<div class="p-5 my-7 mx-7 shadow-3"></div>
<div class="p-5 my-7 mx-7 shadow-4"></div>
<div class="p-5 my-7 mx-7 shadow-5"></div>
<div class="p-5 my-7 mx-7 shadow-6"></div>
<div class="p-5 my-7 mx-7 shadow-7"></div>
<div class="p-5 my-7 mx-7 shadow-8"></div>
<div class="p-5 my-7 mx-7 shadow-9"></div>
<div class="p-5 my-7 mx-7 shadow-10"></div>


</body>
</html>
