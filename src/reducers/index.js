import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import country from './country';
import city from './city';
import holiday from './holiday';

export default combineReducers({
  routing: routerReducer,
  country,
  city,
  holiday,
});
