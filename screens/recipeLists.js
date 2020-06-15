import React, { useState } from 'react';
import { StyleSheet, View, Image, FlatList, Text, Button } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../components/global';
import Recipes from '../components/ListItem';
import { AntDesign } from 'react-native-vector-icons';
const cheerio = require("react-native-cheerio");

export default function RecipeLists({ navigation }) {
    const [items, setItems] = useState([
    ]);



    async function fetchRecipes() {
        try {
            const searchUrl = "https://www.her-bivore.com/mains.html";
            const response = await fetch(searchUrl);   // fetch page

            const htmlString = await response.text();  // get response text
            const $ = cheerio.load(htmlString);  // parse HTML string
            var count = 1;

            const siteHeading = $(".block-edit--repeatable");

            var output = siteHeading.find('a').text().split(">");

            for (var x = 0; x < output.length; x++) {
                output[x] = output[x].substring(0, output[x].indexOf("<"))

            }
            output.forEach(element => {
                setItems((prevItems) => {
                    return [...prevItems,
                    { text: element, key: Math.random().toString() }]
                });
            });

        }
        catch (err) {
            console.log(err);
        }
    }

    fetchRecipes();
    return (
        <View style={styles.container}>

            <View style={styles.listContainer}>
                
                <Image
                    style={styles.Image}
                    source={{
                        uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/5/16759562/1000x933.jpg?1540401340',
                    }} />
                <View style={styles.hoverBackground}>
                    <Text style={styles.hoverText}>MAINS </Text>
                </View>
            </View>
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={items}
                    renderItem={({ item }) => <Recipes item={item} />} />
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: 415,
        position: 'absolute',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    listContainer: {
        flex: 0.5,
    },
    list: {
        flex: 1,
        padding: 20,
    },
    hoverBackground: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 6,
        borderRadius: 20,
        marginTop: '30%',
        marginLeft: -20,
    },
    hoverText: {
        marginLeft: 20,
        fontSize: 24,
        fontFamily: 'Roboto-Regular',
    },
    h1: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Roboto-Regular',
        fontSize: 30
    }

});