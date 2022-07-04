import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

/**
 * Application Shell
 * Inside of Body
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
