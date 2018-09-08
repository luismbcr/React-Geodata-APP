import * as ACTIONS from '../constants/city';

const initialState = {
  cities: [ ],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CITY.GET_CITIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.CITY.GET_CITIES:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
