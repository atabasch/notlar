
```js
import {StyleSheet, View, Text, Button} from 'react-native';

export default class App extends Component{

    functionForClick = function(){
        // Yapılacak işlemler
    }

    //...
    render(){
        return(
            <View>
                <Text>Deneme</Text>
                <Button title="Click" onPress={this.functionForClick}></Button>
            </View>
        )
    }

}
```
