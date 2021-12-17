import React from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import classes from "./AccountDetailsCSS";
import Header from "../../../../srcUSER/components/Header/index";
import DetailsOutput from "../DetailsOutput";

const AccountDetails = () => {
  const items = [
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)',
      price: '90',
      cashback: '10'
    },
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)',
      price: '90',
      cashback: '10'
    },
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)dsf',
      price: '90',
      cashback: '10'
    },
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)xcv',
      price: '90',
      cashback: '10'
    },
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)',
      price: '90',
      cashback: '10'
    },
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)',
      price: '90',
      cashback: '10'
    },
    {
      number: '+996 555 555 555',
      name: 'IceTea(зеленый)',
      price: '90',
      cashback: '10'
    }

  ]
  return (
      <View style={classes.wrap}>
        <Header title="КАТАЛОГ" sum="300.00" />
        <View style={classes.searchSection}>
          <TextInput
              style={classes.input}
              placeholder="DD / MM / YY"
              placeholderTextColor={"rgba(23, 69, 59, 0.8)"}
          />
          <Text style={classes.searchIcon}>v</Text>
        </View>
        <ScrollView style={classes.ScrollView}>
          {items &&
          items.map((el, i) => {
            return <DetailsOutput key={i} el={el}/>
          })}
        </ScrollView>
      </View>
  );
};

export default AccountDetails;