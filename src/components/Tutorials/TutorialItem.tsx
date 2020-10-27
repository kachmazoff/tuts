import React from "react";
import { TutorialPreviewModel } from "../../types";
import styles from "./styles.module.css";

export const TutorialItem = ({
  title,
  description,
  author,
  created,
}: TutorialPreviewModel) => {
  return (
    <div className={styles.tutorial_item}>
      <h4>{title}</h4>
      <p className={styles.description}>{description}</p>
      {author && (
        <>
          Автор: <span>@{author.username}</span>
        </>
      )}
    </div>
  );
};
