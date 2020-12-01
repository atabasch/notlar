**NOT:** Kullanıcıdan izinler istenilmiş sayılır.

```java
public void gerekliFonksiyon(){
    Intent galleryIntent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
    startActivityForResult(galleryIntent, IntegerTurundeIstegeBagliBirRequestKodu);
}

@Override
protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
    if(requestCode == IntegerTurundeIstegeBagliBirRequestKodu && resultCode == RESULT_OK && data != null){

        //seçilen resmi uri olarak alır.
        Uri imgUrl = data.getData();

        try {
            Bitmap bitmap = null;
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
                ImageDecoder.Source source = ImageDecoder.createSource(this.getContentResolver(), imgUrl);
                bitmap = ImageDecoder.decodeBitmap(source);
            }else{
                bitmap = MediaStore.Images.Media.getBitmap(this.getContentResolver(), imgUrl);
            }

            imageView.setImageBitmap(bitmap);

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    super.onActivityResult(requestCode, resultCode, data);
}

```
