//var tuval = document.createElement('canvas');
var tuval = document.querySelector('canvas');
tuval.width = window.innerWidth;
tuval.height = window.innerHeight;
//document.body.appendChild(tuval);
var ctx = tuval.getContext('2d');

let pts = [];
while(pts.length < 254){
    while(pts.includes(val = Math.floor(Math.random() * 255)));
    pts.push(val);
}
pts.push(pts[0]); // pts nin ilk ve son değerini aynı yaptık

// a değerinden b değerine t adım sayısında git.
let lerp = (a, b, t) => { return a + (b-a) * (1-Math.cos(t*Math.PI))/2; }

/*
pts içinde 0 ile 255 arasında rastgele sıralı her sayıdan 1 tane var.
ekran genişliğinde 1 den 620 ye kadar olan her sayı yı döngü ile noise'e sokuyoruz.
her sayı 0.01 ile çarpılıyor ve küsüratlı sayılar elde ediliyor.
pts içinde sadece tam sayı index numaraları olduğundan.
sadece x*0.01 sonucu tam sayı çıkan indexe sahip pts elemanları alınır.
çoğu eleman undefined döneceği için alınmayacak.
böylece 600px lik ekranda sadece 7 8 tane değer alınacak.
*/
let noise = x => {
    x = x * 0.010 % 254;
    //return pts[x]; // x değeri tam sayı olduğunda değer döndürür.

    //return pts[Math.floor(x)];
    // x değerini aşağı yuvarlar ve  1 ve 1.x şeklinde tüm sayıları 1 yapar.
    // böylece 1 ile 10 indexi arasındaki sayıları çizmemek yerine
    // 1 den 10 a kadar olan her şeyi 1 olarak alır
    // böylece bir sonraki çizim noktasına kadar hep aynı değer gelir.
    // yan yana dizilmiş apartmanlar gibi çizim çıkabilir.

    return lerp(pts[Math.floor(x)], pts[Math.ceil(x)], x-Math.floor(x));
    // Eğri oluşturmak için.
}





const images = {
    jet: document.querySelector('img#jetImg'),
    crosshair: document.querySelector('img#crosshairImg')
}

const color = {
    background: '#5FBFF9',
    foreground: '#5863F8',
    dark: '#171D1C',
    light: '#EFE9F4'
}

let adim = 0;
let lineOffset = -10;
function draw(){
    adim++;
    ctx.fillStyle = color.background;
    ctx.fillRect(0,0,tuval.width, tuval.height);

    ctx.fillStyle = color.foreground;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath()
    ctx.moveTo(lineOffset, tuval.height-lineOffset);
    for(let i=lineOffset; i<=tuval.width-lineOffset; i++){
        ctx.lineTo(i, (tuval.height * .9) - (noise(i+adim) * 0.4) );
    }
    ctx.lineTo(tuval.width-lineOffset, tuval.height-lineOffset);
    ctx.closePath()
    ctx.fill();
    ctx.stroke();
    requestAnimationFrame(draw);

}
draw();


//
