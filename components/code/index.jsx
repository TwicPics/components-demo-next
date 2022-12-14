import styles from "./index.module.scss";
export const Code = ({ children }) => {
  return (
    <>
      <span className={styles["twic-code"]}>{children}</span>
    </>
  );
};
