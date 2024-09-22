import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {globalColors} from '../theme/theme';

export const SettingScreen = () => {
  const handlePress = () => {
    // Reemplaza la URL con la dirección a la que deseas redirigir
    Linking.openURL('https://rootsoftware.com.ar/politicas');
  };
  return (
    <View style={{backgroundColor: globalColors.primary, flex: 1}}>
      <View
        style={{
          marginHorizontal: 'auto',
          marginVertical: 40,
          backgroundColor: globalColors.textprimary,
          padding: 10,
          borderRadius: 20,
        }}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
            }}>
            Politicas de Privacidad
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
