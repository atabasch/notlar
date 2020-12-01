# HTML CANVAS
**Canvas** html 5 ile gelmiş bir html objesidir. Ve html olarak tek görevi bir resim tuvali oluşturmaktır.
**id**, **width** ve **height** özellikleri en başlıca girilmesi gereken taglardır. Bunun dışında **canvas** objesi
Çok az miktarda css ve geneli javascript ile kontrol edilen bir resim çizme tuvalidir.
Javascript kullanılarak canvas ile resimler oluşturulur.

## ARAŞTIR
.save();
.restore();

## TEMEL BAŞLANGIÇ
> <canvas id="tuval" width="300" height="200"></canvas>

```js
var canvas = document.getElementById('tuval');
var ctx    = canvas.getContext("2d");

//Diğer tüm işlemler için
ctx.xxxx
```

### CANVAS DESTEĞİ YOKSA UYARI VERDİRMEK
```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

### KARE VEYA DİKDÖRTGEN ÇİZMEK
```js
ctx.fillStyle = "renkkodu";
ctx.fillRect( x, y, width, height );
```

### DAİRE ÇİZMEK
```js
ctx.fillStyle = 'black';    // İç dolgu rengi;
ctx.strokeStyle = 'red';    // Kenarlık rengi
ctx.lineWidth = 5;          // Kenar çizgi kalınlığı
ctx.beginPath();            // Çizime başla

ctx.arc(x, y, width(Yarıçap genişliği), başlangıçnoktası(0 = saat 3 konumu), bitişnoktası(PI sayısı yarım daire, PI*2 tam daire), tersçizim(true|false)  );
// Yarım daire
ctx.arc(100, 75, 50, 0* Math.PI, 1 * Math.PI);              // ALT
ctx.arc(100, 75, 50, 0* Math.PI/180, 180 * Math.PI/180);    // ALT
ctx.arc(100, 75, 50, 180* Math.PI/180, 160 * Math.PI/180);  // ÜST

// Tam daire
ctx.arc(100, 75, 50, 0* Math.PI, 2 * Math.PI);
ctx.arc(100, 75, 50, 0* Math.PI/180, 360 * Math.PI/180);

// çeyrek daire
ctx.arc(100, 75, 50, 0* Math.PI, 0.5*Math.PI);
ctx.arc(100, 75, 50, 0* Math.PI/180, 90*Math.PI/180);       // SAĞ ALT
ctx.arc(100, 75, 50, 90* Math.PI/180, 180*Math.PI/180);     // SAL ALT
ctx.arc(100, 75, 50, 180* Math.PI/180, 270*Math.PI/180);    // SOL ÜST
ctx.arc(100, 75, 50, 270* Math.PI/180, 360*Math.PI/180);    // SAĞ ÜST

ctx.closePath();            // Tam daire olmayan çizimlerde başlangıç ve bitiş noktalarını birleştiren otomatik düz bir çizgi ekler.
ctx.fill();     // İçini boya
ctx.stroke();   // Kenarlarını çiz
```

### SADECE BORDERDAN OLUŞAN BİR DİKDÖRTGEN ÇİZMEK
```js
ctx.shadowColor = '#000';
ctx.shadowBlur = 20;
ctx.lineJoin = 'bevel'; // köşelerin şekli
ctx.lineWidth = 15;
ctx.strokeStyle = "renkkodu";
ctx.strokeRect( x, y, width, height );
ctx.clearRect( x, y, width, height ); // kare içini silmek
```

### CREATE PATTERN İLE RESMİ ARKAPLAN YAPMA
```javascript
resim = document.getElementById("imgID");
doldur = ctx.createPattern(resim, "repeat");
ctx.fillStyle = doldur;
ctx.fillRect(0, 0, tuval.width, tuval.height);
```

### BİR RESMİ CANVASA ÇİZMEK
```js
resim = document.getElementById("imgObjectID");
ctx.drawImage( resim, X, Y );
```

//Resmin X ve Y koordinatından W ve H kadar kısmını,
// Tuvalin X ve Y sinden başlayıp W ve H boyutlarında çiz.
// Tuvalin W ve H sine göre resim büyük yada küçük olarak çizilir
ctx.drawImage( resim, resimX, resimY, resimWidth, resimHeight, tuvalX, tuvalY, tuvalWidth, tuvalHeight );

### CANVAS ÜZERİNDE MOUSE KOORDİNATLARINI ALMAK
> <canvas onmousemove="funcName(event)"></canvas>
```javascript
<script>
	function funcName(e){
		e.layerX
		e.layerY
	}
