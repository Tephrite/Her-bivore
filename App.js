import React, { Component } from 'react';
import { View, Text, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import Home from './screens/home';
import Loading from './screens/loading';
import Navigator from './routes/homeStack';

export default function App() {

  return (
    <Navigator />
  )
};
