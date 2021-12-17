import React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import classes from './authCSS'
import Vector from '../../../assets/cashImagesSVG/Vector.svg'
import { useNavigation } from '@react-navigation/native';


const Auth = () => {
    const navigation = useNavigation();
  return (
    <View style={classes.wrap}>
      <Vector style={{ alignSelf: 'flex-end'}}/>

      <View style={classes.Registration}>
        <View style={classes.feliz}>
        <Text style={classes.textFeliz}>Добро пожаловать в</Text>
        <Text style={classes.textFeliz}>cashback-сервис</Text>
        <Text style={classes.textFeliz}>FELIZ</Text>
        </View>

        <View style={classes.Reg}>
        <Text style={classes.textReg}>Введите свои данные</Text>
        </View>

        <View style={classes.RegInput}>
          <TextInput style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Номер телефона' />
          <TextInput style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Пароль' />
        </View>

        <Text style={{color: '#6E8B84', textAlign: 'center', paddingTop: 10,}}>Забыли пароль?</Text>

        <TouchableOpacity style={classes.btn} onPress={() => navigation.navigate('Tab')} ><Text style={{color: '#17453B', textAlign: 'center', fontSize: 15 }}>ВОЙТИ</Text></TouchableOpacity>


      </View>
      </View>
      
      
  );
};

export default Auth;
