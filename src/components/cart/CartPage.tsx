import React from "react";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menuList}>
          <li className={styles.menuHome}>홈</li>
          <li className={styles.menuCategory}>장바구니</li>
        </ul>
      </div>
      <div className={styles.cartArea}>
        <div className={styles.cartNull}>
          <h2 className={styles.cartNullTitle}>장바구니에 물품이 없습니다.</h2>
          <button
            className={`${styles.button} ${styles.buttonTop}`}
            onClick={() => navigate("/")}
          >
            담으러 가기
          </button>
        </div>
        <div className={styles.cart}>
          <div></div>
          <div className={styles.cartPrice}>
            <span className={styles.totalPrice}>총: $0</span>
            <button className={`${styles.button} ${styles.buttonleft}`}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
