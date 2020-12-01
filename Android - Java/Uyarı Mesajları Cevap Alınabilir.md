# UYARI DİYALOGLARI UYARI MESAJLARI
```java
	AlertDialog.Builder alert = new AlertDialog.Builder(this);
	alert.setTitle("Başlık");
	alert.setMessage("Uyarı mesajı")
	alert.setPositiveButton("Yes", new DialogInterface.OnClickListener(){
		@Override
		public void onClick(DialogInterface dialog, int which){
			// Yes butonuna tıklanınca çalışacak kodlar.
		}
	});
	alert.setNegativeButton("No", new DialogInterface.OnClickListener(){
		@Override
		public void onClick(DialogInterface dialog, int which){
			// No butonuna tıklanınca çalışacak kodlar.
		}
	});
	alert.show();
```