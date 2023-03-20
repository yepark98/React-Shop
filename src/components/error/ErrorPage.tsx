import React from "react";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <h2 className={styles.errorTitle}>404</h2>
      <p className={styles.errorSubTitle}>페이지를 찾을 수 없습니다.</p>
      <button
        className={`${styles.button} ${styles.buttonIn}`}
        onClick={() => navigate("/")}
      >
        메인으로
      </button>
    </section>
  );
};

export default ErrorPage;
