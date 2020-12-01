# TEMEL NESNELER

### Nesneleri Componente dahil etmek
`import {StyleSheet, SafeAreaView, View, Text, Button, TextnInput, Image, ...} from 'react-native'`

## ► SafeAreaView [body]
En dış eleman olarak kullanılmalı. Bu eleman sayesinde örneğin iphone da ekranın en üstünde kalan içerik direk kullanıcının görebileceği alana yerleşir.
```js
<SafeAreaView>Tüm nesneler</SafeAreaView>
```

## ► View [Div]
```js
<View style={styles.key}>İçeik</View>
```

## ► KeyboardAvoidingView [Div]
Klavye açıldığı zaman ekranın üstüne kayarak içindeki elemanları görünür yapar.
```js
<KeyboardAvoidingView behavior={"position"}>
    <View>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <Button></Button>
    </View>
</KeyboardAvoidingView>
```

## ► Text [p, span]
```js
<Text>Metin İçeriği</Text>
```

## ► TextInput [Input]
```js
<TextInput
    value={this.state.value} /// Input için stateden value değerini alır.
    onChangeText={ text => this.setState({value:text}) } // girilen içeriği statedeki valueya atar

    secureTextEntry={true} // type=password
    editable={false} // Sadece okunabilir.
    keyboardType='tip' // default, number-pad, decimal-pad, numeric, email-address, phone-pad
    placeholder="Bir şey yazın"
    autoCapitalize='' // characters(otomatik büyük harf), words(kelime baş harfi büyük), sentences(cümlelerin baş harfi büyük), none(herşey küçük)
    placeholderTextColor: 'renk' //
    returnKeyType={"next"} // Klavyedeki giriş butonunu ileri olarak değişir. next, go
    onSubmitEditing={ () => }
    inputRef={input => this.passwordInput = input}
    ref={this.props.inputRef}

/>
```

## ► Standart Buton [Button]
```js
<Button title="Tıkla" color="black"></Button>
```

## ► Özel Buton TouchableOpacity [Div > div+span+img]
```js
<TouchableOpacity onPress={this.fonksiyonAdi}>
    <View style={styles.btnText}>
        <Text style={styles.btnText}>Tıkla</Text>
    </View>
</TouchableOpacity>
```

## ► Resim [Img]
#### - Localden resim göstermek
```js
<Image source={require('./src/images/image.png')} />
```

#### - Url den resim göstermek. **Genişlik ve yükseklik zorunlu**
```js
<Image
    style={{width:'100%', height:'100%'}}
    source={{uri:'http://xyz.ext/img.ext'}} />
```

#### - Resim boyutlandırması yapmak.
`contain`, `cover`, `center`, `repeat`,  `stretch`
```js
<Image
    resizeMode={'contain'}
    source={require('./src/images/image.png')} />
```


#### - Platforma (Ios yada Android) göre ayrı görseller almak için.
- src/images/logo.android.png
- src/images/logo.ios.png

```js
<Image source={require('./src/images/logo.png')} />
```

#### - Farklı Cihaz Çözünürlüklerine göre ayrı görseller
- src/images/logo.png
- src/images/logo@2x.png
- src/images/logo@3x.png

```js
<Image source={require('./src/images/logo.png')} />
```

Hangi cihazda hangi resim görülecek https://facebook.github.io/react-native/docs/pixelratio


## ► ScrollView
Kaydırılabilir Div
```js
<ScrollView>/* İçerik */</ScrollView>
// YATAY
<ScrollView horizontal={true}>/* İçerik */</ScrollView>
```

#### - Sayfalandırararak kaydırma (card geçişi)
Örneğin yatay olarak kaydırma işlemi yaparken kaydırmayı bırakınca olduğu yerde kalmasın bir sonraki içeriğe geçsin istiyorsak kullanılacak işlem.
- İçerikleri tam genişlik ve yükseklik olarak ayarlamak gerekir.


```js
<ScrollView
    pagingEnabled={true}
    horizontal={true}>
</ScrollView>
```

## ► FlatList
Tekrar eden liste elemanları için kullanılan performanslı bir component.
Bu objede sadece ekrandaki içerik render edilmiş olur. Ekran kaydıkça diğer elemanlar render edilir.
```js

// ÖRNEK İÇERİK
const data = [
    { title:'', image:'' },
    { title:'', image:'' },
    { title:'', image:'' },
]

// LİSTENİN EN BAŞINA BİR ARAMA MOTORU
listHeader = function(){
    return(
        <View>
            <TextInput placeholder="Listede ara"></TextInput>
        </View>
    );
}

// HER İTEMİN FONKSİYONU
itemFunction = function({item, index, separators}){
    return(
        <TouchableOpacity>
            <Text>{item.title}</Text>
            <Image source="{item.image}"></Image>
        </TouchableOpacity>
    );
}

// COMPONENTİN RENDER FONKSİYONU
render(){
    return(
        <View>
            <FlatList
                ListHeaderComponent={this.listHeader()} // Listenin en üstüne component ekler
                ListFooterComponent={this.listFooter()} // Listenin en altına component ekler. loading olabilir.

                renderItem={this.itemFunction} // zorunlu her itemi için component
                data={data} // listelenecek datalar. dizi içinde object olarak
                keyExtractor={(item, index) => item.id.toString()}  // her item için aynı keyler

                // Scroll aşağı sürüklenince yapılacka işlemler
                onEndReached={ this.funcName } // Listenin sonuna gelince çalışacak fonksiyon.
                onEndReachedThreshold={0.1} // 0 listenin en sonuna gelince üsttekini çalıştır. Sayı ne kadar artarsa sona gelmeden o kadar önce onEndReached çalışır. ANDROİDDE 0 DEĞERİ VERİLMİYOR 0 DAN DAHA BÜYÜK BİR DEĞER VERİLMELİ.
                onMomentumScrollBegin={ () => this.duringMomentum = false } // Bu kodu yazdıktan sonra onEndReached kodunu kullanırken [ if(!this.duringMomentum){ çalışan kodlar. this.duringMomentum=true; } ] şeklinde kod kullanılırsa. Kullanıcı scrollu eliyle kaydırmamışsa onEndReached çalışmaz. İçerik ekranı doldurmadığında sınırsız loop hatasını önler.


                // Ekranı aşağı çekince yenileme işlemi yapmak
                refreshing={this.state.doRefresh} // doRefresh true olunca yenileme çalışır. onRefresh metodu çalışırken değerini true yap. onRefresh işlemi bittikten hemen sonra false yap.
                onRefresh={ this.RefreshIslemiYapacakMethod } // Verilerin en baştan sıfırdan getirilmesi gibi.s


                >
            </FlatList>
        </View>
    );
}

```


## ► Platform [Ios ve Android için farklı işlem yapmak]
```js
import 'Platform' from 'react-native';

const title = Platform.select({
    android: 'Android platformlarda görünecek başlık',
    ios: 'Iphone telefonlarda görüüneek başlık'
});
```
Farklı olarak oluşturulan component dosyalarının sonuna .platformadı eklenersek işlem yapılırsa her platformda farklı çalışır.

- Card.android.js
- Card.ios.js



## ► Loading Animasyonu (Cihazın Varsayılan Simgesi)
#### ActivityIndicator
Mobil işletim sisteminin varsayılan loading animasyonudur.
```js
<View>
    <ActivityIndicator size="large"></ActivityIndicator>
</View>
```

```js
```

```js
```

```js
```

```js
```


## ► BAŞLIK
```js
```

```js
```

```js
```


## ► BAŞLIK
```js
```

```js
```

```js
```


## ► BAŞLIK
```js
```

```js
```

```js
```
