import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/home";
import Recipe from "../screens/recipe";
import Loading from "../screens/loading";
import RecipeTypes from "../screens/recipeTypes";
import RecipeLists from "../screens/recipeLists";
/*{import SweetTreatsRecipes from "../screens/sweetTreatsRecipes";
import SnacksSidesRecipes from "../screens/snacksSidesRecipes";}*/


const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading' headerMode="none">
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Recipe' component={Recipe} />
        <Stack.Screen name='RecipeTypes' component={RecipeTypes} />
        <Stack.Screen name='Loading' component={Loading} />
        <Stack.Screen name='RecipeLists' component={RecipeLists} />
        {/*<Stack.Screen name='SweetTreatsRecipes' component={SweetTreatsRecipes} />
        <Stack.Screen name='SnacksSidesRecipes' component={SnacksSidesRecipes} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}