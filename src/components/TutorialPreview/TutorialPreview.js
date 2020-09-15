import React from "react";
import styles from "./styles.module.css";

export const TutorialPreview = ({ tutorial }) => {
  const { title, description } = tutorial;
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
