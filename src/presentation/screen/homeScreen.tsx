import React from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
import {Text} from 'react-native-magnus';

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
        fontSize="bigText100"
        color="yellow100"
        mx="auto"
        mt="3xl"
        fontWeight="bold"
        letterSpacing={2}>
        Mis Mandados
      </Text>
      <Image
        source={require('../../assets/images/lista1.png')}
        style={{width: '100%', height: height * 0.3, marginTop: height * 0.04}}
      />
    </View>
  );
};
