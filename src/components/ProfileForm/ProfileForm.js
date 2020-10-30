import React from "react";
import { Container } from "../Container";
import styles from "./styles.module.css";

export const ProfileForm = ({ initialData, onSubmit, disabled, onCancel }) => {
  const [formData, setFormData] = React.useState(initialData || {});

  React.useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const onChangeHandler = React.useCallback((event) => {
    const { name, value } = event.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  return (
    <Container className={styles.wrapper}>
      <h2 className={styles.title}>Редактирование профиля</h2>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(formData);
        }}
      >
        <div className={[styles.input_row, styles.input_row_3].join(" ")}>
          <label>
            Имя
            <input
              name="firstName"
              placeholder="Иван"
              value={formData["firstName"]}
              onChange={onChangeHandler}
              disabled={disabled}
            />
          </label>

          <label>
            Фамилия
            <input
              name="lastName"
              placeholder="Иванов"
              value={formData["lastName"]}
              onChange={onChangeHandler}
              disabled={disabled}
            />
          </label>
          <label>
            Отчество
            <input
              name="patronymic"
              placeholder="Иванович"
              value={formData["patronymic"]}
              onChange={onChangeHandler}
              disabled={disabled}
            />
          </label>
        </div>

        <div className={styles.form_footer}>
          <button
            type="submit"
            disabled={disabled}
            className={styles.submit_button}
          >
            Сохранить
          </button>
          <button
            type="button"
            className={styles.cancel_button}
            onClick={onCancel}
          >
            Отменить
          </button>
        </div>
      </form>
    </Container>
  );
};
