import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const TutorialPreview = ({ tutorial }) => {
  const { title, description } = tutorial;
  return (
    <Link to={`/tutorial/${tutorial.id}`} className={styles.link}>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
