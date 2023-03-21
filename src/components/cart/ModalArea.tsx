import React from "react";
import styles from "./ModalArea.module.css";
import { useRecoilState } from "recoil";
import { cartsState, modalState } from "../../recoil/atom";

const ModalArea = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [carts, setCarts] = useRecoilState(cartsState);

  const handleClickYes = () => {
    setCarts([]);
    setModal(false);
  };

  const handleClickNo = () => {
    setModal(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.modal}>
        <h3 className={styles.modalTitle}>정말로 구매하시겠습니까?</h3>
        <p className={styles.modalSubTitle}>
          장바구니의 모든 상품들이 삭제됩니다.
        </p>
        <div className={styles.modalButtonArea}>
          <button
            className={`${styles.button} ${styles.buttonYes}`}
            onClick={handleClickYes}
          >
            네
          </button>
          <button
            className={`${styles.button} ${styles.buttonNo}`}
            onClick={handleClickNo}
          >
            아니오
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalArea;
