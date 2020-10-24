import React from "react";
import { CourseItem } from "./CourseItem";
import styles from "./styles.module.css";

export const Courses = ({ count }) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: count }).map((x, index) => (
        <CourseItem key={`course_${index}`} title={`Курс ${index}`} />
      ))}
    </div>
  );
};
