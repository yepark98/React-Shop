import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { getProductByCategory } from "../../api";

import ShopList from "../ShopList";

const AccessoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const accessoryResponse = await getProductByCategory("jewelery", 999);
      setProducts(accessoryResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menuList}>
          <li className={styles.menuHome}>홈</li>
          <li className={styles.menuCategory}>액세서리</li>
        </ul>
      </div>
      <div className={styles.productArea}>
        <h2 className={styles.productTitle}>액세서리</h2>
        <ul className={styles.productList}>
          {products.map((product, idx) => (
            <ShopList product={product} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AccessoryPage;
