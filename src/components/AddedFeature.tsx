import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Feature } from '../types';
import { removeFeatureFromSelectedVehicle } from '../redux/actions';

interface Props {
  feature: Feature;
}

const AddedFeature = ({ feature }: Props) => {
  const dispatch = useDispatch();
  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    removeFeatureFromSelectedVehicle(dispatch, feature);
  };
  return (
    <li>
      <button className="button" onClick={handleButtonClick}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
