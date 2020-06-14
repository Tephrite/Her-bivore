import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

export default function RecipeTypes({ navigation }) {
    
    return (
        <View style={styles.page}>
            <Image style={styles.ImageLogo} source={require("../assets/Logo/920x126.png")} />
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("RecipeLists")}>
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/5/16759562/1000x933.jpg?1540401340',
                        }} />

                </View>
                
            </TouchableOpacity>
            <Text style={styles.Text}>MAINS</Text>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("RecipeLists")}>
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/1/16718350/1000x667.JPG?1537273481',
                        }} />
                </View>
            </TouchableOpacity>
            <Text style={styles.Text}>SWEET TREATS</Text>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("RecipeLists")}>
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/6/7/16678943/642x340.jpg?1535810268',
                        }} cropTop={100000}/>
                </View>
            </TouchableOpacity>
            <Text style={styles.Text}>SNACKS & SIDES</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,
        top: -40,

    },
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ImageLogo: {
        flex: 4,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    Image: {
        flex: 1,
        height: 120,
        borderRadius: 20,
    },
    Text: {
        flex:1,
        padding: 5,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        fontFamily: 'Roboto-Bold',
        backgroundColor: '#f2f2f2',
        color: 'grey',
        borderRadius: 3,
    }
});