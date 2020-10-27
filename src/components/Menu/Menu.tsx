import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./styles.module.css";

export type MenuItem = {
  link: string;
  title: string;
  onClick?: () => void;
};

export type MenuProps = {
  items: MenuItem[];
};

export const Menu = ({ items }: MenuProps) => (
  <div className={styles.wrapper}>
    <Link to="/" className={styles.logo}>
      Tuts
    </Link>
    <ul>
      {items.map((x) => (
        <li key={x.link}>
          <NavLink
            to={x.link}
            className={styles.link}
            activeClassName={styles.link__active}
            exact
            onClick={x.onClick}
          >
            {x.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
