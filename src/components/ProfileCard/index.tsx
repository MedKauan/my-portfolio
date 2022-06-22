import React from "react";
import styles from "./styles.module.scss";

export function ProfileCard() {
  return (
    <div className={styles.profileCardContainer}>
      <div className={styles.profileCardImage}>
        <img src="https://avatars.githubusercontent.com/u/72019267?v=4" />
      </div>

      <strong className={styles.profileCardName}>Kauan Medeiros</strong>
      <span>Full Stack Developer</span>
    </div>
  );
}
