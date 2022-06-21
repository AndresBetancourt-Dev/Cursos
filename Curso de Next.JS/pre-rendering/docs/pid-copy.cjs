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

/**
 *
 * The default behaviour of a dynamic path it's not to pregenerate a page
 *
 * getStaticProps pre-render this page in advance
 * NextJs doesn't know how many pages it needs to re-render
 */

/**
 *
 * getStaticPaths defines which dynamic paths are allowed it goes in the paths array within the object
 *
 * fallback is to specify even pages not listed here can be valid they're generated just in time when a request reaches the server
 */
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          pid: "p1",
        },
      },
      //   {
      //     params: {
      //       pid: "p2",
      //     },
      //   },
      //   {
      //     params: {
      //       pid: "p3",
      //     },
      //   }, Since now this objects will not be pre-generated i need to have a fallback state in my component
    ],
    fallback: true,
  };
}
/**
 *
 * fallback [true,false,'blocking']
 */

export async function getStaticProps(context) {
  const { params } = context;

  /**
   * Pre-render params used in the server
   */
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

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
