```kotlin
class MainActivity : AppCompatActivity(){

    ...

    fun calisanFun(){
        val asyncObje = ClassName()
        asyncObje.execute(val1, val2, val....)
    }

    inner class ClassName : AsyncTask<p1Type, p2Type?, p3Type >{
        // Verilecek parametre tipi url için String
        // Progressbar için gerek yoksa Void
        // Return edilecek veri tipi

        override fun doInBackground(vararg params : p1Type?) : p3Type{
            // Yapılacak işlemler

        }

        override fun onPostExecute(result:p3Type?){
            super.onPostExecute(result)
        }

    }//ClassName

}
```
