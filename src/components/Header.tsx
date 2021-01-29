import React from 'react';

interface Props {
  car: {
    image: string;
    name: string;
    price: number;
  };
}

const Header = (props: Props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;
