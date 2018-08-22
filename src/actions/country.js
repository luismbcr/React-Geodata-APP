import * as ACTIONS from '../constants/country';

export const getContries = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED,
    });

    return fetch('http://api.geonames.org/countryInfoJSON?formatted=true&username=luismb&style=full')
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        data => dispatch({type: ACTIONS.COUNTRY.GET_COUNTRIES, countries: data.geonames})
      );
  };
};
