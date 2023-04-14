import styles from "./Slider.module.scss";
export default function Slider() {
  return (
    <>
      <div className={styles["slider--wrap"]}>
        <img
          className={styles["slider__img"]}
          src="https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301606403-55ZAEF5FN07C8AA039TI/07_S3K6333.jpg"
          alt="かわいい猫の画像 part1"
        />
        <img
          className={styles["slider__img"]}
          src="https://images.squarespace-cdn.com/content/v1/5a2f39bba9db09ee7335b85a/1565301591657-5FFNAHHAJICJWKLAZ9HV/01_S3K6237.jpg"
          alt="かわいい猫の画像 part1"
        />
        <img
          className={styles["slider__img"]}
          src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg"
          alt="かわいい猫の画像 part1"
        />
      </div>
    </>
  );
}
