import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import classes from './helloCSS';
import Vectorsvg from '../../../assets/cashImagesSVG/Vector2.svg'
import { useNavigation } from '@react-navigation/native';

const Hello = () => {
  const navigation = useNavigation();
  return (
    <View style={classes.wrap}>
      <View style={classes.hello}>
        <Vectorsvg style={classes.img} />
      <View style={classes.Text}>
        <Text style={classes.FelizText}>Lorem ipsum dolor sit amet,</Text>
        <Text style={classes.FelizText}>consectetur adipiscing elit. Sed </Text>
        <Text style={classes.FelizText}>porta commodo nisi nec </Text>
        <Text style={classes.FelizText}>molestie</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={classes.enter}><Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>ВХОД</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={classes.reg}><Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>ЗАРЕГИСТРИРОВАТЬСЯ</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Hello;
