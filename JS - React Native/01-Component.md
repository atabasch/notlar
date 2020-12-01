Web site kodlamada ki include edilen dosyalara yada bir web sitesinde tekrar eden bloklardır.

Örneğin web sitesinin blog bölümünde blog yazılarının listelendiği
- [Başlık, Görsel, Özet, Devamı Butonu] bu 4 ü bir componenti oluşturur.
- Aynı şekilde header,footer,sidebar,menubar birer componentdir.
- Farklı platformda farklı componenti çağırmak isterseniz.
  - Card.android.js
  - Card.ios.js
  - App.js tarafında Card olarak normal import edilir platforma göre kendi çalışır.

## ÖRNEK COMPONENT DOSYASI
Metin editörüne **react-native-snippets** eklentisini kurarak bir dosyada sadece **rnc** yazarak aşağıdaki kodların basit hali oluşturulabilir.

**src/components/Card.js**
```js
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Başlık</Text>
        <Text>Özet</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```
## COMPONENTİ APP İÇİNDE KULLANMAK
```js
import Card from "src/components/Card";
//...
render(){
    return(
        <View>
            <Card><Card/>

            <Card/>
        </View>
    )
}
//...
```
