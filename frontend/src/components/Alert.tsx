import React from "react";

function Alert({ title, variant, show }: any) {
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
