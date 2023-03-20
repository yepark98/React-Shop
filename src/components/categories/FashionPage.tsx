import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { getProductByCategory } from "../../service/index";

import ShopList from "../ShopList";

const FashionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const menfashion = await getProductByCategory("men's clothing", 999);

      const womenfashion = await getProductByCategory("women's clothing", 999);

      const fashionResponse = menfashion.concat(womenfashion);
      setProducts(fashionResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menuList}>
          <li className={styles.menuHome}>홈</li>
          <li className={styles.menuCategory}>패션</li>
        </ul>
      </div>
      <div className={styles.productArea}>
        <h2 className={styles.productTitle}>패션</h2>
        <ul className={styles.productList}>
          {products.map((product, idx) => (
            <ShopList product={product} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FashionPage;
