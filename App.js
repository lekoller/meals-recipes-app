import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const App = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({});

export default App;
