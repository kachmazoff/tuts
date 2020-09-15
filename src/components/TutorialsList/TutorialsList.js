import React from "react";

export const TutorialsList = ({ title, tuts, onDelete }) => {
  return (
    <div>
      <h6>{title}</h6>
      {tuts.length === 0 && <p>Пусто</p>}
      {tuts.length > 0 && (
        <ul>
          {tuts.map((tutorial, index) => (
            <li key={index}>
              {tutorial.title}
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
