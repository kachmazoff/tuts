import React from "react";
import { Container } from "../Container";
import styles from "./styles.module.css";

export const ProfileHeader = ({}) => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.avatar}>Картинка</div>
      <h3 className={styles.fio}>Качмазов Александр</h3>
      <p className={styles.username}>@kachmazoff</p>
    </Container>
  );
};
