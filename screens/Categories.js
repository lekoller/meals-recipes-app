import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import {CategoryGridTile, HeaderButton} from '../components';
import {MealsActions} from '../store/ducks';

const Categories = ({navigation}) => {
  dispatch = useDispatch();

  useEffect(() => {
    dispatch(MealsActions.loadMealsData());
  }, []);

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile data={itemData.item} navigate={navigation.navigate} />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

Categories.navigationOptions = navData => ({
  headerTitle: 'Meal Categories',
  headerLeft: () => (
    <HeaderButton
      iconName="bars"
      onPress={() => navData.navigation.toggleDrawer()}
    />
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;
