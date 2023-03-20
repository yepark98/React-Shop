import React from "react";
import styles from "./Header.module.css";

const Search = () => {
  return (
    <section className={styles.search}>
      <input type="text" placeholder="검색" className={styles.searchInput} />
      <ul className={styles.searchList}>
        <li className={styles.searchItem}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </li>
      </ul>
    </section>
  );
};

export default Search;
