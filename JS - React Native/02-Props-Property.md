Komponentlere dinamik olarak veri gönderme işlemi

# BASİT PROPS GÖNDERME
### Property Gönderme İşlemi
```js
<Card title="Deneme", img="image.png"></Card>
```

### Gönderilen Property Almak
```js
render(){
    const {title, img} = this.props;
    return(){
        <View>
            <Text>{title}</Text>
            <Text>{img}</Text>
            <TextInput {..this.props}></TextInput> // Gönderilen tüm propslar otomatik gelir.
        </View>
    }
}
```

# PROPS TANIMLAYARAK ALMAK
Card.js card komponentinin içinde
```js
import PropTypes from 'prop-types'

Card.PropTypes = {
    title: PropTypes.String.isRequired, // String olacak ve zorunlu
    img: PropTypes.string // String olacak
}

```

```js

```
