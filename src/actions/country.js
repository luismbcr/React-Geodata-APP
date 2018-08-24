import * as ACTIONS from '../constants/country';

const { REACT_APP_API_URL } = process.env;
export const getContries = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED,
    });

    return fetch(REACT_APP_API_URL)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        data => dispatch({type: ACTIONS.COUNTRY.GET_COUNTRIES, payload: { countries: data.geonames }})
      );
  };
};
