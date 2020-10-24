import React from "react";
import Link from "next/link";

import styles from "../components/Hero.module.css";

import MainButton from "../components/MainButton";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div id={styles.heroText}>
        <p id={styles.header}>David Nwachukwu</p>
        <p id={styles.subHeader}>Software Engineer & Game Developer</p>
        <div id={styles.mediaIcons}>
          <a
            className={styles.mediaIcon}
            href="https://github.com/davidn1998"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            className={styles.mediaIcon}
            href="https://www.linkedin.com/in/david-nwachukwu-a4449a15a/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      {/* 
      <div className={styles.heroImage}>
        <img
          id={styles.circle}
          src="/images/hero_circle.png"
          alt="hero_circle"
        />
        <img id={styles.gamer} src="/images/hero_gamer.png" alt="hero_gamer" />
        <MainButton buttonText="GET STARTED" animated={true} />
      </div>
      <p id={styles.heroText2}>Game Developer</p> */}
    </section>
  );
};

export default Hero;
