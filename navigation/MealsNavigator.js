import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import {Categories, CategoryMeals, MealDetails} from '../screens';
import {headerStylesPrimary} from '../common/styles';

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
    defaultNavigationOptions: headerStylesPrimary,
  },
);

export default createAppContainer(MealsNavigator);
