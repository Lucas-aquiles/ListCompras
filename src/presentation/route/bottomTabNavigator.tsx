import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screen/homeScreen';
import {SettingScreen} from '../screen/settingScreen';
import {ListScreen} from '../screen/listScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'while',
      }}
      screenOptions={{
        tabBarActiveTintColor: 'while',
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
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" size={50} color="#900" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ListScreen"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" size={50} color="#900" />
          ),
        }}
        component={ListScreen}
      />

      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" size={50} color="#900" />
          ),
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};
