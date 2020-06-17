import React, { Component, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { globalStyles } from '../components/global';
import { withOrientation } from 'react-navigation';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [{ key: Math.random(), text: '1 cup / 250ml soy milk' },
      { key: Math.random(), text: '1 ½ tbsp lemon juice' },
      { key: Math.random(), text: '1 tbsp apple sauce' },
      { key: Math.random(), text: '1 cup caster sugar' },
      { key: Math.random(), text: '⅓ cup sunflower oil' },
      { key: Math.random(), text: '1 3/4 cups / 210g plain flour' },
      { key: Math.random(), text: '2 tsp baking powder' },
      { key: Math.random(), text: '½ tsp bicarbonate of soda (baking soda) ' },
      { key: Math.random(), text: 'Pinch sea salt' },
      { key: Math.random(), text: '1 cup chocolate chunks (or your filling of choice)' }],

      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0)
    };
  }

  handleSlide = type => {
    let { xTabOne, xTabTwo, translateX, active } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true
    }).start()
  }

  render() {
    let { xTabOne, xTabTwo, translateX, active } = this.state
    return (
      <View style={styles.container}>
        <View style={[styles.container, {flexDirection: "column-reverse"}]}>
          <Image
            style={styles.Image}
            source={{
              uri: 'https://sites.create-cdn.net/siteimages/57/1/6/571639/17/5/0/17501596/1000x743.JPG?1562698659',
            }} />
          <View style={styles.recipeBasic}>
            <Text style={[styles.titleText, { fontSize: 25 }]}>Minted Pea, Asparagus and Beetroot Tart </Text>
            <Text style={[styles.titleText, { fontSize: 15 }]}>Yield: 4 Tarts </Text>
            <Text style={[styles.titleText, { fontSize: 15 }]}>Total Time: 30 minutes </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', position: "relative" }}>
          <Animated.View style={{ position: "absolute", width: "50%", height: "100%", backgroundColor: "#8dd289", borderRadius: 5, transform: [{ translateX }] }} />
          <TouchableOpacity
            onLayout={event => this.setState({ xTabOne: event.nativeEvent.layout.x })}
            onPress={() => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 5, }}
          >
            <Text style={{ color: active === 0 ? 'white' : 'black' }}>Ingredients</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={event => this.setState({ xTabTwo: event.nativeEvent.layout.x })}
            onPress={() => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 5, }}>
            <Text style={{ color: active === 1 ? 'white' : 'black' }}>Method</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) => (<Text>{item.text} </Text>)}
        />
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    backgroundColor: 'black',
    opacity: 0.7
  },
  titleText: {
    color: "#FFF",
    borderColor: "black",
    fontFamily: "AvenirNext-Regular"
  },
  recipeBasic: {
    flex: 1,
    left: 0,
    padding: 10,
    paddingLeft: 10,
    position: "absolute",
    resizeMode: "cover",
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
})
