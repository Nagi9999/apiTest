import "../assets/scss/global.css";
import "../assets/scss/main.scss";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
