import { ActionTypes } from './actionTypes';

import { Feature } from '../../types';

export const addFetToAddFeat = (payload: Feature) => {
  return {
    type: ActionTypes.ADD_FEATURE_TO_ADDITIONAL_FEATURES,
    payload,
  };
};
export const remFetFromAddFeat = (payload: Feature) => {
  return {
    type: ActionTypes.REMOVE_FEATURE_FROM_ADDITIONAL_FEATURES,
    payload,
  };
};
export const addFetToCar = (payload: Feature) => {
  return {
    type: ActionTypes.ADD_FEATURE_TO_CAR,
    payload,
  };
};
export const remFetFromCar = (payload: Feature) => {
  return {
    type: ActionTypes.REMOVE_FEATURE_FROM_CAR,
    payload,
  };
};
export const recalcAddPrice = () => {
  return {
    type: ActionTypes.RECALCULATE_ADDITIONAL_PRICE,
  };
};

export const addFeatureToSelectedVehicle = (
  dispatch: any,
  payload: Feature
) => {
  dispatch(addFetToCar(payload));
  dispatch(remFetFromAddFeat(payload));
  dispatch(recalcAddPrice());
};

export const removeFeatureFromSelectedVehicle = (
  dispatch: any,
  payload: Feature
) => {
  dispatch(remFetFromCar(payload));
  dispatch(addFetToAddFeat(payload));
  dispatch(recalcAddPrice());
};
