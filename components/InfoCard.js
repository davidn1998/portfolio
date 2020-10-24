import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ icon, infoText }) => {
  return (
    <div className={styles.infoCard}>
      <div>{icon}</div>
      <p className={styles.infoText}>{infoText}</p>
    </div>
  );
};

export default InfoCard;
