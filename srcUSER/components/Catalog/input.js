import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import classes from './inputCss'
import Icon from '../../../assets/cashImagesSVG/search.svg'


const Input = () => {
    return (
            <View style={classes.searchSection}>
                <Icon style={classes.searchIcon} />
                <TextInput
                    style={classes.input}
                    placeholder="Поиск"
                    placeholderTextColor={'rgba(23, 69, 59, 0.8)'}
                />
        </View>
    )
};

export default Input;