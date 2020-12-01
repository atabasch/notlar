- Anlık olarak içeriğinde düzenlenme olacak veriler state dir.
- Örneğin alışveriş sepeti; ürün ekleyip sildikçe güncellenmesi gereki.
- State değerini ddeğiştiren fonksiyon **this.setState( {key:'newValue'} )**

```js
export default class App extends Component{
    // Stateler tanımlanır
    state = {
        key:'initValue'
    }

    changeKeyValue = function(){
        /*
            this işlevi hata vermesin diye
            aşağıda fonksiyonu çalıştırırken
            sonuna .bind(this) ekle.
        */
        this.setState({ key:'newValue' })
    }

    customFunction = function(){
        // Yapılacak İşlemler
    }

    render(){
        return(
            <View>
                <Text>{this.state.key}</Text>
                <Button onPress={this.customFunction}></Button>
                <Button onPress={this.changeKeyValue.bind(this)}></Button>
            </View>
        )
    }


}
```
