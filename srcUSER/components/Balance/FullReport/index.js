import React from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import classes from './fullCSS';
import IMGback from '../../../../assets/cashImagesSVG/backIcon.svg';
import { useNavigation } from '@react-navigation/native';
import HistoryOrder from './HistoryOrder';

const FullReport = () => {
  const navigation = useNavigation();

  return (
    <View style={classes.wrap}>
      <View style={classes.dateView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IMGback width={80} height={35} />
        </TouchableOpacity>
        <Text style={classes.date}>06.06.2021</Text>
      </View>
      <View style={classes.block}>
        <ScrollView style={classes.scroll}>
          <HistoryOrder />
          <HistoryOrder />
          <HistoryOrder />
          <HistoryOrder />
          <View style={classes.total}>
            <Text style={classes.totalLeft}>Итого за день</Text>
            <Text style={classes.totalLeft}>0</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FullReport;
