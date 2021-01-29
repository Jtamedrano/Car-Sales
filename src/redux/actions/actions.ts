import { ActionTypes } from './actionTypes';

import { Feature } from '../../types';

export const addFeatureToSelectedVehicle = (
  dispatch: any,
  payload: Feature
) => {
  dispatch({
    type: ActionTypes.ADD_FEATURE_TO_CAR,
    payload,
  });
  dispatch({
    type: ActionTypes.REMOVE_FEATURE_FROM_ADDITIONAL_FEATURES,
    payload,
  });
  dispatch({ type: ActionTypes.RECALCULATE_PRICE });
};
