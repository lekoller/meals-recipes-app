import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {HeaderButton} from '../components';

const MealDetails = ({navigation}) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const {duration, complexity, affordability, imageUrl, ingredients, steps} =
    selectedMeal;

  const ListItem = props => (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );

  return (
    <ScrollView>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text>{duration} min</Text>
        <Text>{complexity.toUpperCase()}</Text>
        <Text>{affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ScrollView>
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
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});

export default MealDetails;
