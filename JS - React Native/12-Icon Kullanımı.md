> npm install --save react-native-vector-icons



**android/app/build.gradle** dosyasının en altına ekle
> apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

Android studio ile projeyi 1 kez aç. gradle güncellensin.

İmport et
> import Icon from 'react-native-vector-icons/FontAwesome';

Iconu Kullan
> <Icon name="home" size={22} color="#777" />
