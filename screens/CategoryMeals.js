import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import {MealItem} from '../components';

const CategoryMeals = ({navigation}) => {
  const categoryId = navigation.getParam('categoryId', 'undefined');

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  const renderMealItem = itemData => {
    const item = itemData.item;

    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        selectMeal={() => {
          navigation.navigate({
            routeName: 'MealDetails',
            params: {mealId: item.id},
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        style={styles.list}
      />
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
  list: {
    width: '100%',
    padding: 10,
  },
});

export default CategoryMeals;
