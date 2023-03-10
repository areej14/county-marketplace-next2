import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/mystyle.css';
import '../styles/plugins/pagination.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return<>
    <Head>
      <title>County MarketPlace</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ToastContainer />
    <Component {...pageProps} />
  </>
}

