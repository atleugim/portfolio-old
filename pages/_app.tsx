import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Miguel Vega - Frontend Developer </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
