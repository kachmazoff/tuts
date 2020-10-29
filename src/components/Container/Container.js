import React from "react";
import styles from "./styles.module.css";

export const Container = ({ children, fullWidth, className }) => (
  <div className={[styles.wrapper, className].join(" ")}>{children}</div>
);
