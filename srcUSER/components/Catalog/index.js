import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
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
      <Header title="КАТАЛОГ" sum="300.00" />
      <Input />

        <View style={classes.itemsWrap}>

          {
            catalog.length > 0 ?
              catalog.map((el, i) => {
                return <TouchableOpacity key={i} style={classes.itemsList} onPress={() => navigation.navigate('Detail', el.name)}><Text>{el.name}</Text></TouchableOpacity>
              }) : <Text>Loading...</Text>
          }


        </View>

    </View>
  )
};

export default Catalog;