import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import country from './country';

export default combineReducers({
  routing: routerReducer,
  country,
});
