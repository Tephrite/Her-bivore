import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../components/global';
const axios = require('axios').default;

export default class RecipeTypes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipeTypes: []
        }
    }

    changePage(page) {
        this.props.navigation.navigate("RecipeLists", { page: page });
    }

    async componentDidMount() {

        const res = await fetch('http://192.168.0.17:3000/recipeTypes')
        const recipeTypes = await res.json()

        this.setState({ recipeTypes: recipeTypes })
    }

    render() {
        const { recipeTypes } = this.state
        return (
            <View style={styles.page}>
                { recipeTypes.length ?
                    recipeTypes.map(type =>
                        <View style={styles.page} key={type.title}>
                            <TouchableOpacity style={styles.container} onPress={() => this.changePage(type)}>
                                <View style={styles.container}>
                                    <Image
                                        style={globalStyles.imageButton}
                                        source={{ uri: type.imageURL }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={globalStyles.anchorText}>{type.title}</Text>
                        </View>

                    ) : null
                }
            </View>
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