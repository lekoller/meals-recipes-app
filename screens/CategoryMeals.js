import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../common/colors';

const CategoryMeals = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId', 'undefined');
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The CategoryMeals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

CategoryMeals.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam(
    'categoryId',
    'undefined',
  );
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMeals;
