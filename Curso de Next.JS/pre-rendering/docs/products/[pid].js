import React, { Fragment } from "react";

/**
 * FS - FileSystem i only import the promises version of the fs
 */
import fs from "fs/promises";
/**
 * Node.js built-in library that allows me to access the path, relative, direct, full path despite the enviroment location, etc
 */
import path from "path";

/**
 * React Page that recieves products as props
 * it validates that if product has a falsy value it will simply not load and return a JSX that has the "Loading..." text node
 */
const ProductDetailPage = (props) => {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  /**
   * Fragment is used to not create multiple useless containers such as div
     Empty container
   */
  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
};

/**
 * Function that gets data from a json file, using Node.js Runtime Enviroment
 */
async function getData() {
  /**
   * Filepath, path.join Joins multiple strings to create the path are received as a spread paramether
   * process is the variable executed within the process of the application
   * cwd() stands for current working directory
   *
   * fs.readFile reads the file of the filepath we use await because it's not a synchronous task
   */
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  /**
   * JSON.parse Converts the JSON data from the file into a Javascript usable runtime variable usable
   */
  const data = JSON.parse(jsonData);

  return data;
}

/**
 * Get static paths to be pre-rendered, created in built-time
 * It's used when there a dynamic route to specify which paths are allowed
 * returns and object 
 * 
 * that has 
 * 
 * paths : An array that includes the params which are the available routes
 * fallback : used to make strict or not the use of dynamic paths
fallback is to specify even pages not listed here can be valid they're generated just in time when a request reaches the server 
*/
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
  /**
   * Get the params from the context that was generated from the getStaticPaths
   * Function
   */
  const { params } = context;

  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);


  /**
   * If the product doesn't exist i will reditect to the root
   * the getStaticProps object can return
   * 
   * {
   *  props,
   *  redirect,
   *  notFound, true, false
   *  revalidate : rehydrate after x seconds (integer)
   * }
   */
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
