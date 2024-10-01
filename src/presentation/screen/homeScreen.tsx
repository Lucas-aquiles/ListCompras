import React from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
import {Text} from 'react-native-magnus';

import {globalColors} from '../theme/theme';
import {useIdiomaStore} from '../../store/useIdiomaStore';
interface IdiomaState {
  lenguage: boolean;
}
export const HomeScreen = () => {
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla
  const lenguage = useIdiomaStore((state: IdiomaState) => state.lenguage);

  return (
    <View style={{backgroundColor: globalColors.primary, flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={globalColors.primary}
      />

      <Text
        fontSize="bigText100"
        color="white"
        mx="auto"
        mt="3xl"
        fontWeight="bold"
        letterSpacing={2}
        adjustsFontSizeToFit
        numberOfLines={1}>
        {lenguage ? 'Mis Mandados' : 'My errands'}
      </Text>
      <Image
        source={require('../../assets/images/lista1.png')}
        style={{width: '100%', height: height * 0.3, marginTop: height * 0.04}}
      />
    </View>
  );
};
