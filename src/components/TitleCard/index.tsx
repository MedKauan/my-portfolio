import React from "react";
import styles from "./styles.module.scss";

interface TitleCardProps {
  title: string;
  href?: string;
  hrefName?: string;
}

export function TitleCard({ title, href, hrefName }: TitleCardProps) {
  return (
    <div className={styles.titleCardContainer}>
      <h1>{title}</h1>
      <a href={href} target="_blank">
        {hrefName}
      </a>
    </div>
  );
}
