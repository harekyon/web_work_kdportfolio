import styles from "./Slider.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef } from "react";
export default function Slider({ imgObj, imgState }) {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <>
      <div className={styles["slider--wrap"]}>
        {/* <div className={styles["slider--button-wrap"]}>
          <div className={styles["slider__prev-button"]}></div>
          <div className={styles["slider__next-button"]}></div>
        </div> */}

        <Splide
          options={{
            loop: true,
            type: "fade",
            rewind: true,
            autoplay: true,
            pauseOnHover: false,
            interval: 5000,
          }}
          aria-label="お気に入りの写真"
          ref={ref}
        >
          {imgObj.map((i, idx) => {
            return (
              <SplideSlide>
                <img
                  key={idx}
                  className={styles["slider__img"]}
                  src={i.img}
                  alt={i.alt}
                />
              </SplideSlide>
            );
          })}
        </Splide>
        {/* {imgObj.map((i) => {
          return (
            // <div className={styles[""]}>
            <img className={styles["slider__img"]} src={i.img} alt={i.alt} />
            // </div>
          );
        })} */}

        {/* <SplideSlide>
          <img src="image1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide> */}
      </div>
    </>
  );
}
