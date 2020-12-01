# RUNNABLE BELLİ ARALIKLARLA İŞLEMLER YAPTIRMAK
```java
	Handler handler;
	Runnable run;

	public void basla(){

		handler = new Handler();
		run = new Runnable(){
			@Override
			public void run(){
				// Her sefer yapılacak işler
				handler.postDelayed(this, Milisaniye); // Kaç saniyede bir çalışacak
			}
		};
		handler.post(run); // run metodunu çalıştır

	}


	public void dur(){
		handler.removeCallBacks(run); // Runnable durdur
	}
```