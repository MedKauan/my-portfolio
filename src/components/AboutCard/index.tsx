import React from "react";
import styles from "./styles.module.scss";

export function AboutCard() {
  return (
    <div className={styles.aboutCardContainer}>
      <p>
        Hi, my name is Kauan, thanks for visiting and hope you enjoy my web
        portfolio 🙂
      </p>
      <p>
        Highly skilled Full Stack Developer with 6 years of experience
        specializing in React, C#, and PostgreSQL. Proven expertise in building
        performant and scalable web applications, with a strong focus on
        accessibility and usability (UX/UI) standards. Experienced in continuous
        delivery and iterative development within Scrum environments, I
        consistently deliver high-quality solutions while actively contributing
        to code standards and technical leadership within the team. Proficient
        in additional technologies including Angular, PHP, and JavaScript.
      </p>
      <br />
      
      <p>I'm current studying ReactJs and NodeJs for web development 💻 </p>
    </div>
  );
}
