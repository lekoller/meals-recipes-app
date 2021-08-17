import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../common/colors';

const Categories = ({navigation}) => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {categoryId: itemData.item.id},
          })
        }
        style={styles.gridItem}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 16,
    height: 140,
  },
});

export default Categories;
