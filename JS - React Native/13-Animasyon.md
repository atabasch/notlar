
- Animasyonlanacak nesneler react-native in **Animated** nesnesinden gelmeli.
  - `<Animated.View></Animated.View>`
- Animasyonda kullanılacak ve değiştirilecek değerler **Animated** nesnesinin **Value()** methodu ile oluşturulmalı.
  - `var animasyonDegerDegiskeni = new Animated.Value(X);`
- Animasyon değeri için oluşturulan değişkenin değeri **Animated** nesnesinin **timing** yada **spring** nesnei ile değiştirilecek.
  - `Animated.timing(animasyonDegerDegiskeni, { duration: milisaniye, toValue:yeni değer })`



# İmport
  > import {..., Animated, TouchableWithoudFeecback} from 'react-native'

### EN BASİT KULLANIM OPACITY DÜŞÜRMEK
```js
class XYZ extends Component{

    state = {
        animation: new Animated.Value(1)
    }

    startAnimation=()=>{
        Animated.timing( this.state.animation, {
            toValue: 0,
            duration: 1000
        } ).start( ()=>{
            // Animasyon bitince çalışacak clalback fonksiyonu
        } );
    }

    render(){
        return(
        <TouchableWithoudFeecback onPress={this.startAnimation}>
            <Animated.View style={[style.stylname, {opacity: this.state.animation}]}>
                <Text></Text>
            <Animated.View/>
        </TouchableWithoudFeecback>    
        );
    }

}
```


### KONUM AYARLAMAK
```js
state = {
    x: new Animated.Value(0),
}

animatedStyle = {
    transform: [
        {
            translateX: this.state.x
        }
    ]
}

animasyon=()=>{
    Animates.timin(this.state.x, {
        toValue: 100,
        duration: 500
    }).start( ()=>{
        console.log("Animasyon tamamlandı.");
    } );
}
```


### CSS TRANSFORM ÖZELLİKLERİ
```js
animatedStyle = {
    transform: [
        {
            translateX: int ,
            translateY: int
        },
        {   // ŞEKLİN ÖLÇEĞİ
            scale: int,
            scaleX: int,
            scaleY: int,
        }
    ]
}
```

### RENK GEÇİŞİ YAPMAK
### ROTATE ANİMASYON
### DEĞER DEĞİŞMELİ ANİMASYON
```js
import {Animated} from 'react-native';

// Animasyon için başlangıç değeri belirleniyor.
state={
    backgroundValueOfAnimate: new Animated.Value(0),
    rotateValueOfAnimate: new Animated.Value(0)
}

// Animasyonu başlatmak ve hangi sürede hangi yeni değeri alacak.
changeValue=()=>{
    Animated.timing(this.state.backgroundValueOfAnimate, {
        duration: milisaniye,
        toValue: yeniDeğer
    }).start();
    Animated.timing(this.state.rotateValueOfAnimate, {
        duration: milisaniye,
        toValue: yeniDeğer
    }).start();
}

// Hangi giriş değerinde hangi değer çıktı olarak verilecek.
var getBackgroundValue = this.state.backgroundValueOfAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'value']
});

var getRotateValue = this.state.rotateValueOfAnimate.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
});

// Nesnenin stil özelliklerinde gerekli yere verilecek değer interpolate değeri olmalı.
var objectStyle = {
        backgroundColor: this.getBackgroundValue,
        transform: [{
            rotate: this.getRotateValue
        }]
};
```

### EASİNG
Easing ile animasyon hareketine değişiklik katabilir
```js
import {Animated, Easing} from 'react-native';

startAnimation=()=>{
    Animated.timing(this.state.key, {
        duration: milisaniye,
        toValue: yeni değer,
        easing: Easing.bounce, // Son noktada azalan bir zıplama olur
        // Easing.back(int) // Önce geri gelip sonra ileri gider
        // Easing.elastic() // İlk nokta ile son nokta arasında bir kaç kez gelip gider.
        // Easing.linear // Hep aynı hızda
    });
}
```

### SPRING
timing yerine kullanılır ve animasyonun sonunu biraz ileri kaçırıp geri gelir.
```js
Animated.spring(this.state.key, {
    duration: milisaniye,
    toValue: yeni değer,
    friction: sürtünmeInt
})
```

## 1 DEN FAZLA ANİMASYON İŞLEMİNİ AYNI ANDA YÜRÜTMEK
```js
Animated.parallel([
    Animated.timing(),
    Animated.timing(),
    Animated.timing(),
]).start(()=>{
    // bitti
});
```

## BİRDEN FAZLA ANİMASYONU SIRAYLA YAPMAK
Animasyonlar sırayla çalışır
```js
Animated.sequence([
    Animated.timing(),
    Animated.timing(),
    Animated.delay(2000), // burada 2 saniye bekle
    Animated.timing(),
]).start(()=>{
    // bitti
});
```

Animasyonlar sırayla çalışır ancak arasında 2000 saniye beklemeler olur
```js
Animated.stagger(2000, [
    Animated.timing(),
    Animated.timing(),
    Animated.timing(),
]).start(()=>{
    // bitti
});
```
## ANİMASYON LOOP DÖNGÜ
Sınırsız olarak aynı animasyonı oynatır.
```js
Animated.loop(
    Animated.timing()
).start();
```

```js
Animated.loop(
    Animated.timing(),
    {
        iterations: X // Animasyonu x kez tekrar eder.
    }
).start();
```
