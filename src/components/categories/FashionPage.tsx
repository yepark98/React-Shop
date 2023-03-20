import React, { useEffect, useState } from "react";
import { getProductByCategory } from "./../../api/index";

const FashionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const menfashion = await getProductByCategory("men's clothing", 999);

      const womenfashion = await getProductByCategory("women's clothing", 999);

      const fashionResponse = menfashion.concat(womenfashion);
      setProducts(fashionResponse);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <h2>패션</h2>
    </div>
  );
};

export default FashionPage;
