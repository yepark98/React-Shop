import React, { useState } from "react";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { modalState } from "./../../recoil/atom";

import CartList from "./CartList";
import ModalAear from "./ModalArea";

const CartPage = () => {
  const [carts, setCarts] = useState(false);
  const [modal, setModal] = useRecoilState(modalState);

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
        {!carts && (
          <div className={styles.cartNull}>
            <h2 className={styles.cartNullTitle}>
              장바구니에 물품이 없습니다.
            </h2>
            <button
              className={`${styles.button} ${styles.buttonTop}`}
              onClick={() => navigate("/")}
            >
              담으러 가기
            </button>
          </div>
        )}
        <div className={styles.cart}>
          {carts ? (
            <ul>
              <CartList />
            </ul>
          ) : (
            <div></div>
          )}
          <div className={styles.cartPrice}>
            <span className={styles.totalPrice}>총: $0</span>
            <button
              className={`${styles.button} ${styles.buttonleft}`}
              onClick={() => setModal(true)}
            >
              구매하기
            </button>
            {modal && <ModalAear />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
