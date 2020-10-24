import React from "react";
import styles from "./styles.module.css";

export const Container = ({ children, fullWidth }) => (
  <div className={styles.wrapper}>{children}</div>
);
