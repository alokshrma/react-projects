import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack=createStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsScreen from './src/view/screens/DetailsScreen';
import {StatusBar} from './src/consts/colors';
import COLORS from './src/consts/colors';
const App =()=> {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{header:()=> null}}>
        <Stack.Screen name="Home" component ={HomeScreen}/>
        <Stack.Screen name="Details" component ={DetailsScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );

};
export default App;