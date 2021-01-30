import * as actions from './actions';
import * as types from './actionTypes';

it('should create an action to remove feature from car', () => {
  const feature = { id: 1, name: 'test', price: 1 };
  const testExpect = {
    type: types.ActionTypes.REMOVE_FEATURE_FROM_CAR,
    payload: feature,
  };

  expect(actions.remFetFromCar(feature)).toEqual(testExpect);
});
it('should create an action to add feature to car', () => {
  const feature = { id: 1, name: 'test', price: 1 };
  const testExpect = {
    type: types.ActionTypes.ADD_FEATURE_TO_CAR,
    payload: feature,
  };

  expect(actions.addFetToCar(feature)).toEqual(testExpect);
});
it('should create an action to remove feature from Additional Features', () => {
  const feature = { id: 1, name: 'test', price: 1 };
  const testExpect = {
    type: types.ActionTypes.REMOVE_FEATURE_FROM_ADDITIONAL_FEATURES,
    payload: feature,
  };

  expect(actions.remFetFromAddFeat(feature)).toEqual(testExpect);
});
it('should create an action to add feature to Additional Features', () => {
  const feature = { id: 1, name: 'test', price: 1 };
  const testExpect = {
    type: types.ActionTypes.ADD_FEATURE_TO_ADDITIONAL_FEATURES,
    payload: feature,
  };

  expect(actions.addFetToAddFeat(feature)).toEqual(testExpect);
});
it('should create an action to recalculate Additional Features', () => {
  const testExpect = {
    type: types.ActionTypes.RECALCULATE_ADDITIONAL_PRICE,
  };

  expect(actions.recalcAddPrice()).toEqual(testExpect);
});
