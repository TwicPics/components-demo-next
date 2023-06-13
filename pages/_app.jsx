import { TwicInstall } from "@twicpics/components/react";
import "@twicpics/components/style.css";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TwicInstall
        domain="https://demo.twic.pics"
        anticipation="0.5"
        step="100"
      />
      <Head>
        <title>TwicPics x Next</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
