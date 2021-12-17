import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import Balance from './Balance';
import FullReport from './Balance/FullReport';
import Catalog from './Catalog';
import MoreCatalog from './Catalog/MoreCatalog';
import Footer from './Footer';
import Profile from './Profile';
import QRcode from './QRcode';
import Category from '../components/Catalog/MoreCatalog/index'
import Auth from './Auth';
import Registration from './Registration/index';

const Tab = () => {
  const Stack = createStackNavigator();
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%', height: '90%', backgroundColor: 'white' }}>
        <Stack.Navigator>
          <Stack.Screen name="Catalog" component={Catalog} options={{ headerShown: false }} />
          <Stack.Screen name="Balance" component={Balance} options={{ headerShown: false }} />
          <Stack.Screen name="QR" component={QRcode} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="More" component={MoreCatalog} options={{ headerShown: false }} />
          <Stack.Screen name="FullReport" component={FullReport} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Category} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
      <Footer />
    </View>
  );
};

export default Tab;
