import React from "react";
import styles from "./styles.module.scss";

interface ProfessinalCardListInfoProps {
  listTitle: string;
  listSubTitle: string;
  listDescription: string;
}

interface ProfessionalCardProps {
  title: string;
  listInfo: ProfessinalCardListInfoProps[];
}

export function ProfessionalCard({ title, listInfo }: ProfessionalCardProps) {
  return (
    <div className={styles.professionalCardContainer}>
      <h1>{title}</h1>

      <ul className={styles.professionalCardList}>
        {listInfo.map((item) => (
          <li key={item.listSubTitle}>
            <strong>{item.listTitle}</strong>
            <div className={styles.professionalCardInfo}>
              <span>{item.listSubTitle}</span>
              <span>{item.listDescription}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
