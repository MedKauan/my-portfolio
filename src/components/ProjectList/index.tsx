import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import styles from "./styles.module.scss";

interface ProjectGitHubProps {
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function ProjectList() {
  const [projects, setProjects] = useState<ProjectGitHubProps[]>([]);

  useEffect(() => {
    axios
      .get<ProjectGitHubProps[]>(
        'https://api.github.com/user/repos?sort="update"&per_page=12',
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        setProjects(response.data);
      });
  }, []);

  return (
    <div className={styles.projectListContainer}>
      {projects.map((project) => (
        <ProjectCard
          key={project.full_name}
          full_name={project.full_name}
          description={project.description}
          url={project.html_url}
          stars={project.stargazers_count}
          forks={project.forks_count}
          language={project.language}
        />
      ))}
    </div>
  );
}
