import React, {useState} from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { LongPressGestureHandler} from 'react-native-gesture-handler';
import { globalStyles } from '../components/global';
import Recipes from '../components/ListItem';

export default function RecipeLists({ navigation }) {
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

    return (
        <View style={styles.container}>
            <Image
                style={styles.Image}
                source={{
                    uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/17/3/6/17368275/1000x667.jpg?1557835238',
                }} />
                <FlatList 
                style={styles.list}
                data={items}
                renderItem={({item}) => <Recipes item={item} />}/>
        </View >
    )
}

const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: 415  
    },
    container: {
        flex: 1,
        flexDirection: 'column',      
    },
    list:{
        flex: 1,
        padding: 20,
    },
    h1: {
        flex:1,
        padding: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Roboto-Regular',
        fontSize: 30
    }

});