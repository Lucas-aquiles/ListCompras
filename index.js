/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import {ThemeProvider} from 'react-native-magnus';

const theme = {
  colors: {
    violet100: '#e1e1e1',
  },
  fontSize: {
    bigText100: 50,
  },
  spacing: {
    xs: 2,
    '5xl': 64,
  },
};

AppRegistry.registerComponent(appName, () => () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
));
