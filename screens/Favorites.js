import React from 'react';
import {StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {MealList, HeaderButton} from '../components';

const Favorites = ({navigation}) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2'); // dummy logic

  return <MealList displayMeals={favMeals} navigate={navigation.navigate} />;
};

Favorites.navigationOptions = navData => ({
  headerTitle: 'Your Favorites',
  headerLeft: () => (
    <HeaderButton
      iconName="bars"
      pressAction={() => navData.navigation.toggleDrawer()}
    />
  ),
});

const styles = StyleSheet.create({});

export default Favorites;
