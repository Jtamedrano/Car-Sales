import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, Route } from 'react-router-dom';
import { SelectedVehicle, State } from './types';
import { SelectVehicle, Home } from './components';
import { Button } from './components/custom_comps';
import { setSelectedVehicle } from './redux/actions';

interface Props {}

const nullVehicle: SelectedVehicle = {
  additionalFeatures: [],
  additionalPrice: 0,
  car: {
    features: [],
    image: '',
    name: '',
    price: 0,
  },
};

const App = (props: Props) => {
  const hasVehicle = useSelector(
    (state: State) => state.selectedVehicle.car.name !== ''
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Route path="/vehicle">
        {!hasVehicle ? (
          <Redirect to="/" />
        ) : (
          <>
            <nav>
              <Link to="/">
                <Button click={() => dispatch(setSelectedVehicle(nullVehicle))}>
                  Back
                </Button>
              </Link>
            </nav>
            <SelectVehicle />
          </>
        )}
      </Route>
      <Route
        exact
        path="/"
        render={(props) => {
          if (hasVehicle) return <Redirect to="/vehicle" />;
          else return <Home />;
        }}
      />
    </div>
  );
};

export default App;
