import React from "react";
import { TutorialsRow } from "./TutorialsRow";
import styles from "./styles.module.css";

export const TutorialsList = ({ title, tuts, onDelete, tutsOnRow = 3 }) => {
  let rows = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(tuts.length / tutsOnRow); i++) {
    rows.push(tuts.slice(i * tutsOnRow, i * tutsOnRow + tutsOnRow));
  }

  return (
    <div>
      <h6 className={styles.title}>{title}</h6>
      {tuts.length === 0 && <p>Пусто</p>}
      {rows.map((row, index) => (
        <TutorialsRow
          tuts={row}
          key={index}
          onDelete={onDelete}
          rowMax={tutsOnRow}
        />
      ))}
    </div>
  );
};

TutorialsList.defaultProps = {
  title: "Список тутсов",
  tuts: [],
};
