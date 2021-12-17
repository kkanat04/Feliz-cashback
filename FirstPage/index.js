import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "../srcUSER/Main";
import MainSeller from "../srcSELLER/MainSeller";
import FirstPage from "./FirstPage";



const Stack = () => {
    const Stack = createStackNavigator();
    return (

            <Stack.Navigator>
                <Stack.Screen name='FirstPage' component={FirstPage} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
                <Stack.Screen name='MainSeller' component={MainSeller} options={{ headerShown: false }}/>
            </Stack.Navigator>

    );
}
export default Stack;