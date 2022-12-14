import React from "react";
import styles from "./index.module.scss";
export const TwicAbstract = ({ title, children }) => (
  <div className={styles["twic-abstract"]}>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);
