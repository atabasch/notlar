Öncelikle sayfalandırma kısmında adımları yapmak gerekir.
Drawer işlemi react navigationın bir parçasıdır.
Drawer navigation ekranı soldan sağa çektiğimizde açılan menüdüri.

#### İndir
> npm install @react-navigation/drawer --save

App.js içine import et.
> import { NavigationContainer } from '@react-navigation/native';

> import { createDrawerNavigator } from '@react-navigation/drawer';

Stack navigation yerine aşağıdaki şekilde kullan.
```js
return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="ListScreen" component={ListScreen} />
        <Drawer.Screen name="DetailScreen" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
);
```


### Buton ile açıp kapatma işlemleri
```js
this.props.navigation.openDrawer()

this.props.navigation.closeDrawer()

this.props.navigation.toggleDrawer()
```

https://reactnavigation.org/docs/en/drawer-based-navigation.html
