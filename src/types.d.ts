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
