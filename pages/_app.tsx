import MainProvider from "@/providers/main";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainProvider>
      <Head>
        <title>Miguel Vega - Frontend Developer </title>
      </Head>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default App;
