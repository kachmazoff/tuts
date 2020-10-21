import React from "react";
import { SideMenu } from "../SideMenu";
import styles from "./styles.module.css";

export const BasePage = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      {/* <SideMenu /> */}
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
};
