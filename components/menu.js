import styles from "./menu.module.scss";
import { css } from "@emotion/react";
import Link from "next/link";

export default function Menu({
  works,
  imgPreset,
  setImagePreset,
  slideNum,
  setSlideNum,
  controler,
  router,
  id,
  setMenuState,
  children,
}) {
  return (
    <section id={id} className={styles["menu"]}>
      {children}
      <div className={styles["logo"]}>
        <Link href="./">DAIKI KATO</Link>
      </div>
      <nav className={styles["menu-photo-list"]}>
        {works.photos.map((p, idx) => {
          return (
            <li key={idx}>
              <Link
                href={{ query: { folder: `${p.title}` } }}
                onClick={() => {
                  setImagePreset(p.img);
                  setSlideNum(1);
                  setMenuState(false);
                }}
              >
                {p.title}
              </Link>
            </li>
          );
        })}
      </nav>
      <hr
        css={css`
          opacity: 0.3;
          margin-bottom: 30px;
        `}
      />
      <nav
        className={styles["menu-photo-list"]}
        css={css`
          pointer-events: none;
          opacity: 0.3;
        `}
      >
        <li>
          <a onClick={() => router.push("/profile")}>PROFILE</a>
        </li>
        <li>
          <Link href={{ query: { news: "1" } }}>NEWS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </nav>

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
  );
}
