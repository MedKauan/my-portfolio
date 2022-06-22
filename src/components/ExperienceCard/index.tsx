import React from "react";
import styles from "./styles.module.scss";

export function ExperienceCard() {
  return (
    <div className={styles.experienceCardContainer}>
      <h1>Experiences</h1>

      <ul className={styles.experienceCardList}>
        <li>
          <strong>Interfocus Tecnologia</strong>
          <div className={styles.experienceCardInfo}>
            <span>July 2021 - Current</span>
            <span>Junior Full Stack Developer</span>
          </div>
        </li>

        <li>
          <strong>Webline Sistemas</strong>
          <div className={styles.experienceCardInfo}>
            <span>February 2021 - July 2021</span>
            <span>Web Developer Internship</span>
          </div>
        </li>

        <li>
          <strong>Code Az</strong>
          <div className={styles.experienceCardInfo}>
            <span>September 2020 - January 2021</span>
            <span>Web Developer Internship</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
