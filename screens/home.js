import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    
    return (
        <View style={styles.page}>
            <Image style={styles.ImageLogo} source={require("../assets/Logo/920x126.png")} />
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("Recipe")}>
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/17/3/6/17368275/1000x667.jpg?1557835238',
                        }} />

                </View>
                
            </TouchableOpacity>
            <Text style={styles.Text}>RECIPES</Text>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("Recipe")}>
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/17/3/6/17368285/1000x1000.jpg?1557835422',
                        }} />
                </View>
            </TouchableOpacity>
            <Text style={styles.Text}>SHOP</Text>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate ("Recipe")}>
                <View style={styles.container}>
                    <Image
                        style={styles.Image}
                        source={{
                            uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/2/16723073/867x960.jpg?1537392811',
                        }} cropTop={100000}/>
                </View>
            </TouchableOpacity>
            <Text style={styles.Text}>LIFESTYLE</Text>
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