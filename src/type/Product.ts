export interface Product {
  id: number;
  title: string;
  price: number;
  rating: Rating[];
  category: string;
  description: string;
  image: string;
}

interface Rating {
  rate: number;
  count: number;
}
