import React from "react";
import styles from "./styles.module.scss";

export function TechnologyCard() {
  return (
    <div className={styles.technologyCardContainer}>
      <h1>Technologies</h1>

      <div className={styles.technologyCards}>
        <div className={styles.technologyCardMainly}>
          <strong>JAVASCRIPT</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>REACTJS</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>NODEJS</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>GIT</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>HTML</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>CSS</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>TYPESCRIPT</strong>
        </div>

        <div className={styles.technologyCardMainly}>
          <strong>REACT NATIVE</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>PHP</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>C#</strong>
        </div>
      </div>

      <div>
        <div className={styles.technologyCardSubtitleList}>
          <span className={styles.technologyCardColor}></span>
          <span className={styles.technologyCardDescription}>
            Favorite Technologies
          </span>
        </div>
      </div>
    </div>
  );
}
