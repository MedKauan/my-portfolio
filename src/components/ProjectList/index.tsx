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
  const [seeMore, setSeeMore] = useState(true);
  const [pageParameter, setPageParameter] = useState(6)
  const [projects, setProjects] = useState<ProjectGitHubProps[]>([]);

  function changeState() {
    setSeeMore((oldState) => !oldState);
    setPageParameter(seeMore ? 12 : 6)
  }

  useEffect(() => {
    axios
      .get<ProjectGitHubProps[]>(
        `https://api.github.com/user/repos?sort="update"&per_page=${pageParameter}`,
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        setProjects(response.data);
      });
  }, [pageParameter]);

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
      {seeMore ? <button  onClick={changeState}>... See More</button> : <button  onClick={changeState}>... See Less</button>}
    </div>
  );
}
