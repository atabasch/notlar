- uygulama index.js dosyası içinde register ediliyor.
- App.js dosyası uygulamanın ana dosyasıdır.

**HIZLI YAZMAK İÇİN** Örneğin bir component oluştururken atoma vs "react-native-snippets" plugini kur ve kısa kodlarla işini hızlandır.

> <View style={styles.blablabla}>
    > <Text>Buraya yazı</Text>
> </View>

# STYLE KULLANIMI
```js
import {StyleSheet, View, TeXT} from 'react-native';

return(
<Object style={styles.box}></Object>
<Object style={ [styles.sidebox, styles.whitebox] }></Object>
);

const styles = StyleSheet.create({
    sidebox: {
        ozellik:deger
    },
    whitebox: {
        ozellik:deger
    },
    box: {
        ozellik:deger
    }
});
```
### STYLE KODLARI
|||
|---|---|
| backgroundColor |  |
| width |  |
| height |  |
| paddingTop |  |
| borderWidth |  |
| borderColor |  |
| flex:int | içinde bulunduğun elemanı en ve boy olarak tamamen kapla. |
| flexDirection: 'row' veya 'column' | içindeki nesneler alt alta mı yan yana mı. default:column |
| justifyContent: 'center  | **flexDirection** da belirtilen eksene göre hizalama   |
| justifyContent: 'flex-start'  | flex yönüne göre üstde nyada soldan |
| justifyContent: 'flex-end'  | flex yönüne göre sağdan yada alttan |
| justifyContent: 'space-between  | flex yönüne göre aradaki boşluğu orantılı şekilde nesneleri yayar. |
| justifyContent: 'space-arround  | flex yönüne göre aradaki boşluğu orantılı yapar ve en baş ve en sona da boşluk atar |
| alignItems: 'center' | **flexDirection** da belirtilen eksenin diğerine göre hizalama |
| alignItems: 'flex-start' |  |
| alignItems: 'flex-end' |  |
| alignItems: 'stretch' | uygulanan objeye genişlik yada yükseklik verilmezse 100% ile kendi tamamlar.  |
| padding |  |
| paddingHorizontal |  |
| paddingVertical |  |
| paddingTop, Left, Right, Bottom |  |
|  |  |
|  |  |
|  |  |
|  |  |

**Flex** kullanılırken grid mandığı düşünülebilir.
birden fazla eleman olunca flexe verilen değer parent nesnenin x kadarını kapla demek olur.
