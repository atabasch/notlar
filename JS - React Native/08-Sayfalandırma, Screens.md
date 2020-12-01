https://reactnavigation.org daki kurulum yöntemlerini uygula.
ReactNative 0.61.0 ve Navigation 5.x için işlemleri

# (1) KURULUM

#### KÜTÜPHANELERİ İNDİR
> npm install @react-navigation/native --save

> npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save

> npm install @react-navigation/stack

#### android/app/build.gradle 'e dependencies e ekle.
```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

#### MainActivity.java ya eklemeleer yap
```java
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+        return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

#### App.js nin en üstüne ekle
> import 'react-native-gesture-handler';


#### App.js için
```js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}
```

# (2) KULLANIMI
```js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreenClassName} />

        <Stack.Screen name="Detail" component={DetailScreenClassName} />

        <Stack.Screen name="Detail">
            {props => <DetailScreenClassName {...props} extraData={someData} />}
        </Stack.Screen>

        <Stack.Screen name="Detail"
            component={DetailScreenClassName}
            options={{ title: 'Detay Sayfası' }}
            initialParams={{ itemId: 42 }} // Her zaman olacak paramtreler ler
             />

      </Stack.Navigator>
    </NavigationContainer>
  );
```

## HEADER AYARLARI
```js
<Stack.Screen
        name="Profile"
        component={HomeScreen}
        options={({ route }) => ({ title: route.params.name })} // Dinamik olarak her zaman paramtredeki name i alır.

        options={{
            title: 'My home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
        }}
      />
```

## SAYFA DEĞİŞTİRMEK
```js
// LİSTE EKRANINA GİDER.
<Button title="Git" onPress={ () => this.props.navigation.navigate('ListScreen') } />

// LİSTE EKRANINA GİDER ANCAK LİSTE EKRANINDAN TEKRAR LİSTE EKRANINA DA GİDEBİLİR
<Button title="Git" onPress={ () => this.props.navigation.push('ListScreen') } />

// ÖNCEKİ EKRAN
<Button title="Git" onPress={ () => this.props.navigation.goBack()} />

// İLK EKRAN
<Button title="Git" onPress={ () => this.props.navigation.popToTop()} />
```

## DEĞİŞEN SAYFAYA VERİ GÖNDERMEK ve ALMAK
```js
<Button title="Git"
    onPress={ () => this.props.navigation.navigate('ListScreen', {
        title: 'Deneme',
        itemID: 15
    }) }
    />

render(){
    let {title, itemID} = this.props.route.params
    let title = this.props.route.params.title;
    let itemID = this.props.route.params.itemID;
    //...
}
```

## COMPONENT İÇİNDE HEADERA MÜDAHALE
```js
// Header başlığı değişmek
this.props.navigation.setOptions({headerTitle: this.state.headerTitle});

```
