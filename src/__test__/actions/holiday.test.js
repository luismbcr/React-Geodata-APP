import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ACTIONS from '../../constants/holiday';
import { getHolidays } from '../../actions/holiday';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Get holidays', () => {
  test('Get Brazil Holiday List', () => {
    const store = mockStore({
      holidays: [ ],
      isLoading: true,
    });
    const expectedActions = [{
      type: ACTIONS.HOLIDAY.GET_HOLIDAY_REQUESTED,
    }, {
      type: ACTIONS.HOLIDAY.GET_HOLIDAY, payload: { holidays: expect.anything() },
    }];
    const country = 'BR';
    return store.dispatch(getHolidays(country))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      });
  });
});
