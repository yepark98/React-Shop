import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../type/Product";

interface ProductItemProps {
  product: Product;
}

const ProductItem = (props: ProductItemProps) => {
  const { product } = props;

  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt="" />
      <h1>ProductItem</h1>
      <span>{product.title}</span>
      <p>${product.price}</p>
    </li>
  );
};

export default ProductItem;
