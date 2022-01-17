import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Header from '../../../srcUSER/components/Header';
import classes from './catalogCSS';
import { useNavigation } from '@react-navigation/native';
import Input from './input';
import { useState, useEffect } from 'react';
import { category } from '../../../req';

const Catalog = () => {
  const navigation = useNavigation();

  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    category(setCatalog)
  })

  return (
    <View style={classes.wrap}>
      <Header title="КАТАЛОГ" icon='coin' />
      <Input />

        <View style={classes.itemsWrap}>

          {
            catalog.length > 0 ?
              catalog.map((el, i) => {
                return <TouchableOpacity key={i} style={classes.itemsList} onPress={() => navigation.navigate('Detail', el.name)}><Text>{el.name}</Text></TouchableOpacity>
              }) : <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', height: '70%' }}>
              <ActivityIndicator size="large" color="#456A62" />
            </View>
          }


        </View>

    </View>
  )
};

export default Catalog;