import React from 'react';
import {View, Text, Image, StatusBar, useWindowDimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../theme/theme';

export const HomeScreen = () => {
  const dimensions = useWindowDimensions();
  const {height, width} = dimensions;

  return (
    <View style={{backgroundColor: globalColors.primary, flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={globalColors.primary}
      />

      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
          fontWeight: '800',
          color: 'white',
          marginTop: 150,
        }}>
        Tus Mandados
      </Text>
      <Image
        source={require('../../assets/images/lista1.png')}
        style={{width: '100%', height: height * 0.3, marginTop: 50}}
      />
    </View>
  );
};
