import React from 'react';
import {View, Text, Image, StatusBar, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../theme/theme';

export const HomeScreen = () => {
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

  return (
    <View style={{backgroundColor: globalColors.primary, flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={globalColors.primary}
      />

      <Text
        style={{
          fontSize: width * 0.16,
          textAlign: 'center',
          fontWeight: '800',
          color: 'white',
          marginTop: height * 0.05,
        }}>
        Mis Mandados
      </Text>
      <Image
        source={require('../../assets/images/lista1.png')}
        style={{width: '100%', height: height * 0.3, marginTop: height * 0.04}}
      />
    </View>
  );
};
