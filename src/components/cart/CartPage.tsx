import React from "react";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartsState, modalState } from "./../../recoil/atom";

import CartList from "./CartList";
import ModalAear from "./ModalArea";

const CartPage = () => {
  const [carts, setCarts] = useRecoilState(cartsState);
  const [modal, setModal] = useRecoilState(modalState);

  const navigate = useNavigate();

  const totalPrice = carts.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  const fixedPrice = Math.round(totalPrice);
  const price = fixedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menuList}>
          <li className={styles.menuHome}>홈</li>
          <li className={styles.menuCategory}>장바구니</li>
        </ul>
      </div>
      <div className={styles.cartArea}>
        {carts.length === 0 && (
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
              {carts.map((cart) => (
                <CartList key={cart.id} product={cart} />
              ))}
            </ul>
          ) : (
            <div></div>
          )}
          <div className={styles.cartPrice}>
            <span className={styles.totalPrice}>총: ${price}</span>
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
