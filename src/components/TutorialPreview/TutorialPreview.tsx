import React from "react";
import { Link } from "react-router-dom";
import { TutorialPreviewModel } from "../../types";
import styles from "./styles.module.css";

export type TutorialPreviewProps = {
  tutorial: TutorialPreviewModel;
};

export const TutorialPreview = ({ tutorial }: TutorialPreviewProps) => {
  const { title, description, author } = tutorial;
  return (
    <Link to={`/tutorial/${tutorial.id}`} className={styles.link}>
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <span className={styles.author}>
          @{(author || {}).username || "unknown404"}
        </span>
      </div>
    </Link>
  );
};
