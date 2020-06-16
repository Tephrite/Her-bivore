import React, { useState } from 'react';
import { View, StyleSheet, Image, Animated, TouchableWithoutFeedback } from 'react-native';

export default function Loading({navigation}) {

  const animation = new Animated.Value(0)
  

  const startAnimation = () => {
    Animated.timing(animation, {
      delay:1000,
      toValue: 90,
      duration: 350,
      useNativeDriver: true,
    }).start(() =>navigation.navigate ("Home"))
    
  };

  const animatedStyles = {
    transform: [{
      rotate: animation.interpolate({
        inputRange: [0, 90],
        outputRange: ["0deg", "-90deg"],
      })
    }],
  }
  startAnimation()
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Image style={styles.box} source={require("../assets/Logo/Icon.png")} />    
        </TouchableWithoutFeedback>    
      </Animated.View>
      <Image style={styles.fullLogo} source={require("../assets/Logo/920x126.png")} />
    </View>
  )
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
  },
  fullLogo: {
    marginTop:50,
    width: 300,
    height: 40,
  }
});