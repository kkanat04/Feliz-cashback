import React from 'react';
import { View, Text, ScrollView ,TextInput,Image, TouchableOpacity} from 'react-native';
import Header from '../../../srcUSER/components/Header';
import classes from './AccountCSS';
import AccountInput from './AccountInput'
import AccountOutput from './AccountOutput'



const AccountOrders = () => {
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
        <View style={classes.wrap}>
        <Header title="КАТАЛОГ"  sum="300.00" />
            <View>
            <AccountInput/>
                <ScrollView style={classes.scroll}>
                    {items &&
                        items.map((el, i) => {
                        return <AccountOutput key={i} el={el} />;
                        })}
                </ScrollView>
            </View>

        </View>
    );
};

export default AccountOrders;