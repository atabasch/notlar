# KURULUM

>  npm install react-native-image-picker --save

### IOS İZİNLERİ EKLE
Info.plist
```
<plist version="1.0">
  <dict>
    ...

    <key>NSPhotoLibraryUsageDescription</key>
    <string>$(PRODUCT_NAME) would like access to your photo gallery</string>
    <key>NSCameraUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to use your camera</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to save photos to your photo gallery</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to use your microphone (for videos)</string>


  </dict>
</plist>
```

### ANDROİD İZİNLERİ EKLE
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```



# KULLANIMI

### Import Et
> import ImagePicker from 'react-native-image-picker';

### Ayarları Oluştur
```js
const imagePicketOptions = {
  title: 'Görsel Seçin',
  cancelButtonTitle: 'İptal',
  takePhotoButtonTitle: 'Fotoğraf Çek',
  chooseFromLibraryButtonTitle: 'Galeriden Seç',
  customButtons: [{ name: 'other', title: 'Kamerayı Aç' }],
  tintColor: 'red',
  mediaType: 'photo', // photo, video, mixed
  maxWidth: '300',
  maxHeight: '100',
  videoQuality: 'medium', // low, medium, high
  // durationLimit: // Maksimum video saniyesi
  storageOptions: {
    skipBackup: true, // IOS da Cloud yedeklemesini devre dışı bırakır.
    path: 'images', // Cihazda resimlerin saklanacağı klasör adı.
    cameraRoll: false, // True olursa çekilen resim cihazın mesela DCIM dizinine kaydedilir.
  },
  permissionDenied: {
      title: '',
      text: '',
      reTryTitle: '',
      okTitle: ''
  }
};
```

### Resim seçtirme işlemleri

```js
class CustomScreen extends Component{

    state = {
        avatarSource: source,
    }

    render(){
        return(
            // Tıklanınca resim seçme işlemlerini başlatacak Buton
            <Button onPress={ this.selectImage }/></Button>

            // Resim upload edildikten sonra stateden veri çekeceğiz.
            <Image source={this.state.avatarSource} />
        );
    }


    // Resmi alacak olanfonksiyon
    selectImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) { // Açılana menüde Cancel butonuna basılınca.
                console.log('User cancelled image picker');
            } else if (response.error) { // Hata olunca çalışacak kod.
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) { // Custom butonla ilgili işlem yapınca

                if(response.customButton == 'fb'){

                }

                if(response.customButton == 'other'){

                }

            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
}
```

# RESPONSEDAN DÖNEN VERİLER.
| key              | iOS                    | Android     | Description                                                            |
| ---------------- | ---------------------- | ----------- | ---------------------------------------------------------------------- |
| didCancel        | OK                     | OK          | Informs you if the user cancelled the process                          |
| error            | OK                     | OK          | Contains an error message, if there is one                             |
| customButton     | OK                     | OK          | If the user tapped one of your custom buttons, contains the name of it |
| data             | OK                     | OK          | The base64 encoded image data (photos only)                            |
| uri              | OK                     | OK          | The uri to the local file asset on the device (photo or video)         |
| origURL          | OK                     | -           | The URL of the original asset in photo library, if it exists           |
| isVertical       | OK                     | OK          | Will be true if the image is vertically oriented                       |
| width            | OK                     | OK          | Image dimensions (photos only)                                         |
| height           | OK                     | OK          | Image dimensions (photos only)                                         |
| fileSize         | OK                     | OK          | The file size (photos only)                                            |
| type             | OK                     | OK          | The file type (photos only)                                            |
| fileName         | OK (photos and videos) | OK (photos) | The file name, if available
| path             | -                      | OK          | The file path                                                          |
| latitude         | OK                     | OK          | Latitude metadata, if available                                        |
| longitude        | OK                     | OK          | Longitude metadata, if available                                       |
| timestamp        | OK                     | OK          | Timestamp metadata, if available, in ISO8601 UTC format                |
| originalRotation | -                      | OK          | Rotation degrees (photos only) _See [#109](/../../issues/199)_         |
