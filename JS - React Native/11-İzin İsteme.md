İzin istemenin react native e gömülü **PermissionsAndroid** adında bir kütüphanesi var ancak çok yönetilebilir işlemler yapılmıyor. O yüzden ekstra bir izin kütüphanesi kullanmak gerekebilir.

**Kütüphane Kaynak Lini**
https://github.com/react-native-community/react-native-permissions

# KURULUM
> npm install --save react-native-permissions

# KULLANIM

```js
// Dahil Et
import Permission from 'react-native-permissions';

export default class App extends React.Component{
    izinIste = () => {
        // check ile izin istemek yerine sadece kontrol edilebilir.
        //Permission.check(Permission.PERMISSIONS.ANDROID.CAMERA)
        // Permission.openSettings(); // Telefonun izinler ayar sayfasını açar.
        Permission.request(Permission.PERMISSIONS.ANDROID.CAMERA)
        .then(result => {
            switch(result){
                case Permission.RESULTS.GRANTED:
                    alert('İZİN VERİLDİ');
                    break;

                case Permission.RESULTS.DENIED:
                    alert('İZİN VERİLMEDİ');
                    break;

                case Permission.RESULTS.UNAVAILABLE:
                    alert('UNAVAILABLE');
                    break;


                case Permission.RESULTS.BLOCKED:
                    alert('DAHA ÖNCE BİR DAHA SORMA İŞARETLENMİŞ.');
                    break;
            }
        })
    }


    render(){
      return (
        <View>
            <Button title="İzin İste" onPress={this.izinIste}/>
        </View>
      );
    }//render

};



```


# İZİNLER
```
import {PERMISSIONS} from 'react-native-permissions';

// Android permissions

PERMISSIONS.ANDROID.ACCEPT_HANDOVER;
PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION;
PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION;
PERMISSIONS.ANDROID.ADD_VOICEMAIL;
PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS;
PERMISSIONS.ANDROID.BODY_SENSORS;
PERMISSIONS.ANDROID.CALL_PHONE;
PERMISSIONS.ANDROID.CAMERA;
PERMISSIONS.ANDROID.GET_ACCOUNTS;
PERMISSIONS.ANDROID.PROCESS_OUTGOING_CALLS;
PERMISSIONS.ANDROID.READ_CALENDAR;
PERMISSIONS.ANDROID.READ_CALL_LOG;
PERMISSIONS.ANDROID.READ_CONTACTS;
PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
PERMISSIONS.ANDROID.READ_PHONE_NUMBERS;
PERMISSIONS.ANDROID.READ_PHONE_STATE;
PERMISSIONS.ANDROID.READ_SMS;
PERMISSIONS.ANDROID.RECEIVE_MMS;
PERMISSIONS.ANDROID.RECEIVE_SMS;
PERMISSIONS.ANDROID.RECEIVE_WAP_PUSH;
PERMISSIONS.ANDROID.RECORD_AUDIO;
PERMISSIONS.ANDROID.SEND_SMS;
PERMISSIONS.ANDROID.USE_SIP;
PERMISSIONS.ANDROID.WRITE_CALENDAR;
PERMISSIONS.ANDROID.WRITE_CALL_LOG;
PERMISSIONS.ANDROID.WRITE_CONTACTS;
PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;

// iOS permissions

PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL;
PERMISSIONS.IOS.CALENDARS;
PERMISSIONS.IOS.CAMERA;
PERMISSIONS.IOS.CONTACTS;
PERMISSIONS.IOS.FACE_ID;
PERMISSIONS.IOS.LOCATION_ALWAYS;
PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
PERMISSIONS.IOS.MEDIA_LIBRARY;
PERMISSIONS.IOS.MICROPHONE;
PERMISSIONS.IOS.MOTION;
PERMISSIONS.IOS.PHOTO_LIBRARY;
PERMISSIONS.IOS.REMINDERS;
PERMISSIONS.IOS.SIRI;
PERMISSIONS.IOS.SPEECH_RECOGNITION;
PERMISSIONS.IOS.STOREKIT;
```
