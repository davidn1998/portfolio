import React from "react";
import styles from "../components/GameCard.module.css";
import Link from "next/link";

const GameCard = ({ imgSrc, title, liveLink, codeLink }) => {
  return (
    <div className={styles.gameCard}>
      <h2>{title}</h2>
      <Link href={liveLink}>
        <a target="blank">
          <img src={imgSrc} alt="" />
        </a>
      </Link>
    </div>
  );
};

export default GameCard;
