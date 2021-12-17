import React from 'react';
import { View, Text,Image } from 'react-native';
import classes from './headerImageCSS';
import Feliz from '../../../assets/cashImagesSVG/feliz_logo.svg'

const HeaderImage = () => {
    return (
        <View>
            <Feliz style={{ alignSelf: 'flex-end'}} />
        </View>
    );
};

export default HeaderImage;
