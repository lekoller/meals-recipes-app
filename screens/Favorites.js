import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {MealList, HeaderButton} from '../components';

const Favorites = ({navigation}) => {
  const favoriteMeals = useSelector(({meals}) => meals.favorites);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.container}>
        <Text>No Favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return (
    <MealList displayMeals={favoriteMeals} navigate={navigation.navigate} />
  );
};

Favorites.navigationOptions = navData => ({
  headerTitle: 'Your Favorites',
  headerLeft: () => (
    <HeaderButton
      iconName="bars"
      onPress={() => navData.navigation.toggleDrawer()}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favorites;
