- Öncelikle react navigation kur.
- Sonra react-native-router-flux kur.


### import
> import { Router, Stack , Scene } from 'react-native-router-flux';


### Api.js render içi
```js
<Router>
    <Stack key="root">

        <Scene  key="ScreenKeyName"
                component={ScreenCOmponent}
                title="Başlık"
                initial={true} />

        <Scene  key="Screen2KeyName"
                component={Screen2COmponent}
                title="Başlık 2"
                />

    </Stack>
</Router>
```

### Buton Click ile değiştirme
```js
import {Actions} from 'react-native-router-flux';

Actions.ScreenKeyName({paramkey:paramval}); // Ekran değiştirir.

Actions.pop(); // Geri gelir

Actions.popTo('ScreenKeyName', {paramkey:paramval}); // Keyi Girilen Ekrana Geri Gider.

Actions.replace('ScreenKeyName', {paramkey:paramval}); // Ekranı değiştirir. Save ve update işlemlerinden sonra işe yarar.
```

### replace den sonra veri almak.
```js
componentWillReceiveProps(nextProps){
    console.log(nextProps.navigation.getParam('key'));
    console.log(nextProps.navigation.state.params);

}

// Uyarı verirse
UNSAFE_componentWillReceiveProps
```
