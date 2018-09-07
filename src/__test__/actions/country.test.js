import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ACTIONS from '../../constants/country';
import { getContries } from '../../actions/country';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Country Actions', () => {
  test('should Request countrys', () => {
    const store = mockStore({
      countries: [ ],
      filter: '',
      isLoading: true,
    });

    const expectedAction = [{
      type: ACTIONS.COUNTRY.GET_COUNTRIES_REQUESTED,
    }, {
      type: ACTIONS.COUNTRY.GET_COUNTRIES,
    }];

    return store.dispatch(getContries())
      .then(() => {
        const actions = store.getActions();
        expectedAction.map((item, i) => {
          expect(item.type).toEqual(actions[i].type);
        });
      });
  });
});