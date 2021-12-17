import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import classes from './footerCSS';
import IMGcatalog from '../../../assets/cashImagesSVG/shop.svg';
import IMGbalance from '../../../assets/cashImagesSVG/balance.svg';
import IMGqr from '../../../assets/cashImagesSVG/qr.svg';
import IMGprofile from '../../../assets/cashImagesSVG/profile.svg';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);

  const catalog = () => {
    navigation.navigate('Catalog');
    setIndex(0);
  };
  const balance = () => {
    navigation.navigate('Balance');
    setIndex(1);
  };
  const qr = () => {
    navigation.navigate('QR');
    setIndex(2);
  };
  const profile = () => {
    navigation.navigate('Profile');
    setIndex(3);
  };

  return (
    <View style={classes.wrap}>
      <TouchableOpacity onPress={catalog}>
        {index == 0 ? (
          <IMGcatalog  style={classes.imgStyle} />
        ) : (
          <IMGcatalog  style={classes.imgStyleOpacity} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={balance}>
        {index == 1 ? (
          <IMGbalance  style={classes.imgStyle} />
        ) : (
          <IMGbalance  style={classes.imgStyleOpacity} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={qr}>
        {index == 2 ? (
          <IMGqr style={classes.imgStyle} />
        ) : (
          <IMGqr style={classes.imgStyleOpacity} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={profile}>
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
