import React from "react";
import ComplexTitle from "./ComplexTitle";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "chair",
    price: 30,
  },
  {
    id: 2,
    name: "xbox",
    price: 550,
  },
  {
    id: 3,
    name: "monitor",
    price: 110,
  },
];

const Products = () => {
  return (
    <section>
      <ComplexTitle title="Products" />
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </section>
  );
};

export default Products;
