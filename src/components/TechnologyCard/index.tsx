import React from "react";
import styles from "./styles.module.scss";

export function TechnologyCard() {
  return (
    <div className={styles.technologyCardContainer}>
      <h1>Technologies</h1>

      <div className={styles.technologyCards}>
        <div className={styles.technologyCard}>
          <strong>JAVASCRIPT</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>REACTJS</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>NODEJS</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>GIT</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>GITHUB</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>HTML</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>CSS</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>C#</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>REACT NATIVE</strong>
        </div>

        <div className={styles.technologyCard}>
          <strong>PHP</strong>
        </div>
      </div>
    </div>
  );
}
