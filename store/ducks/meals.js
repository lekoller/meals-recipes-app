import {MEALS} from '../../data/dummy-data';

export const Types = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_FILTERS: 'SET_FILTERS',
};

const initialState = {
  general: MEALS,
  filtered: MEALS,
  favorites: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_FAVORITE:
      const existingIndex = state.favorites.findIndex(
        meal => meal.id === action.payload.mealId,
      );

      if (existingIndex >= 0) {
        const updatedFavorites = [...state.favorites];
        updatedFavorites.splice(existingIndex, 1);

        return {...state, favorites: updatedFavorites};
      } else {
        const meal = state.general.find(
          meal => meal.id === action.payload.mealId,
        );

        return {...state, favorites: state.favorites.concat(meal)};
      }
    case Types.SET_FILTERS:
      const appliedFilters = action.payload.filters;
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

export const Creators = {
  toggleFavorite: id => ({type: Types.TOGGLE_FAVORITE, payload: {mealId: id}}),

  setFilters: filtersSetting => {
    return {type: Types.SET_FILTERS, payload: {filters: filtersSetting}};
  },
};
