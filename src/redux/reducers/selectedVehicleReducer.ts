import { Action } from '../../types';
import { SelectedVehicle } from '../../types';
import { ActionTypes } from '../actions';

const initialState: SelectedVehicle = {
  additionalPrice: 0,
  car: {
    price: 0,
    name: '',
    image: '',
    features: [],
  },
  additionalFeatures: [],
};

const selectedVehicleReducer = (
  state: SelectedVehicle = initialState,
  action: Action
) => {
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

    case ActionTypes.ADD_FEATURE_TO_ADDITIONAL_FEATURES:
      if (state.additionalFeatures.includes(action.payload)) return state; // CHECKS IF ALREADY IN ADDITIONAL FEATURES
      return {
        ...state,
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };

    case ActionTypes.REMOVE_FEATURE_FROM_CAR:
      // Filters Feature from car
      const carFeatures = state.car.features.filter(
        (features) => features.id !== action.payload.id
      );
      return { ...state, car: { ...state.car, features: carFeatures } };

    case ActionTypes.RECALCULATE_ADDITIONAL_PRICE:
      return {
        ...state,
        additionalPrice: state.car.features
          .map((f) => f.price)
          .reduce((pV, cV) => pV + cV, 0),
      };

    case ActionTypes.SET_SELECTED_VEHICLE:
      return {
        additionalFeatures: action.payload.additionalFeatures,
        car: action.payload.car,
        additionalPrice: action.payload.additionalPrice,
      };

    default:
      return state;
  }
};

export default selectedVehicleReducer;
