import React from 'react';
import {View, Text, Linking, TouchableOpacity, Dimensions} from 'react-native';
import {globalColors} from '../theme/theme';

export const SettingScreen = () => {
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

  const handlePress = () => {
    // Reemplaza la URL con la dirección a la que deseas redirigir
    Linking.openURL('https://rootsoftware.com.ar/politicaslistcompras');
  };
  return (
    <View style={{backgroundColor: globalColors.primary, flex: 1}}>
      <View
        style={{
          marginHorizontal: 'auto',
          marginVertical: height * 0.2,
          backgroundColor: globalColors.textprimary,
          padding: width * 0.06,
          borderRadius: 20,
        }}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              color: 'white',
              fontSize: width * 0.06,
            }}>
            Politicas de Privacidad
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
