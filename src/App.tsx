import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {BottomTabNavigator} from './presentation/route/bottomTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
