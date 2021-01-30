import React, { MouseEvent } from 'react';
import { Box, Button } from './custom_comps';
import { Header } from './SelectedCar';
import { v1 as uuid } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedVehicle } from '../redux/actions';
import { SelectedVehicle } from '../types';

const cars = [
  {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 },
    ],
  },
  {
    additionalPrice: 0,
    car: {
      price: 23015,
      name: '2019 Chevrolet Camaro',
      image:
        'https://www.newcartestdrive.com/wp-content/uploads/2019/07/2019_Chevrolet_Camaro_hero-610x400.jpg',
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 },
    ],
  },
];
export const Home = (props: {}): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div className="boxes group">
        {cars.map((car) => (
          <Box>
            <Header key={uuid()} car={car.car} />
            <Button click={() => dispatch(setSelectedVehicle(car))}>
              Select Vehicle
            </Button>
          </Box>
        ))}
      </div>
    </>
  );
};
