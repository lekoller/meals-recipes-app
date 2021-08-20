import {createActions, createReducer} from 'reduxsauce';

import {MEALS} from '../../data/dummy-data';

export const {Types, Creators} = createActions({
  toggleFavorite: ['id'],
  setFilters: ['filtersSetting'],
});

const initialState = {
  general: MEALS,
  filtered: MEALS,
  favorites: [],
};

const toggleFavorite = (state = initialState, action) => {
  const existingIndex = state.favorites.findIndex(
    meal => meal.id === action.id,
  );

  if (existingIndex >= 0) {
    const updatedFavorites = [...state.favorites];
    updatedFavorites.splice(existingIndex, 1);

    return {...state, favorites: updatedFavorites};
  } else {
    const meal = state.general.find(meal => meal.id === action.id);

    return {...state, favorites: state.favorites.concat(meal)};
  }
};

const setFilters = (state = initialState, action) => {
  const appliedFilters = action.filtersSetting;
  const filteredMeals = state.general.filter(meal => {
    if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
    if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
    if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
    if (appliedFilters.vegan && !meal.isVegan) return false;

    return true;
  });

  return {...state, filtered: filteredMeals};
};

export const mealsReducer = createReducer(initialState, {
  [Types.TOGGLE_FAVORITE]: toggleFavorite,
  [Types.SET_FILTERS]: setFilters,
});
