import React from 'react';

interface Props {
  feature: {
    name: string;
  };
}

const AddedFeature = (props: Props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
