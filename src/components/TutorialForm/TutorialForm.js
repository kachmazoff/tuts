import React from "react";
import styles from "./styles.module.css";

export const TutorialForm = ({
  title,
  description,
  setTitle,
  setDescription,
}) => {
  const onChangeHandler = React.useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name === "title") {
        setTitle(value);
      } else if (name === "description") {
        setDescription(value);
      }
    },
    [setTitle, setDescription]
  );

  return (
    <form className={styles.form}>
      <input
        value={title}
        name="title"
        placeholder="Название"
        onChange={onChangeHandler}
        className={styles.title}
      />
      <textarea
        value={description}
        name="description"
        placeholder="Описание"
        onChange={onChangeHandler}
        className={styles.description}
      />
    </form>
  );
};
