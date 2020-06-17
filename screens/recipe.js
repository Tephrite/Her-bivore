import React, { Component, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { globalStyles } from '../components/global';
import { withOrientation } from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { key: Math.random().toString(), text: '1 cup / 250ml soy milk' },
        { key: Math.random().toString(), text: '1 ½ tbsp lemon juice' },
        { key: Math.random().toString(), text: '1 tbsp apple sauce' },
        { key: Math.random().toString(), text: '1 cup caster sugar' },
        { key: Math.random().toString(), text: '⅓ cup sunflower oil' },
        { key: Math.random().toString(), text: '1 3/4 cups / 210g plain flour' },
        { key: Math.random().toString(), text: '2 tsp baking powder' },
        { key: Math.random().toString(), text: '½ tsp bicarbonate of soda (baking soda) ' },
        { key: Math.random().toString(), text: 'Pinch sea salt' },
        { key: Math.random().toString(), text: '1 cup chocolate chunks (or your filling of choice)' }],

      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(screenWidth),
      translateY: -1000,

      favourite: "heart-o"
    };
  }

  handleSlide = type => {
    let { xTabOne, xTabTwo, translateX, translateXTabOne, translateXTabTwo, active } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: screenWidth,
          duration: 100,
          useNativeDriver: true
        }).start()
      ])
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -screenWidth,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        }).start()
      ])
    }
  }
  changeFavourite = () => {
    if (this.state.favourite == "heart") {
      this.setState({ favourite: "heart-o" })
    } else {
      this.setState({ favourite: "heart" })
    }
  }
  render() {
    let { xTabOne, xTabTwo, translateX, translateY, active, translateXTabOne, translateXTabTwo } = this.state
    return (
      <View style={styles.container}>
        <View style={[styles.container, { flexDirection: "column-reverse" }]}>
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
          <FontAwesome
            onPress={this.changeFavourite}
            name={this.state.favourite} size={30} style={{ color: "white", position: "absolute", padding: 15, alignSelf: "flex-end" }} />
        </View>
        <View style={{ flexDirection: 'row', position: "relative" }}>
          <Animated.View style={{ position: "absolute", width: "52%", height: "100%", backgroundColor: "#8dd289", left: -3, borderRadius: 5, transform: [{ translateX }] }} />
          <TouchableOpacity
            onLayout={event => this.setState({ xTabOne: event.nativeEvent.layout.x })}
            onPress={() => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 5, }}>
            <Entypo name="bowl" style={{ color: active === 0 ? 'white' : 'black' }} />
            <Text style={{ color: active === 0 ? 'white' : 'black' }}>Ingredients</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={event => this.setState({ xTabTwo: event.nativeEvent.layout.x })}
            onPress={() => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 5, }}>
            <Entypo name="flag" style={{ color: active === 1 ? 'white' : 'black' }} />
            <Text style={{ color: active === 1 ? 'white' : 'black' }}>Method</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, { resizeMode: "" }]}>
          <Animated.View style={[styles.container, { transform: [{ translateX: translateXTabOne }] }]} onLayout={event => this.setState({ translateY: event.nativeEvent.layout.height })}>
            <FlatList
              style={styles.list}
              data={this.state.items}
              renderItem={({ item }) => (
                
                <Text style={[globalStyles.listItemText, { padding: 10 }]}> {item.text} </Text>
              )}
            />
          </Animated.View>

          <Animated.View style={[styles.container, { transform: [{ translateX: translateXTabTwo }, { translateY: -translateY }] }]}>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>
            <Text style={[globalStyles.listItemText, { padding: 10 }]}> Hi </Text>

          </Animated.View>
        </View>
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
  list: {
    flex: 1,
    resizeMode: "cover",
    position:"absolute"
  }
})
