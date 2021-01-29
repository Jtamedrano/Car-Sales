import { Feature, SelectedVehicle } from '../../types';
import { ActionTypes } from '../actions';

const initialState: SelectedVehicle = {
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

/**
  @params originalPrice is the price of the vehicle
  @params features is an array of features added to the vehicle

  adds both together to recalculate the total price with features added/removed
*/
const calcTotalPriceWithFeatures = (
  originalPrice: number,
  features: Feature[]
) => {
  const totalFeaturePrice: number = features
    .map((feature) => feature.price)
    .reduce((pV, cV) => pV + cV, 0);
  return originalPrice + totalFeaturePrice;
};

const selectedVehicleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_FEATURE_TO_CAR:
      if (state.car.features.includes(action.payload)) return state; // CHECKS IF ALREADY IN ADDED FEATURES
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
      };
    case ActionTypes.REMOVE_FEATURE_FROM_ADDITIONAL_FEATURES:
      const additionalFeatures = state.additionalFeatures.filter(
        (features) => features.id !== action.payload.id
      );
      return { ...state, additionalFeatures };
    case ActionTypes.RECALCULATE_PRICE:
      return {
        ...state,
        car: {
          ...state.car,
          price: calcTotalPriceWithFeatures(
            state.car.price,
            state.car.features
          ),
        },
      };
    default:
      return state;
  }
};

export default selectedVehicleReducer;
