import React from "react";
import styles from "./styles.module.scss";

export function AboutCard() {
  return (
    <div className={styles.aboutCardContainer}>
      <p>
        Hi, my name is Kauan, i'm 19, thanks for visiting and hope you enjoy my
        web portfolio 🙂
      </p>
      <p>
        I’m a sparkling, insightful and imaginative young web developer who is
        achieving big goals, and charting paths to do so. I’m used to work
        alongside other many types of IT professionals and always targeting to
        the very highest standards. I have a high knowledge mainly in
        accessibility, usability, and Frameworks to front-end development.
        Within a company I often want to be noticed and feel like I’m making a
        good difference in my team. So, I always direct a massive energy needed
        to the project.
      </p>
      <br />
      <p>I'm current studying ReactJs and NodeJs for web development 💻 </p>
    </div>
  );
}
