import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.css";
import { getProductByCategory } from "../../service/index";
import { Product } from "./../../type/Product";

import CarouselArea from "./CarouselArea";
import ShopList from "../ShopList";

const MainPage = () => {
  const [fashions, setFashions] = useState<Product[]>([]);
  const [accessorys, setaccessorys] = useState([]);
  const [digitals, setDigitals] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fashionResponse = await getProductByCategory("men's clothing", 4);
      const accessoryResponse = await getProductByCategory("jewelery", 4);
      const digitalResponse = await getProductByCategory("electronics", 4);

      setFashions(fashionResponse);
      setaccessorys(accessoryResponse);
      setDigitals(digitalResponse);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <CarouselArea />
      <section className={styles.container}>
        <div className={styles.categoryArea}>
          <h2 className={styles.title}>패션</h2>
          <ul className={styles.productList}>
            {fashions.map((fashion, idx) => (
              <ShopList product={fashion} key={idx} />
            ))}
          </ul>
        </div>
        <div className={styles.categoryArea}>
          <h2 className={styles.title}>액세서리</h2>
          <ul className={styles.productList}>
            {accessorys.map((accessory, idx) => (
              <ShopList product={accessory} key={idx} />
            ))}
          </ul>
        </div>
        <div className={styles.categoryArea}>
          <h2 className={styles.title}>디지털</h2>
          <ul className={styles.productList}>
            {digitals.map((digital, idx) => (
              <ShopList product={digital} key={idx} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MainPage;
