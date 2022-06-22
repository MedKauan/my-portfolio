import styles from "./App.module.scss";
import { AboutCard } from "./components/AboutCard";
import { EducationCard } from "./components/EducationCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { InfoCard } from "./components/InfoCard";
import { ProfileCard } from "./components/ProfileCard";
import { ProjectList } from "./components/ProjectList";
import { TechnologyCard } from "./components/TechnologyCard";
import { TitleCard } from "./components/TitleCard";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <section className={styles.leftSideBar}>
        <ProfileCard />
        <InfoCard />
        <TechnologyCard />
        <ExperienceCard />
        <EducationCard />
      </section>

      <section className={styles.rightSideBar}>
        <TitleCard title="About" />
        <AboutCard />
        <TitleCard
          title="My Projects"
          href="https://github.com/MedKauan?tab=repositories"
          hrefName="See All"
        />
        <ProjectList />
      </section>
    </main>
  );
}
