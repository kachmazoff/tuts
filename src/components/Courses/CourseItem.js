import React from "react";
import styles from "./styles.module.css";

export const CourseItem = ({ title }) => (
  <div className={styles.course_item}>{title}</div>
);
