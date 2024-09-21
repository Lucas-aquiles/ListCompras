import React from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/lista.png')}
        style={{width: 500, height: 300}}
      />
      <Icon name="accessibility-outline" size={50} color="#900" />

      <Text>hola</Text>
    </View>
  );
};
