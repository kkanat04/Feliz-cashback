import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import classes from './balanceCSS';
import ReportOrder from './ReportOrder';

const Orders = () => {
  const items = [
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
    {
      date: '06.06.2021',
      price: '+ 3000',
    },
  ];

  return (
    <ScrollView style={classes.scroll}>
      {
      items &&
        items.map((el, i) => {
          return <ReportOrder key={i} el={el} />;
        })
        }
    </ScrollView>
  );
};

export default Orders;
