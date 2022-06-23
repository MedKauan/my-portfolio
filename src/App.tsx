import { FiBookOpen, FiLayers } from "react-icons/fi";
import styles from "./App.module.scss";
import { AboutCard } from "./components/AboutCard";
import { InfoCard } from "./components/InfoCard";
import { ProfessionalCard } from "./components/ProfessionalCard";
import { ProfileCard } from "./components/ProfileCard";
import { ProjectList } from "./components/ProjectList";
import { TechnologyCard } from "./components/TechnologyCard";
import { TitleCard } from "./components/TitleCard";

interface ProfessinalCardListInfoProps {
  listTitle: string;
  listSubTitle: string;
  listDescription: string;
}

interface ProfessionalCardProps {
  title: string;
  listInfo: ProfessinalCardListInfoProps[];
}

//Informações sobre minha formação
const educationCard: ProfessionalCardProps = {
  title: "Education",
  listInfo: [
    {
      listTitle: "FATEC Garça",
      listSubTitle: "2020 - Current (3° Year)",
      listDescription: "Systems development and analysis 🎓",
    },
    {
      listTitle: "SESI-CE 308",
      listSubTitle: "2016 - 2021",
      listDescription: "High School 🏫",
    },
    {
      listTitle: "SESI-CE 308",
      listSubTitle: "... - 2016",
      listDescription: "Elementary School 🎒",
    },
  ],
};

//Informações sobre experiencias profissionais
const experienceCard: ProfessionalCardProps = {
  title: "Experiences",
  listInfo: [
    {
      listTitle: "Interfocus Tecnologia",
      listSubTitle: "July 2021 - Current",
      listDescription: "Junior Full Stack Developer",
    },
    {
      listTitle: "Webline Sistemas",
      listSubTitle: "February 2021 - July 2021",
      listDescription: "Web Developer Internship",
    },
    {
      listTitle: "Code Az",
      listSubTitle: "September 2020 - January 2021",
      listDescription: "Web Developer Internship",
    },
  ],
};

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <section className={styles.leftSideBar}>
        <ProfileCard />
        <InfoCard />
        <TechnologyCard />
        <ProfessionalCard
          title={experienceCard.title}
          listInfo={experienceCard.listInfo}
        />
        <ProfessionalCard
          title={educationCard.title}
          listInfo={educationCard.listInfo}
        />
      </section>

      <section className={styles.rightSideBar}>
        <TitleCard title="About" Icon={FiBookOpen} />
        <AboutCard />
        <TitleCard
          title="My Projects"
          href="https://github.com/MedKauan?tab=repositories"
          hrefName="See All"
          Icon={FiLayers}
        />
        <ProjectList />
      </section>
    </main>
  );
}
