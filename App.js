import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import store from './store';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
