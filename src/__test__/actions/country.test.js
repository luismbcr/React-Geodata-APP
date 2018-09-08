import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ACTIONS from '../../constants/country';
import { getContries } from '../../actions/country';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Country Actions', () => {
  test('should Request countries', () => {
    const store = mockStore({countries: []});

    const expectedActions = [{
      type: ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED,
    }, {
      type: ACTIONS.COUNTRY.GET_COUNTRIES, payload: { countries: expect.anything() }}];

    return store.dispatch(getContries())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      });
  });
});
