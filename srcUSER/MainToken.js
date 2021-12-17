import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './components/Tab';
import Hello from './../srcSELLER/components/Hello/index';
import Enter from './components/Enter/index';
import Registration from './components/Registration/index';
import Auth from './components/Auth';


const MainToken = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Tab'} component={Tab} options={{ headerShown: false }} />
            <Stack.Screen name={'Hello'} component={Hello} options={{ headerShown: false }} />
            <Stack.Screen name={'Registration'} component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name={'Auth'} component={Auth} options={{ headerShown: false }} />
            <Stack.Screen name={'Enter'} component={Enter} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainToken;