import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {HeaderButton} from '../components';

const MealDetails = ({navigation}) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetails.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <HeaderButton iconName="star" />,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetails;
