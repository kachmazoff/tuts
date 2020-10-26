import React from "react";
import { TutorialPreviewModel } from "../../types";
import { TutorialsRow } from "./TutorialsRow";
import styles from "./styles.module.css";

export type TutorialsListProps = {
  title: string;
  tuts: TutorialPreviewModel[];
  tutsOnRow?: number;
};

export const TutorialsList = ({
  title,
  tuts,
  tutsOnRow = 3,
}: TutorialsListProps) => {
  const rows: TutorialPreviewModel[][] = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(tuts.length / tutsOnRow); i++) {
    rows.push(tuts.slice(i * tutsOnRow, i * tutsOnRow + tutsOnRow));
  }

  return (
    <div>
      <h6 className={styles.title}>{title}</h6>
      {tuts.length === 0 && <p>Пусто</p>}
      {rows.map((row, index) => (
        <TutorialsRow tuts={row} key={index} rowMax={tutsOnRow} />
      ))}
    </div>
  );
};

TutorialsList.defaultProps = {
  title: "Список тутсов",
  tuts: [],
};
