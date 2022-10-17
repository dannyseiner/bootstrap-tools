import React from "react";
import { IAlert } from "../interfaces/components/IAlert";
function Alert({ title, variant, show }: IAlert) {
  return (
    <div
      className={`alert-container ${
        show ? "alert-display" : ""
      } alert-${variant}`}
    >
      <p className="alert-text">{title}</p>
    </div>
  );
}

export default Alert;
