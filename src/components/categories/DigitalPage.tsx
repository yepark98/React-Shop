import React, { useState, useEffect } from "react";
import styles from "./categories.module.css";
import { getProductByCategory } from "./../../api/index";

import ShopList from "../ShopList";

const DigitalPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const digitalResponse = await getProductByCategory("electronics", 999);
      setProducts(digitalResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menuList}>
          <li className={styles.menuHome}>홈</li>
          <li className={styles.menuCategory}>디지털</li>
        </ul>
      </div>
      <div className={styles.productArea}>
        <h2 className={styles.productTitle}>디지털</h2>
        <ul className={styles.productList}>
          {products.map((product, idx) => (
            <ShopList product={product} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DigitalPage;
