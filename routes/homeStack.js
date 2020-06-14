import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/home";
import Recipe from "../screens/recipe";
import Loading from "../screens/loading";


const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading' headerMode="none">
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Recipe' component={Recipe} />
        <Stack.Screen name='Loading' component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}