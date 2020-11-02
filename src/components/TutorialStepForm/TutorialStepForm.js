import React from "react";
import { Container } from "../Container";
import styles from "./styles.module.css";

export const TutorialStepForm = ({
  model,
  index,
  onChange,
  onRemove,
  mini,
}) => {
  const onChangeHandler = React.useCallback(
    (event) => {
      const { name, value } = event.target;
      onChange({ index: index, name: name, value: value });
    },
    [onChange, index]
  );
  return (
    <Container>
      <form className={styles.form}>
        <div className={styles.form_title}>{`Шаг ${index}`}</div>
        <input
          name="title"
          value={model.title}
          placeholder="Название шага"
          autoComplete="off"
          onChange={onChangeHandler}
        />
        {!mini && (
          <textarea
            name="body"
            value={model.body}
            placeholder="Описание шага"
            onChange={onChangeHandler}
          />
        )}
      </form>
    </Container>
  );
};
