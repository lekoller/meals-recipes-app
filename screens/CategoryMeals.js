import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import {MealList} from '../components';

const CategoryMeals = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId', 'undefined');
  const availableMeals = useSelector(({meals}) => meals.filtered);

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return (
    <MealList displayMeals={displayMeals} navigate={navigation.navigate} />
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

const styles = StyleSheet.create({});

export default CategoryMeals;
