import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="developer" content="atleugim" />
        <meta
          name="description"
          content="I'm a software engineer based in Colombia, specialized in web and mobile development. Self-taught developer building personal digital experiences."
        />
        <meta
          name="keywords"
          content="developer, development, desarrollo, programacion, desarrollador, react, frontend, web, web developer, flutter, dart, mobile developer, desarrollador movil, Flutter developer, app developer, android, ios"
        />
        {/* <link rel="canonical" href="https://startupslab.co/" /> */}
      </Head>
      <body className={`${process.env.IS_DEBUG ? "debug-screens" : ""} dark`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
