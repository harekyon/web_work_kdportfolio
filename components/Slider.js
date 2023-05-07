import styles from "./Slider.module.scss";
export default function Slider({ imgObj, imgState }) {
  return (
    <>
      <div className={styles["slider--wrap"]}>
        {imgObj.map((i) => {
          return (
            // <div className={styles[""]}>
            <img className={styles["slider__img"]} src={i.img} alt={i.alt} />
            // </div>
          );
        })}
      </div>
    </>
  );
}
