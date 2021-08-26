// import {MEALS} from '../../data/dummy-data';
import Meal from '../../models/meal';

export const Types = {
  LOAD_MEALS_DATA: 'LOAD_MEALS_DATA',
  GENERATE_MEALS: 'GENERATE_MEALS',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_FILTERS: 'SET_FILTERS',
};

const initialState = {
  general: [],
  filtered: [],
  favorites: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GENERATE_MEALS:
      const receivedMealsData = action.payload.all_recipes;
      const generatedMeals = receivedMealsData.map(
        data =>
          new Meal(
            data._id.$oid,
            data.categoryIds,
            data.title,
            data.affordability,
            data.complexity,
            data.imageUrl,
            data.duration,
            data.ingredients,
            data.steps,
            data.isGlutenFree,
            data.isVegan,
            data.isVegetarian,
            data.isLactoseFree,
          ),
      );

      return {...state, general: generatedMeals, favorites: generatedMeals};

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
  loadMealsData: () => ({type: Types.LOAD_MEALS_DATA, payload: {}}),

  generateMeals: loadedRecipes => ({
    type: Types.GENERATE_MEALS,
    payload: loadedRecipes,
  }),

  toggleFavorite: id => ({type: Types.TOGGLE_FAVORITE, payload: {mealId: id}}),

  setFilters: filters => ({type: Types.SET_FILTERS, payload: {filters: filters}})
};

