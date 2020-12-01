## GERİ SAYMA SAYACI -> COUNTDOWNTİMER
Mesela bir oyunda 10 dan geri sayılırken kullanılabilir.

CountDownTimer bir Abstract sınıftır.
```kotlin

object : CountDownTimer(toplamSurecekZamanMS, KaçSaniyedeBirİşlemYapacak){
    override fun onFinish(){
        // Tamamen bitince ne olacak
    }

    override fun onTick(milisUntilFinished: Long){
        // Her çalışmada ne yapılack
    }
}.start()
```

## İLERİ SAYAN SAYAÇ -> RUNNABLE
```kotlin

var runnable : Runnable = Runnable{}
var handler : Handler = Handler{}

fun funName(){
    runnable = object : Runnable{
        override fun run(){
            number = number + 1
            handler.postDelayed(this, XmiliSaniyedeBir)
        }
    }
    handler.post(runnable)

    // Durdurmak
    handler.removeCallbacks(runnable)
}



```
