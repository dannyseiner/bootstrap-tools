import React from "react";
import { IButton } from "../interfaces/components/IButton";

function Button({ title, onClick }: IButton) {
  return (
    <button onClick={onClick} className="component-button">
      {title}
    </button>
  );
}

export default Button;
