import React, { useEffect, useState } from "react";
import { getProductByCategory } from "../../api";

import ProductItem from "./ProductItem";

const AccessoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const accessoryResponse = await getProductByCategory("jewelery", 999);
      setProducts(accessoryResponse);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <section>
      <h2>액세서리</h2>
      <ul>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default AccessoryPage;
