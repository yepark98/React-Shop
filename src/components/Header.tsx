import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Search from "./Search";

const Header = () => {
  const categories = [
    { name: "fashion", title: "패션" },
    { name: "accessory", title: "악세사리" },
    { name: "digital", title: "디지털" },
  ];

  return (
    <header className={styles.header}>
      <section className={styles.nav}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <Link to={"/"}>React Shop</Link>
          </h1>
          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category.name} className={styles.categoryItem}>
                <Link to={`${category.name}`}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <Search />
          <Link to={"cart"} className={styles.cart}>
            <span>
              <HiOutlineShoppingBag className={styles.cartIcon} />
            </span>
            <span className={styles.cartCount}>0</span>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
