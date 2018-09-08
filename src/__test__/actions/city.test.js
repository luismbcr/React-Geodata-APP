import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ACTIONS from '../../constants/city';
import { getCities } from '../../actions/city';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('City Actions', () => {
  test('should request Cities from Brazil', () => {
    const store = mockStore({
      cities: [ ],
      isLoading: true,
    });

    const expectedActions = [
      {
        type: ACTIONS.CITY.GET_CITIES_REQUESTED,
      }, {type: ACTIONS.CITY.GET_CITIES, payload: { cities: expect.anything() }},
    ];
    const paramsBrazil = { north: 5.264877, south: -33.750706, east: -32.392998, west: -73.985535 };

    const { north, south, east, west } = paramsBrazil;
    return store.dispatch(getCities(north, south, east, west))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      });
  });
});
