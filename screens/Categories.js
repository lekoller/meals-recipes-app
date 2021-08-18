import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import {CategoryGridTile} from '../components';

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

Categories.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;
