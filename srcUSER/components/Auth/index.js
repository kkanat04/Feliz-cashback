import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import classes from "./authCSS";
import Vector from "../../../assets/cashImagesSVG/Vector.svg";
import { useNavigation } from "@react-navigation/native";
import { sumbitAuth } from "./../../../req";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = () => {
  const navigation = useNavigation();

  const [auth, setAuth] = useState([]);

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  console.log(auth);

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem('tokenUser', token)
    } catch (e) {
      // Нечего потому что нахер надо сохранять ошибку!!!
    }
  }
  
  return (
    <ScrollView>
    <View style={classes.wrap}>
      <Vector style={{ alignSelf: "flex-end" }} />

      <View style={classes.Registration}>
        <View style={classes.feliz}>
          <Text style={classes.textFeliz}>Добро пожаловать в</Text>
          <Text style={classes.textFeliz}>cashback-сервис</Text>
          <Text style={classes.textFeliz}>FELIZ</Text>
        </View>

        <View style={classes.Reg}>
          <Text style={classes.textReg}>Введите свои данные</Text>
        </View>

        <View style={classes.RegInput}>
          <TextInput
            onChangeText={(text) => setPhone(text)}
            style={classes.input}
            placeholderTextColor="#BFCBC9"
            placeholder="Телефон"
          />
          <TextInput
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={classes.input}
            placeholderTextColor="#BFCBC9"
            placeholder="Пароль"
          />
        </View>

        <Text style={{ color: "#6E8B84", textAlign: "center", paddingTop: 10 }}>
          Забыли пароль?
        </Text>

        <TouchableOpacity
          style={classes.btn}
          onPress={async () => {
            sumbitAuth(
              phone,
              password,
              setAuth,
              navigation,
              storeData,
            );
          }}
        >
          <Text style={{ color: "#17453B", textAlign: "center", fontSize: 15 }}>
            ВОЙТИ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Auth;