import React from "react";
import { Container } from "../Container";
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
    <Container className={styles.wrapper}>
      <h2 className={styles.title}>Создание туториала</h2>
      <form className={styles.form}>
        {/* TODO: нормальный spacing */}
        <label style={{ marginBottom: "0.6rem" }}>
          Название
          <input
            value={title}
            name="title"
            placeholder="Как приготовить пиццу за 10 простых шагов?"
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Описание
          <textarea
            value={description}
            name="description"
            placeholder="Описание"
            onChange={onChangeHandler}
            className={styles.description}
          />
        </label>
      </form>
    </Container>
  );
};
