import React, {useEffect, useCallback, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {HeaderButton} from '../components';
import {Creators} from '../store/ducks/meals';

const MealDetails = ({navigation}) => {
  const toggleFavorite = Creators.toggleFavorite;
  const availableMeals = useSelector(({meals}) => meals.general);
  const favoriteMeals = useSelector(({meals}) => meals.favorites);
  const mealId = navigation.getParam('mealId');

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  const isSelectedMealFavorite = favoriteMeals.includes(selectedMeal);
  const [isFavorite, setIsFavorite] = useState(isSelectedMealFavorite);

  const {duration, complexity, affordability, imageUrl, ingredients, steps} =
    selectedMeal;

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
    setIsFavorite(!isFavorite);
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({
      toggleFavorite: toggleFavoriteHandler,
      isFavorite: isFavorite,
    });
  }, [toggleFavoriteHandler, isFavorite]);

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

MealDetails.navigationOptions = ({navigation}) => {
  const mealTitle = navigation.getParam('mealTitle');
  const toggleFavorite = navigation.getParam('toggleFavorite');
  const isFavorite = navigation.getParam('isFavorite');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButton
        iconName="star"
        onPress={toggleFavorite}
        color={isFavorite ? 'secondary' : undefined}
      />
    ),
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
