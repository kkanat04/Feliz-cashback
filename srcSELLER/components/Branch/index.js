import React from 'react';
import { View, Text,TouchableOpacity  } from 'react-native';
import HeaderImage from "../HeaderImage";
import classes from './branchCSS';

const Branch = () => {
    return (
        <View style={classes.wrap}>
            <HeaderImage/>
            <View style={classes.branchWrap}>
            <Text style={classes.branchMainText}>Выберите филиал</Text>
                <TouchableOpacity style={classes.branchItems}><Text style={classes.branchText}>БЦ Олимп</Text></TouchableOpacity>
                <TouchableOpacity style={classes.branchItems}><Text style={classes.branchText}>БЦ Олимп</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Branch;
