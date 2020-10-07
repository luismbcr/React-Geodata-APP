import * as ACTIONS from '../constants/holiday';

// The api will work only with the prev year
const d = new Date();
const pastYear = d.getFullYear() - 1;
const { REACT_APP_HOLIDAY_API_URL } = process.env;
export const getHolidays = (country) => {
  return dispatch => {
    dispatch({
      type: ACTIONS.HOLIDAY.GET_HOLIDAY_REQUESTED,
    });
    return fetch(`${REACT_APP_HOLIDAY_API_URL}&country=${country}&year=${pastYear}`)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        data => {
          if (data !== undefined) {
            dispatch({type: ACTIONS.HOLIDAY.GET_HOLIDAY, payload: { holidays: data.holidays }});
          } else {
            dispatch({type: ACTIONS.HOLIDAY.GET_HOLIDAY, payload: { holidays: { } }});
          }
        }
      );
  };
};
