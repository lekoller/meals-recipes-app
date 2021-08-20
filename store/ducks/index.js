import {combineReducers} from 'redux';

import {mealsReducer as meals} from './meals';

export default combineReducers({
  meals,
});
