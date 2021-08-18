import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CategoryGridTile = ({data, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigate({
          routeName: 'CategoryMeals',
          params: {categoryId: data.id},
        })
      }
      style={styles.gridItem}>
      <View style={[{backgroundColor: data.color}, styles.container]}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 140,
  },
  container: {
    flex: 1,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'open-sans',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CategoryGridTile;
