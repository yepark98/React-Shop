import React, { useState, useEffect } from "react";
import styles from "./DetailPage.module.css";
import { Link, useParams } from "react-router-dom";
import { getProductBySingle } from "../../service";
import { Product } from "../../type/Product";
import { useRecoilState } from "recoil";
import { cartsState } from "../../recoil/atom";

const DetailPage = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [carts, setCarts] = useRecoilState(cartsState);

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

  const handleClick = () => {
    const copyCarts = [...carts];
    const findCartId = copyCarts.find((cart) => cart.id === product.id);
    if (findCartId) {
      // 해당 상품이 장바구니에 있을 경우
      const copyFindCartId = { ...findCartId };
      copyFindCartId.count += 1;
      const cartIndex = copyCarts.findIndex((cart) => cart.id === product.id);
      copyCarts.splice(cartIndex, 1, copyFindCartId);
    } else {
      // 해당 상품이 장바구니에 없을 경우
      copyCarts.push({ ...product, count: 1 });
    }
    setCarts(copyCarts);
  };

  console.log(carts);

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
            <div className={styles.count}>
              {product.rating?.rate} / {product.rating?.count} 참여
            </div>
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
