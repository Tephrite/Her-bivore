import React from 'react'
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {globalStyles} from '../components/global';
import Home from "../screens/home";
import Recipe from "../screens/recipe";
import Loading from "../screens/loading";
import RecipeTypes from "../screens/recipeTypes";
import RecipeLists from "../screens/recipeLists";
/*{import SweetTreatsRecipes from "../screens/sweetTreatsRecipes";
import SnacksSidesRecipes from "../screens/snacksSidesRecipes";}*/

import EvilIcons from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: props => <Image style={{alignSelf: "center", resizeMode:"contain", width: "80%", height: 126}}source={require("../assets/Logo/920x126.png")} />,
            headerRight: () => (<EvilIcons name="user" size={20} style={{ paddingRight: 20}}/>),
            headerStyle: {
              backgroundColor: '#f2f2f2',
            }
          }}
        />
        <Stack.Screen
          name='Recipe'
          component={Recipe}
          options={{
            headerTitle: props => <Image style={{alignSelf: "center", resizeMode:"contain", width: "80%", height: 126}}source={require("../assets/Logo/920x126.png")} />,
            headerRight: () => (<EvilIcons name="user" size={20} style={{ paddingRight: 20}}/>),
            headerStyle: {
              backgroundColor: '#f2f2f2',
            }
          }}
        />
        <Stack.Screen
          name='RecipeTypes'
          component={RecipeTypes}
          options={{
            headerTitle: props => <Image style={{alignSelf: "center", resizeMode:"contain", width: "80%", height: 126}}source={require("../assets/Logo/920x126.png")} />,
            headerRight: () => (<EvilIcons name="user" size={20} style={{ paddingRight: 20}}/>),
            headerStyle: {
              backgroundColor: '#f2f2f2',
            }
          }}
        />
        <Stack.Screen
          name='Loading'
          component={Loading}
          options={{
            headerShown:false,
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2',
            }
            
          }}
        />
        <Stack.Screen
          name='RecipeLists'
          component={RecipeLists}
          options={{
            headerTitle: props => <Image style={{alignSelf: "center", resizeMode:"contain", width: "80%", height: 126}}source={require("../assets/Logo/920x126.png")} />,
            headerRight: () => (<EvilIcons name="user" size={20} style={{ paddingRight: 20}}/>),
            headerStyle: {
              backgroundColor: '#f2f2f2',
            }
          }}
        />
        {/*<Stack.Screen name='SweetTreatsRecipes' component={SweetTreatsRecipes} />
        <Stack.Screen name='SnacksSidesRecipes' component={SnacksSidesRecipes} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}