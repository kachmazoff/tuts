import React from "react";
import { TutorialPreview } from "../TutorialPreview";
import styles from "./styles.module.css";

export const TutorialsList = ({ title, tuts, onDelete }) => {
  return (
    <div className={styles.wrapper}>
      <h6>{title}</h6>
      {tuts.length === 0 && <p>Пусто</p>}
      {tuts.length > 0 && (
        <ul>
          {tuts.map((tutorial, index) => (
            <li key={index}>
              <TutorialPreview tutorial={tutorial} />
              <button onClick={() => onDelete(tutorial.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

TutorialsList.defaultProps = {
  title: "Список тутсов",
  tuts: [],
};
