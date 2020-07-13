import {createStore, combineReducers, applyMiddleware} from 'redux';
import home from 'movies/src/screens/Home/reducer';
import logger from 'redux-logger';

const reducers = combineReducers({
  home,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
