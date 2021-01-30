export interface State {
  selectedVehicle: SelectedVehicle;
}

export interface Action {
  type: number | string;
  payload?: any;
}

export interface Product {
  name: string;
  price: number;
}

export interface Feature extends Product {
  id: number;
}

export interface Car extends Product {
  image: string;
  features: Feature[];
}

export interface SelectedVehicle {
  additionalPrice: number;
  car: Car;
  additionalFeatures: Feature[];
}
