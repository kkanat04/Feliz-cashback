import React from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator  } from 'react-native';
import Header from '../../Header';
import classes from './moreCSS';
import Input from './../input';
import Group from '../../../../assets/cashImagesSVG/Group.svg'
import { useState, useEffect } from 'react';
import { product } from '../../../../req';

const MoreCatalog = (props) => {
  const [category, setCategoty] = useState()

  console.log(props.route.params);

  useEffect(() => {
    product(setCategoty)
  }, [])


  return (
    <View >

      <Header title="КАТАЛОГ" icon="coin" sum="400.00" />

      <Input />


      <View style={classes.scroll}>
        <ScrollView>
          {
            category ?
              category.filter(el => {
                return el.category == props.route.params
              }).map((el, i) => {
                return <View key={i} style={classes.listItem}>

                  <View style={classes.detailsItem}>
                    <View style={{ width: '30%' }}>
                      <View style={classes.detailsSquare}></View>
                    </View>
                    <View style={classes.detailsCol}>
                      <Text style={{ color: '#17453B', fontSize: 16 }}>{el.title}</Text>
                      <Text style={{ color: '#17453B', fontSize: 14 }}>{el.description}</Text>
                      <Text style={{ color: '#17453B', fontSize: 12, textAlign: 'right' }}>{el.price} сом/<Text style={classes.detailsSpan}> +{el.percent_cashback}</Text><Group /></Text>

                    </View>
                  </View>

                </View>

              }) :
              <ActivityIndicator size="large" color="#456A62" /> 
          }
        </ScrollView>
      </View>

    </View>
  );
};

export default MoreCatalog;
