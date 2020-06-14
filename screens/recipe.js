import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import {globalStyles} from '../components/global';

export default function AppTest(){
  const[items, setItems] = useState([
    {key: Math.random(), text: '1 cup / 250ml soy milk'},
    {key: Math.random(), text: '1 ½ tbsp lemon juice'},
    {key: Math.random(), text: '1 tbsp apple sauce'},
    {key: Math.random(), text: '1 cup caster sugar'},
    {key: Math.random(), text: '⅓ cup sunflower oil'},
    {key: Math.random(), text: '1 3/4 cups / 210g plain flour'},
    {key: Math.random(), text: '2 tsp baking powder'},
    {key: Math.random(), text: '½ tsp bicarbonate of soda (baking soda) '},
    {key: Math.random(), text: 'Pinch sea salt'},
    {key: Math.random(), text: '1 cup chocolate chunks (or your filling of choice)'}
  ]);


  return(
    <View style={globalStyles.container}>
      <Header />
      <Image 
        style = {globalStyles.foodImage}
        source = {{
          uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/18/1/6/18168806/1000x1000.jpg?1584898310',
        }} />
        <FlatList 
          data={items}
          renderItem={({item}) => <ListItem item={item} />}
          />
        
      </View>
  )
}
