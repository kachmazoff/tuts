import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={styles.form}>
      <h4>
        {"Вход в "}
        <Link to="/" className={styles.accent}>
          tuts
        </Link>
      </h4>
      <input
        placeholder="Логин"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        autoComplete="off"
      />
      <br />
      <input
        placeholder="Пароль"
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        autoComplete="off"
      />
      <br />
      <button
        onClick={() => onSubmit({ username, password })}
        disabled={!username || !password}
        className={styles.confirm}
      >
        Войти
      </button>
    </div>
  );
};
