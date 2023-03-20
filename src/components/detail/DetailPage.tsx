import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductBySingle } from "../../api";

const DetailPage = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const detailResponse = await getProductBySingle(Number(params.id));
      setProducts(detailResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      <h2>DetailPage</h2>
    </section>
  );
};

export default DetailPage;
