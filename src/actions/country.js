import * as ACTIONS from '../constants/country';

const { REACT_APP_API_URL, REACT_APP_API_USER } = process.env;
export const getContries = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED,
    });
    return fetch(`${REACT_APP_API_URL}countryInfoJSON?formatted=true&username=${REACT_APP_API_USER}&style=full`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        data => dispatch({type: ACTIONS.COUNTRY.GET_COUNTRIES, payload: { countries: data.geonames }})
      );
  };
};

export const filterCountries = (country) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTRY.FILTER_COUNTRIES,
      payload: { filter: country },
    });
  };
};
