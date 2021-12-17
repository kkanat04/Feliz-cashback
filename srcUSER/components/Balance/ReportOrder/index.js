import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import classes from './reportCss';

const ReportOrder = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={classes.block} onPress={() => navigation.navigate('full')}>
      <Text style={classes.leftText}>{props.el.date}</Text>
      <Text style={classes.price}>{props.el.price}</Text>
    </TouchableOpacity>
  );
};

export default ReportOrder;
