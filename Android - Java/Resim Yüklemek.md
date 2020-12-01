
## RESİM YÜKLEME İŞLEMLERİ

**AndroidManifest.xml** dosyasına `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>` ekle.

```java
	Bitmap selectedImage;

	// IMAGEVIEW NESNESİNE VERİLEN ONCLICK METOTU
    public void resim_sec(View view){
        if( checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED){
            requestPermissions( new String[] { Manifest.permission.READ_EXTERNAL_STORAGE }, 2 );
        }else{
            Intent intent = new Intent( Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
            startActivityForResult( intent, 1 );
        }
    }

    // RESİM SEÇME İZNİ VERİLMEMİŞ İSE İZİN İSTE
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if( requestCode == 2 ){
            if( grantResults.length > 0 && grantResults[0] != PackageManager.PERMISSION_GRANTED ){
                Intent intent = new Intent( Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                startActivityForResult( intent, 1 );
            }
        }

        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    // RESİM SEÇİLDİYSE IMAGEVVIEWDA RESMİ GÖSTER
    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        if( requestCode == 1 && resultCode == RESULT_OK && data != null ){
            Uri image = data.getData();
            try {
                selectedImage = MediaStore.Images.Media.getBitmap( this.getContentResolver(), image );
                imageView.setImageBitmap( selectedImage );
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    // KAYDET BUTONUNA TIKLANINCA ÇALIŞACAK OLAN KODLAR
    public void kaydet(View view){
    	// Aşağıdaki kodlar resmi sıkıştırır ve byte dizisi halimne getirir.
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        selectedImage.compress( Bitmap.CompressFormat.PNG, 50, outputStream );
        byte[] byteArray = outputStream.toByteArray();

        // Sql kodu ile bindBlob kullanarak byteArray değişkenini veritabanına kaydet.

        // Veritabanından çekerkende getBlob ile çekilir
        // byte[] byteArray = cusror.getBlog( image_index );
        // Bitmap bitmap = BitmapFactory.decodeByteArray( byteArray, 0, byteArray.length );
    }
```