import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './srcUSER/Main';
import Stack from "./FirstPage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import MainToken from './srcUSER/MainToken';
import MainSeller from './srcSELLER/MainSeller';

export default function App() {

  const [tok, setTok] = useState('')
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
  console.log(tok);
  
  return (
    <View style={styles.container}>
      <NavigationContainer>
        
        {
          tok ? <MainToken /> : <Main />
        }

        {/* <MainSeller /> */}


      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});