</script>
```


## TRANSLATE, SCALE, ROTATE
#### TRANSLATE
Tuvalin X ve Y başlangıç noktasını değiştirir.
Yani tuvalin 0x0 noktası değişir.
Böylece rotate işlemlerini daha rahat yapabilirsin.
```js
ctx.fillRect(X, Y, W, H);
ctx.translate(newX, newY);
```

#### ROTATE
```js
ctx.rotate(Açı);
```

#### SCALE
```js
ctx.scale(2, 1); // Resmi %200 %100 BÜYÜTÜR
```

### ÇİZGİ ÇİZMEK
```js
ctx.fillStyle = "renk"; // Çizili alanın içi doldurulacaksa dolgu rengi.
ctx.strokeStyle = "renk";   // Çizgilerin rengi
ctx.lineWidth = Xpx; // Çizginlerin kalınlığı;

ctx.beginPath(); // Çizimi başlatır.
ctx.moveTo(X, Y); // Kalem ucunu koordinata taşır.
ctx.lineTo(X, Y); // Koordinata nokta koyar
ctx.lineTo(X, Y); // Koordinata nokta koyar
ctx.lineTo(X, Y); // Koordinata nokta koyar
ctx.closePath(); // Bunu eklersen başlangıç noktası ile en son noktayı birleştirir.
ctx.fill(); // Çizgilerin içini doldurur.
ctx.stroke();	// noktaları çizgi ile birleştirerek çizgileri oluşturur.
```
### YUMUŞAK DÖNÜŞLÜ OVAL ÇİZGİ ÇİZMEK
```js
ctx.beginPath();
ctx.moveTo(X, Y);
ctx.bezierCurveTo(1X, 1Y, 2X, 2Y, 3X, 3Y);
ctx.stroke();
```

## 	PİXEL MANUPİLASYON
Resmin pixel pixel renkleri ile oynamak
```javascript
resim = document.getElementById("reimID");
ctx.drawImage(resim, 0, 0);
var resimdata = ctx.getImageData(X, Y, W, H); // X Y koordinatında W ve H kadar yerin bilgilerrini al. R,G,B,A
var resimdata = ctx.getImageData(100, 50, 1, 1);
// YAPILACAKSA PİKSELLERDE DEĞİŞİKLİK YAP
ctx.putImageData(resimdata, 0, 0);
```


## OPACITY
```js
ctx.globalAlpha = 0.50;
ctx.fillStyle = "COLOR";
ctx.fillRect(x, y, w, h);
```

## GLOBALCOMPOSITIONOPERATION
Bir birine dokunan iki eleman için bir küme işlemi yapar

https://www.w3schools.com/tags/canvas_globalcompositeoperation.asp
https://www.w3schools.com/tags/playcanvas.asp?filename=playcanvas_globalcompop&preval=source-over

```javascript
ctx.fillStyle="red";
ctx.fillRect(20,20,75,50);
ctx.globalCompositeOperation="source-over";
ctx.fillStyle="blue";
ctx.fillRect(50,50,75,50);
```


## YAZILAR
ctx.font =  "30px Arial";
ctx.textAlign="center"; //end start left right center;

ctx.fillText('Yazılacak Yazı', X, Y);
