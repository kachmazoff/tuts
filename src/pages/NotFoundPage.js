import React from "react";
import { BasePage } from "../components";

export const NotFoundPage = ({}) => {
  return (
    <BasePage title="404 page">
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "gray",
          fontSize: "5rem",
          fontWeight: "bold",
        }}
      >
        404 page
      </span>
    </BasePage>
  );
};
