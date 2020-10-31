import React, { FC } from "react";
import styles from "./styles.module.css";

export type ContainerProps = {
  fullWidth?: boolean;
  className?: string;
};

export const Container: FC<ContainerProps> = ({
  children,
  fullWidth,
  className,
}) => <div className={[styles.wrapper, className].join(" ")}>{children}</div>;
