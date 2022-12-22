import React from "react";
import { Code } from "../../components/code";
import { TwicAbstract } from "../../components/demo-wrapper/twicAbstract";
import { TwicWrapper } from "../../components/demo-wrapper/twicWrapper";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const imgUrl = `components/horse.jpg`;
const TwicStyleDriven = () => {
  return (
    <div id={styles["twic-style-driven-container"]}>
      <TwicWrapper filename="pages/style-driven/index.jsx">
        <TwicAbstract title="CSS style driven">
          <p>
            You can set up the TwicPics components using pure CSS and the power
            of CSS variables.
          </p>
        </TwicAbstract>
        <p>
          <b>1.</b> Set up aspect ratio with<Code>--twic-ratio</Code>css
          variable.
        </p>
        <div className="twic-grid">
          <div className={`${styles.square} twic-item`}>
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>square</Code>
            </span>
          </div>
          <div className={`${styles.portrait} twic-item`}>
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>portrait</Code>
            </span>
          </div>
          <div className={`${styles.landscape} twic-item`}>
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>landscape</Code>
            </span>
          </div>
        </div>
        <p>
          <b>2.</b> Class combination: you can set up multiples props as
          <Code>object-fit</Code>and
          <Code>position</Code>with
          <Code>--twic-mode</Code>and
          <Code>twic-position</Code>
        </p>
        <br></br>
        <div className="twic-grid">
          <div className={`${styles.contain} ${styles.left} twic-item`}>
            <TwicImg src={imgUrl} ratio="16/9" />
            <span>
              class
              <Code>contain</Code>& class
              <Code>left</Code>
            </span>
          </div>
          <div className={`${styles.contain} ${styles.right} twic-item`}>
            <TwicImg src={imgUrl} ratio="16/9" />
            <span>
              class
              <Code>contain</Code>& class
              <Code>right</Code>
            </span>
          </div>
          <div className={`${styles.cover} twic-item`}>
            <TwicImg src={imgUrl} focus="50px100p" ratio="16/9" />
            <span>
              class
              <Code>cover</Code>
            </span>
          </div>
        </div>
        <p>
          <b>3.</b> Other classical settings (here with
          <Code>width</Code>)
        </p>
        <br></br>
        <div className="twic-grid">
          <div className={`${styles.lg} twic-item`}>
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>lg</Code>
            </span>
          </div>
          <div className={`${styles.md} twic-item`}>
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>md</Code>
            </span>
          </div>
          <div className={`${styles.sm} twic-item`}>
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>sm</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};

export default TwicStyleDriven;
