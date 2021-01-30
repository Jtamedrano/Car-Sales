import React from 'react';
import { Feature } from '../../types';
import { AdditionalFeature } from './AdditionalFeature';

interface Props {
  additionalFeatures: Feature[];
}

export const AdditionalFeatures = (props: Props) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
