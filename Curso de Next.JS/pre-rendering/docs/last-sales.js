import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, objectToArray } from "../util";
/**
 * useSWR Stale-While-Revalidate
 */

/**
 * Firebase URL
 */
const SALES_URL =
  "https://nextjs-course-32bdd-default-rtdb.firebaseio.com/sales.json";


  /**
   * if there's data changes it will re-set the sales
   */
function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const { data, error } = useSWR(SALES_URL, fetcher);

  useEffect(() => {
    if (data) {
      setSales(objectToArray(data));
    }
  }, [data]);

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <h3>{sale.username}</h3>
          <p>{sale.volume}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * 
 * Combining pre-rendering with client-side data 
 * fetching
 * 
 * Can lead to the best possible user experience
 */

export async function getStaticProps() {
  const data = await fetcher(SALES_URL);
  const transformedSales = objectToArray(data);

  return {
    props: {
      sales: transformedSales,
    },
    revalidate : 10
  };
}

export default LastSalesPage;
