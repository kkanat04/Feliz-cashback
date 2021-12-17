import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../../Header';
import classes from './moreCSS';
import Input from './../input';
import Group from '../../../../assets/cashImagesSVG/Group.svg'

const MoreCatalog = () => {
  const category = [
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
    {
      title: 'ICE Tea (зеленый)',
      description: 'Напитки',
      price: 90,
      coin: 9
    },
  ]
  return (
    <View >

      <Header title="КАТАЛОГ" icon="coin" sum="400.00" />

      <Input />


      <View style={classes.scroll}>
      <ScrollView>
        {
          category ?
            category.map((el, i) => {
              return <View style={classes.listItem}>

                <View style={classes.detailsItem}>
                  <View style={{ width: '30%' }}>
                    <View style={classes.detailsSquare}></View>
                  </View>
                  <View style={classes.detailsCol}>
                    <Text style={{ color: '#17453B', fontSize: 16 }}>{el.title}</Text>
                    <Text style={{ color: '#17453B', fontSize: 14 }}>{el.description}</Text>
                    <Text style={{ color: '#17453B', fontSize: 12, textAlign: 'right' }}>{el.price} сом/<Text style={classes.detailsSpan}>+ {el.coin}</Text><Group/></Text>

                  </View>
                </View>

              </View>

            }) : null
        }
      </ScrollView>
      </View>

    </View>
  );
};

export default MoreCatalog;
