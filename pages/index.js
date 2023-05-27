import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Slider from "@/components/Slider";
import { useEffect, useState } from "react";
import { client } from "../libs/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog }) {
  const imgObj1 = [
    {
      img: "https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301606403-55ZAEF5FN07C8AA039TI/07_S3K6333.jpg",
      alt: "part1",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301591657-5FFNAHHAJICJWKLAZ9HV/01_S3K6237.jpg",
      alt: "part2",
    },
    {
      img: "https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg",
      alt: "part3",
    },
  ];
  const imgObj2 = [
    {
      img: "https://cdn-ak.f.st-hatena.com/images/fotolife/n/nicostop/20190718/20190718134859.jpg",
      alt: "part1",
    },
    {
      img: "https://static.wixstatic.com/media/fc05cf_c0c94c0b5e884f4899e90ebd7e7205f9~mv2.jpg/v1/fill/w_727,h_709,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc05cf_c0c94c0b5e884f4899e90ebd7e7205f9~mv2.jpg",
      alt: "part2",
    },
    {
      img: "https://i.pinimg.com/originals/2e/72/03/2e7203a6054d61a5b7c7c56a125bb532.jpg",
      alt: "part3",
    },
    {
      img: "https://img-9gag-fun.9cache.com/photo/a81GEn6_700bwp.webp",
      alt: "part4",
    },
  ];
  const imgObj3 = [
    {
      img: "https://i.pinimg.com/564x/f0/04/a7/f004a7cb9075f2d1b7245f8884641758.jpg",
      alt: "part1",
    },
    {
      img: "https://i.pinimg.com/564x/82/6e/18/826e18544a6fd54a651c94b62c6376d2.jpg",
      alt: "part2",
    },
    {
      img: "https://i.pinimg.com/564x/87/e4/44/87e44471a9109b35a545447d169e13ee.jpg",
      alt: "part3",
    },
    {
      img: "https://i.pinimg.com/736x/8f/73/9f/8f739fc081cccffa59b2f91bb6bcb453.jpg",
      alt: "part4",
    },
  ];

  const imgObj4 = [
    {
      img: "https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301606403-55ZAEF5FN07C8AA039TI/07_S3K6333.jpg",
      alt: "part1",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301591657-5FFNAHHAJICJWKLAZ9HV/01_S3K6237.jpg",
      alt: "part2",
    },
    {
      img: "https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg",
      alt: "part3",
    },
    {
      img: "https://cdn-ak.f.st-hatena.com/images/fotolife/n/nicostop/20190718/20190718134859.jpg",
      alt: "part1",
    },
    {
      img: "https://static.wixstatic.com/media/fc05cf_c0c94c0b5e884f4899e90ebd7e7205f9~mv2.jpg/v1/fill/w_727,h_709,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc05cf_c0c94c0b5e884f4899e90ebd7e7205f9~mv2.jpg",
      alt: "part2",
    },
    {
      img: "https://i.pinimg.com/originals/2e/72/03/2e7203a6054d61a5b7c7c56a125bb532.jpg",
      alt: "part3",
    },
    {
      img: "https://img-9gag-fun.9cache.com/photo/a81GEn6_700bwp.webp",
      alt: "part4",
    },
    {
      img: "https://i.pinimg.com/564x/f0/04/a7/f004a7cb9075f2d1b7245f8884641758.jpg",
      alt: "part1",
    },
    {
      img: "https://i.pinimg.com/564x/82/6e/18/826e18544a6fd54a651c94b62c6376d2.jpg",
      alt: "part2",
    },
    {
      img: "https://i.pinimg.com/564x/87/e4/44/87e44471a9109b35a545447d169e13ee.jpg",
      alt: "part3",
    },
    {
      img: "https://i.pinimg.com/736x/8f/73/9f/8f739fc081cccffa59b2f91bb6bcb453.jpg",
      alt: "part4",
    },
  ];
  const [imgPreset, setImagePreset] = useState(imgObj1);
  const [slideNum, setSlideNum] = useState("1");
  const [controler, setControler] = useState();

  // console.log(blog);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["main"]}>
        <section className={styles["menu"]}>
          <div className={styles["logo"]}>DAIKI KATO </div>
          <ul className={styles["menu-photo-list"]}>
            <li>
              <button
                onClick={() => {
                  setImagePreset(imgObj1);
                }}
              >
                01
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setImagePreset(imgObj2);
                }}
              >
                02
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setImagePreset(imgObj3);
                }}
              >
                03
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setImagePreset(imgObj4);
                }}
              >
                All
              </button>
            </li>
          </ul>

          {/* <div>{slideNum}</div> */}

          <div className={styles["pagination"]}>
            {imgPreset.map((i, idx) => {
              return (
                <button
                  key={idx}
                  className={styles["pagination__num"]}
                  onClick={() => {
                    controler.go(idx);
                  }}
                  style={slideNum === idx + 1 ? { color: "red" } : {}}
                >
                  <span>{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </section>
        <section className={styles["slide"]}>
          <Slider
            imgPreset={imgPreset}
            setImagePreset={setImagePreset}
            setSlideNum={setSlideNum}
            setControler={setControler}
          />
        </section>
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const data = await client
    .get({ endpoint: "blog" })
    .then((res) => {
      return res.contents;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      blog: data,
    },
  };
};
