import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {Image, ScrollView, Text, View,TouchableOpacity} from "react-native";
import classes from "../detailCSS";
import Coin from "../../../../../assets/cashImagesSVG/coin.svg";
import Basket from "../../../../../assets/cashImagesSVG/basket.svg";

const Output = (props) => {

    const navigation = useNavigation()


    return (
        <View style={classes.detailsRow}>
            <View style={classes.detailsItem}>
                <View style={{width: '30%'}}>
                    <View style={classes.detailsSquare}></View>
                </View>

                <View style={classes.detailsCol}>
                    <Text style={{color: '#fff', fontSize: 16}}>{props.el.name}</Text>
                    <Text style={{color: '#fff', fontSize: 14}}>{props.el.title}</Text>
                    <Text style={{color: '#fff', fontSize: 12, textAlign: 'right'}}>{props.el.price} сом/<Text
                        style={classes.detailsSpan}>+ {props.el.cashBack}</Text><Coin/></Text>
                </View>

            </View>
            <View style={classes.detailsIcons}>
                <View style={classes.detailsIconsSquare}><Text style={{fontSize: 23}}>+</Text></View>
                <TouchableOpacity onPress={() => navigation.navigate('Basket')}><View style={classes.detailsIconsSquare}><Basket/></View></TouchableOpacity>
            </View>
        </View>

    );
};

export default Output;