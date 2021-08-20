import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import {CategoryGridTile, HeaderButton} from '../components';

const Categories = ({navigation}) => {
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
