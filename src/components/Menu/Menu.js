import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "./menuConfig";
import styles from "./styles.module.css";

export const Menu = ({}) => (
  <div className={styles.wrapper}>
    <ul>
      {menu.map((x) => (
        <li key={x.link}>
          <NavLink
            to={x.link}
            className={styles.link}
            activeClassName={styles.link__active}
            exact
          >
            {x.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
