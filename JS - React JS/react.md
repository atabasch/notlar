# KURULUM
Kurulum için npm ve nodejs kurulu olmalıdır.
> npm install -g create-react-app

# PROJE OLUŞTURMAK
> create-react-app projeismi

- index.html site dosyasıdır.
  - Dosyanın içindeki root id li div react ile içine içerik atacağımız divdir.
- App.js Bizim ana uygulama kodlarımızdır.

# Component oluşturmak
- **Component** site içine yerleştireceğimiz nesnelerdir. sidebar item, post item, list item, header, footer
- **Propslar** component dosyası üzerinde kullanabileceğimiz app içinden gönderilen değişkenlerdir. Değişken keyleri html tag="val" şeklinde key="val" gibi yazılır.
- Html tagları içindeki özellikler id ve class gibi, idName="" className="" şeklinde değişir.
-



**ComponentName.js**
```js
import React from 'react';
class ComponentName extends React.Component{
    render(){
        // Dizi olarak gelen verileri li içine alıp sonra componente dahil et
        const otherLanguages = this.props.otherLanguages.map((value, index)=>{
            // Döngü işlemlerinde uniq li elemanalrında uniq bir key her zaman gerekir.
            return(
                <li key={index}>({index+1}) => {value}</li>
            );
        });
        const programminLanguage = this.props.code;
        return(
            <div>
                <strong>{this.props.isim}</strong>
                <span>{programminLanguage}</span>
                <h4>Diğer Diller</h4>
                <ul>{otherLanguages}</ul>
            </div>
        );
    }
}
export default ComponentName;
```

**App.js**
```js
import ComponentName from './ComponentName';

function App() {
    const language = "JavaScript";
    const otherLanguages = ['Php', 'Python', 'Kotlin']
    return (
        <div idName="wrap">
            <ComponentName isim="Furkan" code={language} otherLanguages={otherLanguages}/>
        </div>
    );
}

export default App;
```

## EVENT KULLANIMI

**ComponentName.js**
```js
import React from 'react';
class ComponentName extends React.Component{
    clickedButton(e){
        // Butona tıklandığında yapılacka işlemler.
        let name = document.getElementById('name').value;
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.clickedButton}>
                    <input type="text" id="name">
                </form>
                <button onClick={this.clickedButton}>Gönder</button>
            </div>
        );
    }
}
export default ComponentName;
```


## Componenetten Componente Fonksiyon Göndermek
Örneğin 1 tane Liste ve 1 tane de ListeyeEkle adında iki component var.
Listeye ekle componentindeki içerik Liste Componentine gönderilecek ve orada listeye eklenecek.
**ListeyeEkle.js**
```js
import React from 'react';
export default class ListeAddItem extends React.Component{

    listeIcinYolla(e){
        e.preventDefault();
        let itemName = document.querySelector('input#itemName').value;
        this.props.listeyeEkleFonksiyonu(itemName);
    }
    // Fonksiyon Yollarken
    // {e=>this.fonksiyonAdi(e)} yada
    // {this.fonksiyonAdi.bind(this)} şeklinde gönderilir.
    render(){
        return(
            <div>
                <form onSubmit={e=>this.listeIcinYolla(e)}>
                    <input type="text" id="itemName"/>
                </form>
                    <button onClick={this.listeIcinYolla.bind(this)}>Ekle</button>
            </div>
        );
    }

}
```

**Liste.js**
```js
import React, {Component} from 'react';
import ListeyeEkle from './ListeyeEkle';

var items = ['Python', 'Php', 'Asp.Net', 'JavaScript'];

export default class Liste extends Component{

    addItem2List(value){    listItems.push(value);  }
    render(){
        const items = listItems.map((val, index) => {
            return(<li key={index+1}>{val}</li>);
        });

        return(
            <div>
                <ul>{items}</ul><hr/>
                <h5>Eleman Ekle</h5><ListeAddItem listeyeEkleFonksiyonu={this.addItem2List}/><hr/>
            </div>
        );
    }

}

```

# STATELER
Propslar gibidir. Ama propslar değişmeyen sabit verilredir Statetler değişebiler değerlerdir.
```js
import React, {Component} from 'react';
import ListeAddItem from './ListeAddItem';

export default class Liste extends Component{

    constructor(){
        super();
        this.state = {
            items: ['Python', 'Php', 'Asp.Net', 'JavaScript']
        }
        //this.add2List = this.add2List.bind(this);
    }

    add2List(value){
        let newList = this.state.items;
        newList.push(value);
        // setState ile bir güncelleme yapıldığında web sitesinde anında güncellenir.
        this.setState({ items: newList });
    }


    render(){

        const items = this.state.items.map((val, index) => {
            return(<li key={index+1}>{val}</li>);
        });

        return(
            <div>
                <ul>{items}</ul><hr/>
                <h5>Eleman Ekle</h5><ListeAddItem addlist={this.add2List}/><hr/>
            </div>
        );
    }

}
```
