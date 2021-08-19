import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {MealItem} from '.';

const MealList = props => {
  const displayMeals = props.displayMeals;
  const navigate = props.navigate;
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
          navigate({
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

export default MealList;
