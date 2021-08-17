import {Platform, StyleSheet} from 'react-native';
import Colors from './colors';

const stylesByPlatform = Platform.select({
  ios: {fontFamily: 'open-sans'},
  android: {fontFamily: 'open-sans'},
});

export const headerStylesPrimary = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

export default StyleSheet.create({
  text: {
    ...stylesByPlatform,
  },
});
