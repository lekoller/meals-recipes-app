import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import {watchLoadMealsData} from './sagas/meals';

const sagaMddlwr = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMddlwr));

sagaMddlwr.run(watchLoadMealsData);

export default store;
