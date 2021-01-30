import { ActionTypes } from '../actions';
import selectedVehicleReducer from './selectedVehicleReducer';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],
};

it('reducer should return initial state', () => {
  expect(selectedVehicleReducer(undefined, { type: null })).toEqual(
    initialState
  );
});

const carFeaturePayload = { id: 10, name: 'testPart', price: 1 };

it('Should add a new feature to car.feature', () => {
  expect(
    selectedVehicleReducer(initialState, {
      type: ActionTypes.ADD_FEATURE_TO_CAR,
      payload: carFeaturePayload,
    }).car.features
  ).toEqual([carFeaturePayload]);
});
it('Should remove a new feature to car.feature', () => {
  const test = initialState;
  test.car.features = [carFeaturePayload];
  expect(
    selectedVehicleReducer(test, {
      type: ActionTypes.REMOVE_FEATURE_FROM_CAR,
      payload: carFeaturePayload,
    }).car.features
  ).toEqual([]);
});

it('Should remove a remove feature to additional features', () => {
  const featurePayload = { id: 1, name: 'V-6 engine', price: 1500 };

  expect(
    selectedVehicleReducer(initialState, {
      type: ActionTypes.REMOVE_FEATURE_FROM_ADDITIONAL_FEATURES,
      payload: featurePayload,
    }).additionalFeatures
  ).toEqual([
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ]);
});
it('Should add a new feature to additional feature', () => {
  expect(
    selectedVehicleReducer(initialState, {
      type: ActionTypes.ADD_FEATURE_TO_ADDITIONAL_FEATURES,
      payload: carFeaturePayload,
    }).additionalFeatures
  ).toContain(carFeaturePayload);
});
it('Should recalculate the value of the added features and place inside additionalPrice', () => {
  const test = {
    ...initialState,
    car: {
      ...initialState.car,
      features: [
        { id: 1, name: 'v-8 engine', price: 5000 },
        { id: 2, name: 'Sattalite GPS', price: 5000 },
      ],
    },
  };

  expect(
    selectedVehicleReducer(test, {
      type: ActionTypes.RECALCULATE_ADDITIONAL_PRICE,
    }).additionalPrice
  ).toEqual(10000);
});
