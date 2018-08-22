import * as ACTIONS from '../constants/country';

export const getContries = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: ACTIONS.COUNTRY.GET_COUNTRIES,
      });
    }, 3000);
  };
};
