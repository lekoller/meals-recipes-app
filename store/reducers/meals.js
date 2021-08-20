import {MEALS} from '../../data/dummy-data';
import {SET_FILTERS, TOGGLE_FAVORITE} from '../actions/meals';

const initialState = {
  general: MEALS,
  filtered: MEALS,
  favorites: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favorites.findIndex(
        meal => meal.id === action.payload,
      );

      if (existingIndex >= 0) {
        const updatedFavorites = [...state.favorites];
        updatedFavorites.splice(existingIndex, 1);

        return {...state, favorites: updatedFavorites};
      } else {
        const meal = state.general.find(meal => meal.id === action.payload);

        return {...state, favorites: state.favorites.concat(meal)};
      }
    case SET_FILTERS:
      const appliedFilters = action.payload;
      const filteredMeals = state.general.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;

        return true;
      });

      return {...state, filtered: filteredMeals};

    default:
      return state;
  }
};

export default mealsReducer;
