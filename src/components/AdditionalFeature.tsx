import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addFeatureToSelectedVehicle } from '../redux/actions';
import { Feature } from '../types';

interface Props {
  feature: Feature;
}

const AdditionalFeature = ({ feature }: Props) => {
  const dispatch = useDispatch();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFeatureToSelectedVehicle(dispatch, feature);
  };

  return (
    <li>
      <button className="button" onClick={handleButtonClick}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
