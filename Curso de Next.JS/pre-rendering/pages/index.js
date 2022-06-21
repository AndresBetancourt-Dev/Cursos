import { Fragment } from "react";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

export default function HomePage(props) {
  const { title, products } = props;
  /**
   * By default Next.Js pre-renders all pages that does not have dynamic data
   */
  return (
    <Fragment>
      <h1>{title}</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

/*
Pre-generate a Project again
(SSG) automatically generated as static HTML + JSON (uses getStaticProps)
*/
export async function getStaticProps(context) {
  console.log("Regenerating..");
  /**
   * CWD stands for current working directory
   * ENV contains in an object all Enviroment Variables
   */
  console.log(process.cwd());
  /* console.log(process.env); */
  /**
   * Receives an array of strings and generates a new one
   */
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/about",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: "Home Page",
      products: data.products || [],
    },
    /** Revalidate content ISR (Incremental Static Generation) : 10 seconds */
    revalidate: 10,
  };
}
