import React, { version } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../Header';
import classes from './qrCSS';
import Vectorsvg from '../../../assets/cashImagesSVG/Group2.svg'

const QRcode = () => {
  return (
    <View style={classes.wrap}>
      <Header title="QR-CODE" />
      <View style={classes.qCode}>
        <Text style={{color: '#17453B', paddingBottom: '5%', fontSize: 18}}>Отсканируйте QR-code</Text>
        <View style={classes.qBlock}>
          <Vectorsvg style={{width: '80%', height: '85%', resizeMode: 'contain'}} />
        </View>
        <Text style={{color: '#17453B', paddingTop: '7%', fontSize: 18, textAlign: 'center'}}>Историю изменения количества баллов вы</Text>
        <Text style={{color: '#17453B', fontSize: 18, textAlign: 'center'}}>сможете просмотреть во вкладке “БАЛАНС”</Text>


        </View>
    </View>
  );
};

export default QRcode;
