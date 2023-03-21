import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { getProductByAll } from "../service";

import SearchList from "./SearchList";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const accessoryResponse = await getProductByAll();
      setProducts(accessoryResponse);
    };
    fetchProducts();
  }, []);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section className={styles.search}>
      <input
        type="text"
        placeholder="검색"
        className={styles.searchInput}
        value={text}
        onChange={handleChangeText}
      />
      {text && (
        <ul className={styles.searchList}>
          {products.map((product, index) => (
            <SearchList key={index} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Search;
