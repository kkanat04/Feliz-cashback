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
      <ScrollView style={{width: '100%', height: '100%'}}>

        <View style={classes.itemsWrap}>

          {
            catalog.length > 0 ?
              catalog.map((el, i) => {
                return <TouchableOpacity key={i} style={classes.itemsList} onPress={() => navigation.navigate('Detail')}><Text>{el.name}</Text></TouchableOpacity>
              }) : <Text>Loading...</Text>
          }


        </View>

      </ScrollView>
    </View>
  )
};

export default Catalog;