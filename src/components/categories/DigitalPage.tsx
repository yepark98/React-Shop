import React, { useState, useEffect } from "react";
import { getProductByCategory } from "./../../api/index";

const DigitalPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const digitalResponse = await getProductByCategory("electronics", 999);
      setProducts(digitalResponse);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>디지털</h2>
    </div>
  );
};

export default DigitalPage;
