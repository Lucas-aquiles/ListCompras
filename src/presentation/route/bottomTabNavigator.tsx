import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState, useEffect} from 'react';

import {HomeScreen} from '../screen/homeScreen';
import {SettingScreen} from '../screen/settingScreen';
import {ListScreen} from '../screen/listScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../theme/theme';
import {Keyboard, Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white', // Asegúrate de tener el fondo blanco correcto
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: globalColors.textprimary,
        tabBarInactiveTintColor: globalColors.secondary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: isKeyboardVisible ? 0 : height * 0.11, // Oculta la barra cuando el teclado está visible
          borderTopLeftRadius: 20, // Ajusta el valor según la redondez deseada
          borderTopRightRadius: 20,
          overflow: 'hidden',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" size={40} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ListScreen"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" size={40} color={color} />
          ),
        }}
        component={ListScreen}
      />

      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" size={40} color={color} />
          ),
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};
