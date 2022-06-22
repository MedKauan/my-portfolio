import React from "react";
import { FiFolder, FiGitBranch, FiStar } from "react-icons/fi";
import styles from "./styles.module.scss";
import gitHubLanguageColor from "./../../../github-colors.json";

// interface GitHubLanguageColorProps {
//   color: string;
//   url: string;
// }

interface ProjectCardProps {
  full_name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

export function ProjectCard({
  full_name,
  description,
  url,
  stars,
  forks,
  language,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCardContainer}>
      <a href={url} target="_blank" className={styles.projectCardHeader}>
        <FiFolder
          className={styles.projectCardIcon}
          style={{ marginRight: 16 }}
        />
        <h2>{full_name}</h2>
      </a>

      <p className={styles.projectCardDescription}>{description}</p>

      <footer className={styles.projectCardFooter}>
        <div className={styles.projectCardGitInfo}>
          <div className={styles.projectCardIcons}>
            <FiStar className={styles.projectCardIcon} />
            <span>{stars}</span>
          </div>

          <div className={styles.projectCardIcons}>
            <FiGitBranch className={styles.projectCardIcon} />
            <span>{forks}</span>
          </div>
        </div>
        <div className={styles.projectCardLanguage}>
          <span
            style={{
              backgroundColor: `${gitHubLanguageColor[language].color}`,
            }}
            className={styles.projectCardLanguageColor}
          >
            {}
          </span>
          <span>{language}</span>
        </div>
      </footer>
    </div>
  );
}
