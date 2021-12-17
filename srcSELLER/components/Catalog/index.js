import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import Header from '../../../srcUSER/components/Header';
import classes from './catalogCSS';
import { useNavigation } from '@react-navigation/native';
import Input from "./Input";
import { req } from '../../../req';

const Catalog = () => {


    // const [data, setData] = useState([{id: 1}, {id: 2}])
    const [data, setData] = useState([])


    useEffect(() => {
        req(setData)
    }, [])


    const navigation = useNavigation();

    return (
        <View style={classes.wrap}>
            <Header title="КАТАЛОГ" />
            <Input />
            <View style={classes.itemsWrap}>
                <TouchableOpacity style={classes.itemsList}
                    onPress={() => navigation.navigate('Detail')}><Text>Кофе</Text></TouchableOpacity>
                <TouchableOpacity style={classes.itemsList}
                    onPress={() => navigation.navigate('Detail')}><Text>Лимонады</Text></TouchableOpacity>
                <TouchableOpacity style={classes.itemsList}
                    onPress={() => navigation.navigate('Detail')}><Text>Кофе</Text></TouchableOpacity>
                <TouchableOpacity style={classes.itemsList}
                    onPress={() => navigation.navigate('Detail')}><Text>Лимонады</Text></TouchableOpacity>
                <TouchableOpacity style={classes.itemsList}
                    onPress={() => navigation.navigate('Detail')}><Text>Кофе</Text></TouchableOpacity>
                <TouchableOpacity style={classes.itemsList}
                    onPress={() => navigation.navigate('Detail')}><Text>Лимонады</Text></TouchableOpacity>
                {
                    data.length > 0 ?
                        data.map(el => {
                            return <Text>{el.id}</Text>
                        }) : <Text>Loading...</Text>
                }
            </View>

        </View>
    )
};

export default Catalog;
