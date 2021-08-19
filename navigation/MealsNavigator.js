import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Categories,
  CategoryMeals,
  MealDetails,
  Favorites,
  Filters,
} from '../screens';
import {headerDefaultConfig} from '../common/styles';
import Colors from '../common/colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetails: MealDetails,
  },
  {
    defaultNavigationOptions: headerDefaultConfig,
  },
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetails: MealDetails,
  },
  {
    defaultNavigationOptions: headerDefaultConfig,
  },
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Icon name="spoon" size={24} color={tabInfo.tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Icon name="star" size={24} color={tabInfo.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondaryColor,
      labelStyle: {
        fontSize: 14,
      },
    },
  },
);

const FiltersNavigator = createStackNavigator({
  Filters: Filters,
});

const MainNavigator = createDrawerNavigator({
  TabNavigator: MealsFavTabNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
