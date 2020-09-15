import React from "react";

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
    <form>
      <input value={title} name="title" onChange={onChangeHandler} />
      <textarea
        value={description}
        name="description"
        onChange={onChangeHandler}
      />
    </form>
  );
};
