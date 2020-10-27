import React from "react";
import { TutorialPreviewModel } from "../../types";
import { TutorialItem } from "./TutorialItem";

export type TutorialsProps = {
  items: TutorialPreviewModel[];
  tutsOnRow?: number;
};

export const Tutorials = ({ items }: TutorialsProps) => {
  return (
    <div>
      {items.length === 0 && <p>Пусто</p>}
      {items.map((tutorial) => (
        <TutorialItem key={tutorial.id} {...tutorial} />
      ))}
    </div>
  );
};

Tutorials.defaultProps = {
  items: [],
};
