# KURULUM

Proje için gerekli olan asıl kütüphaneler.
> npm i mobx mobx-react --save

Development ortamı için gerekli olan geliştirici kütüphaneleri.
> npm i metro-react-native-babel-preset @babel/preset-flow @babel/plugin-proposal-decorators --save-dev

Root dizininde **.babelrc** adında bir dosya oluştur ve içine yaz.
```json
{
  "presets": [
    "module:metro-react-native-babel-preset"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```

# KULLANIM
**MyComponent.js**
```js
import {observer} from 'mobx-react';
import CounterStore from 'CounterStore.js';

@observer
export default class MyComponent extends Component {

    <Button onPress={()=> CounterStore.arttir } />
    <Button onPress={()=> CounterStore.azalt } />

}

```

**CounterStore.js**
```js
import {observable} from 'mobx';
export default class CounterStore{
    @observable count = 1;

    arttir=()=>{
        this.count++;
    }

    azalt=()=>{
        this.count--;
    }
}
```

```js
```
