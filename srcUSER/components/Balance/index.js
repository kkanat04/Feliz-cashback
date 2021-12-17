import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../Header';
import classes from './balanceCSS';
import FullReport from './FullReport';
import Orders from './Orders';

const Balance = () => {
  const Stack = createStackNavigator();

  return (
    <View style={classes.wrap}>
      <Header title="БАЛАНС" icon="coin" sum="400" />
      <Stack.Navigator>
        <Stack.Screen name={'items'} component={Orders} options={{ headerShown: false }} />
        <Stack.Screen name={'full'} component={FullReport} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  );
};

export default Balance;
