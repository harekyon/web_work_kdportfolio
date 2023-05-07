import styles from "./Slider.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef } from "react";
export default function Slider({ imgPreset, setSlideNum, setControler }) {
  const ref = useRef();
  useEffect(() => {
    // console.log(ref.current.splide.Components.Controller);
    console.log(ref.current.splide.Components.Controller);
    setControler(ref.current.splide.Components.Controller);
    // ref.current.splide.Controller;
  }, []);
  return (
    <>
      <div className={styles["slider--wrap"]}>
        <Splide
          onMove={(splide, newIndex) => {
            // console.log(splide.context);
            setSlideNum(newIndex + 1);
          }}
          options={{
            pagination: false,
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
          {imgPreset.map((i, idx) => {
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
          <div className="splide__arrows">
            <button className="splide__arrow--hk splide__arrow--prev button prev"></button>
            <button className="splide__arrow--hk splide__arrow--next button next"></button>
          </div>
        </Splide>
      </div>
    </>
  );
}
