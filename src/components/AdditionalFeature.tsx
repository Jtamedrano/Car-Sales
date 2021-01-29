import React from 'react';

interface Props {
  feature: {
    name: string;
    price: number;
  };
}

const AdditionalFeature = (props: Props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
