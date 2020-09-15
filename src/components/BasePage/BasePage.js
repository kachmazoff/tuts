import React from "react";
import styles from "./styles.module.css";

export const BasePage = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
};
