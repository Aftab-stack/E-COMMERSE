import useProducts from "../../hooks/useProducts.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductList = () => {
  const products = useProducts();

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
