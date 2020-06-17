import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../components/global';

export default class Home extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <View style={styles.page}>

                <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate("RecipeTypes")}>
                    <View style={styles.container}>
                        <Image
                            style={globalStyles.imageButton}
                            source={{
                                uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/17/3/6/17368275/1000x667.jpg?1557835238',
                            }} />

                    </View>

                </TouchableOpacity>
                <Text style={globalStyles.anchorText}>RECIPES</Text>
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Recipe")}>
                    <View style={styles.container}>
                        <Image
                            style={globalStyles.imageButton}
                            source={{
                                uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/17/3/6/17368285/1000x1000.jpg?1557835422',
                            }} />
                    </View>
                </TouchableOpacity>
                <Text style={globalStyles.anchorText}>SHOP</Text>
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Recipe")}>
                    <View style={styles.container}>
                        <Image
                            style={globalStyles.imageButton}
                            source={{
                                uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/16/7/2/16723073/867x960.jpg?1537392811',
                            }} cropTop={100000} />
                    </View>
                </TouchableOpacity>
                <Text style={globalStyles.anchorText}>LIFESTYLE</Text>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});