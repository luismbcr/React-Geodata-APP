import * as ACTIONS from '../constants/holiday';

const initialState = {
  holidays: [ ],
  isLoading: true,
};

function holiday (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.HOLIDAY.GET_HOLIDAY_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.HOLIDAY.GET_HOLIDAY:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default holiday;
