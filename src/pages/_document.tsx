import { IS_DEV } from "@/core/utils/vars";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="developer" content="atleugim" />
        <meta
          name="description"
          content="I'm a software developer based in Colombia, specialized in web and mobile development. Self-taught developer building personal digital experiences."
        />
        <meta
          name="keywords"
          content="developer, development, desarrollo, programación, desarrollador, react, frontend, web, web developer, flutter, dart, mobile developer, desarrollador móvil, Flutter developer, app developer, android, ios"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atleugim.vercel.app/" />
        <meta property="og:title" content="Miguel Vega - Software Developer" />
        <meta
          property="og:description"
          content="I'm a software developer based in Colombia, specialized in web and mobile development. Self-taught developer building personal digital experiences."
        />
        <meta
          property="og:image"
          content="https://atleugim.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fme.webp&w=384&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://atleugim.vercel.app/" />
        <meta
          property="twitter:title"
          content="Miguel Vega - Software Developer"
        />
        <meta
          property="twitter:description"
          content="I'm a software developer based in Colombia, specialized in web and mobile development. Self-taught developer building personal digital experiences."
        />
        <meta
          property="twitter:image"
          content="https://atleugim.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fme.webp&w=384&q=75"
        />

        <link rel="canonical" href="https://atleugim.vercel.app/" />
      </Head>
      <body className={`${IS_DEV ? "debug-screens" : ""}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
