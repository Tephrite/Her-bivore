import React, { Component } from 'react';
import { View, StyleSheet, Image, Animated, TouchableWithoutFeedback } from 'react-native';

export default class Loading extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 90,
      duration: 350,
      useNativeDriver: true,
    }).start()
  };

  render() {

    const animatedStyles = {
      transform: [{
        rotate: this.state.animation.interpolate({
          inputRange: [0, 90],
          outputRange: ["0deg", "-90deg"],
        })
      }],
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Image style={styles.box} source={require("../assets/Logo/Icon.png")} />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 120,
    height: 120,
  }
});