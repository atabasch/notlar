> npm i axios --save

> import axios from 'axios';

## JSON API ile veri çekmek
```js
import axios from 'axios';

class ComponentName extends Component{

    // Değişiklik olunca ekranda görüntülecek stateler
    state = {
        loading: true,
        datas: [],
        filterDatas: []
    }

    // Her liste elemanı için çalışacak fonksiyon
    renderItem = ( {item, index} ) => { return (<View><Text>{item.title}</Text></View>) }

    // Listenin Headerına gelecek ekran. Örneğin filtre için arama motoru.
    listHeaderComponent = () => { return(<View><TextInput onChangeText={ value => this.actionDataSearch(value) }/></View>) }

    // Listenin en altına eklenecek footer bileşeni. Loading animasyonu koyulabilir.
    // Sayfa aşağı kaydırıldıkça görünür veri gelince gizlenir.
    listFooterComponent = () => { return(/* Mesela Loading Viewi */) }

    // Bir dizi içinde arama yapan arama fonksiyonu.
    actionDataSearch = function(value){
        let filterDatas = this.state.datas.filter( item => {
            let aranacak = `${item.title.toLowerCase()} ${item.description.toLowerCase()}`;
            return aranacak.indexOf(value.toLowerCase()) > -1;
        } );
        this.setState({ filterDatas: filterDatas });
    }

    // Verilerin apiden alınacağı fonksiyon
    getDatas = async () => {
        let {data} = await axios.get('https://websitesiapiadresi');
        this.setState({
            datas: data.results,
            filterDatas: data.results,
            loading:false
        });
    }

    // Render edilmeden önce çalışacak fonksiyon.
    componentDidMount(){
        this.getDatas();
    }

    // Verilerin ekrana basılacağı fonksiyon.
    render() {
        return (
            <SafeAreaView>
                <View>
                    <FlatList
                        ListHeaderComponent={this.listHeaderComponent()}
                        ListFooterComponent={this.listFooterComponent()}
                        data={this.state.filterDatas}
                        renderItem={this.renderItem}
                        keyExtractor={ (item, index) => (index+1).toString() }
                    />
                </View>
            </SafeAreaView>
        );
    }//render

}
```
