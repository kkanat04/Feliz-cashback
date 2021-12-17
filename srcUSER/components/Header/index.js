import React from 'react';
import { View, Text, Image } from 'react-native';
import classes from './headerCSS';
import IMGcoffee from '../../../assets/cashImagesSVG/coffee.svg';
import IMGcoin from '../../../assets/cashImagesSVG/coin.svg';

export default function Header(props) {
  return (
    <View style={classes.wrap}>
      <View style={classes.content}>
        <Text style={classes.firstText}>{props.title}</Text>
        {props.icon === 'coin' ? (
          <View style={classes.right}>
            <Text style={classes.sumText}>{props.sum}</Text>

            <IMGcoin style={classes.coin} />

          </View>
        ) : (

          <IMGcoffee style={classes.img} />

        )}
      </View>
    </View>
  );
}