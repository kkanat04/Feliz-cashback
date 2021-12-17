import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import classes from "../srcUSER/components/Auth/authCSS";
import {useNavigation} from "@react-navigation/native";
import Header from "../srcUSER/components/Header";


const FirstPage = () => {
    const navigation = useNavigation();
    return (
            <View style={styles.container}>
                <TouchableOpacity style={classes.btn} onPress={() => navigation.navigate('Main')}><Text
                    style={{color: 'red', textAlign: 'center', fontSize: 30}}>BUYER</Text></TouchableOpacity>
                <TouchableOpacity style={classes.btn} onPress={() => navigation.navigate('MainSeller')}><Text
                    style={{color: 'green', textAlign: 'center', fontSize: 30}}>SELLER</Text></TouchableOpacity>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
});
export default FirstPage;