import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../components/global'

const Header = ({title}) => {
  return(
    <View style={globalStyles.header}>
      <Text style={globalStyles.text}> {title} </Text>
    </View>
  )
}

Header.defaultProps = {
    title: 'Chocolate Chunk Muffins',
}

export default Header