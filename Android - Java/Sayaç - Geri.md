# ZAMANLAYICILAR SAYAÇLAR
Zamanlama işlemlerinde kullanılır. Örneğin 20sn içinde bir işlem yaptırmak için

//Geriye sayan sayaç
new CountDownTimer(Kaçmilisaniyeolacka, kaçarmilisaniyeazalacak);
```java
new CountDownTime(10000, 1000){

	@Override
	public void onTick(long milisUntilFinished){
		//milisUntilFinished bitime kadar kalan milisaniyedir.
		milisUntilFinished / 1000 // Kalan saniyeyi verir.
		//Saniyede 1 ne yapayım

	}

	@Override
	public void onFinish(){
		//Bitince ne yaayım
		Toast.makeText(getApplicationContext(), "Gösterilecek mesaj.", Toast.LENGTH_LONG).show(); //Uyarı mesajı verir.
	}

}.start();
```