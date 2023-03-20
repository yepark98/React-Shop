import React, { useState, useEffect } from "react";
import styles from "./DetailPage.module.css";
import { Link, useParams } from "react-router-dom";
import { getProductBySingle } from "../../api";
import { Product } from "../../type/Product";

const DetailPage = () => {
  const [product, setProduct] = useState<Product>({} as Product);

  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const detailResponse = await getProductBySingle(Number(params.id));
      setProduct(detailResponse);
    };
    fetchProduct();
  }, []);

  const fixedPrice = Math.round(product.price);
  const price = fixedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleClick = () => {};

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menuList}>
          <li className={styles.menuHome}>{product.category}</li>
          <li className={styles.menuCategory}>{product.title}</li>
        </ul>
      </div>
      <div className={styles.detailArea}>
        <figure className={styles.ImgaeArea}>
          <img
            src={`${product.image}`}
            alt={`${product.title}`}
            className={styles.image}
          />
        </figure>
        <div className={styles.descriptionArea}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.starRating}>
            <div>☆☆☆☆☆</div>
            <div className={styles.count}> 2.2 / 140 참여</div>
          </div>
          <p className={styles.price}>{`$${price}`}</p>
          <div>
            <button
              className={`${styles.button} ${styles.buttonIn}`}
              onClick={handleClick}
            >
              장바구니에 담기
            </button>
            <Link to="/cart">
              <button className={`${styles.button} ${styles.buttonOut}`}>
                장바구니로 이동
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
