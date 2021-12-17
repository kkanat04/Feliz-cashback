import React from 'react';
import { View, Text, ScrollView ,TextInput,Image} from 'react-native';
import classes from './AccountInputCSS';



const AccountInput = () => {



    return (
        <View style={classes.wrap}>
            <View style={classes.searchSection}>
                <TextInput
                    style={classes.input}
                    placeholder="DD / MM / YY"
                    placeholderTextColor={'rgba(23, 69, 59, 0.8)'}
                />
                <Text style={classes.searchIcon} >v</Text>
            </View>

        </View>
    )
};

export default AccountInput;