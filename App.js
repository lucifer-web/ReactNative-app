import React from 'react';
import {SafeAreaView, Platform, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Starter from './pages/Starter/Starter';
import Add from './pages/Add/Add';
function Homee(){
  return <Text>dfgh</Text>
}
const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Starter}/>
        <Stack.Screen name='Add Your Task' component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const style = StyleSheet.create({
//   container: {
//     color: 'red',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })