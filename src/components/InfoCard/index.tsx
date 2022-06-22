import React from "react";
import styles from "./styles.module.scss";
import { BiBriefcaseAlt, BiGlobe, BiMap } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";

export function InfoCard() {
  return (
    <div className={styles.infoCardContainer}>
      <ul>
        <li>
          <BiMap className={styles.infoCardIconList} />
          <a>Marília - Brasil</a>
        </li>

        <li>
          <BiBriefcaseAlt className={styles.infoCardIconList} />
          <a
            href="https://www.linkedin.com/company/interfocus-tecnologia/"
            target="_blank"
          >
            Interfocus Tecnologia
          </a>
        </li>

        <li>
          <FiGithub className={styles.infoCardIconList} />
          <a href="https://github.com/MedKauan" target="_blank">
            @MedKauan
          </a>
        </li>

        <li>
          <FiMail className={styles.infoCardIconList} />
          <a href="mailto: kauan.d3v@gmail.com">kauan.d3v@gmail.com</a>
        </li>

        <li>
          <BiGlobe className={styles.infoCardIconList} />
          <a>https://teste.com</a>
        </li>

        <li>
          <FiLinkedin className={styles.infoCardIconList} />
          <a
            href="https://www.linkedin.com/in/kauan-medeiros-a65884204/"
            target="_blank"
          >
            kauan-medeiros
          </a>
        </li>

        <li>
          <RiInstagramLine className={styles.infoCardIconList} />
          <a>@notKauan</a>
        </li>
      </ul>
    </div>
  );
}
