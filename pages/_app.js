import "@/styles/globals.scss";
import "@/styles/splide.scss";
import Layout from "../components/Layout";

export default function App({ Component, pageProps, works }) {
  return (
    // <Layout works={works}>
    <Component {...pageProps} />
    // </Layout>
  );
}
// export const getStaticProps = async () => {
//   const data = await client
//     .get({ endpoint: "works" })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return {
//     props: {
//       works: data,
//     },
//   };
// };
