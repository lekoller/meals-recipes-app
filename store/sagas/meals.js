import {takeEvery, put, call} from 'redux-saga/effects';

import {apiRest, prepareRequestHeaders} from '../../common/api';
import {MealsActions} from '../ducks';
import {URL_BASE} from '../../common/constants';

function* generateMeals() {
  const endPoint = `${URL_BASE}/recipes/several`;
  const response = yield call(apiRest.get, endPoint);
  const resData = response.data;
  if (response.ok) {
    yield put(MealsActions.generateMeals(resData));
  } else {
    throw new Error('Something went wrong!');
  }
}

export function* watchLoadMealsData() {
  yield takeEvery('LOAD_MEALS_DATA', generateMeals);
}
