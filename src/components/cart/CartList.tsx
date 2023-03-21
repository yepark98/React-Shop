import React from "react";
import styles from "./CartList.module.css";
import { useRecoilState } from "recoil";
import { cartsState } from "../../recoil/atom";
import { Cart } from "../../type/Cart";

interface CartListProps {
  product: Cart;
}

const CartList = (props: CartListProps) => {
  const [carts, setCarts] = useRecoilState(cartsState);

  const { product } = props;

  const handleClickPlus = () => {
    const copyCarts = [...carts];
    const findCartId = copyCarts.find((cart) => cart.id === product.id);

    if (findCartId) {
      const copyFindCartId = { ...findCartId };
      copyFindCartId.count += 1;
      const cartIndex = copyCarts.findIndex((cart) => cart.id === product.id);
      copyCarts.splice(cartIndex, 1, copyFindCartId);
    }
    setCarts(copyCarts);
  };

  const handleClickMinus = () => {
    const copyCarts = [...carts];
    const findCartId = copyCarts.find((cart) => cart.id === product.id);

    if (findCartId) {
      const copyFindCartId = { ...findCartId };
      copyFindCartId.count -= 1;
      const cartIndex = copyCarts.findIndex((cart) => cart.id === product.id);
      copyCarts.splice(cartIndex, 1, copyFindCartId);
      if (copyFindCartId.count === 0) {
        copyFindCartId.count -= 1;
        copyCarts.splice(cartIndex, 1);
      }
    }
    setCarts(copyCarts);
  };

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
          <p className={styles.price}>${product.count * Number(price)}</p>
          <div>
            <div>
              <button className={styles.countBtn} onClick={handleClickMinus}>
                -
              </button>
              <button className={styles.count}>{product.count}</button>
              <button className={styles.countBtn} onClick={handleClickPlus}>
                +
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartList;
