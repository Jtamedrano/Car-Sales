interface Product {
  name: string;
  price: number;
}

interface SelectedVehicle {
  additionalPrice: number;
  car: Car;
  additionalFeatures: Feature[];
}

interface Feature extends Product {
  id: number;
}

interface Car extends Product {
  image: string;
  features: Feature[];
}
