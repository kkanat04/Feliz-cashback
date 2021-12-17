import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './components/Tab';
import Basket from "./components/Basket";
import Hello from "./components/Hello";
import Registration from "./components/Registration";
import Auth from "./components/Auth";





const MainSeller = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Tab'} component={Tab} options={{ headerShown: false }} />
            <Stack.Screen name='Hello' component={Hello} options={{ headerShown: false }}/>
            <Stack.Screen name={'Registration'} component={Registration} options={{ headerShown: false }}/>
            <Stack.Screen name={'Auth'} component={Auth} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainSeller;
