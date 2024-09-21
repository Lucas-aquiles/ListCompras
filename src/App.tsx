import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from './presentation/route/bottomTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}

      <BottomTabNavigator />
    </NavigationContainer>
  );
};
