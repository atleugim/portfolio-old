import useCookie from "@/hooks/useCookie";
import MainProvider from "@/providers/main";
import type { AppProps } from "next/app";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const { value } = useCookie("lang", "en");
  useSyncLanguage(value);

  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default appWithI18Next(App, ni18nConfig);
