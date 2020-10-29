import React from "react";

export const ProfileForm = ({ initialData, onSubmit, disabled }) => {
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
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(formData);
        }}
      >
        <input
          name="firstName"
          placeholder="Имя"
          value={formData["firstName"]}
          onChange={onChangeHandler}
          disabled={disabled}
        />
        <input
          name="lastName"
          placeholder="Фамилия"
          value={formData["lastName"]}
          onChange={onChangeHandler}
          disabled={disabled}
        />
        <input
          name="patronymic"
          placeholder="Отчество"
          value={formData["patronymic"]}
          onChange={onChangeHandler}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled}>
          Сохранить
        </button>
      </form>
    </div>
  );
};
