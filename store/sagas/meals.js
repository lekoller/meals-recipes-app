import {takeLatest, put, call} from 'redux-saga/effects';

import {apiRest} from '../../common/api';
import {MealsActions} from '../ducks';
// import {URL_BASE} from '../../common/constants';

function* generateMeals() {
  const endPoint = '/recipes/several';
  const response = yield call(apiRest.get, endPoint);
  const resData = response.data;
  if (response.ok) {
    yield put(MealsActions.generateMeals(resData));
  } else {
    console.log(response);
    throw new Error('Something went wrong!');
  }
}

export function* watchLoadMealsData() {
  yield takeLatest('LOAD_MEALS_DATA', generateMeals);
}
