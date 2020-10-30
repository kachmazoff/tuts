import React from "react";
import { Container } from "../Container";
import { LinkButton } from "../LinkButton";
import styles from "./styles.module.css";

// TODO: render на основе конфига (который будет передаваться через пропс)
//      В конфиге будет указано, например, стоит ли рендерить fio или это будет скрытой информацией
//      Либо передавать неполную модель и добавить дополнительные проверки на существование полей

export const ProfileHeader = ({ userData }) => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.avatar}>Картинка</div>
      <h3
        className={styles.fio}
      >{`${userData.lastName} ${userData.firstName} ${userData.patronymic}`}</h3>
      <p className={styles.username}>@{userData.username}</p>
      <LinkButton className={styles.edit_button} to="/account/edit">
        Редактировать
      </LinkButton>
    </Container>
  );
};
