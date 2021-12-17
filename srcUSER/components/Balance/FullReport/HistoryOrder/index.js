import React from 'react';
import { View, Text } from 'react-native';
import classes from './historyCSS';

const HistoryOrder = () => {
  return (
    <View style={classes.block}>
      <Text style={classes.left}>кофе latte</Text>
      <Text style={classes.right}>+80</Text>
    </View>
  );
};

export default HistoryOrder;
