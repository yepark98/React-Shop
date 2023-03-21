import React, { useEffect, useState } from "react";
import styles from "./CartList.module.css";
import { getProductBySingle } from "../../service";
import { Product } from "../../type/Product";

const CartList = () => {
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    const fetchProduct = async () => {
      const detailResponse = await getProductBySingle(1);
      setProduct(detailResponse);
    };
    fetchProduct();
  }, []);

  const fixedPrice = Math.round(product.price);
  const price = fixedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <li className={styles.cartList}>
        <figure className={styles.imgArea}>
          <img src={product.image} alt="" className={styles.img} />
        </figure>
        <div className={styles.cartArea}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${price}</p>
          <div>
            <div>
              <button className={styles.countBtn}>-</button>
              <button className={styles.count}>1</button>
              <button className={styles.countBtn}>+</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartList;
