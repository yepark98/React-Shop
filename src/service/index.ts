import axios from "axios";

const remote = axios.create();

// Get products in a specific category
export const getProductByCategory = async (category: string, limit: number) => {
  const url = `https://fakestoreapi.com/products/category/${category}?limit=${limit}`;
  const response = await remote.get(url);

  return response.data;
};

// Get a single product
export const getProductBySingle = async (id: number) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const response = await remote.get(url);

  return response.data;
};
