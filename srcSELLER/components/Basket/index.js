import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Header from '../../../srcUSER/components/Header';
import classes from './basketCSS';
import Camera from '../../../assets/cashImagesSVG/camera.svg'
import Arrow from '../../../assets/cashImagesSVG/_.svg'
import {useNavigation} from "@react-navigation/native";

const Basket = () => {

    const navigation = useNavigation()

    return (


        <View style={classes.wrap}>
            <Header title="КОРЗИНА"/>
            <View style={classes.basketWrap}>
                <View style={classes.basketWrapInput}>
                    <TouchableOpacity style={classes.basketInput} onPress={() => navigation.navigate('CameraQr')}><Text
                        style={classes.basketText}>Сканировать QR-код</Text></TouchableOpacity>
                    <Camera/>
                </View>
                <View style={classes.basketWrapInput}>
                    <TouchableOpacity style={classes.basketInput} onPress={() => navigation.navigate('BasketPay')}  ><Text style={classes.basketText}>Без приложения</Text></TouchableOpacity>
                    <Arrow/>
                </View>
            </View>

        </View>

    );
};

export default Basket;
