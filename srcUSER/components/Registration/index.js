import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import classes from './regisCSS'
import Vector from '../../../assets/cashImagesSVG/Vector.svg'
import { useNavigation } from '@react-navigation/native';
import { sumbit } from '../../../req';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Registration = () => {
  const navigation = useNavigation();

  const [userName, SetUserName] = useState('')
  const [email, SetEmail] = useState('')
  const [phone, SetPhone] = useState('')
  const [password, SetPassword] = useState('')
  const [password2, SetPassword2] = useState('')
  const [err, setErr] = useState()

  const [regis, setRegis] = useState([])

  console.log(regis);

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem('tokenUser', token)
    } catch (e) {
      // Нечего потому что нахер над сохранять ошибку!!!
    }
  }



  return (
    <ScrollView>
      <View style={classes.wrap}>
        <Vector style={{ alignSelf: 'flex-end', width: '30%', resizeMode: 'contain' }} />

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



                
              <TextInput onChangeText={(text) => SetUserName(text)} style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Имя' />
              <TextInput onChangeText={(text) => SetEmail(text)} style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Email' />
              <TextInput onChangeText={(text) => SetPhone(text)} style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Номер телефона' />
              <TextInput onChangeText={(text) => SetPassword(text)} style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Пароль' />
              <TextInput onChangeText={(text) => SetPassword2(text)} style={classes.input} placeholderTextColor='#BFCBC9' placeholder='Повторите пароль' />
            </View>


            <TouchableOpacity style={classes.btn} onPress={() => {
              sumbit(userName, email, phone, password, password2, setRegis, navigation, storeData)
            }}><Text style={{ color: '#17453B', textAlign: 'center' }}>ЗАРЕГИСТРИРОВАТЬСЯ</Text></TouchableOpacity>
          </View>

        </View>


      </View>
    </ScrollView>
  );
};

export default Registration;
