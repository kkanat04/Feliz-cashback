import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../Header';
import classes from './profileCSS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { ProfileToken } from '../../../req';

const Profile = () => {

  const [tok, setTok] = useState('')


  const navigation = useNavigation();


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('tokenUser')
      if (value !== null) {
        setTok(value)
      }
    } catch (e) {

    }
  }
  getData()

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('tokenUser')
      navigation.navigate('Hello')
    } catch (e) {
      // remove error
    }

  }





  return (
    <View style={classes.wrap}>
      <Header title="ПРОФИЛЬ" />
      <View style={classes.profile}>
        <View style={classes.block}>
          <View style={{ height: '85%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <View>
              <View style={classes.info}>
                <Text style={{ color: '#fff', fontSize: 20, textAlign: 'right' }}>Имя:   </Text>
                <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#fff', width: '60%', color: '#fff', marginLeft: '3%' }} placeholderTextColor='#fff' placeholder='Введите имя' />

              </View>

              <View style={classes.info}>
                <Text style={{ color: '#fff', fontSize: 20, textAlign: 'right' }}>email:   </Text>
                <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#fff', width: '60%', color: '#fff', marginLeft: '3%' }} placeholderTextColor='#fff' placeholder='Введите email' />

              </View>
              <View style={classes.info}>
                <Text style={{ color: '#fff', fontSize: 20, textAlign: 'right' }}>Номер:   </Text>
                <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#fff', width: '60%', color: '#fff', marginLeft: '3%' }} placeholderTextColor='#fff' placeholder='Введите номер телефона' />

              </View>
              <View style={classes.info}>
                <Text style={{ color: '#fff', fontSize: 20, textAlign: 'right' }}>Пароль:   </Text>
                <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#fff', width: '60%', color: '#fff', marginLeft: '3%' }} placeholderTextColor='#fff' placeholder='Введите пароль' />

              </View>

            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', width: '100%' }}>
              <TouchableOpacity onPress={() => removeToken()} style={classes.btn}><Text style={{ color: '#17453B', textAlign: 'center', fontSize: 15 }}>ИЗМЕНИТЬ</Text></TouchableOpacity>
              <TouchableOpacity style={classes.btn}><Text style={{ color: '#17453B', textAlign: 'center', fontSize: 15 }}>СОХРАНИТЬ</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
