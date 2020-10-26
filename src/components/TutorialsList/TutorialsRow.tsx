import React from "react";
import { TutorialPreviewModel } from "../../types";
import { TutorialPreview } from "../TutorialPreview";
import styles from "./styles.module.css";

export type TutorialRowProps = {
  tuts: TutorialPreviewModel[];
  rowMax: number;
};

export const TutorialsRow = ({ tuts, rowMax }: TutorialRowProps) => {
  const liWidth = 100 / rowMax + "%";
  return (
    <ul className={styles.tuts}>
      {tuts.map((tutorial, index) => (
        <li key={index} style={{ width: liWidth }}>
          <TutorialPreview tutorial={tutorial} />
          {/* <button onClick={() => onDelete(tutorial.id)}>Удалить</button> */}
        </li>
      ))}
      {tuts.length < rowMax &&
        Array.from({ length: rowMax - tuts.length }).map((x, index) => (
          <li key={`plug_${index}`} style={{ width: liWidth }} />
        ))}
    </ul>
  );
};

TutorialsRow.defaultProps = {
  tuts: [],
};
