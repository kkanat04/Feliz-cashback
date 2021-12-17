import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import Catalog from './Catalog';
import Footer from './Footer';
import Detail from './Catalog/Detail'
import Basket from "./Basket";
import Branch from "./Branch";
import BasketPay from './BasketPay';
import CashBox from './Account/AccountOrders';
import AccountDetails from './Account/AccountDetails';
import AccountOrders from './Account/AccountOrders';
import BasketCashBack from "./BasketCashBack";
import Hello from "./Hello";
import CameraQr from './CameraQr/CameraQr';
import { useState } from 'react';



const Tab = () => {
    const Stack = createStackNavigator();
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{width: '100%', height: '90%', backgroundColor: 'white'}}>
                <Stack.Navigator>
                    <Stack.Screen name='Branch' component={Branch} options={{headerShown: false}}/>
                    <Stack.Screen name='Hello' component={Hello} options={{ headerShown: false }}/>
                    <Stack.Screen name="Catalog" component={Catalog} options={{headerShown: false}}/>
                    <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
                    <Stack.Screen name='Basket' component={Basket} options={{headerShown: false}}/>
                    <Stack.Screen name='CameraQr' component={CameraQr} options={{headerShown: false}}/>
                    <Stack.Screen name="AccountOrders" component={AccountOrders} options={{headerShown: false}}/>
                    <Stack.Screen name="AccountDetails" component={AccountDetails} options={{headerShown: false}}/>
                    <Stack.Screen name="BasketCashBack" component={BasketCashBack} options={{headerShown: false}}/>
                    <Stack.Screen name="BasketPay" component={BasketPay} options={{headerShown: false}}/>
                </Stack.Navigator>
            </View>
            <Footer/>
        </View>
    );
};

export default Tab;
