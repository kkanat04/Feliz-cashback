import React from 'react';
import { View, Text, ScrollView ,TextInput,Image} from 'react-native';
import classes from './inputCSS';
import Icon from '../../../../assets/cashImagesSVG/search.svg'



const Input = () => {



    return (
        <View style={classes.wrap}>
            <View style={classes.searchSection}>
                <Icon style={classes.searchIcon} />
                <TextInput
                    style={classes.input}
                    placeholder="Поиск"
                    placeholderTextColor={'rgba(23, 69, 59, 0.8)'}
                />
            </View>

        </View>
    )
};

export default Input;
