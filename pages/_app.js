import Preloader from "@/src/components/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Kristin Erken - Portfolio" />
        <meta name="description" content="Kristin Erken - Artist" />
        <title>Kristin Erken - Artist</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <Fragment>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
    </>

  );
}
