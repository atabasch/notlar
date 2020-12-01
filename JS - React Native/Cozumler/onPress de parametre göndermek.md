```js

export default class MyComponent extends Component {
    constructor(props){
        super(props);
        this.funcName = this.funcNameMethod.bind(this);
    }

    funcNameMethod(params){
        //kodlar
    }

    render() {
        return (
            <View onPress={ () => this.funcName(params) }></View>
        );
    }

}

```
