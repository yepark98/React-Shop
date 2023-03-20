import React from "react";
import styles from "./ShopList.module.css";
import { Product } from "../type/Product";
import { useNavigate } from "react-router-dom";

interface ShopListProps {
  product: Product;
}

const ShopList = (props: ShopListProps) => {
  const { product } = props;

  const navigate = useNavigate();
  const price = product.price.toFixed();

  return (
    <li
      className={styles.productItem}
      onClick={() => navigate(`product/${product.id}`)}
    >
      <figure className={styles.productImageArea}>
        <img src={product.image} alt="" className={styles.productImage} />
      </figure>
      <div className={styles.description}>
        <p className={styles.descriptionTitle}>{product.title}</p>
        <p className={styles.descriptionPrice}>${price}</p>
      </div>
    </li>
  );
};

export default ShopList;
