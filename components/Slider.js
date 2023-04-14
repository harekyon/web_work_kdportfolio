import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

export default function Slider() {
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          type: "loop",
          gap: "1rem",
          drag: false,
          autoplay: true,
          pauseOnHover: true,
          pauseOnForcus: true,
          resetProgress: false,
          focus: "center",
          pagination: false,
          arrows: true,
          interval: 2000,
          autoWidth: true,
          autoHeight: true,
        }}
        hasAutoplayProgress={true}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <SplideTrack>
          <SplideSlide>
            <img
              className="slide-img"
              src="https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301606403-55ZAEF5FN07C8AA039TI/07_S3K6333.jpg"
              alt="かわいい猫の画像 part1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src="https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301591657-5FFNAHHAJICJWKLAZ9HV/01_S3K6237.jpg"
              alt="かわいい猫の画像 part1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg"
              alt="かわいい猫の画像 part1"
            />
          </SplideSlide>
        </SplideTrack>

        {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
        <style jsx>{`
          .splide {
            width: 100vw;
          }
          .slide-img {
            display: block;
            width: 100%;
            max-height: 100vh;
            object-fit: cover;
          }
          .splide__track {
            height: 40vw;
          }
          .splide__slide {
            display: flex;
            justify-content: center; /* 左右の中央揃え */
          }
          .splide__slide img {
            align-self: center;
            max-height: 100%;
            width: 100%;
          }
          .splide--wrap {
            position: relative;
          }
          .slide-img {
            display: block;
            // width: 100%;
            max-height: 100vh;
            //padding-top:100%;
            object-fit: cover;
          }
        `}</style>
      </Splide>
    </>
  );
}
