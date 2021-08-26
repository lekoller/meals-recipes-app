import {combineReducers} from 'redux';

import {mealsReducer as meals, Creators as MealsActions} from './meals';

export {MealsActions};

export default combineReducers({
  meals,
});
