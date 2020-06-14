import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {globalStyles} from '../components/global';

const ListItem = ({item}) => {
  return(
    <TouchableOpacity style={globalStyles.listItem}>
      <View style = {globalStyles.listItemView}> 
        <Text style = {globalStyles.listItemText}>{item.text}</Text>
        </View>
    </TouchableOpacity>
  )
}


export default ListItem