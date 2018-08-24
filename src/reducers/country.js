import * as ACTIONS from '../constants/country';

const initialState = {
  countries: [ ],
  isLoading: true,
};

function country (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.COUNTRY.GET_COUNTRIES:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default country;
