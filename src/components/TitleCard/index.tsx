import React from "react";
import { IconType } from "react-icons";
import styles from "./styles.module.scss";

interface TitleCardProps {
  title: string;
  href?: string;
  hrefName?: string;
  Icon: IconType;
}

export function TitleCard({ title, href, hrefName, Icon }: TitleCardProps) {
  return (
    <div className={styles.titleCardContainer}>
      <div className={styles.titleCardTitle}>
        <Icon className={styles.titleCardIcon} />
        <h1>{title}</h1>
      </div>

      <a href={href} target="_blank">
        {hrefName}
      </a>
    </div>
  );
}
