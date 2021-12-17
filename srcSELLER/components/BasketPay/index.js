import React from 'react';
import { View, Text, ScrollView ,TextInput,Image, TouchableOpacity} from 'react-native';
import Header from '../../../srcUSER/components/Header';
import classes from './BasketPayCSS';
import BasketCashBack from '../BasketCashBack/index';
const BasketPay = () => {
    return (

        <View style={classes.wrap}>
        <Header title="КАТАЛОГ"  sum="300.00" />
        <View style={classes.mainWrap}>
        {/* <ScrollView> */}

        <View style={classes.mainBlockWrap}>

            <View style={classes.blockWrap}>
                <Text style={classes.blockItemTitle}>Наименование</Text>
                <View style={classes.subBlockWrap}>
                    <Text style={classes.blockItem}>IceTea(зеленый)</Text>
                    <Text style={classes.blockItem}>IceTea(зеленый)</Text>
                    <Text style={classes.blockItem}>IceTea(зеленый)</Text>
                    <Text style={classes.blockItem}>IceTea(зеленый)</Text>
                    <Text style={classes.blockItem}>IceTea(зеленый)</Text>
                </View>
                <Text style={classes.blockItemTitle}>ИТОГО</Text>
            </View>

            <View style={classes.blockWrap}>
                <Text style={classes.blockItemTitle}>Стоимость</Text>
                <View style={classes.subBlockWrap}>
                    <Text style={classes.blockItem}>90 сом</Text>
                    <Text style={classes.blockItem}>90 сом</Text>
                    <Text style={classes.blockItem}>90 сом</Text>
                    <Text style={classes.blockItem}>90 сом</Text>
                    <Text style={classes.blockItem}>90 сом</Text>
                </View>
                <Text style={classes.blockItemTitle}>450 сом</Text>
            </View>

            <View style={classes.blockWrap}>
                <Text style={classes.blockItemTitle}>Кэшбек</Text>
                <View style={classes.subBlockWrap}>
                    <Text style={classes.blockItem}>9 баллов</Text>
                    <Text style={classes.blockItem}>9 баллов</Text>
                    <Text style={classes.blockItem}>9 баллов</Text>
                    <Text style={classes.blockItem}>9 баллов</Text>
                    <Text style={classes.blockItem}>9 баллов</Text>
                </View>
                
                <Text style={classes.blockItemTitle}>36 баллов</Text>
            </View>

        </View>

        <View style={classes.buttonsWrap}>
            
            <TouchableOpacity style={classes.pointBtn}>
                <Text style={classes.textBtn}>Оплатить</Text>
            </TouchableOpacity>

           
        </View>

        
        {/* </ScrollView> */}
        
    </View>
    </View>
    );
};

export default BasketPay;