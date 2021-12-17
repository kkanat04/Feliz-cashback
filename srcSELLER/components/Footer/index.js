import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import classes from './footerCSS';
import IMGcatalog from '../../../assets/cashImagesSVG/branch.svg';
import IMGbalance from '../../../assets/cashImagesSVG/clients.svg';
import IMGqr from '../../../assets/cashImagesSVG/shop.svg';
import IMGprofile from '../../../assets/cashImagesSVG/income.svg';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);


    const branch = () => {
        navigation.navigate('Branch');
        setIndex(0);
    };
    const hello = () => {
        navigation.navigate('Hello');
    };
    const catalog = () => {
        navigation.navigate('Catalog');
        setIndex(2);
    };
    const accountOrders = () => {
        navigation.navigate('AccountOrders');
        setIndex(3);
    };

    return (
        <View style={classes.wrap}>
            <TouchableOpacity onPress={branch}>
                {index == 0 ? (
                    <IMGcatalog style={classes.imgStyle} />
                ) : (
                    <IMGcatalog style={classes.imgStyleOpacity} />
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={hello}>

                <IMGbalance style={classes.imgStyleOpacity} />
                
            </TouchableOpacity>
            <TouchableOpacity onPress={catalog}>
                {index == 2 ? (
                    <IMGqr style={classes.imgStyle} />
                ) : (
                    <IMGqr style={classes.imgStyleOpacity} />
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={accountOrders}>
                {index == 3 ? (
                    <IMGprofile style={classes.imgStyle} />
                ) : (
                    <IMGprofile style={classes.imgStyleOpacity} />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
