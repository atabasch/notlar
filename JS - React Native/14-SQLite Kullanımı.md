# Kurulum
> npm i react-native-sqlite-storage --save

- root dizininde *www* klasörü oluştur ve içinde *dbname.sqlite* dosyasını oluştur.
- birde android için *android/app/src/main/assets/* içinde *dbname.sqlite* dosyasını oluştur.

# KULLANIM

### BAĞLANTI
```js

class BLABLA extends Component{

    constructor(props){
        super(props);


        let db = SQLite.openDatabase({name : "dbname.sqlite", createFromLocation : 1},
            (db)=>{
                // Bağlandı
            },
            (err)=>{
                // Bağlanamadı
            }
        );

        
        this.state={
            db:db,
            items:[]
        }
    }//constructor


}//Component

```

### SQL SORGUSU ÇALIŞTIRMA İŞLEMLERİ
```js
db.transaction(tx=>{

    tx.executeSql(SQL_KODU, VARSA_PARAMETRE_YOKSA_SADECE[], (tx, results)=>{

        let rows = results.rows;
        for(let i=0; i<rows.length; i++){
            let item = rows.item(i);
        }

    });//executeSql
});//transaction
```
