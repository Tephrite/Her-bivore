import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, FlatList, Text, Button } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../components/global';
import { AntDesign } from 'react-native-vector-icons';
const cheerio = require("react-native-cheerio");

export default class RecipeLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            imageURL: " ",
        };
    }

    async componentDidMount() {
        const res = await fetch('http://192.168.0.17:3000/recipeLists/mains')
        const recipeLists = await res.json()

        recipeLists.forEach(element => {
            this.setState(prevState => ({
                item: [...prevState.item, { text: element.title, key: Math.random().toString(), image: element.image, url: element.url }]
            }))

        });
        this.setState({ imageURL: this.props.route.params.page.imageURL })
    }

    render() {

        var Title = this.props.route.params.page.title
        return (
            <View style={styles.container}>

                <View style={styles.listContainer}>

                    <Image
                        style={styles.Image}
                        source={{
                            uri: this.state.imageURL,
                        }} />
                    <View style={styles.hoverBackground}>
                        <Text style={styles.hoverText}> {Title} </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <FlatList

                        data={this.state.item}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.container}>
                                    {!!item.text && (
                                        <Text
                                            style={globalStyles.listItemText}
                                            onPress={() => this.props.navigation.navigate("Recipe")}>
                                            {item.text}
                                        </Text>
                                    )}
                                    {item.image && (
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{ height: 100, width: 100 }}
                                        />
                                    )}
                                </View>
                            );
                        }}
                    />
                </View>

            </View >
        )
    }

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
        //flex: 0.5,
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