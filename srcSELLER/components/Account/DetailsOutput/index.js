import React from "react";
import { View, Text } from "react-native";
import classes from '../AccountDetails/AccountDetailsCSS'

const DetailsOutput = (props) => {
  return (
    <View>
      <View style={classes.detailsWrap}>
        <Text style={classes.textCell}>{props.el.number}</Text>
        <View style={classes.mainBlockWrap}>
          <View>
            <Text style={classes.blockItemTitle}>Наименование</Text>
            <View>
              <Text style={classes.blockItem}>{props.el.name}</Text>
              <Text style={classes.blockItem}>{props.el.name}</Text>
              <Text style={classes.blockItem}>{props.el.name}</Text>
            </View>
            <Text style={classes.blockItemTitle}>ИТОГО</Text>
          </View>

          <View>
            <Text style={classes.blockItemTitle}>Стоимость</Text>
            <View>
              <Text style={classes.blockItem}>{props.el.price} сом</Text>
              <Text style={classes.blockItem}>{props.el.price} сом</Text>
              <Text style={classes.blockItem}>{props.el.price} сом</Text>
            </View>
            <Text style={classes.blockItemTitle}>450 сом</Text>
          </View>

          <View>
            <Text style={classes.blockItemTitle}>Кэшбек</Text>
            <View>
              <Text style={classes.blockItem}>{props.el.cashback} баллов</Text>
              <Text style={classes.blockItem}>{props.el.cashback} баллов</Text>
              <Text style={classes.blockItem}>{props.el.cashback} баллов</Text>
            </View>
            <Text style={classes.blockItemTitle}>36 баллов</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsOutput;
