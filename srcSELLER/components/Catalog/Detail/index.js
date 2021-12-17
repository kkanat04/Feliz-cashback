import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Header from "../../../../srcUSER/components/Header";
import classes from "../Detail/detailCSS";
import Input from "../Input";
import Output from "./Output";


const Detail = () => {

    const items = [
        {
            name: 'ICE Tea (зеленый)',
            title: 'Напитки',
            price: '100',
            cashBack: '9'
        },
        {
            name: 'ICE Tea (черный)',
            title: 'Напитки',
            price: '90',
            cashBack: '7'
        },
        {
            name: 'BUB Tea (тайский)',
            title: 'Напитки',
            price: '70',
            cashBack: '4'
        },
        {
            name: 'HOT Tea (фрукт)',
            title: 'Напитки',
            price: '40',
            cashBack: '4'
        },
        {
            name: 'HOT Tea (малина)',
            title: 'Напитки',
            price: '30',
            cashBack: '4'
        },
        {
            name: 'HOT Tea (малина)',
            title: 'Напитки',
            price: '30',
            cashBack: '4'
        },
    ]

    return (
        <View style={classes.wrap}>

            <Header title="КАТАЛОГ"/>
            <Input/>

            <ScrollView style={classes.scroll}>
                {items &&
                items.map((el, i) => {
                    return <Output key={i} el={el}/>;
                })}
            </ScrollView>
        </View>

    );
};

export default Detail;