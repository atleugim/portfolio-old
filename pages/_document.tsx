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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* <link rel="canonical" href="https://startupslab.co/" /> */}
      </Head>
      <body className={process.env.IS_DEBUG ? "debug-screens" : ""}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
