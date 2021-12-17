import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import classes from './AccountOutputCSS';

const AccountOutput = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={classes.block} onPress={() => navigation.navigate('AccountDetails')}>
      <Text style={classes.leftText}>{props.el.date}</Text>
      <Text style={classes.price}>{props.el.price}</Text>
    </TouchableOpacity>
  );
};

export default AccountOutput;
