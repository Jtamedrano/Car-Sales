import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { SelectedVehicle } from './types';
import { connect } from 'react-redux';

interface Props extends SelectedVehicle {}

const App = ({ car, additionalFeatures, additionalPrice }: Props) => {
  console.log(car);
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

const mapStateToProps = ({
  selectedVehicle,
}: {
  selectedVehicle: SelectedVehicle;
}): SelectedVehicle => {
  return {
    car: selectedVehicle.car,
    additionalFeatures: selectedVehicle.additionalFeatures,
    additionalPrice: selectedVehicle.additionalPrice,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
