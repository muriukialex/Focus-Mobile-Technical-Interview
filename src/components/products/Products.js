import React from "react";
import ProductItem from "./ProductItem";
import "../../App.css";
import ProductsContext from "../../context/products/productsContext";

const Products = () => {
  const productsContext = React.useContext(ProductsContext);

  const { products } = productsContext;
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
