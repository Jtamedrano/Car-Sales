import React from 'react';

interface Props {
  car: {
    price: number;
  };
  additionalPrice: number;
}

const Total = (props: Props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
