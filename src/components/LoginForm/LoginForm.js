import React from "react";

export const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <input
        placeholder="Логин"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <input
        placeholder="Пароль"
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button
        onClick={() => onSubmit({ username, password })}
        disabled={!username || !password}
      >
        Войти
      </button>
    </div>
  );
};
