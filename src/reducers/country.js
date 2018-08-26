import * as ACTIONS from '../constants/country';

const initialState = {
  countries: [ ],
  filter: '',
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
    case ACTIONS.COUNTRY.FILTER_COUNTRIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default country;
