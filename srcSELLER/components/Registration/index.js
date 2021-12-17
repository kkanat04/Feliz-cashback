import React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import classes from './regisCSS'
import Vector from '../../../assets/cashImagesSVG/Vector.svg'
import { useNavigation } from '@react-navigation/native';


const Registration = () => {
  const navigation = useNavigation();
  return (
    <View style={classes.wrap}>
      <Vector style={{ alignSelf: 'flex-end', width: '30%', resizeMode: 'contain'}} />

<View style={classes.reg}>
      <View style={classes.Registration}>

        <View style={classes.feliz}>
        <Text style={classes.textFeliz}>Добро пожаловать в</Text>
        <Text style={classes.textFeliz}>cashback-сервис</Text>
        <Text style={classes.textFeliz}>FELIZ</Text>
        </View>

        <View style={classes.Reg}>
        <Text style={classes.textReg}>Пройдите пожалуйста</Text>
        <Text style={classes.textReg}>регистрацию</Text>
        </View>

        <View style={classes.RegInput}>
          <TextInput style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Адрес электронной почты' />
          <TextInput style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Номер телефона' />
          <TextInput style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Пароль' />
          <TextInput style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Повторите пароль' />          
        </View>


        <TouchableOpacity style={classes.btn} onPress={() => navigation.navigate('Tab')}><Text style={{color: '#17453B', textAlign: 'center'}}>ЗАРЕГИСТРИРОВАТЬСЯ</Text></TouchableOpacity>
        </View>

      </View>
      
      
    </View>
  );
};

export default Registration;
