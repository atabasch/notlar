- React nativin güncel sürümüne göre değişiklikler olacaktır.
- Paketin linki: https://github.com/react-native-community/react-native-camera/
- Dökümanı okuyarak en güncel işlemleri yapabilirsin.
- Bir component oluşturup tamamen kamera sayfasını onda yaparsın ve işlemleri halledersin.
- CameraRoll react-native içinden kaldırıldı.
- CameraRoll eklentisi: https://github.com/react-native-community/react-native-cameraroll
-

# (1)► KURULUM
> npm install --save react-native-camera@git+https://git@github.com/react-native-community/react-native-camera.git

> npm install @react-native-community/cameraroll --save

#### Android İşlemleri

**AndroidManifes.xml** dosyasına ekle
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

**android/app/build.gradle** dosyasına ekle.
```gradle
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' // <--- insert this line
  }
}
```


#### IOS için
`pod install` komutunu mac yada linux da kullanarak ios için gerekli işlemleri yapabilirsin.

ve ardından izinler için

```xml
<!-- Required with iOS 10 and higher -->
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Required with iOS 11 and higher: include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>
```

# (2)► KULLANIM

- components klasöründe **CameraView.js** adında bir dosya oluştur ve aşağıdaki kodları ekle.

```js
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Platform } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";


export default class CameraView extends Component {

    // RESİM KAYDETMEK İÇİN YAZMA İZNİ İŞLEMLERİ
    // İZİN İŞLEMLERİNİ AŞAĞIDAKİ GİBİ DEĞİL DE
    // react-native-permissions eklentisi ile yaparsan daha rahat olur.
    requestPermission = async() => {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Resmi çekebilmek için yazma izni gerekli.',
                message:'Resim çekip kaydedebilmek için yazma izni vermelisiniz.',
                buttonNeutral: 'Daha Sonra Sor',
                buttonNegative: 'İPTAL',
                buttonPositive: 'İZİN VER',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('You can use the camera');
            } else {
              alert('İzin vermediğiniz için resim çekemedik.')
            }
          } catch (err) {
            console.warn(err);
          }
    }//yazmaIznıIste



    // RESİM ÇEK BUTONUNA TIKLANINCA RESMİ ÇEKECEK OLAN METHOD
    takePicture = async () => {
       if (this.camera) {
         const options = { quality: 0.5, base64: true };

         if(Platform.OS == 'android' && Platform.Version > 22){
            await this.requestPermission();
         }

         const data = await this.camera.takePictureAsync(options);
         console.log(data);
         console.log(data.uri);

         CameraRoll.saveToCameraRoll(data.uri, 'photo')
                    .then(()=>{
                        alert("Resim kaydedildi");
                    })
                    .catch(err => {
                        alert("Hata");
                    });
       }
     };




    // Componentin Render Eilmesi
    render() {
    return (
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back} // Arka kamera ön kamera
            flashMode={RNCamera.Constants.FlashMode.on} // Flash açık kapalı auto

            notAuthorizedView={
                <View><Text>Kamera Kullanımı için izin verilmedi</Text></View>
            }

            // Resim çekmek izin kamera izni almak
            androidCameraPermissionOptions={{
              title: 'Kamera İzni',
              message: 'Resim çekmek için kameranızı kullanmamıza izin vermelisiniz.',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            // Video çekmek için ses kayıt izni almak
            androidRecordAudioPermissionOptions={{
              title: 'Ses kaydı izni',
              message: 'Ses kaydı yapabilmek için izin vermeniz gerek.',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> Resim Çek </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
    }

}// class CameraView


```
