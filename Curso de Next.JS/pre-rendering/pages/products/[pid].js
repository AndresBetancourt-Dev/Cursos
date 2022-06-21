import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }
  
  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticPaths() {
  const data = await getData();
  const pathsWithParams = data.products.map(({ id }) => ({
    params: {
      pid: id,
    },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default ProductDetailPage;
