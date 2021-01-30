import React from 'react';
import {
  Header,
  AddedFeatures,
  AdditionalFeatures,
  Total,
} from './SelectedCar';
import { useSelector } from 'react-redux';
import { State } from '../types';

interface Props {}

export const SelectVehicle = (props: Props) => {
  const { car, additionalPrice, additionalFeatures } = useSelector(
    (state: State) => state.selectedVehicle
  );

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};
