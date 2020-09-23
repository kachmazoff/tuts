import React from "react";
import { Link } from "react-router-dom";
import { menu } from "./menuConfig";
import styles from "./styles.module.css";

export const SideMenu = ({}) => (
  <div className={styles.wrapper}>
    <ul>
      {menu.map((x) => (
        <li key={x.link}>
          <Link to={x.link}>{x.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
