import * as ACTIONS from '../../constants/country';
import countryReducer from '../../reducers/country';

describe('Country Reducer', () => {
  test('should setup default country values', () => {
    const state = countryReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      countries: [ ],
      filter: '',
      isLoading: true,
    });
  });

  test('should return country values, stop loading', () => {
    const currentState = {
      countries: [ ],
      filter: '',
      isLoading: true,
    };
    const state = countryReducer(currentState, { type: ACTIONS.COUNTRY.GET_COUNTRIES, payload: { countries: [ ] } });
    expect(state).toEqual({
      countries: [ ],
      filter: '',
      isLoading: false,
    });
  });
});
