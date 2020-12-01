```js
export default class ClassName extends Component{

    // Nesne çalışınca çalışacak ilk method
    constructor(){

    }

    // RENDER dan önce çalışan method ama setstate için uygun değildir.
    componentWillMount(){

    }

    // SAYFAYI EKRANA DÖKEN RENDER FONKSİYONU ZORUNLU
    render(){
        return(
            <View></View>
        );
    }

    // Renderdan hemen sonra çalışan ilk method
    componentDidMount(){

    }

    // Her state ve props güncellemesinden sonra çalışır.  
    // İçinde setstate vs yapılmamalı yoksa sonsuz loop oluşur.
    componentWillUpdate(){

    }

    //Her state ve props güncellemesinden sonra çalışır.  
    // componentWillUpdate den tek farkı render dan sonra çalışır.
    componentDidUpdate(){

    }

    // componentin sonlanmasından hemen önce çalışır.
    // cach silinmesi bağlantıların kapatılması işlemleri için uygundur.
    componentWillUnmount(){

    }

    // Javascript hatalarında tetikleneen method.
    // Loglama için kullanılabilir.
    componentDidCatch(error, info){
        
    }

}
```
