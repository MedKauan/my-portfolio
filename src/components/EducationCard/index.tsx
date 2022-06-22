import React from "react";
import styles from "./styles.module.scss";

export function EducationCard() {
  return (
    <div className={styles.educationCardContainer}>
      <h1>Education</h1>

      <ul className={styles.educationCardList}>
        <li>
          <strong>FATEC Garça</strong>
          <div className={styles.educationCardInfo}>
            <span>2020 - Current (3° Year)</span>
            <span>Systems development and analysis 🎓</span>
          </div>
        </li>

        <li>
          <strong>SESI-CE 308</strong>
          <div className={styles.educationCardInfo}>
            <span>2016 - 2021</span>
            <span>High School 🏫</span>
          </div>
        </li>

        <li>
          <strong>SESI-CE 308</strong>
          <div className={styles.educationCardInfo}>
            <span>... - 2016</span>
            <span>Elementary School 🎒</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
