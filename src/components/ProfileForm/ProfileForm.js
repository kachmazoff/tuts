import React from "react";

export const ProfileForm = ({ initialData, onSubmit }) => {
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

  console.log(formData);
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
        />
        <input
          name="secondName"
          placeholder="Фамилия"
          value={formData["secondName"]}
          onChange={onChangeHandler}
        />
        <input
          name="patronymic"
          placeholder="Отчество"
          value={formData["patronymic"]}
          onChange={onChangeHandler}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};
