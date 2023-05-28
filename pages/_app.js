import "@/styles/globals.scss";
import "@/styles/splide.scss";
import { useEffect, useState } from "react";
// import { client } from "@/libs/client";
// import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}
