import * as ACTIONS from '../constants/city';

const { REACT_APP_API_URL, REACT_APP_API_USER } = process.env;
export const getCities = (north, south, east, west) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.CITY.GET_CITIES_REQUESTED,
    });
    return fetch(`${REACT_APP_API_URL}citiesJSON?formatted=true&north=${north}
    &south=${south}&east=${east}&west=${west}&lang=de&username=${REACT_APP_API_USER}&style=full`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        data => dispatch({type: ACTIONS.CITY.GET_CITIES, payload: { cities: data.geonames }})
      );
  };
};
