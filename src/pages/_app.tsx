import MainProvider from "@/core/providers/main";
import type { AppProps } from "next/app";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default appWithI18Next(App, ni18nConfig);
