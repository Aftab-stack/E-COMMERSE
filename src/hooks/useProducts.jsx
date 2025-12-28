import { useEffect, useState } from "react";
import { getProducts } from "../services/api.jsx";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return products;
};

export default useProducts;
