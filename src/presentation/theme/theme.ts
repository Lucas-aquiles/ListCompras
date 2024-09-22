import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#9CB783',
  secondary: '#9CB783',
  tertiary: '#E2F0CB',
  dark: '#22223b',
  background: '#fff',
  textprimary: '#6d706e',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },

  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
