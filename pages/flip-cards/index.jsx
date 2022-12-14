import React from "react";
import { TwicAbstract } from "../../components/demo-wrapper/twicAbstract";
import { TwicWrapper } from "../../components/demo-wrapper/twicWrapper";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const cards = [
  {
    front: {
      url: `components/flip/orange-1.jpg`,
    },
    back: {
      url: `components/flip/orange-2.jpg`,
    },
  },
  {
    front: {
      url: `components/flip/fig-1.jpg`,
    },
    back: {
      url: `components/flip/fig-2.jpg`,
    },
  },
  {
    front: {
      url: `components/flip/cherry-3.jpg`,
    },
    back: {
      url: `components/flip/cherry-2.jpg`,
    },
  },
  {
    front: {
      url: `components/flip/melon-1.jpg`,
    },
    back: {
      url: `components/flip/melon-2.jpg`,
    },
  },
];

const TwicFlipCards = () => {
  return (
    <>
      <TwicWrapper gitHubUrl="src/lib/twicFlipCards/index.jsx">
        <TwicAbstract title="Flip cards">
          <p>Move your mouse over the images below.</p>
        </TwicAbstract>
        <div className="twic-grid">
          {cards.map((card, i) => (
            <div className={styles["flip-card"]} key={i}>
              <div className={styles["flip-card-inner"]}>
                <div className={styles["flip-card-front"]}>
                  <figure className="twic-item">
                    <TwicImg src={`${card.front.url}`} focus="auto"></TwicImg>
                  </figure>
                </div>
                <div className={styles["flip-card-back"]}>
                  <figure className="twic-item">
                    <TwicImg src={`${card.back.url}`}></TwicImg>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TwicWrapper>
    </>
  );
};

export default TwicFlipCards;
