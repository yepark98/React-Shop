import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../type/Product";
import styles from "./Header.module.css";

interface SearchListProps {
  product: Product;
}

const SearchList = (props: SearchListProps) => {
  const { product } = props;

  const navigate = useNavigate();

  return (
    <li
      className={styles.searchItem}
      onClick={() => navigate(`product/${product.id}`)}
    >
      <span>{product.title}</span>
    </li>
  );
};

export default SearchList;
