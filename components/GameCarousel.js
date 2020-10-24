import React from "react";
import GameCard from "./GameCard";
import styles from "./GameCarousel.module.css";
import Carousel from "react-elastic-carousel";

const GameCarousel = ({ slideUp, cards }) => {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
      itemsToScroll: 1,
    },
    {
      width: 1000,
      itemsToShow: 2,
      itemsToScroll: 1,
    },
    {
      width: 1200,
      itemsToShow: 3,
      itemsToScroll: 1,
    },
  ];

  return (
    <div className={styles.gameCarousel}>
      <Carousel
        itemsToShow={3}
        pagination={false}
        enableSwipe={false}
        enableMouseSwipe={false}
        focusOnSelect={false}
        breakPoints={breakPoints}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            id={slideUp ? styles.gc2 : ""}
            className={styles.gameCard}
          >
            {card}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GameCarousel;
